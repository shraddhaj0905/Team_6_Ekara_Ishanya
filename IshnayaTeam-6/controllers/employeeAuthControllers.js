const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const EmployeeRegistration = require("../models/employeeregister");
const JWT_SECRET = process.env.JWT_SECRET || "babbar";
const ApprovedEmployee = require("../models/approveemployee");


dotenv.config();



exports.employeeSignup = async (req, res) => {
    try {
      console.log("Request Body:", req.body);
  
      const { name, email, password, contact_number, address, qualifications, experience, skills } = req.body;
  
      if (!name || !email || !password || !contact_number || !address || !qualifications || !experience || !skills) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      // Check if email already exists
      const existingEmployee = await EmployeeRegistration.findOne({ email });
      if (existingEmployee) return res.status(400).json({ message: "Email already registered" });
  
      // Hash Password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create Employee Registration Entry
      const newEmployee = new EmployeeRegistration({
        name,
        email,
        password: hashedPassword,
        contact_number,
        address,
        qualifications,
        experience,
        skills
      });
  
      await newEmployee.save();
      res.status(201).json({ message: "Employee registered successfully, pending approval" });
  
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  };
  



exports.employeeLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if employee is approved
    const employee = await ApprovedEmployee.findOne({ email });
    if (!employee) return res.status(400).json({ message: "You are not approved yet. Please wait for admin approval." });

    // Compare Password
    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    // Generate Token
    const token = jwt.sign({ id: employee._id, role: "employee" }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};



exports.getStudentsByEmployeeId = async (req, res) => {
  try {
    const { empID } = req.params; // ✅ Use correct param name

    // Find employee and populate assigned students along with their courses
    const employee = await ApprovedEmployee.findById(empID)
      .populate({
        path: "assigned_students",
        populate: {
          path: "courses", // Populate courses inside students
          model: "Course",
          select: "name", // Only fetch the course name
        },
      });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ students: employee.assigned_students }); // Return students with populated courses
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Server error while fetching students" });
  }
};



const ApprovedStudent = require("../models/approvestudent");

// ✅ Add or Update Monthly Evaluation for a Particular Student
exports.updateMonthlyEvaluation = async (req, res) => {
    try {
        const { studentId } = req.params;
        const { 
            month, 
            communication, 
            cognition, 
            academics_OBE_Level_A, 
            functional_skills, 
            area_to_improve 
        } = req.body;

        // Find the student
        let student = await ApprovedStudent.findOne({ student_id: studentId });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Check if the month already exists in evaluations
        let existingEvaluation = student.monthly_evaluation.find((eval) => eval.month === month);

        if (existingEvaluation) {
            // Update existing evaluation
            existingEvaluation.communication.score = communication.score;
            existingEvaluation.communication.comments = communication.comments;
            
            existingEvaluation.cognition.score = cognition.score;
            existingEvaluation.cognition.comments = cognition.comments;
            
            existingEvaluation.academics_OBE_Level_A.score = academics_OBE_Level_A.score;
            existingEvaluation.academics_OBE_Level_A.comments = academics_OBE_Level_A.comments;
            
            existingEvaluation.functional_skills.score = functional_skills.score;
            existingEvaluation.functional_skills.comments = functional_skills.comments;
        } else {
            // Add new evaluation entry
            student.monthly_evaluation.push({
                month,
                communication: {
                    score: communication.score,
                    comments: communication.comments
                },
                cognition: {
                    score: cognition.score,
                    comments: cognition.comments
                },
                academics_OBE_Level_A: {
                    score: academics_OBE_Level_A.score,
                    comments: academics_OBE_Level_A.comments
                },
                functional_skills: {
                    score: functional_skills.score,
                    comments: functional_skills.comments
                }
            });
        }

        // Update area to improve (if provided)
        if (area_to_improve) {
            student.area_to_improve = area_to_improve;
        }

        // Save changes
        await student.save();

        res.status(200).json({ message: "Monthly evaluation updated successfully", student });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
exports.getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params; // Extract student ID from URL

    // Find student by student_id instead of MongoDB _id
    const student = await ApprovedStudent.findOne({ student_id: studentId })
      .populate("teacher_id", "name email") // Populate teacher details
      .populate("courses", "course_name course_code"); // Populate course details

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ student });
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


exports.markAttendance = async (req, res) => {
  try {
    console.log("Received attendance data:", req.body); // ✅ Debugging Step
    const { date, records } = req.body;

    if (!date || !records || records.length === 0) {
      return res.status(400).json({ message: "Date and attendance records are required." });
    }

    for (let record of records) {
      console.log("Processing Student ID:", record.id); // ✅ Debugging Step
      if (!record.id) {
        console.log("❌ ERROR: Missing student ID");
        return res.status(400).json({ message: "Student ID is required for attendance." });
      }

      // Find the student and update their attendance
      const student = await ApprovedStudent.findOneAndUpdate(
        { student_id: record.id }, // Ensure `student_id` exists in MongoDB
        {
          $push: {
            attendance: {
              date: new Date(date), // Ensure date is stored properly
              status: record.present ? "Present" : "Absent",
            },
          },
        },
        { new: true, upsert: false } // Prevent creating new documents if student not found
      );

      if (!student) {
        console.log(`❌ ERROR: Student with ID ${record.id} not found`);
      }
    }

    res.status(200).json({ message: "Attendance marked successfully." });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server error while marking attendance." });
  }
};


exports.getTeacherProfile = async (req, res) => {
  try {
    console.log("🔹 Request received for teacher profile");

    if (!req.employee || !req.employee.id) {
      console.error("❌ Employee ID not found in req.employee");
      return res.status(400).json({ message: "Employee ID not provided" });
    }

    const employeeId = req.employee.id; // ✅ Use _id from token
    console.log("🔹 Employee ObjectId:", employeeId);

    // ✅ Find employee by _id instead of emp_reg_id
    const teacher = await ApprovedEmployee.findById(employeeId);

    if (!teacher) {
      console.error(`❌ No teacher found for ID: ${employeeId}`);
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.json(teacher);
  } catch (error) {
    console.error("❌ Error fetching teacher profile:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
