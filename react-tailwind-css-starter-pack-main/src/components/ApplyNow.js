import React from "react";
import { useNavigate } from "react-router-dom";
import { X, Briefcase, UserPlus } from "lucide-react";

const ApplyNow = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-center">Apply Now</h2>
        <p className="text-gray-600 text-center mb-4">What are you applying for?</p>

        {/* Job Application Button */}
        <button
          onClick={() => navigate("/job-application")}
          className="w-full flex items-center p-4 border border-gray-300 rounded-lg mb-4 hover:bg-gray-100 transition"
        >
          <Briefcase className="text-blue-500 w-6 h-6 mr-3" />
          <div>
            <p className="font-semibold text-gray-800">Job Application</p>
            <p className="text-sm text-gray-500">Apply for employment opportunities</p>
          </div>
        </button>

        {/* Child Registration Button */}
        <button
          onClick={() => navigate("/child-registration")}
          className="w-full flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          <UserPlus className="text-blue-500 w-6 h-6 mr-3" />
          <div>
            <p className="font-semibold text-gray-800">Child Registration</p>
            <p className="text-sm text-gray-500">Register a child for our programs</p>
          </div>
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ApplyNow;
