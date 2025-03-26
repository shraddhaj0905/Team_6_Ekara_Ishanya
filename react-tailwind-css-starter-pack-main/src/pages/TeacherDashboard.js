import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import teaching from "../assests/teaching.jpg";
import student from "../assests/students group.jpg";
import attendence from "../assests/Attendence.jpg";
import Assment from "../assests/Assesment.webp";
import EmployeeNavbar from "../components/EmployeeNavbar";

function Home() {
  const navigate = useNavigate();
  const [teacherName, setTeacherName] = useState("");

  // Get teacher's name from localStorage
  useEffect(() => {
    const name = localStorage.getItem("teacherName") || "Teacher";
    setTeacherName(name);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Fixed at the top */}
      <EmployeeNavbar/>

      {/* Main Content Wrapper - Adds padding to avoid overlap */}
      <div className="flex flex-col items-center justify-center bg-white text-black p-6 mt-0 ">
        {/* Animated Welcome Text */}
        <h1 className="text-4xl font-bold mb-10">Welcome, {teacherName}! 👋</h1>

        <p className="italic text-green-600 mb-12 font-bold text-3xl">
          "Every student can learn, just not on the same day or in the same way."
        </p>

        {/* Teacher Message Section */}
        <div className="flex flex-col md:flex-row items-center bg-gray-300 p-6 rounded-lg shadow-md w-full max-w-4xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-200  gap-y-4 border border-black">
          <div className="flex flex-col text-center md:text-left ">
            <p className="text-lg font-semibold mb-5">
              Your dedication, patience, and compassion are transforming lives in
              ways that words can't fully capture.
            </p>
            <p className="text-gray-700 mt-5">
              You are not just teaching subjects—you are nurturing confidence,
              inspiring dreams, and empowering every child to believe in their
              limitless potential.
            </p>
          </div>

          <img
            src={teaching}
            alt="Teaching"
            className="w-80 h-80 object-cover rounded-lg shadow-lg mt-4 md:mt-0 md:ml-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          />
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
          <div
            className="home-card transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-200 flex flex-col items-center gap-y-4 border border-black"
            onClick={() => navigate("/mystudent")}
          >
            <img
              src={student}
              alt="student"
              className="w-60 h-70 object-cover rounded-lg shadow-lg mt-4 md:mt-4 md:ml-2"
            />
            <h2 className="text-xl font-semibold">📚 My Students</h2>
            <p>View and manage your students.</p>
          </div>

          <div
            className="home-card transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-200 flex flex-col items-center gap-y-4 border border-black"
            onClick={() => navigate("/attendanceMakingpage")}
          >
            <img
              src={attendence}
              alt="student"
              className="w-60 h-70 object-cover rounded-lg shadow-lg mt-4 md:mt-4 md:ml-2"
            />
            <h2 className="text-xl font-semibold">✅ Attendance</h2>
            <p>Track student attendance records.</p>
          </div>

          <div
            className="home-card transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-200 flex flex-col items-center gap-y-4 border border-black"
            onClick={() => navigate("/studentsforreport")}
          >
            <img
              src={Assment}
              alt="Assment"
              className="w-60 h-70 object-cover rounded-lg shadow-lg mt-4 md:mt-4 md:ml-2"
            />
            <h2 className="text-xl font-semibold">📝 Assessment</h2>
            <p>Evaluate student progress and performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
