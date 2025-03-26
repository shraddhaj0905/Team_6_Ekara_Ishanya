import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import bcrypt from "bcryptjs";
import { auth, provider } from "../firebase"; // Firebase Config
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [error, setError] = useState(""); // Inline error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user role is selected before logging in
    if (!userRole || userRole === "Select User") {
      setError("Please select a user role before logging in.");
      return;
    }

    setError(""); // Clear any previous error

    // Hash password before sending (for security)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log(`Email: ${email}`);
    console.log(`Hashed Password: ${hashedPassword}`);
    console.log(`User Role: ${userRole}`);

    // Save role in localStorage
    localStorage.setItem("userRole", userRole);

    // Redirect based on user role
    if (userRole === "Parent") {
      navigate("/parent-dashboard");
    } else if (userRole === "Teacher") {
      navigate("/teacher-dashboard");
    } else if (userRole === "Admin") {
      navigate("/admin-dashboard");
    }
  };

  // Google Sign-in
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);
      navigate("/parent-dashboard"); // Redirect after successful Google login
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        
        {/* Back to Homepage Button */}
        <button 
          className="absolute top-3 left-3 flex items-center text-gray-600 hover:text-blue-600 transition duration-200"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} className="mr-1" />
          Back
        </button>

        {/* Login Form */}
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md pl-10 outline-none focus:border-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md pl-10 outline-none focus:border-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <a href="#" className="text-sm text-blue-500 float-right mt-1 hover:underline">Forgot password?</a>
          </div>

          {/* User Role Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">User Role</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option>Select User</option>
              <option>Parent</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>

          {/* Google Sign-in */}
          <p className="text-center text-sm text-gray-500 mt-4">Or continue with</p>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center border py-2 mt-2 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Google_%22G%22_logo.svg" alt="Google" className="h-5 w-5 mr-2" />
            Google
          </button>

          {/* Apply Now Link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Want to apply for a job or register a child?{" "}
            <button 
              className="text-blue-500 hover:underline" 
              onClick={() => navigate("/apply-now")}
            >
              Apply Now
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
