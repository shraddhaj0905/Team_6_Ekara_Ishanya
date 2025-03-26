import React, { useEffect, useState } from "react";

const SendAppointmentEmail = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({ date: "", time: "" });
  const [loading, setLoading] = useState(false);

  // Fetch registered students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) {
          alert("Unauthorized! Please log in.");
          return;
        }

        const response = await fetch("http://localhost:4000/api/admin/get-register-student", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch students");
        }

        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
        alert("Error fetching students. Please try again.");
      }
    };

    fetchStudents();
  }, []);

  // Handle input change for date/time
  const handleChange = (e) => {
    setAppointmentDetails({ ...appointmentDetails, [e.target.name]: e.target.value });
  };

  // Send appointment email
  const sendAppointmentEmail = async () => {
    if (!selectedStudent) return alert("No student selected!");
    if (!appointmentDetails.date || !appointmentDetails.time) return alert("Please select date and time");

    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("http://localhost:4000/api/admin/send-appointment-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: selectedStudent.parent_email, // Ensuring backend expects this
          udid: selectedStudent.udid, // Sending UDID instead of name
          date: appointmentDetails.date,
          time: appointmentDetails.time,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      alert(`Appointment email sent for UDID: ${selectedStudent.udid} ✅`);
      setSelectedStudent(null);
      setAppointmentDetails({ date: "", time: "" }); // Reset fields
    } catch (error) {
      console.error("Error sending appointment email:", error);
      alert("Error sending email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Registered Students</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">UDID</th>
              <th className="py-2 px-4 border">Parent Email</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="border">
                <td className="py-2 px-4 border">{student.udid}</td> {/* Changed to UDID */}
                <td className="py-2 px-4 border">{student.parent_email}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => setSelectedStudent(student)}
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Schedule Appointment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for selecting date/time */}
      {selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">
              Schedule Appointment for UDID: {selectedStudent.udid}
            </h3>

            <label className="block mb-2">Appointment Date:</label>
            <input
              type="date"
              name="date"
              value={appointmentDetails.date}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />

            <label className="block mb-2">Appointment Time:</label>
            <input
              type="time"
              name="time"
              value={appointmentDetails.time}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={sendAppointmentEmail}
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

export default SendAppointmentEmail;
