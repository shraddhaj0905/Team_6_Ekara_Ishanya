const bcrypt = require("bcryptjs");
const StudentRegistration = require("../models/studentregister"); // Pending students database
const ApprovedStudent = require("../models/approvestudent"); // Approved students database
const EmployeeRegistration = require("../models/employeeregister"); // Import EmployeeRegistration model
const ApprovedEmployee = require("../models/approveemployee"); // 
const Admin = require("../models/admin"); 
const nodemailer = require("nodemailer");


// exports.approveStudent = async (req, res) => {
//     try {
//         const { parent_email } = req.body;

//         // Find the student in registration collection
//         const student = await StudentRegistration.findOne({ parent_email });
//         if (!student) {
//             return res.status(404).json({ message: "Student not found for the given parent email." });
//         }

//         // Check if student is already approved
//         const alreadyApproved = await ApprovedStudent.findOne({ parent_email });
//         if (alreadyApproved) {
//             return res.status(400).json({ message: "Student is already approved." });
//         }

//         // Generate Unique Student ID
//         let student_id;
//         let isUnique = false;
//         while (!isUnique) {
//             student_id = `STU-${Math.floor(100000 + Math.random() * 900000)}`;
//             const existingStudent = await ApprovedStudent.findOne({ student_id });
//             if (!existingStudent) isUnique = true;
//         }

//         // Create approved student entry
//         const approvedStudent = new ApprovedStudent({
//             student_id, // ✅ Store Unique ID
//             parent_email: student.parent_email,
//             parent_name: student.parent_name,
//             contact_number: student.contact_number,
//             address: student.address,
//             student_name: student.student_name,
//             dob: student.dob,
//             blood_group: student.blood_group,
//             gender: student.gender,
//             disability_type: student.disability_type,
//             disability_description: student.disability_description,
//             special_requirements: student.special_requirements,
//             previous_interventions: student.previous_interventions,
//             recommended_programs: "",
//             join_date: new Date(),
//             approved_at: new Date(),
//             password: student.password
//         });

//         await approvedStudent.save();
//         await StudentRegistration.deleteOne({ parent_email }); // ✅ Delete from registered students

//         res.status(201).json({ message: "Student approved successfully!", approvedStudent });

//     } catch (error) {
//         console.error("Internal Server Error:", error);
//         res.status(500).json({ error: "Internal Server Error", details: error.message });
//     }
// };

// exports.approveStudent = async (req, res) => {
//     try {
//         const { parent_email } = req.body; // Admin provides parent's email to approve student

//         // Find the student using parent email
//         const student = await StudentRegistration.findOne({ parent_email });

//         if (!student) {
//             return res.status(404).json({ message: "Student not found for the given parent email." });
//         }

//         // Check if student is already approved
//         const alreadyApproved = await ApprovedStudent.findOne({ parent_email });
//         if (alreadyApproved) {
//             return res.status(400).json({ message: "Student is already approved." });
//         }

//         // Copy student details to ApprovedStudent
//         const approvedStudent = new ApprovedStudent({
//             parent_email: student.parent_email,
//             parent_name: student.parent_name,
//             contact_number: student.contact_number,
//             address: student.address,
//             student_name: student.student_name,
//             dob: student.dob,
//             blood_group: student.blood_group,
//             gender: student.gender,
//             disability_type: student.disability_type,
//             disability_description: student.disability_description,
//             special_requirements: student.special_requirements,
//             previous_interventions: student.previous_interventions,
//             recommended_programs: "",
//             join_date: new Date(),
//             approved_at: new Date(),
//             password: student.password // Copy hashed password directly
//         });

//         await approvedStudent.save(); // Save to ApprovedStudent collection

//         await StudentRegistration.deleteOne({ parent_email }); // ✅ Delete from StudentRegistration

//         res.status(201).json({ message: "Student approved and removed from registered list!", approvedStudent });

//     } catch (error) {
//         console.error("Internal Server Error:", error);
//         res.status(500).json({ error: "Internal Server Error", details: error.message });
//     }
// };


// exports.approveEmployee = async (req, res) => {
//     try {
//         const { email } = req.body; // Admin provides email to approve employee

//         // Find the employee using email
//         const employee = await EmployeeRegistration.findOne({ email });

//         if (!employee) {
//             return res.status(404).json({ message: "Employee not found for the given email." });
//         }

//         // Check if employee is already approved
//         const alreadyApproved = await ApprovedEmployee.findOne({ email });
//         if (alreadyApproved) {
//             return res.status(400).json({ message: "Employee is already approved." });
//         }

//         //  Copy the hashed password from EmployeeRegistration (DO NOT HASH AGAIN)
//         const approvedEmployee = new ApprovedEmployee({
//             name: employee.name,
//             email: employee.email,
//             contact_number: employee.contact_number,
//             address: employee.address,
//             qualifications: employee.qualifications,
//             experience: employee.experience,
//             skills: employee.skills,
//             resume: employee.resume,
//             join_date: new Date(),
//             approved_at: new Date(),
//             password: employee.password //  Copy hashed password directly
//         });

//         await approvedEmployee.save();

//         res.status(201).json({ message: "Employee approved successfully!", approvedEmployee });

//     } catch (error) {
//         console.error("Internal Server Error:", error);
//         res.status(500).json({ error: "Internal Server Error", details: error.message });
//     }
// };
exports.approveStudent = async (req, res) => {
    try {
        const { udid } = req.params; // ✅ Fetching UDID from URL params

        // Find the student in registration collection using UDID
        const student = await StudentRegistration.findOne({ udid });
        if (!student) {
            return res.status(404).json({ message: "Student not found for the given UDID." });
        }

        // Check if student is already approved
        const alreadyApproved = await ApprovedStudent.findOne({ udid });
        if (alreadyApproved) {
            return res.status(400).json({ message: "Student is already approved." });
        }

        // Generate Unique Student ID
        let student_id;
        let isUnique = false;
        while (!isUnique) {
            student_id = `STU-${Math.floor(100000 + Math.random() * 900000)}`;
            const existingStudent = await ApprovedStudent.findOne({ student_id });
            if (!existingStudent) isUnique = true;
        }

        // Create approved student entry
        const approvedStudent = new ApprovedStudent({
            student_id, // ✅ Store Unique ID
            parent_email: student.parent_email,
            parent_name: student.parent_name,
            contact_number: student.contact_number,
            address: student.address,
            student_name: student.student_name,
            dob: student.dob,
            blood_group: student.blood_group,
            gender: student.gender,
            disability_type: student.disability_type,
            disability_description: student.disability_description,
            special_requirements: student.special_requirements,
            previous_interventions: student.previous_interventions,
            recommended_programs: "",
            join_date: new Date(),
            approved_at: new Date(),
            password: student.password,
            udid: student.udid // ✅ Save UDID in DB
        });

        await approvedStudent.save();
        await StudentRegistration.deleteOne({ udid }); // ✅ Delete from registered students

        res.status(201).json({ message: "Student approved successfully!", approvedStudent });

    } catch (error) {
        console.error("Internal Server Error:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// exports.approveEmployee = async (req, res) => {
//     try {
//         const { email } = req.body; // Admin provides email to approve employee

//         // Find the employee using email
//         const employee = await EmployeeRegistration.findOne({ email });

//         if (!employee) {
//             return res.status(404).json({ message: "Employee not found for the given email." });
//         }

//         // Check if employee is already approved
//         const alreadyApproved = await ApprovedEmployee.findOne({ email });
//         if (alreadyApproved) {
//             return res.status(400).json({ message: "Employee is already approved." });
//         }

//         // ✅ Generate a unique employee ID
//         const emp_reg_id = `EMP-${Math.floor(100000 + Math.random() * 900000)}`;

//         // Copy employee details to ApprovedEmployee
//         const approvedEmployee = new ApprovedEmployee({
//             emp_reg_id, // ✅ Store unique Employee ID
//             name: employee.name,
//             email: employee.email,
//             contact_number: employee.contact_number,
//             address: employee.address,
//             qualifications: employee.qualifications,
//             experience: employee.experience,
//             skills: employee.skills,
//             resume: employee.resume,
//             join_date: new Date(),
//             approved_at: new Date(),
//             password: employee.password // Copy hashed password directly
//         });

//         await approvedEmployee.save(); // Save to ApprovedEmployee collection

//         await EmployeeRegistration.deleteOne({ email }); // ✅ Delete from EmployeeRegistration

//         res.status(201).json({ message: "Employee approved and removed from registered list!", approvedEmployee });

//     } catch (error) {
//         console.error("Internal Server Error:", error);
//         res.status(500).json({ error: "Internal Server Error", details: error.message });
//     }
// };

exports.approveEmployee = async (req, res) => {
    try {
        const { email } = req.body;

        // Find the employee in registration collection
        const employee = await EmployeeRegistration.findOne({ email });
        if (!employee) {
            return res.status(404).json({ message: "Employee not found for the given email." });
        }

        // Check if employee is already approved
        const alreadyApproved = await ApprovedEmployee.findOne({ email });
        if (alreadyApproved) {
            return res.status(400).json({ message: "Employee is already approved." });
        }

        // Generate Unique Employee ID
        let emp_reg_id;
        let isUnique = false;
        while (!isUnique) {
            emp_reg_id = `EMP-${Math.floor(100000 + Math.random() * 900000)}`;
            const existingEmployee = await ApprovedEmployee.findOne({ emp_reg_id });
            if (!existingEmployee) isUnique = true;
        }

        // Create approved employee entry
        const approvedEmployee = new ApprovedEmployee({
            emp_reg_id, // ✅ Store Unique ID
            name: employee.name,
            email: employee.email,
            contact_number: employee.contact_number,
            address: employee.address,
            qualifications: employee.qualifications,
            experience: employee.experience,
            skills: employee.skills,
            resume: employee.resume,
            join_date: new Date(),
            approved_at: new Date(),
            password: employee.password
        });

        await approvedEmployee.save();
        await EmployeeRegistration.deleteOne({ email }); // ✅ Delete from registered employees

        res.status(201).json({ message: "Employee approved successfully!", approvedEmployee });

    } catch (error) {
        console.error("Internal Server Error:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

exports.addAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //  Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin with this email already exists." });
        }

        //  Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new admin
        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword, // Store hashed password
        });

        await newAdmin.save();
        res.status(201).json({ message: "New admin added successfully!", newAdmin });

    } catch (error) {
        console.error(" Error adding admin:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};


exports.getAllStudents = async (req, res) => {
    try {
      const students = await StudentRegistration.find();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: "Error fetching students", error });
    }
  };

  exports.getApprovedStudents = async (req, res) => {
    try {
        const approvedStudents = await ApprovedStudent.find();
        res.status(200).json(approvedStudents);
    } catch (error) {
        console.error("Error fetching approved students:", error);
        res.status(500).json({ message: "Error fetching approved students", error: error.message });
    }
};

exports.getRegisteredEmployees = async (req, res) => {
    try {
        const registeredEmployees = await EmployeeRegistration.find(); // Fetch all registered employees
        res.status(200).json(registeredEmployees);
    } catch (error) {
        console.error("Error fetching registered employees:", error);
        res.status(500).json({ message: "Error fetching registered employees", error: error.message });
    }
};


exports.getApprovedEmployees = async (req, res) => {
  try {
    const approvedEmployees = await ApprovedEmployee.find(); // Fetch all approved employees
    res.status(200).json(approvedEmployees);
  } catch (error) {
    console.error("Error fetching approved employees:", error);
    res.status(500).json({ message: "Error fetching approved employees", error: error.message });
  }
};








// exports.sendAppointmentEmails = async (req, res) => {
//     try {
//         const { email, name, date, time } = req.body;

//         if (!email || !name || !date || !time) {
//             return res.status(400).json({ message: "Email, name, date, and time are required" });
//         }

//         const lowerCaseEmail = email.toLowerCase();

//         // Check if the student is registered
//         const student = await StudentRegistration.findOne({ parent_email: lowerCaseEmail });
//         if (!student) {
//             return res.status(404).json({ message: "Student not found in the registered database" });
//         }

//         // Ensure email credentials are set
//         if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
//             return res.status(500).json({ error: "Email configuration missing" });
//         }

//         console.log("MAIL_USER:", process.env.MAIL_USER);
//         console.log("MAIL_PASS:", process.env.MAIL_PASS ? "Loaded" : "Missing");

//         // Configure transporter
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port: 587,
//             secure: false,
//             auth: {
//                 user: process.env.MAIL_USER,
//                 pass: process.env.MAIL_PASS,
//             },
//         });

//         // Define email content
//         const mailOptions = {
//             from: process.env.MAIL_USER,
//             to: lowerCaseEmail,
//             subject: "Appointment Confirmation",
//             html: `
//                 <h2>Appointment Confirmation</h2>
//                 <p>Dear <b>${name}</b>,</p>
//                 <p>Your appointment is confirmed on <b>${date}</b> at <b>${time}</b>.</p>
//                 <p>Best Regards,<br><b>Admin Team</b></p>
//             `,
//         };

//         // Send email
//         await transporter.sendMail(mailOptions);

//         res.status(200).json({ message: "Appointment email sent successfully" });
//     } catch (error) {
//         console.error("Error in sendAppointmentEmails:", error);
//         res.status(500).json({ error: "Failed to send email" });
//     }
// };
exports.sendAppointmentEmails = async (req, res) => {
    try {
        const { email, udid, date, time } = req.body;

        if (!email || !udid || !date || !time) {
            return res.status(400).json({ message: "Email, UDID, date, and time are required" });
        }

        const lowerCaseEmail = email.toLowerCase();

        // Check if the student is registered
        const student = await StudentRegistration.findOne({ parent_email: lowerCaseEmail });
        if (!student) {
            return res.status(404).json({ message: "Student not found in the registered database" });
        }

        // Ensure email credentials are set
        if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
            return res.status(500).json({ error: "Email configuration missing" });
        }

        console.log("MAIL_USER:", process.env.MAIL_USER);
        console.log("MAIL_PASS:", process.env.MAIL_PASS ? "Loaded" : "Missing");

        // Configure transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Define email content
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: lowerCaseEmail,
            subject: "Appointment Confirmation",
            html: `
                <h2>Appointment Confirmation</h2>
                <p>Your appointment for Student <b>UDID: ${udid}</b> is confirmed on <b>${date}</b> at <b>${time}</b>.</p>
                <p>Best Regards,<br><b>Admin Team</b></p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Appointment email sent successfully" });
    } catch (error) {
        console.error("Error in sendAppointmentEmails:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
};

/**
 * Send Interview Confirmation Email
 */

// exports.sendInterviewEmail = async (req, res) => {
//   try {
//       const { email, name, interview_date, interview_time } = req.body;

//       // Validate request body
//       if (!email || !name || !interview_date || !interview_time) {
//           return res.status(400).json({ message: "Email, name, interview date, and interview time are required" });
//       }

//       const lowerCaseEmail = email.toLowerCase();

//       // Ensure email credentials are set
//       if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
//           return res.status(500).json({ error: "Email configuration missing" });
//       }

//       console.log("📧 Setting up email transport...");
//       const transporter = nodemailer.createTransport({
//           host: "smtp.gmail.com",
//           port: 587,
//           secure: false, // Use true for port 465
//           auth: {
//               user: process.env.MAIL_USER,
//               pass: process.env.MAIL_PASS,
//           },
//       });

//       console.log("✅ Email transport configured successfully");

//       // Define Email Content
//       const mailOptions = {
//           from: process.env.MAIL_USER,
//           to: lowerCaseEmail,
//           subject: "Interview Confirmation",
//           html: `
//               <h2>Interview Confirmation</h2>
//               <p>Dear <b>${name}</b>,</p>
//               <p>We are pleased to inform you that your interview is scheduled on <b>${interview_date}</b> at <b>${interview_time}</b>.</p>
//               <p>Best Regards,<br><b>HR Team</b></p>
//           `,
//       };

//       // Send a quick response to avoid blocking the request
//       res.status(200).json({ message: "Interview email is being sent" });

//       // Send Email asynchronously
//       transporter.sendMail(mailOptions)
//           .then(info => console.log("✅ Email sent successfully:", info.response))
//           .catch(error => console.error("❌ Email send error:", error));

//   } catch (error) {
//       console.error("❌ Error in sendInterviewEmail:", error);
//       res.status(500).json({ error: "Failed to send email" });
//   }
// };


exports.sendInterviewEmail = async (req, res) => {
    try {
        const { email, name, interview_date, interview_time } = req.body;

        // Validate request body
        if (!email || !name || !interview_date || !interview_time) {
            return res.status(400).json({ message: "Email, name, interview date, and interview time are required" });
        }

        const lowerCaseEmail = email.toLowerCase();

        // Check if the employee exists in the database
        const employee = await EmployeeRegistration.findOne({ email: lowerCaseEmail });
        if (!employee) {
            return res.status(404).json({ message: "Employee not found in the registered database" });
        }

        // Ensure email credentials are set
        if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
            return res.status(500).json({ error: "Email configuration missing" });
        }

        console.log("📧 Setting up email transport...");
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        console.log("✅ Email transport configured successfully");

        // Define Email Content
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: lowerCaseEmail,
            subject: "Interview Confirmation",
            html: `
                <h2>Interview Confirmation</h2>
                <p>Dear <b>${name}</b>,</p>
                <p>We are pleased to inform you that your interview is scheduled on <b>${interview_date}</b> at <b>${interview_time}</b>.</p>
                <p>Best Regards,<br><b>HR Team</b></p>
            `,
        };

        // Send a quick response to avoid blocking the request
        res.status(200).json({ message: "Interview email is being sent" });

        // Send Email asynchronously
        transporter.sendMail(mailOptions)
            .then(info => console.log("✅ Email sent successfully:", info.response))
            .catch(error => console.error("❌ Email send error:", error));

    } catch (error) {
        console.error("❌ Error in sendInterviewEmail:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
};

exports.assignTeacherToStudent = async (req, res) => {
    try {
        const { student_id, emp_reg_id } = req.body;

        // Check if student exists
        const student = await ApprovedStudent.findOne({ student_id });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Check if teacher exists
        const teacher = await ApprovedEmployee.findOne({ emp_reg_id });
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        // Assign the teacher to the student
        student.teacher_id = teacher._id;
        await student.save();

        // Push student into teacher's assigned_students array if not already assigned
        if (!teacher.assigned_students.includes(student._id)) {
            teacher.assigned_students.push(student._id);
            await teacher.save();
        }

        res.status(200).json({ message: "Teacher assigned successfully", student, teacher });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.assignCourseToStudent = async (req, res) => {
    try {
        const { student_id, courseId } = req.body;

        // Check if student exists
        const student = await ApprovedStudent.findOne({ student_id });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Check if course exists
        const course = await Course.findOne({ courseId });
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Assign course to student (avoid duplicates)
        if (!student.courses.includes(course._id)) {
            student.courses.push(course._id);
            await student.save();
        }

        res.status(200).json({ message: "Course assigned successfully", student, course });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const Course = require("../models/course"); // Correct import

exports.createCourse = async (req, res) => {
    try {
        const { courseId, name, ageGroup, skillAreas } = req.body;

        // Check if the course already exists
        const existingCourse = await Course.findOne({ courseId }); // Use Course, not courseSchema
        if (existingCourse) {
            return res.status(400).json({ message: "Course with this ID already exists" });
        }

        // Create new course
        const newCourse = new Course({  // Use Course, not courseSchema
            courseId,
            name,
            ageGroup,
            skillAreas
        });

        // Save course to database
        await newCourse.save();

        res.status(201).json({ message: "Course created successfully", course: newCourse });
    } catch (error) {
        console.error("Error creating course:", error); // Log error for debugging
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



exports.getCourses = async (req, res) => {
    try {
      const courses = await Course.find();
      console.log("Courses fetched:", courses); // Debugging
      res.status(200).json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Server error while fetching courses" });
    }
  };
  


  const Announcement = require("../models/announcement");

  exports.createAnnouncement = async (req, res) => {
      try {
          const { title, description, date, category } = req.body;
  
          // Ensure all required fields are provided
          if (!title || !description || !date || !category) {
              return res.status(400).json({ message: "Title, description, date, and category are required" });
          }
  
          // Validate category
          const allowedCategories = ["Holiday", "Events", "Urgent"];
          if (!allowedCategories.includes(category)) {
              return res.status(400).json({ message: "Invalid category. Allowed values: Holiday, Events, Urgent" });
          }
  
          // Check if the provided date is in the future
          const currentDate = new Date();
          const announcementDate = new Date(date);
  
          if (announcementDate <= currentDate) {
              return res.status(400).json({ message: "Date must be in the future" });
          }
  
          // Create new announcement
          const announcement = new Announcement({
              title,
              description,
              date: announcementDate, // Use provided future date
              category
          });
  
          // Save to database
          await announcement.save();
  
          res.status(201).json({
              message: "Announcement created successfully",
              announcement
          });
      } catch (error) {
          console.error("Error creating announcement:", error);
          res.status(500).json({ message: "Server error" });
      }
  };
  


