// import { useNavigate } from "react-router-dom";
// import image from "../assests/parent.jpg"; // Ensure correct path

// export default function ParentDashboard() {
//   const navigate = useNavigate();

//   const sections = [
//     {
//       id: 1,
//       title: "Student Report",
//       description: "View your child's academic performance and progress.",
//       bgColor: "bg-blue-300",
//     },
//     {
//       id: 2,
//       title: "Attendance",
//       description: "Check your child's daily attendance records.",
//       bgColor: "bg-green-300",
//     },
//     {
//       id: 3,
//       title: "Announcements",
//       description: "Stay updated with important school announcements.",
//       bgColor: "bg-yellow-300",
//     },
//     {
//       id: 4,
//       title: "Queries",
//       description: "Raise a query or contact your child's teacher.",
//       bgColor: "bg-red-300",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Navbar */}
//       <nav className="bg-purple-800 text-white py-4 px-6 text-center text-2xl font-bold">
//         Parent Dashboard
//       </nav>

//       {/* Motivational Section */}
//       <div className="text-center my-6">
//         <img
//           src={image} // ✅ Corrected image source
//           alt="Inspiration"
//           className="mx-auto rounded-lg shadow-lg w-full max-w-4xl"
//         />
//         <h2 className="text-3xl font-bold text-black mt-4">
//           "Every child is gifted, they just unwrap their packages at different times."
//         </h2>
//         <p className="text-lg text-gray-600 mt-2">
//           Your child's journey is unique. With your love and support, they will shine in their own way.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto mt-8">
//         {/* Dashboard Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {sections.map((section) => (
//             <div
//               key={section.id}
//               className={`p-8 rounded-lg shadow-lg text-center cursor-pointer transition transform hover:scale-105 hover:shadow-xl ${section.bgColor}`}
//               onClick={() => navigate(`/${section.title.toLowerCase().replace(/\s+/g, "-")}`)}
//             >
//               <h2 className="text-2xl font-bold text-black mb-2">{section.title}</h2>
//               <p className="text-black">{section.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useNavigate } from "react-router-dom";

// export default function ParentDashboard() {
//   const navigate = useNavigate(); // Initialize navigation function

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Navbar */}
//       <nav className="bg-purple-800 text-white py-4 px-6 text-center text-2xl font-bold">
//         Parent Dashboard
//       </nav>

//       {/* Sections */}
//       <div className="max-w-4xl mx-auto mt-6 grid grid-cols-2 gap-6">
//         {/* Announcements Section (Clickable) */}
//         <div
//           className="p-6 rounded-lg shadow-lg bg-blue-300 text-center cursor-pointer hover:scale-105 transition"
//           onClick={() => navigate("/announcementpage")} // Navigate to Announcements page
//         >
//           <h2 className="text-2xl font-bold">📢 Announcements</h2>
//           <p className="mt-2">Check school updates and notices.</p>
//         </div>

//         {/* Other Dashboard Sections */}
//         <div className="p-6 rounded-lg shadow-lg bg-green-300 text-center">
//           <h2 className="text-2xl font-bold">📚 Assignments</h2>
//           <p className="mt-2">View your child's assignments.</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useNavigate } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card"; // Import ShadCN UI Card Component
// import image from "../assests/parent.jpg"; // Ensure correct path

// export default function ParentDashboard() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Navbar */}
//       <nav className="bg-purple-800 text-white py-4 px-6 text-center text-2xl font-bold">
//         Parent Dashboard
//       </nav>

//       {/* Motivational Section */}
//       <div className="text-center my-6">
//         <img
//           src={image}
//           alt="Inspiration"
//           className="mx-auto rounded-lg shadow-lg w-full max-w-4xl"
//         />
//         <h2 className="text-3xl font-bold text-black mt-4">
//           "Every child is gifted, they just unwrap their packages at different times."
//         </h2>
//         <p className="text-lg text-gray-600 mt-2">
//           Your child's journey is unique. With your love and support, they will shine in their own way.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Student Report Card */}
//         <Card
//           className="cursor-pointer transition transform hover:scale-105 hover:shadow-xl bg-blue-300"
//           onClick={() => navigate("/student-report")}
//         >
//           <CardContent className="p-8 text-center">
//             <h2 className="text-2xl font-bold text-black mb-2">Student Report</h2>
//             <p className="text-black">View your child's academic performance and progress.</p>
//           </CardContent>
//         </Card>

//         {/* Attendance Card */}
//         <Card
//           className="cursor-pointer transition transform hover:scale-105 hover:shadow-xl bg-green-300"
//           onClick={() => navigate("/attendance")}
//         >
//           <CardContent className="p-8 text-center">
//             <h2 className="text-2xl font-bold text-black mb-2">Attendance</h2>
//             <p className="text-black">Check your child's daily attendance records.</p>
//           </CardContent>
//         </Card>

//         {/* Announcements Card */}
//         <Card
//           className="cursor-pointer transition transform hover:scale-105 hover:shadow-xl bg-yellow-300"
//           onClick={() => navigate("/announcementpage")} // ✅ Correct route
//         >
//           <CardContent className="p-8 text-center">
//             <h2 className="text-2xl font-bold text-black mb-2">Announcements</h2>
//             <p className="text-black">Stay updated with important school announcements.</p>
//           </CardContent>
//         </Card>

//         {/* Queries Card */}
//         <Card
//           className="cursor-pointer transition transform hover:scale-105 hover:shadow-xl bg-red-300"
//           onClick={() => navigate("/queries")}
//         >
//           <CardContent className="p-8 text-center">
//             <h2 className="text-2xl font-bold text-black mb-2">Queries</h2>
//             <p className="text-black">Raise a query or contact your child's teacher.</p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }



import { useNavigate } from "react-router-dom";
import image from "../assests/parent.jpg"; // Ensure correct path

export default function ParentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="bg-purple-800 text-white py-4 px-6 text-center text-2xl font-bold">
        Parent Dashboard
      </nav>

      {/* Motivational Section */}
      <div className="text-center my-6">
        <img
          src={image}
          alt="Inspiration"
          className="mx-auto rounded-lg shadow-lg w-full max-w-4xl"
        />
        <h2 className="text-3xl font-bold text-black mt-4">
          "Every child is gifted, they just unwrap their packages at different times."
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Your child's journey is unique. With your love and support, they will shine in their own way.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Student Report */}
        <div
          className="cursor-pointer transition transform hover:scale-105 hover:shadow-xl bg-blue-300 p-8 rounded-lg shadow-lg text-center"
          onClick={() => navigate("/studentreportforparent")}
        >
          <h2 className="text-2xl font-bold text-black mb-2">Student Report</h2>
          <p className="text-black">View your child's academic performance and progress.</p>
        </div>

        {/* Attendance */}
        {/* <div
          className="cursor-pointer transition transform hover:scale-105 hover:shadow-xl bg-green-300 p-8 rounded-lg shadow-lg text-center"
          onClick={() => navigate("/attendance")}
        >
          <h2 className="text-2xl font-bold text-black mb-2">Attendance</h2>
          <p className="text-black">Check your child's daily attendance records.</p>
        </div> */}

        {/* Announcements */}
        <div
          className="cursor-pointer transition transform hover:scale-105 hover:shadow-xl bg-yellow-300 p-8 rounded-lg shadow-lg text-center"
          onClick={() => navigate("/announancementpage")} // ✅ Fixed route
        >
          <h2 className="text-2xl font-bold text-black mb-2">Announcements</h2>
          <p className="text-black">Stay updated with important school announcements.</p>
        </div>

        {/* Queries */}
        {/* <div
          className="cursor-pointer transition transform hover:scale-105 hover:shadow-xl bg-red-300 p-8 rounded-lg shadow-lg text-center"
          onClick={() => navigate("/queries")}
        >
          <h2 className="text-2xl font-bold text-black mb-2">Queries</h2>
          <p className="text-black">Raise a query or contact your child's teacher.</p>
        </div> */}
      </div>
    </div>
  );
}

