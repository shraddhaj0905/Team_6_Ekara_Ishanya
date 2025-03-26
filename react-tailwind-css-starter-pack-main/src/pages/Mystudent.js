

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const studentsData = [
//   {
//       id: 1,
//       name: "John Doe",
//       age: 12,
//       rollNumber: "S1234",
//       photo: "https://randomuser.me/api/portraits/men/1.jpg",
//       teacher: "Mr. Anderson",
//       parent_name: "Sarah Doe",
//       parent_email: "sarah.doe@example.com",
//       contact_number: "+1234567890",
//       address: "123 Maple Street, Springfield",
//       dob: "2013-05-12",
//       blood_group: "O+",
//       gender: "Male",
//       disability_type: "Dyslexia",
//       disability_description: "Difficulty in reading and writing.",
//       progress: "Good improvement in reading."
//   },
//   {
//       id: 2,
//       name: "Jane Smith",
//       age: 11,
//       rollNumber: "S5678",
//       photo: "https://randomuser.me/api/portraits/women/2.jpg",
//       teacher: "Mr. Anderson",
//       parent_name: "Emily Smith",
//       parent_email: "emily.smith@example.com",
//       contact_number: "+9876543210",
//       address: "456 Oak Avenue, Lincoln",
//       dob: "2014-09-22",
//       blood_group: "A+",
//       gender: "Female",
//       disability_type: "Hearing Impairment",
//       disability_description: "Requires sign language for communication.",
//       progress: "Excelling in sign language."
//   },
//   {
//       id: 3,
//       name: "Sam Wilson",
//       age: 10,
//       rollNumber: "S9101",
//       photo: "https://randomuser.me/api/portraits/men/3.jpg",
//       teacher: "Mr. Anderson",
//       parent_name: "Robert Wilson",
//       parent_email: "robert.wilson@example.com",
//       contact_number: "+1357924680",
//       address: "789 Pine Road, Madison",
//       dob: "2015-02-18",
//       blood_group: "B-",
//       gender: "Male",
//       disability_type: "Autism",
//       disability_description: "Challenges with social interaction and communication.",
//       progress: "Great improvement in communication."
//   },
//   {
//       id: 4,
//       name: "Emily Davis",
//       age: 13,
//       rollNumber: "S1122",
//       photo: "https://randomuser.me/api/portraits/women/4.jpg",
//       teacher: "Mr. Anderson",
//       parent_name: "Anna Davis",
//       parent_email: "anna.davis@example.com",
//       contact_number: "+2468013579",
//       address: "234 Birch Lane, Denver",
//       dob: "2012-07-30",
//       blood_group: "AB+",
//       gender: "Female",
//       disability_type: "Visual Impairment",
//       disability_description: "Relies on braille and assistive technology.",
//       progress: "Excellent progress with braille."
//   },
//   {
//       id: 5,
//       name: "Michael Brown",
//       age: 14,
//       rollNumber: "S3344",
//       photo: "https://randomuser.me/api/portraits/men/5.jpg",
//       teacher: "Mr. Anderson",
//       parent_name: "William Brown",
//       parent_email: "william.brown@example.com",
//       contact_number: "+1122334455",
//       address: "567 Cedar Street, Austin",
//       dob: "2011-12-05",
//       blood_group: "O-",
//       gender: "Male",
//       disability_type: "ADHD",
//       disability_description: "Struggles with focus and attention.",
//       progress: "Improving focus and attention."
//   }
// ];


// export default function TeacherDashboard() {
//   const [search, setSearch] = useState("");
//   const [students, setStudents] = useState(studentsData);
//   const navigate = useNavigate();

//   const filteredStudents = students.filter((student) =>
//     student.name.toLowerCase().includes(search.toLowerCase()) ||
//     student.rollNumber.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-white text-black p-6">
//       <h1 className="text-3xl font-bold text-center text-black">My Students</h1>
//       <p className="text-center text-gray-400 mb-4">Total Students: {students.length}</p>

//       {/* Search Bar */}
//       <div className="flex justify-center gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by name or roll number..."
//           className="p-2 w-80 border rounded-lg shadow-sm focus:ring focus:ring-[#4A90E2] bg-white text-black"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Student Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredStudents.length > 0 ? (
//           filteredStudents.map((student) => (
//             <div key={student.id} className="bg-gray-200 shadow-lg rounded-lg p-4 text-center transition transform hover:scale-105 hover:shadow-xl border border-black">
//               <img src={student.photo} alt={student.name} className="w-24 h-24 mx-auto rounded-full border-2 border-[#4A90E2]" />
//               <h2 className="text-xl font-bold text-black mt-2">{student.name}</h2>
//               <p className="text-black-400">Age: {student.age}</p>
//               <p className="text-balck-500">Roll No: {student.rollNumber}</p>
//               <p className="">Course:{}</p>

//               <p className="text-black-500">Special Needs: {student.specialNeeds}</p>
//               <button
//                 className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-black transition transform hover:scale-105 hover:shadow-md"
//                 onClick={() => navigate(`/studentdetails/${student.id}`,{ state: { student }})}
//               >
//                 View Details
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No students found.</p>
//         )}
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getInitialLetter } from "../utils/helpers"; // Adjust path as needed


// export default function MyStudent() {
//   const [search, setSearch] = useState("");
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Function to fetch assigned students
//   const fetchAssignedStudents = async () => {
//     try {
//       const token = localStorage.getItem("employeeToken");
//       if (!token) {
//         setError("No authentication token found. Please login.");
//         setLoading(false);
//         return;
//       }

//       // Decode JWT token to get employee ID
//       const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       const empID = decodedToken.id;

//       const response = await fetch(
//         `http://localhost:4000/api/employees/assigned-students/${empID}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch students.");
//       }

//       const data = await response.json();
//       setStudents(data.students || []); // Ensure students array is set properly
//     } catch (error) {
//       console.error("Error fetching students:", error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAssignedStudents();
//   }, []);

//   // Ensure students is an array before filtering
//   const filteredStudents = Array.isArray(students)
//     ? students.filter((student) =>
//         student.student_name?.toLowerCase().includes(search.toLowerCase()) ||
//         student.student_id?.toLowerCase().includes(search.toLowerCase())
//       )
//     : [];

//   return (
//     <div className="min-h-screen bg-white text-black p-6">
//       <h1 className="text-3xl font-bold text-center text-black">My Students</h1>
//       {loading && <p className="text-center text-gray-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}
//       <p className="text-center text-gray-400 mb-4">Total Students: {students.length}</p>

//       {/* Search Bar */}
//       <div className="flex justify-center gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by student name or ID..."
//           className="p-2 w-80 border rounded-lg shadow-sm focus:ring focus:ring-[#4A90E2] bg-white text-black"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Student Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredStudents.length > 0 ? (
//           filteredStudents.map((student) => (
//             <div

              
//               key={student._id}
//               className="bg-gray-200 shadow-lg rounded-lg p-4 text-center transition transform hover:scale-105 hover:shadow-xl border border-black"
//             >
//               <div className="flex justify-center mb-3">
//                 {student.profilePicture ? (
//                   <img
//                     src={student.profilePicture}
//                     alt={student.student_name}
//                     className="w-20 h-20 rounded-full border-2 border-black shadow-md"
//                   />
//                 ) : (
//                   <div className="w-20 h-20 flex justify-center items-center bg-blue-100 text-black text-3xl font-bold rounded-full border-2 border-black shadow-md">
//                     {getInitialLetter(student.student_name)}
//                   </div>
//                 )}
//               </div>
//               <h2 className="text-xl font-bold text-black mt-2">{student.student_name || "N/A"}</h2>
//               <p className="text-black-500">Student ID: {student.student_id || "N/A"}</p>
//               <p className="text-black-500">Gender: {student.gender || "N/A"}</p>
//               <p className="text-black-500">Contact: {student.contact_number || "N/A"}</p>
//               <p className="text-black-500">
//                 Courses:{" "}
//                 {student.courses?.length > 0
//                   ? student.courses.map((course) => course.name).join(", ")
//                   : "N/A"}
//               </p>
//               <button
//                 className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-black transition transform hover:scale-105 hover:shadow-md"
//                 onClick={() => navigate(`/studentdetails/${student._id}`, { state: { student } })}
//               >
//                 View Details
//               </button>
//             </div>
//           ))
//         ) : (
//           !loading && <p className="text-center text-gray-500">No students found.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getInitialLetter } from "../utils/helpers"; // Ensure correct path

// export default function MyStudent() {
//   const [search, setSearch] = useState("");
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const fetchAssignedStudents = async () => {
//     try {
//       const token = localStorage.getItem("employeeToken");
//       if (!token) {
//         setError("No authentication token found. Please login.");
//         setLoading(false);
//         return;
//       }

//       const decodedToken = JSON.parse(atob(token.split(".")[1]));
//       const empID = decodedToken.id;

//       const response = await fetch(
//         `http://localhost:4000/api/employees/assigned-students/${empID}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch students.");
//       }

//       const data = await response.json();
//       setStudents(data.students || []);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAssignedStudents();
//   }, []);

//   const filteredStudents = Array.isArray(students)
//     ? students.filter((student) =>
//         student.student_name?.toLowerCase().includes(search.toLowerCase()) ||
//         student.student_id?.toLowerCase().includes(search.toLowerCase())
//       )
//     : [];

//   return (
//     <div className="min-h-screen bg-white text-black p-6">
//       <h1 className="text-3xl font-bold text-center text-black">My Students</h1>
//       {loading && <p className="text-center text-gray-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}
//       <p className="text-center text-gray-400 mb-4">Total Students: {students.length}</p>

//       <div className="flex justify-center gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by student name or ID..."
//           className="p-2 w-80 border rounded-lg shadow-sm focus:ring focus:ring-[#4A90E2] bg-white text-black"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredStudents.length > 0 ? (
//           filteredStudents.map((student) => (
//             <div
//               key={student._id}
//               className="bg-gray-200 shadow-lg rounded-lg p-4 text-center transition transform hover:scale-105 hover:shadow-xl border border-black"
//             >
//               <div className="flex justify-center mb-3">
//                 {student.profilePicture ? (
//                   <img
//                     src={student.profilePicture}
//                     alt={student.student_name}
//                     className="w-20 h-20 rounded-full border-2 border-black shadow-md"
//                   />
//                 ) : (
//                   <div className="w-20 h-20 flex justify-center items-center bg-blue-100 text-black text-3xl font-bold rounded-full border-2 border-black shadow-md">
//                     {getInitialLetter(student?.student_name)}
//                   </div>
//                 )}
//               </div>
//               <h2 className="text-xl font-bold text-black mt-2">{student.student_name || "N/A"}</h2>
//               <p className="text-black-500">Student ID: {student.student_id || "N/A"}</p>
//               <p className="text-black-500">Gender: {student.gender || "N/A"}</p>
//               <p className="text-black-500">Contact: {student.contact_number || "N/A"}</p>
//               <p className="text-black-500">
//                 Courses:{" "}
//                 {student.courses?.length > 0
//                   ? student.courses.map((course) => course.name).join(", ")
//                   : "N/A"}
//               </p>
//               <button
//                 className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-black transition transform hover:scale-105 hover:shadow-md"
//                 onClick={() => navigate(`/studentdetails/${student._id}`, { state: { student } })}
//               >
//                 View Details
//               </button>
//             </div>
//           ))
//         ) : (
//           !loading && <p className="text-center text-gray-500">No students found.</p>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MyStudent() {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to get the initial letter of a student's name
  const getInitialLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : "?";
  };

  // Function to fetch assigned students
  const fetchAssignedStudents = async () => {
    try {
      const token = localStorage.getItem("employeeToken");
      if (!token) {
        setError("No authentication token found. Please login.");
        setLoading(false);
        return;
      }

      // Decode JWT token to get employee ID
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const empID = decodedToken.id;

      const response = await fetch(
        `http://localhost:4000/api/employees/assigned-students/${empID}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch students.");
      }

      const data = await response.json();
      setStudents(data.students || []); // Ensure students array is set properly
    } catch (error) {
      console.error("Error fetching students:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignedStudents();
  }, []);

  // Ensure students is an array before filtering
  const filteredStudents = Array.isArray(students)
    ? students.filter((student) =>
        student.student_name?.toLowerCase().includes(search.toLowerCase()) ||
        student.student_id?.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold text-center text-black">My Students</h1>
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <p className="text-center text-gray-400 mb-4">Total Students: {students.length}</p>

      {/* Search Bar */}
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by student name or ID..."
          className="p-2 w-80 border rounded-lg shadow-sm focus:ring focus:ring-[#4A90E2] bg-white text-black"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div
              key={student._id}
              className="bg-gray-200 shadow-lg rounded-lg p-4 text-center transition transform hover:scale-105 hover:shadow-xl border border-black"
            >
              <div className="flex justify-center mb-3">
                {student.profilePicture ? (
                  <img
                    src={student.profilePicture}
                    alt={student.student_name}
                    className="w-20 h-20 rounded-full border-2 border-black shadow-md"
                  />
                ) : (
                  <div className="w-20 h-20 flex justify-center items-center bg-blue-100 text-black text-3xl font-bold rounded-full border-2 border-black shadow-md">
                    {getInitialLetter(student.student_name)}
                  </div>
                )}
              </div>
              <h2 className="text-xl font-bold text-black mt-2">{student.student_name || "N/A"}</h2>
              <p className="text-black-500">Student ID: {student.student_id || "N/A"}</p>
              <p className="text-black-500">Gender: {student.gender || "N/A"}</p>
              <p className="text-black-500">Contact: {student.contact_number || "N/A"}</p>
              <p className="text-black-500">
                Courses:{" "}
                {student.courses?.length > 0
                  ? student.courses.map((course) => course.name).join(", ")
                  : "N/A"}
              </p>
              <button
                className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-black transition transform hover:scale-105 hover:shadow-md"
                onClick={() => navigate(`/studentdetails/${student._id}`, { state: { student } })}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-gray-500">No students found.</p>
        )}
      </div>
    </div>
  );
}
