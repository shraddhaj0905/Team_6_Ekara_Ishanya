import React, { useState } from "react";

const CreateCourse = () => {
    const [formData, setFormData] = useState({
        courseId: "",
        name: "",
        ageGroup: "",
        skillAreas: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        const token = localStorage.getItem("adminToken");  

        if (!token) {
            setError("❌ No authentication token found. Please log in.");
            return;
        }

        const formDataToSend = {
            ...formData,
            skillAreas: formData.skillAreas.split(",").map(area => area.trim()),
        };

        try {
            const response = await fetch("http://localhost:4000/api/admin/create-course", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,  
                },
                body: JSON.stringify(formDataToSend),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("✅ Course created successfully!");
                setFormData({ courseId: "", name: "", ageGroup: "", skillAreas: "" });
            } else {
                setError(data.message || "⚠️ Error creating course.");
            }
        } catch (error) {
            setError("❌ Server error. Please try again later.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">Create a New Course</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}
                {message && <p className="text-green-500 text-center">{message}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-semibold">Course ID</label>
                        <input
                            type="text"
                            name="courseId"
                            value={formData.courseId}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold">Age Group</label>
                        <input
                            type="number"
                            name="ageGroup"
                            value={formData.ageGroup}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold">Skill Areas (comma-separated)</label>
                        <input
                            type="text"
                            name="skillAreas"
                            value={formData.skillAreas}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                        Create Course
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateCourse;
