// import React, { useState } from "react";

// const AddAdmin = () => {
//   const [adminData, setAdminData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setAdminData({ ...adminData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("New Admin Data:", adminData);
//     alert("Admin Added Successfully! ✅"); // Replace this with API call
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-96">
//         <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">Add Admin</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={adminData.name}
//               onChange={handleChange}
//               placeholder="Enter admin name"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={adminData.email}
//               onChange={handleChange}
//               placeholder="Enter admin email"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={adminData.password}
//               onChange={handleChange}
//               placeholder="Enter admin password"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
//           >
//             Add Admin
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddAdmin;




import React, { useState } from "react";

const AddAdmin = () => {
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken"); // Ensure admin is authenticated
    if (!token) {
      alert("No token found. Please log in as an admin.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/admin/add-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(adminData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add admin");
      }

      alert("Admin added successfully! ✅");
      setAdminData({ name: "", email: "", password: "" }); // Reset form after success
    } catch (error) {
      console.error("Error adding admin:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">Add Admin</h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={adminData.name}
              onChange={handleChange}
              placeholder="Enter admin name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={adminData.email}
              onChange={handleChange}
              placeholder="Enter admin email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={adminData.password}
              onChange={handleChange}
              placeholder="Enter admin password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Admin"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
