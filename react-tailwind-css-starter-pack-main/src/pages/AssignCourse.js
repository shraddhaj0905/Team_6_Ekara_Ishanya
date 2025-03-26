
// import React, { useState, useEffect } from "react";

// const AssignCourse = () => {
//   const [students, setStudents] = useState([]);
//   const [teachers, setTeachers] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [selectedTeacher, setSelectedTeacher] = useState("");
//   const [selectedCourse, setSelectedCourse] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetchStudents();
//     fetchTeachers();
//     fetchCourses();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const token = localStorage.getItem("adminToken");
//       if (!token) {
//         console.error("No token found, please login.");
//         return;
//       }

//       const response = await fetch("http://localhost:4000/api/admin/get-approve-student", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch students");
//       }

//       const data = await response.json();
//       setStudents(data);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     }
//   };

//   const fetchTeachers = async () => {
//     try {
//       const token = localStorage.getItem("adminToken");
//       if (!token) return;

//       const response = await fetch("http://localhost:4000/api/admin/get-approve-employee", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch teachers");
//       }

//       const data = await response.json();
//       setTeachers(data);
//     } catch (error) {
//       console.error("Error fetching teachers:", error);
//     }
//   };

//   const fetchCourses = async () => {
//     try {
//       const token = localStorage.getItem("adminToken");
//       if (!token) return;

//       const response = await fetch("http://localhost:4000/api/admin/get-courses", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch courses");
//       }

//       const data = await response.json();
//       setCourses(data);
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//     }
//   };

//   const handleViewStudent = (student) => {
//     setSelectedStudent(student);
//     setSelectedTeacher("");
//     setSelectedCourse("");
//     setIsModalOpen(true);
//   };

//   const handleSubmit = async () => {
//     if (!selectedTeacher || !selectedCourse) {
//       alert("Please select both a teacher and a course.");
//       return;
//     }
  
//     try {
//       const token = localStorage.getItem("adminToken");
//       if (!token) {
//         alert("Unauthorized! Please log in.");
//         return;
//       }
  
//       // Assign Teacher
//       const teacherResponse = await fetch("http://localhost:4000/api/admin/assign-teacher", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           student_id: selectedStudent.udid, // Ensure this is correct
//           emp_reg_id: selectedTeacher, // Send the teacher's ID
//         }),
//       });
  
//       if (!teacherResponse.ok) {
//         throw new Error("Failed to assign teacher.");
//       }
  
//       // Assign Course
//       const courseResponse = await fetch("http://localhost:4000/api/admin/assign-course", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           student_id: selectedStudent.udid,
//           courseId: selectedCourse,
//         }),
//       });
  
//       if (!courseResponse.ok) {
//         throw new Error("Failed to assign course.");
//       }
  
//       alert(`Successfully assigned teacher and course to ${selectedStudent.student_name}`);
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error("Error assigning teacher/course:", error);
//       alert("An error occurred while assigning. Please try again.");
//     }
//   };
  

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Approved Students</h1>

//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <table className="w-full table-auto">
//           <thead className="bg-indigo-500 text-white">
//             <tr>
//               <th className="px-4 py-3">UDID</th>
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Disability Type</th>
//               <th className="px-4 py-3">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.length > 0 ? (
//               students.map((student) => (
//                 <tr key={student.udid} className="border-b text-center hover:bg-gray-100 transition">
//                   <td className="px-4 py-3">{student.udid}</td>
//                   <td className="px-4 py-3">{student.student_name}</td>
//                   <td className="px-4 py-3">{student.disability_type}</td>
//                   <td className="px-4 py-3">
//                     <button
//                       className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//                       onClick={() => handleViewStudent(student)}
//                     >
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center py-4 text-gray-500">
//                   No students found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {isModalOpen && selectedStudent && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-2xl font-bold mb-4 text-indigo-700">Assign Teacher & Course</h2>
//             <p><strong>UDID:</strong> {selectedStudent.udid}</p>
//             <p><strong>Name:</strong> {selectedStudent.student_name}</p>
//             <p><strong>Disability Type:</strong> {selectedStudent.disability_type}</p>

//             <div className="mt-4">
//               <label className="block text-gray-700">Assign Teacher:</label>
//               <select
//                 className="w-full p-2 border rounded"
//                 value={selectedTeacher}
//                 onChange={(e) => setSelectedTeacher(e.target.value)}
//               >
//                 <option value="">Select Teacher</option>
//                 {teachers.map((teacher) => (
//                   <option key={teacher.id} value={teacher.name}>
//                     {teacher.id} - {teacher.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="mt-4">
//               <label className="block text-gray-700">Assign Course:</label>
//               <select
//                 className="w-full p-2 border rounded"
//                 value={selectedCourse}
//                 onChange={(e) => setSelectedCourse(e.target.value)}
//               >
//                 <option value="">Select Course</option>
//                 {courses.map((course) => (
//                   <option key={course.id} value={course.name}>
//                     {course.id} - {course.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="mt-6">
//               <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssignCourse;
import React, { useState, useEffect } from "react";

const AssignCourse = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchStudents();
    fetchTeachers();
    fetchCourses();
  }, []);

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        console.error("No token found, please login.");
        return;
      }

      const response = await fetch("http://localhost:4000/api/admin/get-approve-student", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const fetchTeachers = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) return;

      const response = await fetch("http://localhost:4000/api/admin/get-approve-employee", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch teachers");
      }

      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) return;

      const response = await fetch("http://localhost:4000/api/admin/get-courses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
    setSelectedTeacher("");
    setSelectedCourse("");
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!selectedTeacher || !selectedCourse) {
      alert("Please select both a teacher and a course.");
      return;
    }
  
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        alert("Unauthorized! Please log in.");
        return;
      }

      console.log("Assigning teacher:", selectedStudent.student_id, selectedTeacher); // Debugging Log
  
      // Assign Teacher
      const teacherResponse = await fetch("http://localhost:4000/api/admin/assign-teacher", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          student_id: selectedStudent.student_id,  // FIXED: Use `student_id`
          emp_reg_id: selectedTeacher,
        }),
      });
  
      if (!teacherResponse.ok) {
        throw new Error("Failed to assign teacher.");
      }
  
      // Assign Course
      const courseResponse = await fetch("http://localhost:4000/api/admin/assign-course", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          student_id: selectedStudent.student_id,  // FIXED: Use `student_id`
          courseId: selectedCourse,
        }),
      });
  
      if (!courseResponse.ok) {
        throw new Error("Failed to assign course.");
      }
  
      alert(`Successfully assigned teacher and course to ${selectedStudent.student_name}`);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error assigning teacher/course:", error);
      alert("An error occurred while assigning. Please try again.");
    }
  };


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Approved Students</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="px-4 py-3">UDID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Disability Type</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.udid} className="border-b text-center hover:bg-gray-100 transition">
                  <td className="px-4 py-3">{student.udid}</td>
                  <td className="px-4 py-3">{student.student_name}</td>
                  <td className="px-4 py-3">{student.disability_type}</td>
                  <td className="px-4 py-3">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                      onClick={() => handleViewStudent(student)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Assign Teacher & Course</h2>
            <p><strong>UDID:</strong> {selectedStudent.udid}</p>
            <p><strong>Name:</strong> {selectedStudent.student_name}</p>
            <p><strong>Disability Type:</strong> {selectedStudent.disability_type}</p>

            <div className="mt-4">
              <label className="block text-gray-700">Assign Teacher:</label>
              <select
                className="w-full p-2 border rounded"
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
              >
                <option value="">Select Teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher.emp_reg_id} value={teacher.emp_reg_id}>
                    {teacher.emp_reg_id} - {teacher.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Assign Course:</label>
              <select
                className="w-full p-2 border rounded"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">Select Course</option>
                {courses.map((course) => (
                  <option key={course.courseId} value={course.courseId}>
                    {course.courseId} - {course.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignCourse;
