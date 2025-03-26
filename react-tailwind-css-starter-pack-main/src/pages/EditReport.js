// import React, { useState } from "react";
// import { useParams, useLocation } from "react-router-dom";

// const EditReport = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const student = location.state?.student || { name: "Unknown Student" };

//   // List of months for the dropdown
//   const monthsList = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   // State for form fields (empty by default)
//   const [month, setMonth] = useState("");
//   const [ratings, setRatings] = useState({
//     communication: "",
//     cognition: "",
//     academics: "",
//     functionalSkills: "",
//   });
//   const [feedback, setFeedback] = useState({
//     communication: "",
//     cognition: "",
//     academics: "",
//     functionalSkills: "",
//   });
//   const [improvement, setImprovement] = useState("");

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const reportData = { student_id: id, month, ratings, feedback, improvement };
//     console.log("Updated Report Data:", reportData);
//     alert("Report updated successfully!");
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
//         Edit Report for {student.name}
//       </h1>

//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//         {/* Select Month Dropdown */}
//         <label className="block text-gray-700 font-semibold mb-2">Select Month:</label>
//         <select
//           value={month}
//           onChange={(e) => setMonth(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//         >
//           <option value="">Select a Month</option>
//           {monthsList.map((m) => (
//             <option key={m} value={m}>{m}</option>
//           ))}
//         </select>

//         {/* Rating Table with Feedback */}
//         <table className="w-full border-collapse border border-gray-300 mb-4">
//           <thead>
//             <tr className="bg-indigo-500 text-white">
//               <th className="p-2 border">Field</th>
//               <th className="p-2 border">Rating (Out of 5)</th>
//               <th className="p-2 border">Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(ratings).map((field) => (
//               <tr key={field}>
//                 <td className="p-2 border capitalize">{field.replace(/([A-Z])/g, " $1")}</td>
//                 <td className="p-2 border">
//                   <input
//                     type="number"
//                     min="1"
//                     max="5"
//                     value={ratings[field]}
//                     onChange={(e) => setRatings({ ...ratings, [field]: e.target.value })}
//                     className="w-full p-2 border rounded"
//                     placeholder="Enter rating"
//                   />
//                 </td>
//                 <td className="p-2 border">
//                   <input
//                     type="text"
//                     value={feedback[field]}
//                     onChange={(e) => setFeedback({ ...feedback, [field]: e.target.value })}
//                     className="w-full p-2 border rounded"
//                     placeholder="Enter feedback"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Overall Improvement Suggestions */}
//         <label className="block text-gray-700 font-semibold mb-2">Overall Improvement Suggestions:</label>
//         <textarea
//           value={improvement}
//           onChange={(e) => setImprovement(e.target.value)}
//           className="w-full p-2 border rounded mb-4"
//           placeholder="Enter overall improvement suggestions"
//         ></textarea>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition w-full"
//         >
//           Save Report
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditReport;

import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditReport = () => {
  const { id } = useParams(); // Student ID from URL params
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student || { student_name: "Unknown Student" };

  // List of months for the dropdown
  const monthsList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // State for form fields
  const [month, setMonth] = useState("");
  const [ratings, setRatings] = useState({
    communication: "",
    cognition: "",
    academics: "",
    functionalSkills: "",
  });
  const [feedback, setFeedback] = useState({
    communication: "",
    cognition: "",
    academics: "",
    functionalSkills: "",
  });
  const [improvement, setImprovement] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("employeeToken");
    if (!token) {
      alert("Unauthorized: Please login again.");
      return;
    }

    const reportData = {
      month,
      communication: { score: ratings.communication, comments: feedback.communication },
      cognition: { score: ratings.cognition, comments: feedback.cognition },
      academics_OBE_Level_A: { score: ratings.academics, comments: feedback.academics },
      functional_skills: { score: ratings.functionalSkills, comments: feedback.functionalSkills },
      area_to_improve: improvement,
    };

    try {
      const response = await fetch(
        `http://localhost:4000/api/employees/update-evaluation/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(reportData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Report updated successfully!");
        navigate(-1); // Go back to the previous page
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error updating report:", error);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Edit Report for {student.student_name}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        {/* Select Month Dropdown */}
        <label className="block text-gray-700 font-semibold mb-2">Select Month:</label>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">Select a Month</option>
          {monthsList.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        {/* Rating Table with Feedback */}
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-indigo-500 text-white">
              <th className="p-2 border">Field</th>
              <th className="p-2 border">Rating (Out of 5)</th>
              <th className="p-2 border">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(ratings).map((field) => (
              <tr key={field}>
                <td className="p-2 border capitalize">{field.replace(/([A-Z])/g, " $1")}</td>
                <td className="p-2 border">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={ratings[field]}
                    onChange={(e) => setRatings({ ...ratings, [field]: e.target.value })}
                    className="w-full p-2 border rounded"
                    placeholder="Enter rating"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="text"
                    value={feedback[field]}
                    onChange={(e) => setFeedback({ ...feedback, [field]: e.target.value })}
                    className="w-full p-2 border rounded"
                    placeholder="Enter feedback"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Overall Improvement Suggestions */}
        <label className="block text-gray-700 font-semibold mb-2">Overall Improvement Suggestions:</label>
        <textarea
          value={improvement}
          onChange={(e) => setImprovement(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter overall improvement suggestions"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition w-full"
        >
          Save Report
        </button>
      </form>
    </div>
  );
};

export default EditReport;
