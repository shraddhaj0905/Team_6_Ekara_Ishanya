// // import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import Navbar from "./components/Navbar";
// // import Hero from "./components/HeroSection";
// // import MissionSection from "./components/MissionSection";
// // import Programs from "./components/Programs";
// // import Testimonials from "./components/Testimonials";
// // import Team from "./components/Team";
// // import Contact from "./components/Contact";
// // import ParentDashboard from "./pages/ParentDashboard";
// // import TeacherDashboard from "./pages/TeacherDashboard";
// // import AdminDashboard from "./pages/AdminDashboard";
// // // import Login from "./components/Login";
// // import ApplyNow from "./components/ApplyNow";
// // import JobApplication from "./pages/JobApplication";
// // import ChildRegistration from "./pages/ChildRegistration";
// // import LoginPageLayout from "./pages/LoginPageLayout"
// // import ParentLogin from "./pages/ParentLogin";
// // import AdminLogin from "./pages/AdminLogin";
// // import EmployeeLogin from "./pages/EmployeeLogin";

// // function App() {
// //   return (
// //     <Router>
// //       <MainApp />
// //     </Router>
// //   );
// // }

// // function MainApp() {
// //   const location = useLocation();
// //   const [userRole, setUserRole] = useState(null);

// //   // Check local storage for saved role (after login)
// //   useEffect(() => {
// //     const storedRole = localStorage.getItem("userRole");
// //     if (storedRole) {
// //       setUserRole(storedRole);
// //     }
// //   }, []);

// //   // Show Navbar only on the homepage
// //   const pagesWithoutNavbar = ["/login", "/apply-now", "/job-application", "/child-registration"];
// //   const showNavbar = location.pathname === "/" && !pagesWithoutNavbar.includes(location.pathname);

// //   return (
// //     <div className="bg-blue-50 min-h-screen">
// //       {/* ✅ FIXED Navbar at the top */}
// //       {showNavbar && <Navbar />}
      
// //       <Routes>
// //         {/* 🌟 Homepage */}
// //         <Route path="/" element={
// //           <>
// //             <Hero />
// //             <MissionSection />
// //             <Programs />
// //             <Testimonials />
// //             <Team />
// //             <Contact />
// //           </>
// //         }/>

// //         {/* 🚀 Protected Dashboard Routes */}
// //         <Route path="/parent-dashboard" element={userRole === "Parent" ? <ParentDashboard /> : <Navigate to="/login" />} />
// //         <Route path="/teacher-dashboard" element={userRole === "Teacher" ? <TeacherDashboard /> : <Navigate to="/login" />} />
// //         <Route path="/admin-dashboard" element={userRole === "Admin" ? <AdminDashboard /> : <Navigate to="/login" />} />

// //         {/* 🔐 Login - Pass setUserRole so it updates on login */}
// //         <Route path="/login" element={<LoginPageLayout/>} />

// //         <Route path="/parentLogin" element={<ParentLogin/>} />
// //         <Route path="/emplyeeLogin" element={<EmployeeLogin/>} />
// //         <Route path="/adminLogin" element={<AdminLogin/>} />

// //         {/* 📌 Apply Now & Job Applications */}
// //         <Route path="/apply-now" element={<ApplyNow />} />
// //         <Route path="/job-application" element={<JobApplication />} />
// //         <Route path="/child-registration" element={<ChildRegistration />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;
// import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/HeroSection";
// import MissionSection from "./components/MissionSection";
// import Programs from "./components/Programs";
// import Testimonials from "./components/Testimonials";
// import Team from "./components/Team";
// import Contact from "./components/Contact";
// import ParentDashboard from "./pages/ParentDashboard";
// import TeacherDashboard from "./pages/TeacherDashboard";


// import ApplyNow from "./components/ApplyNow";
// import JobApplication from "./pages/JobApplication";
// import ChildRegistration from "./pages/ChildRegistration";
// import LoginPageLayout from "./pages/LoginPageLayout"
// import ParentLogin from "./pages/ParentLogin";
// import AdminLogin from "./pages/AdminLogin";
// import EmployeeLogin from "./pages/EmployeeLogin";
// import AdminDashboard from "./pages/AdminDashboard";
// import RegisteredStudents from "./pages/RegisteredStudents";
// import RegisteredEmployees from "./pages/RegisteredEmployees";
// import EnrolledStudents from "./pages/EnrolledStudents";
// import EnrolledEmployees from "./pages/EnrolledEmployees";
// import ApproveStudents from "./pages/ApproveStudents";
// import AssignCourse from "./pages/AssignCourse";
// import AddAdmin from "./pages/AddAdmin";



// function App() {
//   return (
//     <Router>
//       <MainApp />
//     </Router>
//   );
// }

// function MainApp() {
//   const location = useLocation();
//   const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
//   const [isParentAuthenticated, setIsParentAuthenticated] = useState(false);
//   const [isEmployeeAuthenticated, setIsEmployeeAuthenticated] = useState(false);

//   // Check if tokens exist in local storage for authentication
//   useEffect(() => {
//     setIsAdminAuthenticated(!!localStorage.getItem("adminToken"));
//     setIsParentAuthenticated(!!localStorage.getItem("parentToken"));
//     setIsEmployeeAuthenticated(!!localStorage.getItem("employeeToken"));
//   }, []);

//   // Show Navbar only on the homepage
//   const pagesWithoutNavbar = ["/login", "/apply-now", "/job-application", "/child-registration"];
//   const showNavbar = location.pathname === "/" && !pagesWithoutNavbar.includes(location.pathname);

//   return (
//     <div className="bg-blue-50 min-h-screen">
//       {/* ✅ Navbar is only shown when applicable */}
//       {showNavbar && <Navbar />}

//       <Routes>
//         {/* 🌟 Homepage */}
//         <Route path="/" element={
//           <>
//             <Hero />
//             <MissionSection />
//             <Programs />
//             <Testimonials />
//             <Team />
//             <Contact />
//           </>
//         } />

//         {/* 🚀 Protected Dashboard Routes */}
//         <Route path="/admin-dashboard" element={isAdminAuthenticated ? <AdminDashboard /> : <Navigate to="/adminLogin" />} />
//         <Route path="/parent-dashboard" element={isParentAuthenticated ? <ParentDashboard /> : <Navigate to="/parentLogin" />} />
//         <Route path="/teacher-dashboard" element={isEmployeeAuthenticated ? <TeacherDashboard /> : <Navigate to="/employeeLogin" />} />
       
//         <Route path="/login" element={<LoginPageLayout/>} />
//         {/* 🔐 Login Pages */}
//         <Route path="/adminLogin" element={<AdminLogin />} />
//         <Route path="/parentLogin" element={<ParentLogin />} />
//         <Route path="/employeeLogin" element={<EmployeeLogin/>} />

//         {/* 📌 Apply Now & Job Applications */}
//         <Route path="/apply-now" element={<ApplyNow />} />
//         <Route path="/job-application" element={<JobApplication />} />
//         <Route path="/child-registration" element={<ChildRegistration />} />


//         {isAdminAuthenticated ? (
//           <>
//             <Route path="/admin/students" element={<RegisteredStudents />} />
//             <Route path="/admin/employees" element={<RegisteredEmployees />} />
//             <Route path="/admin/enrolled-students" element={<EnrolledStudents />} />
//             <Route path="/admin/enrolled-employees" element={<EnrolledEmployees />} />
//             <Route path="/admin/approve-students" element={<ApproveStudents />} />
//             <Route path="/admin/assign-course" element={<AssignCourse />} />
//             <Route path="/admin/add-admin" element={<AddAdmin />} />
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/adminLogin" />} />
//         )}
//       </Routes>
//     </div>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/HeroSection";
// import MissionSection from "./components/MissionSection";
// import Programs from "./components/Programs";
// import Testimonials from "./components/Testimonials";
// import Team from "./components/Team";
// import Contact from "./components/Contact";
// import ParentDashboard from "./pages/ParentDashboard";
// import TeacherDashboard from "./pages/TeacherDashboard";

// import ApplyNow from "./components/ApplyNow";
// import JobApplication from "./pages/JobApplication";
// import ChildRegistration from "./pages/ChildRegistration";
// import LoginPageLayout from "./pages/LoginPageLayout";
// import ParentLogin from "./pages/ParentLogin";
// import AdminLogin from "./pages/AdminLogin";
// import EmployeeLogin from "./pages/EmployeeLogin";
// import AdminDashboard from "./pages/AdminDashboard";
// import RegisteredStudents from "./pages/RegisteredStudents";
// import RegisteredEmployees from "./pages/RegisteredEmployees";
// import EnrolledStudents from "./pages/EnrolledStudents";
// import EnrolledEmployees from "./pages/EnrolledEmployees";
// import AssignCourse from "./pages/AssignCourse";
// import AddAdmin from "./pages/AddAdmin";
// import SendInterviewEmail from "./pages/SendInterviewEmail"; // New Page
// import SendAppointmentEmail from "./pages/SendAppointmentEmail"; // New Page
// import CreateCourseForm from "./pages/CreateCourseForm";

// import Mystudent from "./pages/Mystudent"
// import EmployeeReport from "./components/EmployeeReport"
// import EmployeeProfilePage from "./pages/EmployeeProfilePage";
// import Studentdetails from "./pages/StudentDDetails";

// function App() {
//   return (
//     <Router>
//       <MainApp />
//     </Router>
//   );
// }

// function MainApp() {
//   const location = useLocation();
//   const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
//   const [isParentAuthenticated, setIsParentAuthenticated] = useState(false);
//   const [isEmployeeAuthenticated, setIsEmployeeAuthenticated] = useState(false);

//   // Check if tokens exist in local storage for authentication
//   useEffect(() => {
//     setIsAdminAuthenticated(!!localStorage.getItem("adminToken"));
//     setIsParentAuthenticated(!!localStorage.getItem("parentToken"));
//     setIsEmployeeAuthenticated(!!localStorage.getItem("employeeToken"));
//   }, []);

//   // Show Navbar only on the homepage
//   const pagesWithoutNavbar = ["/login", "/apply-now", "/job-application", "/child-registration"];
//   const showNavbar = location.pathname === "/" && !pagesWithoutNavbar.includes(location.pathname);

//   return (
//     <div className="bg-blue-50 min-h-screen">
//       {/* ✅ Navbar is only shown when applicable */}
//       {showNavbar && <Navbar />}

//       <Routes>
//         {/* 🌟 Homepage */}
//         <Route path="/" element={
//           <>
//             <Hero />
//             <MissionSection />
//             <Programs />
//             <Testimonials />
//             <Team />
//             <Contact />
//           </>
//         } />

//         {/* 🚀 Protected Dashboard Routes */}
//         <Route path="/admin-dashboard" element={isAdminAuthenticated ? <AdminDashboard /> : <Navigate to="/adminLogin" />} />
//         <Route path="/parent-dashboard" element={isParentAuthenticated ? <ParentDashboard /> : <Navigate to="/parentLogin" />} />
//         <Route path="/teacher-dashboard" element={isEmployeeAuthenticated ? <TeacherDashboard /> : <Navigate to="/employeeLogin" />} />
       
//         {/* 🔐 Login Pages */}
//         <Route path="/login" element={<LoginPageLayout />} />
//         <Route path="/adminLogin" element={<AdminLogin />} />
//         <Route path="/parentLogin" element={<ParentLogin />} />
//         <Route path="/employeeLogin" element={<EmployeeLogin />} />

//         {/* 📌 Apply Now & Job Applications */}
//         <Route path="/apply-now" element={<ApplyNow />} />
//         <Route path="/job-application" element={<JobApplication />} />
//         <Route path="/child-registration" element={<ChildRegistration />} />

//         {isAdminAuthenticated ? (
//           <>
//             <Route path="/admin/students" element={<RegisteredStudents />} />
//             <Route path="/admin/employees" element={<RegisteredEmployees />} />
//             <Route path="/admin/enrolled-students" element={<EnrolledStudents />} />
//             <Route path="/admin/enrolled-employees" element={<EnrolledEmployees />} />
//             <Route path="/admin/assign-course" element={<AssignCourse />} />
//             <Route path="/admin/add-admin" element={<AddAdmin />} />
//             <Route path="/admin/send-interview-email" element={<SendInterviewEmail />} /> {/* ✅ New */}
//             <Route path="/admin/send-appointment-email" element={<SendAppointmentEmail />} /> {/* ✅ New */}
//             <Route path="/admin/create-course" element={< CreateCourseForm/>} /> {/* ✅ New */}

//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/adminLogin" />} />
//         )}

// {isEmployeeAuthenticated ? (
//           <>
             
//          <Route path="/mystudent"  element={<Mystudent/>}/>
//         <Route path="/employeeReport" element={<EmployeeReport/>}/>
//         <Route path="/employeeProfilePage" element={<EmployeeProfilePage></EmployeeProfilePage>}/>
//         <Route path="/studentdetails/:id"  element={<Studentdetails/>}/>
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/employeeLogin" />} />
//         )}
//       </Routes>
//     </div>
//   );
// }

// export default App;









import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import ParentDashboard from "./pages/ParentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";

import ApplyNow from "./components/ApplyNow";
import JobApplication from "./pages/JobApplication";
import ChildRegistration from "./pages/ChildRegistration";
import LoginPageLayout from "./pages/LoginPageLayout";
import ParentLogin from "./pages/ParentLogin";
import AdminLogin from "./pages/AdminLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import AdminDashboard from "./pages/AdminDashboard";
import RegisteredStudents from "./pages/RegisteredStudents";
import RegisteredEmployees from "./pages/RegisteredEmployees";
import EnrolledStudents from "./pages/EnrolledStudents";
import EnrolledEmployees from "./pages/EnrolledEmployees";
import AssignCourse from "./pages/AssignCourse";
import AddAdmin from "./pages/AddAdmin";
import SendInterviewEmail from "./pages/SendInterviewEmail"; // New Page
import SendAppointmentEmail from "./pages/SendAppointmentEmail"; // New Page
import CreateCourseForm from "./pages/CreateCourseForm";

import Mystudent from "./pages/Mystudent"
import EmployeeReport from "./components/EmployeeReport"
import EmployeeProfilePage from "./pages/EmployeeProfilePage";
import Studentdetails from "./pages/StudentDDetails";
import Displaystudent from "./pages/DisplayStudentForReport";
import EditReport from "./pages/EditReport";
import AttendanceMakingpage from "./pages/AttendanceMarkingPage";
import CreateAnnouncement from "./pages/createannouncment"


import Announcements from "./pages/AnnounanceSection";
import StudentReportForParent from "./pages/StududentReportForParent"

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isParentAuthenticated, setIsParentAuthenticated] = useState(false);
  const [isEmployeeAuthenticated, setIsEmployeeAuthenticated] = useState(false);

  // Check if tokens exist in local storage for authentication
  useEffect(() => {
    setIsAdminAuthenticated(!!localStorage.getItem("adminToken"));
    setIsParentAuthenticated(!!localStorage.getItem("parentToken"));
    setIsEmployeeAuthenticated(!!localStorage.getItem("employeeToken"));
  }, []);

  // Show Navbar only on the homepage
  const pagesWithoutNavbar = ["/login", "/apply-now", "/job-application", "/child-registration"];
  const showNavbar = location.pathname === "/" && !pagesWithoutNavbar.includes(location.pathname);

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* ✅ Navbar is only shown when applicable */}
      {showNavbar && <Navbar />}

      <Routes>
        {/* 🌟 Homepage */}
        <Route path="/" element={
          <>
            <Hero />
            <MissionSection />
            <Programs />
            <Testimonials />
            <Team />
            <Contact />
          </>
        } />

        {/* 🚀 Protected Dashboard Routes */}
        <Route path="/admin-dashboard" element={isAdminAuthenticated ? <AdminDashboard /> : <Navigate to="/adminLogin" />} />
        <Route path="/parent-dashboard" element={isParentAuthenticated ? <ParentDashboard /> : <Navigate to="/parentLogin" />} />
        <Route path="/teacher-dashboard" element={isEmployeeAuthenticated ? <TeacherDashboard /> : <Navigate to="/employeeLogin" />} />
       
        {/* 🔐 Login Pages */}
        <Route path="/login" element={<LoginPageLayout />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/parentLogin" element={<ParentLogin />} />
        <Route path="/employeeLogin" element={<EmployeeLogin />} />

        {/* 📌 Apply Now & Job Applications */}
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/job-application" element={<JobApplication />} />
        <Route path="/child-registration" element={<ChildRegistration />} />

        {isAdminAuthenticated ? (
          <>
            <Route path="/admin/students" element={<RegisteredStudents />} />
            <Route path="/admin/employees" element={<RegisteredEmployees />} />
            <Route path="/admin/enrolled-students" element={<EnrolledStudents />} />
            <Route path="/admin/enrolled-employees" element={<EnrolledEmployees />} />
            <Route path="/admin/assign-course" element={<AssignCourse />} />
            <Route path="/admin/add-admin" element={<AddAdmin />} />
            <Route path="/admin/send-interview-email" element={<SendInterviewEmail />} /> {/* ✅ New */}
            <Route path="/admin/send-appointment-email" element={<SendAppointmentEmail />} /> {/* ✅ New */}
            <Route path="/admin/create-course" element={< CreateCourseForm/>} /> {/* ✅ New */}
            <Route path="/admin/announcement" element={< CreateAnnouncement/>} /> {/* ✅ New */}

          </>
        ) : (
          <Route path="*" element={<Navigate to="/adminLogin" />} />
        )}

{isEmployeeAuthenticated ? (
          <>
             
         <Route path="/mystudent"  element={<Mystudent/>}/>
        <Route path="/employeeReport" element={<EmployeeReport/>}/>
        <Route path="/employeeProfilePage" element={<EmployeeProfilePage></EmployeeProfilePage>}/>
        <Route path="/studentdetails/:id"  element={<Studentdetails/>}/>
        <Route path="/studentsforreport"  element={<Displaystudent/>}/>
        <Route path="/edit-report/:id" element={<EditReport />} />
        <Route path="/attendanceMakingpage" element={<AttendanceMakingpage />} />

          </>
        ) : (
          <Route path="*" element={<Navigate to="/employeeLogin" />} />
        )}



{isParentAuthenticated ? (
          <>
            <Route path="/announancementpage" element={<Announcements />} />
            <Route path="/studentreportforparent" element={<StudentReportForParent />} />

          </>
        ) : (
          <Route path="*" element={<Navigate to="/employeeLogin" />} />
        )}
      </Routes>

    </div>
  );
}

export default App; 