// import React from "react";
// import { useNavigate } from "react-router-dom";

// const AllStudents = () => {
//   // Hardcoded student data
//   const students = [
//     { id: 101, name: "Aarav Sharma", course: "Mathematics" },
//     { id: 102, name: "Diya Verma", course: "Science" },
//     { id: 103, name: "Kabir Iyer", course: "English" },
//   ];

//   const navigate = useNavigate();

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">All Students</h1>

//       <table className="w-full border-collapse border border-gray-300 shadow-md bg-white">
//         <thead>
//           <tr className="bg-indigo-500 text-white">
//             <th className="p-2 border">Student ID</th>
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Course</th>
//             <th className="p-2 border">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id} className="text-gray-700 text-center">
//               <td className="p-2 border">{student.id}</td>
//               <td className="p-2 border">{student.name}</td>
//               <td className="p-2 border">{student.course}</td>
//               <td className="p-2 border">
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//                   onClick={() => navigate(`/edit-report/${student.id}`, { state: {student}})}
//                 >
//                   Edit Report
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AllStudents = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const token = localStorage.getItem("employeeToken");
//         if (!token) {
//           setError("No authentication token found. Please log in.");
//           setLoading(false);
//           return;
//         }

//         // Decode JWT token to extract employee ID
//         const decodedToken = JSON.parse(atob(token.split(".")[1]));
//         const empID = decodedToken.id;
//         console.log("Decoded Employee ID:", empID);

//         const response = await fetch(`http://localhost:4000/api/employees/assigned-students/${empID}`, {
//           method: "GET",
//           headers: {
//             "Authorization": `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           console.error("Fetch Error:", response.status, await response.text());
//           throw new Error("Failed to fetch students.");
//         }

//         const data = await response.json();
//         console.log("Fetched Students:", data);

//         setStudents(data.students || []);
//       } catch (err) {
//         console.error("Error fetching students:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Assigned Students</h1>

//       {loading && <p className="text-center text-gray-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       <table className="w-full border-collapse border border-gray-300 shadow-md bg-white">
//         <thead>
//           <tr className="bg-indigo-500 text-white">
//             <th className="p-2 border">Student ID</th>
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Course</th>
//             <th className="p-2 border">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.length > 0 ? (
//             students.map((student) => (
//               <tr key={student._id} className="text-gray-700 text-center">
//                 <td className="p-2 border">{student.student_id || "N/A"}</td>
//                 <td className="p-2 border">{student.student_name || "N/A"}</td>
//                 <td className="p-2 border">
//                   {student.courses?.map((course) => course.name).join(", ") || "N/A"}
//                 </td>
//                 <td className="p-2 border">
//                   <button
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//                     onClick={() => navigate(`/edit-report/${student._id}`, { state: { student } })}
//                   >
//                     Edit Report
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             !loading && (
//               <tr>
//                 <td colSpan="4" className="p-4 text-center text-gray-500">
//                   No students assigned.
//                 </td>
//               </tr>
//             )
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllStudents;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("employeeToken");

        if (!token) {
          console.error("Error: No authentication token found.");
          return;
        }

        // Decode JWT to get empID
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const empID = decodedToken.id;

        if (!empID) {
          console.error("Error: Employee ID not found in token.");
          return;
        }

        const response = await fetch(
          `http://localhost:4000/api/employees/assigned-students/${empID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        if (response.ok) {
          setStudents(data.students);
        } else {
          console.error("Error fetching students:", data.message);
        }
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Assigned Students
      </h1>

      <div className="space-y-4">
        {students.length > 0 ? (
          students.map((student) => (
            <div
              key={student.udid}
              className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md bg-white"
            >
              <p className="text-lg font-semibold text-gray-800">
                {student.student_name}
              </p>
              <p className="text-gray-600">UDID: {student.udid}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={() =>
                  navigate(`/edit-report/${student.student_id}`, {
                    state: { student },
                  })
                }
              >
                Edit Report
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No students assigned</p>
        )}
      </div>
    </div>
  );
};

export default AllStudents;
