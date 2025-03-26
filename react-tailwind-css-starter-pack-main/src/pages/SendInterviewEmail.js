import React, { useEffect, useState } from "react";

const RegisteredEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [interviewDetails, setInterviewDetails] = useState({
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch registered employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) {
          alert("Unauthorized! Please log in.");
          return;
        }

        const response = await fetch("http://localhost:4000/api/admin/get-register-employee", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch employees");
        }

        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  // Handle input change for interview date/time
  const handleChange = (e) => {
    setInterviewDetails({ ...interviewDetails, [e.target.name]: e.target.value });
  };

  // Handle sending the email
  const sendInterviewEmail = async () => {
    if (!selectedEmployee) return alert("No employee selected!");

    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost:4000/api/admin/send-interwiew-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: selectedEmployee.email,
          name: selectedEmployee.name,
          interview_date: interviewDetails.date,
          interview_time: interviewDetails.time,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      alert(`Interview email sent to ${selectedEmployee.name} ✅`);
      setSelectedEmployee(null);
      setInterviewDetails({ date: "", time: "" }); // Reset fields
    } catch (error) {
      console.error("Error sending interview email:", error);
      alert("Error sending email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Registered Employees</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id} className="border">
                <td className="py-2 px-4 border">{employee.name}</td>
                <td className="py-2 px-4 border">{employee.email}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => setSelectedEmployee(employee)}
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Send Interview Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for selecting date/time */}
      {selectedEmployee && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Schedule Interview for {selectedEmployee.name}</h3>

            <label className="block mb-2">Interview Date:</label>
            <input
              type="date"
              name="date"
              value={interviewDetails.date}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />

            <label className="block mb-2">Interview Time:</label>
            <input
              type="time"
              name="time"
              value={interviewDetails.time}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedEmployee(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={sendInterviewEmail}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Email"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisteredEmployees;
