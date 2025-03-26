// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ChildRegistration = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     parentName: "",
//     email: "",
//     password: "",
//     contact: "",
//     address: "",
//     studentName: "",
//     dob: "",
//     bloodGroup: "",
//     gender: "",
//     udid: "",
//     disabilityType: "",
//     disabilityDescription: "",
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Child Registration Submitted:", formData);
//     alert("Child registration successful!"); // Replace with actual submission logic
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Child Registration</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Parent Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Parent/Guardian Name</label>
//             <input
//               type="text"
//               name="parentName"
//               value={formData.parentName}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Create a password"
//             />
//           </div>

//           {/* Contact Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Contact Number</label>
//             <input
//               type="text"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter your phone number"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Address</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter your address"
//             ></textarea>
//           </div>

//           {/* Student Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Student's Name</label>
//             <input
//               type="text"
//               name="studentName"
//               value={formData.studentName}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter child's full name"
//             />
//           </div>

//           {/* Date of Birth */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Blood Group */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Blood Group</label>
//             <select
//               name="bloodGroup"
//               value={formData.bloodGroup}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select Blood Group</option>
//               <option value="A+">A+</option>
//               <option value="A-">A-</option>
//               <option value="B+">B+</option>
//               <option value="B-">B-</option>
//               <option value="O+">O+</option>
//               <option value="O-">O-</option>
//               <option value="AB+">AB+</option>
//               <option value="AB-">AB-</option>
//             </select>
//           </div>

//           {/* Gender */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Gender</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* UDID (Unique Disability ID) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">UDID (Unique Disability ID)</label>
//             <input
//               type="text"
//               name="udid"
//               value={formData.udid}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter UDID number"
//             />
//           </div>

//           {/* Disability Type */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Disability Type</label>
//             <select
//               name="disabilityType"
//               value={formData.disabilityType}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select Disability</option>
//               <option value="Autism Spectrum Disorder">Autism Spectrum Disorder</option>
//               <option value="Asperger’s Syndrome">Asperger’s Syndrome</option>
//               <option value="Learning Disability">Learning Disability</option>
//               <option value="Down Syndrome">Down Syndrome</option>
//               <option value="Attention Deficit Hyperactivity Disorder">
//                 Attention Deficit Hyperactivity Disorder
//               </option>
//             </select>
//           </div>

//           {/* Description of Disability */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Description of Disability</label>
//             <textarea
//               name="disabilityDescription"
//               value={formData.disabilityDescription}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Provide details about the disability"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             Submit Registration
//           </button>
//         </form>

//         {/* Back to Homepage */}
//         <button
//           onClick={() => navigate("/")}
//           className="mt-4 w-full text-blue-500 hover:underline text-center"
//         >
//           Back to Homepage
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChildRegistration;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChildRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parent_name: "",
    parent_email: "",
    password: "",
    contact_number: "",
    address: "",
    student_name: "",
    dob: "",
    blood_group: "",
    gender: "",
    udid: "",
    disability_type: "",
    disability_description: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:4000/api/students/signup", { // Update with your actual backend URL
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
        <h2 className="text-2xl font-bold text-center mb-6">Child Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Parent Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Parent/Guardian Name</label>
            <input
              type="text"
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="parent_email"
              value={formData.parent_email}
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

          {/* Student Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Student's Name</label>
            <input
              type="text"
              name="student_name"
              value={formData.student_name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter child's full name"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Blood Group</label>
            <select
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* UDID */}
          <div>
            <label className="block text-sm font-medium text-gray-600">UDID</label>
            <input
              type="text"
              name="udid"
              value={formData.udid}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter UDID number"
            />
          </div>

          {/* Disability Type */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Disability Type</label>
            <input
              type="text"
              name="disability_type"
              value={formData.disability_type}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Disability Type"
            />
          </div>

          {/* Disability Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Description of Disability</label>
            <textarea
              name="disability_description"
              value={formData.disability_description}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Provide details about the disability"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Submit Registration</button>
        </form>
      </div>
    </div>
  );
};

export default ChildRegistration;