// import React, { useState } from "react";

// const CreateAnnouncement = () => {
//   const [announcement, setAnnouncement] = useState({
//     date: "",
//     title: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Announcement Submitted:", announcement);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-blue-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Create Announcement</h2>
        
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           {/* Date Input */}
//           <label className="font-semibold">Date</label>
//           <input
//             type="date"
//             name="date"
//             value={announcement.date}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 rounded-md"
//             required
//           />

//           {/* Title Input */}
//           <label className="font-semibold">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={announcement.title}
//             onChange={handleChange}
//             placeholder="Enter announcement title"
//             className="border border-gray-300 p-2 rounded-md"
//             required
//           />

//           {/* Description Input */}
//           <label className="font-semibold">Description</label>
//           <textarea
//             name="description"
//             value={announcement.description}
//             onChange={handleChange}
//             placeholder="Enter announcement details"
//             className="border border-gray-300 p-2 rounded-md h-24"
//             required
//           ></textarea>

//           {/* Submit Button */}
//           <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
//             Create Announcement
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateAnnouncement;
// import React, { useState } from "react";

// const CreateAnnouncement = () => {
//   const [announcement, setAnnouncement] = useState({
//     date: "",
//     title: "",
//     description: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Retrieve the token from localStorage (or other state management)
//     const token = localStorage.getItem("adminToken");

//     // If token is not found, prompt the user to log in
//     if (!token) {
//       setErrorMessage("You are not authorized. Please log in.");
//       return;
//     }

//     try {
//       // Send the form data to the backend
//       const response = await fetch("http://localhost:4000/api/admin/create-announcement", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`, // Use the token stored in localStorage or context
//         },
//         body: JSON.stringify(announcement),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccessMessage(data.message); // Show success message
//         setAnnouncement({ date: "", title: "", description: "" }); // Clear form
//       } else {
//         setErrorMessage(data.message); // Show error message
//       }
//     } catch (error) {
//       console.error("Error creating announcement:", error);
//       setErrorMessage("Server error, please try again later.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-blue-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Create Announcement</h2>

//         {/* Display success or error messages */}
//         {successMessage && <div className="text-green-500">{successMessage}</div>}
//         {errorMessage && <div className="text-red-500">{errorMessage}</div>}

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           {/* Date Input */}
//           <label className="font-semibold">Date</label>
//           <input
//             type="date"
//             name="date"
//             value={announcement.date}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 rounded-md"
//             required
//           />

//           {/* Title Input */}
//           <label className="font-semibold">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={announcement.title}
//             onChange={handleChange}
//             placeholder="Enter announcement title"
//             className="border border-gray-300 p-2 rounded-md"
//             required
//           />

//           {/* Description Input */}
//           <label className="font-semibold">Description</label>
//           <textarea
//             name="description"
//             value={announcement.description}
//             onChange={handleChange}
//             placeholder="Enter announcement details"
//             className="border border-gray-300 p-2 rounded-md h-24"
//             required
//           ></textarea>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//           >
//             Create Announcement
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateAnnouncement;
// import React, { useState } from "react";

// const CreateAnnouncement = () => {
//   const [announcement, setAnnouncement] = useState({
//     date: "",
//     title: "",
//     description: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("adminToken");

//     if (!token) {
//       setErrorMessage("You are not authorized. Please log in.");
//       setSuccessMessage(""); // Clear success message
//       return;
//     }

//     // Validate if the date is in the future
//     const selectedDate = new Date(announcement.date);
//     const currentDate = new Date();
//     currentDate.setHours(0, 0, 0, 0); // Normalize current date to avoid time issues

//     if (selectedDate <= currentDate) {
//       setErrorMessage("Date must be in the future.");
//       setSuccessMessage(""); // Clear success message
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:4000/api/admin/create-announcement", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify(announcement),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccessMessage(data.message);
//         setErrorMessage(""); // Clear error message on success
//         setAnnouncement({ date: "", title: "", description: "" });
//       } else {
//         setSuccessMessage(""); // Clear success message on error
//         setErrorMessage(data.message);
//       }
//     } catch (error) {
//       console.error("Error creating announcement:", error);
//       setSuccessMessage(""); // Clear success message on error
//       setErrorMessage("Server error, please try again later.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-blue-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">Create Announcement</h2>

//         {/* Display success or error messages */}
//         {successMessage && <div className="text-green-500">{successMessage}</div>}
//         {errorMessage && <div className="text-red-500">{errorMessage}</div>}

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           {/* Date Input */}
//           <label className="font-semibold">Date</label>
//           <input
//             type="date"
//             name="date"
//             value={announcement.date}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 rounded-md"
//             required
//           />

//           {/* Title Input */}
//           <label className="font-semibold">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={announcement.title}
//             onChange={handleChange}
//             placeholder="Enter announcement title"
//             className="border border-gray-300 p-2 rounded-md"
//             required
//           />

//           {/* Description Input */}
//           <label className="font-semibold">Description</label>
//           <textarea
//             name="description"
//             value={announcement.description}
//             onChange={handleChange}
//             placeholder="Enter announcement details"
//             className="border border-gray-300 p-2 rounded-md h-24"
//             required
//           ></textarea>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//           >
//             Create Announcement
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateAnnouncement;
import React, { useState } from "react";

const CreateAnnouncement = () => {
  const [announcement, setAnnouncement] = useState({
    date: "",
    title: "",
    description: "",
    category: "", // Added category field
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken");

    if (!token) {
      setErrorMessage("You are not authorized. Please log in.");
      setSuccessMessage(""); 
      return;
    }

    // Validate if the date is in the future
    const selectedDate = new Date(announcement.date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 

    if (selectedDate <= currentDate) {
      setErrorMessage("Date must be in the future.");
      setSuccessMessage(""); 
      return;
    }

    // Validate category selection
    if (!announcement.category) {
      setErrorMessage("Please select a category.");
      setSuccessMessage("");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/admin/create-announcement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(announcement),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setErrorMessage(""); 
        setAnnouncement({ date: "", title: "", description: "", category: "" });
      } else {
        setSuccessMessage(""); 
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error creating announcement:", error);
      setSuccessMessage(""); 
      setErrorMessage("Server error, please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Create Announcement</h2>

        {/* Display success or error messages */}
        {successMessage && <div className="text-green-500">{successMessage}</div>}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Date Input */}
          <label className="font-semibold">Date</label>
          <input
            type="date"
            name="date"
            value={announcement.date}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            required
          />

          {/* Title Input */}
          <label className="font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={announcement.title}
            onChange={handleChange}
            placeholder="Enter announcement title"
            className="border border-gray-300 p-2 rounded-md"
            required
          />

          {/* Description Input */}
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            value={announcement.description}
            onChange={handleChange}
            placeholder="Enter announcement details"
            className="border border-gray-300 p-2 rounded-md h-24"
            required
          ></textarea>

          {/* Category Dropdown */}
          <label className="font-semibold">Category</label>
          <select
            name="category"
            value={announcement.category}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            required
          >
            <option value="">Select Category</option>
            <option value="Holiday">Holiday</option>
            <option value="Events">Events</option>
            <option value="Urgent">Urgent</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Create Announcement
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAnnouncement;
