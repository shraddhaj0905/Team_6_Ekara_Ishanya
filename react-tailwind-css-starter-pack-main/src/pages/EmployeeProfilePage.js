// import React from "react";

// const teacher = {
//   name: "Mr. John Smith",
//   role: "Special Education, Autism Support",
//   profilePicture: "https://randomuser.me/api/portraits/men/10.jpg",
//   email: "john.smith@example.com",
//   contact: "+123 456 7890",
//   address: "123 Autism Care Street, New York, USA",
//   experience: "10 years",
//   qualifications: "M.Ed. in Special Education, Certified Autism Specialist",
//   certifications: ["Certified Autism Specialist", "Child Psychology Diploma"],
//   subjects: ["Mathematics", "Science", "Behavioral Therapy"],
//   totalStudents: 25, // Number of students assigned
//   summary:
//     "Experienced special education teacher with a decade of expertise in fostering inclusive learning environments and personalized education plans.",
//   workExperience: [
//     {
//       position: "Special Education Teacher",
//       institution: "ABC Inclusive School",
//       duration: "2020 - Present",
//       details: [
//         "Designed individualized lesson plans for students with autism.",
//         "Implemented assistive technologies for better engagement.",
//         "Collaborated with therapists and parents for student progress.",
//       ],
//     },
//     {
//       position: "Assistant Teacher",
//       institution: "XYZ Learning Center",
//       duration: "2015 - 2020",
//       details: [
//         "Provided academic support in mathematics and science.",
//         "Assisted in behavioral therapy sessions for students.",
//       ],
//     },
//   ],
// };

// const TeacherProfile = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
//       <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Header Section */}
//         <div className="bg-blue-600 h-32 relative flex justify-center items-center">
//           <img
//             src={teacher.profilePicture}
//             alt={teacher.name}
//             className="absolute -bottom-10 w-24 h-24 rounded-full border-4 border-white shadow-md"
//           />
//         </div>

//         {/* Profile Info */}
//         <div className="text-center mt-12 p-4">
//           <h2 className="text-2xl font-semibold">{teacher.name}</h2>
//           <p className="text-gray-600">{teacher.role}</p>
//         </div>

//         {/* Contact & Profile Details */}
//         <div className="px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//           <p>
//             <strong>Email:</strong> {teacher.email}
//           </p>
//           <p>
//             <strong>Contact:</strong> {teacher.contact}
//           </p>
//           <p>
//             <strong>Experience:</strong> {teacher.experience}
//           </p>
//           <p>
//             <strong>Qualifications:</strong> {teacher.qualifications}
//           </p>
//           <p>
//             <strong>Address:</strong> {teacher.address}
//           </p>
//           <p>
//             <strong>Total Students Assigned:</strong> {teacher.totalStudents}
//           </p>
//         </div>

//         {/* Certifications */}
//         <div className="px-8 py-4">
//           <h3 className="text-xl font-semibold text-blue-700 border-b pb-1">
//             Certifications
//           </h3>
//           <ul className="list-disc list-inside text-gray-700 mt-2">
//             {teacher.certifications.map((cert, index) => (
//               <li key={index}>{cert}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Subjects Taught */}
//         <div className="px-8 py-4">
//           <h3 className="text-xl font-semibold text-blue-700 border-b pb-1">
//             Subjects Taught
//           </h3>
//           <ul className="list-disc list-inside text-gray-700 mt-2">
//             {teacher.subjects.map((subject, index) => (
//               <li key={index}>{subject}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Summary Section */}
//         <div className="px-8 py-4">
//           <h3 className="text-xl font-semibold text-blue-700 border-b pb-1">
//             Summary
//           </h3>
//           <p className="text-gray-700 mt-2">{teacher.summary}</p>
//         </div>

//         {/* Work Experience */}
//         <div className="px-8 py-4">
//           <h3 className="text-xl font-semibold text-blue-700 border-b pb-1">
//             Work Experience
//           </h3>
//           {teacher.workExperience.map((job, index) => (
//             <div key={index} className="mt-4">
//               <p className="font-semibold text-lg">{job.position}</p>
//               <p className="text-gray-500">{job.institution} | {job.duration}</p>
//               <ul className="list-disc list-inside text-gray-700 mt-2">
//                 {job.details.map((detail, idx) => (
//                   <li key={idx}>{detail}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherProfile;


// import React, { useEffect, useState } from "react";

// const TeacherProfile = () => {
//   const [teacher, setTeacher] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTeacherProfile = async () => {
//       let token = localStorage.getItem("employeeToken");
//       if (!token) {
//         setError("Authentication token not found. Please log in.");
//         setLoading(false);
//         return;
//       }
//       if (!token.startsWith("Bearer ")) {
//         token = `Bearer ${token}`;
//       }

//       try {
//         const response = await fetch("http://localhost:4000/api/employees/profile", {
//           method: "GET",
//           headers: { Authorization: token, "Content-Type": "application/json" },
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || "Failed to load profile");
//         }

//         const data = await response.json();
//         setTeacher(data);
//       } catch (err) {
//         console.error("❌ Error fetching profile:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeacherProfile();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (!teacher) return <p>No profile data available.</p>;

//   const getInitials = (name) => name ? name.charAt(0).toUpperCase() : "T";

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
//       <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="bg-blue-300 h-32 relative flex justify-center items-center">
//           {teacher.profilePicture ? (
//             <img
//               src={teacher.profilePicture}
//               alt={teacher.name}
//               className="absolute -bottom-10 w-24 h-24 rounded-full border-4 border-black shadow-md"
//             />
//           ) : (
//             <div className="absolute -bottom-10 w-24 h-24 rounded-full border-4 border-black shadow-md bg-gray-200 flex justify-center items-center text-7xl font-bold">
//               {getInitials(teacher.name)}
//             </div>
//           )}
//         </div>

//         <div className="text-center mt-12 p-4">
//           <h2 className="text-2xl font-semibold">{teacher.name}</h2>
//           <p className="text-gray-600">{teacher.qualifications}</p>
//         </div>

//         <div className="px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//           <p><strong>Email:</strong> {teacher.email}</p>
//           <p><strong>Contact:</strong> {teacher.contact_number}</p>
//           <p><strong>Experience:</strong> {teacher.experience} years</p>
//           <p><strong>Address:</strong> {teacher.address}</p>
//           <p><strong>Total Students Assigned:</strong> {teacher.assigned_students.length}</p>
//         </div>

//         <div className="px-8 py-4">
//           <h3 className="text-xl font-semibold text-blue-700 border-b pb-1">Subjects Taught</h3>
//           <ul className="list-disc list-inside text-gray-700 mt-2">
//             {teacher.skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="px-8 py-4">
//           <h3 className="text-xl font-semibold text-blue-700 border-b pb-1">Summary</h3>
//           <p className="text-gray-700 mt-2">
//             {teacher.name} has {teacher.experience} years of experience in teaching. Passionate about inclusive education.
//           </p>
//         </div>

//         <div className="px-8 py-4">
//           <h3 className="text-xl font-semibold text-blue-700 border-b pb-1">Work Experience</h3>
//           <p><strong>Special Education Teacher</strong> | ABC Inclusive School | {teacher.join_date?.substring(0, 4)} - Present</p>
//           <p>Designed inclusive learning experiences and collaborated with parents.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherProfile;

import React, { useEffect, useState } from "react";

const TeacherProfile = () => {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherProfile = async () => {
      let token = localStorage.getItem("employeeToken");
      if (!token) {
        setError("Authentication token not found. Please log in.");
        setLoading(false);
        return;
      }

      if (!token.startsWith("Bearer ")) {
        token = `Bearer ${token}`;
      }

      try {
        const response = await fetch("http://localhost:4000/api/employees/profile", {
          method: "GET",
          headers: { Authorization: token, "Content-Type": "application/json" },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to load profile");
        }

        const data = await response.json();
        setTeacher(data);
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!teacher) return <p>No profile data available.</p>;

  const getInitials = (name) => (name ? name.charAt(0).toUpperCase() : "T");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-300 h-32 relative flex justify-center items-center">
          {teacher.profilePicture ? (
            <img
              src={teacher.profilePicture}
              alt={teacher.name}
              className="absolute -bottom-10 w-24 h-24 rounded-full border-4 border-black shadow-md"
            />
          ) : (
            <div className="absolute -bottom-10 w-24 h-24 rounded-full border-4 border-black shadow-md bg-gray-200 flex justify-center items-center text-4xl font-bold">
              {getInitials(teacher.name)}
            </div>
          )}
        </div>

        <div className="text-center mt-12 p-4">
          <h2 className="text-2xl font-semibold">{teacher.name || "N/A"}</h2>
          <p className="text-gray-600">{teacher.qualifications || "N/A"}</p>
        </div>

        <div className="px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <p><strong>Email:</strong> {teacher.email || "N/A"}</p>
          <p><strong>Contact:</strong> {teacher.contact_number || "N/A"}</p>
          <p><strong>Experience:</strong> {teacher.experience || "N/A"} years</p>
          <p><strong>Address:</strong> {teacher.address || "N/A"}</p>
          <p><strong>Total Students Assigned:</strong> {teacher.assigned_students?.length || 0}</p>
        </div>

        <div className="px-8 py-4">
          <h3 className="text-xl font-semibold text-blue-700 border-b pb-1">Subjects Taught</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {teacher.skills?.length > 0 ? (
              teacher.skills.map((skill, index) => <li key={index}>{skill}</li>)
            ) : (
              <p>No subjects assigned</p>
            )}
          </ul>
        </div>

        <div className="px-8 py-4">
          <h3 className="text-xl font-semibold text-blue-700 border-b pb-1">Summary</h3>
          <p className="text-gray-700 mt-2">
            {teacher.name} has {teacher.experience || "N/A"} years of experience in teaching. Passionate about inclusive education.
          </p>
        </div>

        <div className="px-8 py-4">
          <h3 className="text-xl font-semibold text-blue-700 border-b pb-1">Work Experience</h3>
          <p>
            <strong>Special Education Teacher</strong> | ABC Inclusive School |{" "}
            {teacher.join_date?.substring(0, 4) || "N/A"} - Present
          </p>
          <p>Designed inclusive learning experiences and collaborated with parents.</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
