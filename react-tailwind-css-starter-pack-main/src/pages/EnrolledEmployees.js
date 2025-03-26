import React, { useState, useEffect } from "react";

const EnrolledEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch approved employees
  const fetchEmployees = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      console.error("No token found, please login.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/admin/get-approve-employee", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }

      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Open modal with employee details
  const handleViewEmployee = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Approved Employees</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Experience</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.email} className="border-b text-center hover:bg-gray-100 transition">
                  <td className="px-4 py-3">{employee.email}</td>
                  <td className="px-4 py-3">{employee.name}</td>
                  <td className="px-4 py-3">{employee.experience} years</td>
                  <td className="px-4 py-3">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                      onClick={() => handleViewEmployee(employee)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No approved employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Employee Details */}
      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Employee Details</h2>
            <p><strong>Email:</strong> {selectedEmployee.email}</p>
            <p><strong>Name:</strong> {selectedEmployee.name}</p>
            <p><strong>Contact:</strong> {selectedEmployee.contact_number}</p>
            <p><strong>Address:</strong> {selectedEmployee.address}</p>
            <p><strong>Qualifications:</strong> {selectedEmployee.qualifications}</p>
            <p><strong>Experience:</strong> {selectedEmployee.experience} years</p>
            <p><strong>Skills:</strong> {selectedEmployee.skills?.join(", ")}</p>
            

            {/* Close Button */}
            <div className="mt-4 flex justify-end">
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

export default EnrolledEmployees;
