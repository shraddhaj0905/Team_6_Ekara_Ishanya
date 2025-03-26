import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "View Registered Students", path: "/admin/students" },
    { title: "View Registered Employees", path: "/admin/employees" },
    { title: "View Enrolled Students", path: "/admin/enrolled-students" },
    { title: "View Enrolled Employees", path: "/admin/enrolled-employees" },
    { title: "Assign Course", path: "/admin/assign-course" },
    { title: "Add Admin", path: "/admin/add-admin" },
    { title: "Send Interview Email", path: "/admin/send-interview-email" },
    { title: "Send Appointment Email", path: "/admin/send-appointment-email" },
    { title: "Create Course", path: "/admin/create-course" },
    {title:"Announcements",path:"/admin/announcement"},
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold mb-4 text-indigo-700">Admin Dashboard</h1>
      <p className="text-lg font-semibold text-gray-700 text-center mb-8">
        Manage students, employees, and courses from here.
      </p>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              index === cards.length - 2 && cards.length % 3 === 2 ? "lg:col-start-2" : ""
            }`}
          >
            <Card 
              title={card.title}
              description={`Click to manage ${card.title.toLowerCase()}`}
              onClick={() => navigate(card.path)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
