import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ParentLogin = () => {
  const [parentEmail, setParentEmail] = useState(""); // Updated field name
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4000/api/students/login", {
        parent_email: parentEmail, // Update field name
        password,
      });

      // Save token in localStorage
      localStorage.setItem("parentToken", res.data.token);

      // Redirect to parent dashboard
      navigate("/parent-dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Parent Login</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Parent Email</label>
            <input 
              type="email" 
              value={parentEmail} 
              onChange={(e) => setParentEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full p-2 border rounded-lg focus:outline-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
              className="w-full p-2 border rounded-lg focus:outline-blue-500"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParentLogin;
