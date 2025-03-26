const express = require("express");
const router = express.Router();
const adminAuth = require("../middlewares/adminauth"); // ✅ Protect route with admin auth

const { addAdmin, approveStudent, approveEmployee , getAllStudents, getApprovedStudents,getRegisteredEmployees , getApprovedEmployees , sendAppointmentEmails, sendInterviewEmail,assignTeacherToStudent,assignCourseToStudent ,createCourse,getCourses,createAnnouncement   } = require("../controllers/adminController"); // ✅ Import all functions
const adminController = require("../controllers/adminAuthController");

//  Admin login route
router.post("/login", adminController.adminLogin);

//  Route to approve a student (Protected)
router.post("/approve-student/:udid", adminAuth, approveStudent);


//  Route to approve an employee (Protected)
router.post("/approve-employee", adminAuth, approveEmployee);

//  Route to add a new admin (Protected)
router.post("/add-admin", adminAuth, addAdmin);

router.get("/get-register-student",adminAuth,getAllStudents);

router.get("/get-approve-student",adminAuth,getApprovedStudents);
router.get("/get-register-employee",adminAuth, getRegisteredEmployees);
router.get("/get-approve-employee",adminAuth,getApprovedEmployees);
router.post("/send-interwiew-email",adminAuth,sendInterviewEmail);
router.post("/send-appointment-email",adminAuth,sendAppointmentEmails);
router.put("/assign-teacher", adminAuth,assignTeacherToStudent);
router.put("/assign-course", adminAuth,assignCourseToStudent);
router.post("/create-course", adminAuth,createCourse);
router.get("/get-courses",adminAuth,getCourses);
router.post("/create-announcement", adminAuth, createAnnouncement);
module.exports = router;
