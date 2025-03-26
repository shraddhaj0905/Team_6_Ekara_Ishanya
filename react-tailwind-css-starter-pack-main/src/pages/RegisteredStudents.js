import React, { useState, useEffect } from "react";

const RegisteredStudents = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch students from backend
  const fetchStudents = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      console.error("No token found, please login.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/admin/get-register-student", {
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

  // Fetch students when component mounts
  useEffect(() => {
    fetchStudents();
  }, []);

  // Open modal with student details
  const handleViewStudent = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  // Approve student function
  const handleApproveStudent = async (udid) => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:4000/api/admin/approve-student/${udid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to approve student");
      }

      alert("Student approved successfully!");
      setIsModalOpen(false);
      fetchStudents(); // ✅ Refresh list after approval
    } catch (error) {
      console.error("Error approving student:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Registered Students</h1>

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
                  No registered students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Student Details */}
      {isModalOpen && selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Student Details</h2>
            <p><strong>UDID:</strong> {selectedStudent.udid}</p>
            <p><strong>Name:</strong> {selectedStudent.student_name}</p>
            <p><strong>Parent Email:</strong> {selectedStudent.parent_email}</p>
            <p><strong>Contact Number:</strong> {selectedStudent.contact_number}</p>
            <p><strong>Address:</strong> {selectedStudent.address}</p>
            <p><strong>Date of Birth:</strong> {new Date(selectedStudent.dob).toDateString()}</p>
            <p><strong>Gender:</strong> {selectedStudent.gender}</p>
            <p><strong>Blood Group:</strong> {selectedStudent.blood_group}</p>
            <p><strong>Disability Type:</strong> {selectedStudent.disability_type}</p>
            <p><strong>Disability Description:</strong> {selectedStudent.disability_description || "N/A"}</p>
            <p><strong>Special Requirements:</strong> {selectedStudent.special_requirements || "N/A"}</p>

            {/* Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                onClick={() => handleApproveStudent(selectedStudent.udid)}
              >
                Approve
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisteredStudents;
