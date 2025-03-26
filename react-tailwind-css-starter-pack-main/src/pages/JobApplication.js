import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobApplication = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact_number: "",
    address: "",
    qualifications: "",
    experience: "",
    skills: [],
    resume: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle skills input as an array
  const handleSkillsChange = (e) => {
    setFormData({ ...formData, skills: e.target.value.split(",") });
  };

  // Handle resume file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/employees/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! Pending approval.");
        navigate("/"); // Redirect after successful signup
      } else {
        alert(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Job Application</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Create a password"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Contact Number</label>
            <input
              type="text"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your address"
            ></textarea>
          </div>

          {/* Qualifications */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Qualifications</label>
            <input
              type="text"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your qualifications"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter years of experience"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Skills (comma separated)</label>
            <input
              type="text"
              name="skills"
              value={formData.skills.join(",")}
              onChange={handleSkillsChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="e.g. React, Node.js, MongoDB"
            />
          </div>

          

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Application
          </button>
        </form>

        {/* Back to Homepage */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full text-blue-500 hover:underline text-center"
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default JobApplication;
