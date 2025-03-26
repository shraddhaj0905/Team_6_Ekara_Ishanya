const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const StudentRegistration = require("../models/studentregister");

const ApprovedStudent = require("../models/approvestudent"); 
dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET || "babbar";


// exports.studentSignup = async (req, res) => {
//   try {
//     const { parent_name, parent_email, password, contact_number, address, student_name, dob, blood_group, gender, disability_type, disability_description } = req.body;

//     // Check if email already exists
//     const existingStudent = await StudentRegistration.findOne({ parent_email });
//     if (existingStudent) return res.status(400).json({ message: "Email already registered" });

//     // Hash Password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create Student Registration Entry
//     const newStudent = new StudentRegistration({
//       parent_name,
//       parent_email,
//       password: hashedPassword,
//       contact_number,
//       address,
//       student_name,
//       dob,
//       blood_group,
//       gender,
//       disability_type,
//       disability_description
//     });

//     await newStudent.save();
//     res.status(201).json({ message: "Student registered successfully, pending approval" });

//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

exports.studentSignup = async (req, res) => {
  try {
    const { parent_name, parent_email, password, contact_number, address, student_name, dob, blood_group, gender, disability_type, disability_description, udid } = req.body;

    // Check if email or UDID already exists
    const existingStudent = await StudentRegistration.findOne({ 
      $or: [{ parent_email }, { udid }]
    });
    if (existingStudent) return res.status(400).json({ message: "Email or UDID already registered" });

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Student Registration Entry
    const newStudent = new StudentRegistration({
      parent_name,
      parent_email,
      password: hashedPassword,
      contact_number,
      address,
      student_name,
      dob,
      blood_group,
      gender,
      disability_type,
      disability_description,
      udid // ✅ Save UDID in DB
    });

    await newStudent.save();
    res.status(201).json({ message: "Student registered successfully, pending approval" });

  } catch (error) {
    console.error("Error registering student:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};




exports.studentLogin = async (req, res) => {
  try {
    const { parent_email, password } = req.body;

    // Check if student is approved
    const student = await ApprovedStudent.findOne({ parent_email });
    if (!student) return res.status(400).json({ message: "You are not approved yet. Please wait for admin approval." });

    // Compare Password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    // Generate Token
    const token = jwt.sign({ id: student._id, role: "student" }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};



exports.getOverallAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Find the student by ID
    const student = await ApprovedStudent.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Use the attendance array from the student document
    const attendanceRecords = student.attendance || [];
    const totalRecords = attendanceRecords.length;

    // Count how many records are marked as "Present"
    const presentRecords = attendanceRecords.filter(
      (record) => record.status === "Present"
    ).length;

    // Calculate attendance percentage
    const attendancePercentage =
      totalRecords > 0 ? ((presentRecords / totalRecords) * 100).toFixed(2) : 0;

    // Respond with a summary of the attendance details
    res.json({
      student_id: student.student_id,
      student_name: student.student_name,
      join_date: student.join_date,
      total_attendance_records: totalRecords,
      present_records: presentRecords,
      attendance_percentage: attendancePercentage,
    });
  } catch (error) {
    console.error("Error computing attendance:", error);
    res.status(500).json({ message: "Server error" });
  }
};


const Announcement = require("../models/announcement");

// exports.getFutureAnnouncements = async (req, res) => {
//   try {
//     const currentDate = new Date();
//     currentDate.setHours(0, 0, 0, 0); // Normalize the date to avoid time mismatches

//     // Fetch announcements where the date is in the future
//     const futureAnnouncements = await Announcement.find({ date: { $gt: currentDate } }).sort({ date: 1 });

//     res.status(200).json({ announcements: futureAnnouncements });
//   } catch (error) {
//     console.error("Error fetching future announcements:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
exports.getFutureAnnouncements = async (req, res) => {
  try {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Normalize the date to avoid time mismatches

    // Fetch future announcements including category
    const futureAnnouncements = await Announcement.find(
      { date: { $gt: currentDate } }, 
      { title: 1, description: 1, date: 1, category: 1 } // Only select necessary fields
    ).sort({ date: 1 });

    res.status(200).json({ announcements: futureAnnouncements });
  } catch (error) {
    console.error("Error fetching future announcements:", error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.getStudentReport = async (req, res) => {
    try {
        const { studentId } = req.params;

        // Fetch student details with required fields
        const student = await ApprovedStudent.findOne({ student_id: studentId }).select(
            "student_id student_name attendance monthly_evaluation area_to_improve"
        );

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Calculate Monthly Attendance
        const attendanceSummary = {};
        student.attendance.forEach(({ date, status }) => {
            const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`; // Format: YYYY-MM
            if (!attendanceSummary[monthYear]) {
                attendanceSummary[monthYear] = { total: 0, present: 0 };
            }
            attendanceSummary[monthYear].total++;
            if (status === "Present") {
                attendanceSummary[monthYear].present++;
            }
        });

        // Convert attendance data to percentage
        const attendanceReport = Object.entries(attendanceSummary).map(([month, { total, present }]) => ({
            month,
            attendancePercentage: total > 0 ? ((present / total) * 100).toFixed(2) + "%" : "0%"
        }));

        // Construct the report
        const report = {
            student_id: student.student_id,
            student_name: student.student_name,
            attendance: attendanceReport,
            monthly_evaluation: student.monthly_evaluation,
            area_to_improve: student.area_to_improve
        };

        res.status(200).json({ message: "Student report generated successfully", report });

    } catch (error) {
        console.error("Error generating student report:", error);
        res.status(500).json({ message: "Server error" });
    }
};
