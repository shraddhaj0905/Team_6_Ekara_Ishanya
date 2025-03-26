import React from "react";
import logo from "../assests/logo.png"
import { useNavigate } from "react-router-dom"; // Ensure the path is correct

function Navbar() {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-lg">
      {/* Logo and NGO Name */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="NGO Logo" className="h-12 w-auto drop-shadow-lg" />
        <h1 className="font-bold text-black text-3xl">Ishanya India Foundation</h1>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-row gap-5 items-center">
        <button 
          className="black-white px-1.5 py-1.5 rounded-lg shadow-md transition-transform transform hover:scale-105"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        
        {/* Logout Button */}
        <button 
          className="bg-red-600 hover:bg-red-700 text-white px-1 py-1 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Logout
        </button>

        {/* My Profile Button as Rounded Avatar */}
        <div 
          className="w-8 h-8 bg-blue-200 hover:bg-blue-200 flex items-center justify-center rounded-full cursor-pointer shadow-md transition-transform transform hover:scale-110"
          onClick={() => navigate("/employeeProfilePage")}
        >
          <span className="text-white font-bold text-lg">👤</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
