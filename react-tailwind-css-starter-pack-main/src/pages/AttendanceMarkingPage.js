// import React, { useState } from "react";
// import { 
//   Card, 
//   Button, 
//   Table, 
//   TableHeader, 
//   TableBody, 
//   TableRow, 
//   TableHead, 
//   TableCell, 
//   Input 
// } from "./UIcomponents";

// const students = [
//   { id: 101, name: "Alice Johnson" },
//   { id: 102, name: "Bob Smith" },
//   { id: 103, name: "Charlie Davis" },
// ];

// export default function AttendancePage() {
//   const [attendance, setAttendance] = useState(
//     students.reduce((acc, student) => ({ ...acc, [student.id]: { id: student.id, name: student.name, present: false } }), {})
//   );
//   const [date, setDate] = useState("");

//   // Function to update attendance
//   const handleAttendanceChange = (id) => {
//     setAttendance((prev) => ({
//       ...prev,
//       [id]: { ...prev[id], present: !prev[id].present }
//     }));
//   };

//   // Function to mark all students present/absent
//   const markAll = (status) => {
//     setAttendance(
//       students.reduce((acc, student) => ({ 
//         ...acc, 
//         [student.id]: { id: student.id, name: student.name, present: status }
//       }), {})
//     );
//   };

//   // Function to send attendance to database
//   const handleSubmit = async () => {
//     if (!date) {
//       alert("Please select a date before submitting.");
//       return;
//     }

//     const attendanceData = {
//       date,
//       records: Object.values(attendance) // Convert object to array
//     };

//     try {
//       await sendToDatabase(attendanceData);
//       alert("Attendance updated successfully for " + date);
//     } catch (error) {
//       console.error("Error updating attendance:", error);
//       alert("Failed to update attendance.");
//     }
//   };

//   // Replace this with actual API/database call
//   const sendToDatabase = async (data) => {
//     // Example: Replace with your database update logic
//     console.log("Sending to database:", data);
//     // Make API call or database update here
//   };

//   return (
//     <Card className="p-6 w-full max-w-2xl mx-auto mt-10">
//       <h2 className="text-xl font-semibold mb-4">Daily Student Attendance</h2>

//       {/* Date Input for Selecting the Day */}
//       <div className="mb-4">
//         <label className="block text-gray-600">Select Date:</label>
//         <Input type="date" onChange={(e) => setDate(e.target.value)} />
//       </div>

//       {/* Attendance Table */}
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>ID</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Present</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {students.map((student) => (
//             <TableRow key={student.id}>
//               <TableCell>{student.id}</TableCell>
//               <TableCell>{student.name}</TableCell>
//               <TableCell>
//                 <input
//                   type="checkbox"
//                   checked={attendance[student.id].present}
//                   onChange={() => handleAttendanceChange(student.id)}
//                 />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       {/* Buttons for Actions */}
//       <div className="flex gap-4 mt-4">
//         <Button onClick={() => markAll(true)}>Mark All Present</Button>
//         <Button onClick={() => markAll(false)}>Mark All Absent</Button>
//         <Button onClick={handleSubmit}>Submit</Button>
//       </div>
//     </Card>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { 
//   Card, 
//   Button, 
//   Table, 
//   TableHeader, 
//   TableBody, 
//   TableRow, 
//   TableHead, 
//   TableCell, 
//   Input 
// } from "./UIcomponents";
// import { useNavigate } from "react-router-dom";

// export default function AttendancePage() {
//   const [students, setStudents] = useState([]);
//   const [attendance, setAttendance] = useState({});
//   const [date, setDate] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAssignedStudents = async () => {
//       try {
//         const token = localStorage.getItem("employeeToken");
//         if (!token) {
//           setError("No authentication token found. Please login.");
//           setLoading(false);
//           return;
//         }

//         const decodedToken = JSON.parse(atob(token.split(".")[1]));
//         const empID = decodedToken.id;

//         const response = await fetch(
//           `http://localhost:4000/api/employees/assigned-students/${empID}`,
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch students");
//         }

//         const data = await response.json();
//         setStudents(data.students || []);

//         // Initialize attendance state with correct student_id and student_name
//         const initialAttendance = data.students.reduce(
//           (acc, student) => ({
//             ...acc,
//             [student.student_id]: { 
//               id: student.student_id, 
//               name: student.student_name, 
//               present: false 
//             },
//           }),
//           {}
//         );
//         setAttendance(initialAttendance);
//       } catch (error) {
//         console.error("Error fetching students:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAssignedStudents();
//   }, []);

//   const handleAttendanceChange = (id) => {
//     setAttendance((prev) => ({
//       ...prev,
//       [id]: { ...prev[id], present: !prev[id].present },
//     }));
//   };

//   const markAll = (status) => {
//     setAttendance(
//       students.reduce(
//         (acc, student) => ({
//           ...acc,
//           [student.student_id]: { 
//             id: student.student_id, 
//             name: student.student_name, 
//             present: status 
//           },
//         }),
//         {}
//       )
//     );
//   };

//   const handleSubmit = async () => {
//     if (!date) {
//       alert("Please select a date before submitting.");
//       return;
//     }

//     const attendanceData = {
//       date,
//       records: Object.values(attendance),
//     };

//     try {
//       await sendToDatabase(attendanceData);
//       alert("Attendance updated successfully for " + date);
//     } catch (error) {
//       console.error("Error updating attendance:", error);
//       alert("Failed to update attendance.");
//     }
//   };

//   const sendToDatabase = async (data) => {
//     console.log("Sending to database:", data);
//     // Implement API call here
//   };

//   return (
//     <Card className="p-6 w-full max-w-2xl mx-auto mt-10">
//       <h2 className="text-xl font-semibold mb-4">Daily Student Attendance</h2>

//       {loading && <p className="text-center text-gray-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       <div className="mb-4">
//         <label className="block text-gray-600">Select Date:</label>
//         <Input type="date" onChange={(e) => setDate(e.target.value)} />
//       </div>

//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>ID</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Present</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {students.map((student) => (
//             <TableRow key={student.student_id}>
//               <TableCell>{student.student_id}</TableCell>
//               <TableCell>{student.student_name}</TableCell>
//               <TableCell>
//                 <input
//                   type="checkbox"
//                   checked={attendance[student.student_id]?.present || false}
//                   onChange={() => handleAttendanceChange(student.student_id)}
//                 />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       <div className="flex gap-4 mt-4">
//         <Button onClick={() => markAll(true)}>Mark All Present</Button>
//         <Button onClick={() => markAll(false)}>Mark All Absent</Button>
//         <Button onClick={handleSubmit}>Submit</Button>
//       </div>
//     </Card>
//   );
// }

import React, { useState, useEffect } from "react";
import { 
  Card, 
  Button, 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell, 
  Input 
} from "./UIcomponents";
import { useNavigate } from "react-router-dom";

export default function AttendancePage() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssignedStudents = async () => {
      try {
        const token = localStorage.getItem("employeeToken");
        if (!token) {
          setError("No authentication token found. Please login.");
          setLoading(false);
          return;
        }

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
          throw new Error("Failed to fetch students");
        }

        const data = await response.json();
        setStudents(data.students || []);

        // Initialize attendance state
        const initialAttendance = data.students.reduce(
          (acc, student) => ({
            ...acc,
            [student.student_id]: { 
              id: student.student_id, 
              name: student.student_name, 
              present: false 
            },
          }),
          {}
        );
        setAttendance(initialAttendance);
      } catch (error) {
        console.error("Error fetching students:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignedStudents();
  }, []);

  const handleAttendanceChange = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: { ...prev[id], present: !prev[id].present },
    }));
  };

  const markAll = (status) => {
    setAttendance(
      students.reduce(
        (acc, student) => ({
          ...acc,
          [student.student_id]: { 
            id: student.student_id, 
            name: student.student_name, 
            present: status 
          },
        }),
        {}
      )
    );
  };

  const handleSubmit = async () => {
    if (!date) {
      alert("Please select a date before submitting.");
      return;
    }

    const token = localStorage.getItem("employeeToken");
    if (!token) {
      alert("Authentication token not found. Please login.");
      return;
    }

    const attendanceData = {
      date,
      records: Object.values(attendance).filter(record => record.present !== null),
    };

    try {
      const response = await fetch("http://localhost:4000/api/employees/mark-attendance", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attendanceData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Attendance marked successfully for " + date);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting attendance:", error);
      alert("Failed to submit attendance.");
    }
  };

  return (
    <Card className="p-6 w-full max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Daily Student Attendance</h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="mb-4">
        <label className="block text-gray-600">Select Date:</label>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Present</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.student_id}>
              <TableCell>{student.student_id}</TableCell>
              <TableCell>{student.student_name}</TableCell>
              <TableCell>
                <input
                  type="checkbox"
                  checked={attendance[student.student_id]?.present || false}
                  onChange={() => handleAttendanceChange(student.student_id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex gap-4 mt-4">
        <Button onClick={() => markAll(true)}>Mark All Present</Button>
        <Button onClick={() => markAll(false)}>Mark All Absent</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Card>
  );
}
