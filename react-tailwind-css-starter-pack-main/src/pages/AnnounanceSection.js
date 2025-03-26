// const announcementsData = [
//     {
//       id: 1,
//       title: "Parent-Teacher Meeting",
//       date: "March 30, 2025",
//       category: "Events",
//       priority: "bg-blue-300",
//       message: "Join us for a Parent-Teacher meeting to discuss your child's progress.",
//     },
//     {
//       id: 2,
//       title: "School Holiday",
//       date: "April 10, 2025",
//       category: "Holidays",
//       priority: "bg-green-300",
//       message: "School will remain closed for Spring Break on April 10th.",
//     },
//     {
//       id: 3,
//       title: "Emergency Closure",
//       date: "April 1, 2025",
//       category: "Urgent",
//       priority: "bg-red-400 text-white",
//       message: "Due to weather conditions, school will remain closed on April 1st.",
//     },
//   ];
  
//   export default function Announcements() {
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [search, setSearch] = useState("");
//     const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  
//     const filteredAnnouncements = announcementsData.filter((announcement) =>
//       (selectedCategory === "All" || announcement.category === selectedCategory) &&
//       announcement.title.toLowerCase().includes(search.toLowerCase())
//     );
  
//     return (
//       <div className="min-h-screen bg-gray-100 p-6">
//         {/* Navbar */}
//         <nav className="bg-purple-800 text-white py-4 px-6 text-center text-2xl font-bold">
//           School Announcements
//         </nav>
  
//         {/* Search & Filters */}
//         <div className="max-w-4xl mx-auto mt-6">
//           <input
//             type="text"
//             placeholder="🔍 Search announcements..."
//             className="p-3 w-full border rounded-lg shadow-sm bg-white text-black"
//             onChange={(e) => setSearch(e.target.value)}
//           />
  
//           <div className="flex gap-4 justify-center mt-4">
//             {["All", "Events", "Holidays", "Urgent"].map((category) => (
//               <button
//                 key={category}
//                 className={`px-4 py-2 rounded-lg font-bold transition ${
//                   selectedCategory === category ? "bg-purple-600 text-white" : "bg-gray-300"
//                 }`}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
  
//         {/* Announcement Cards */}
//         <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filteredAnnouncements.length > 0 ? (
//             filteredAnnouncements.map((announcement) => (
//               <div
//                 key={announcement.id}
//                 className={p-6 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 hover:shadow-xl transition ${announcement.priority}}
//                 onClick={() => setSelectedAnnouncement(announcement)}
//               >
//                 <h2 className="text-2xl font-bold">{announcement.title}</h2>
//                 <p className="text-black">{announcement.date}</p>
//                 <p className="mt-2">{announcement.message.substring(0, 50)}...</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No announcements found.</p>
//           )}
//         </div>
  
//         {/* Modal for Full Announcement */}
//         {selectedAnnouncement && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
//               <h2 className="text-2xl font-bold mb-2">{selectedAnnouncement.title}</h2>
//               <p className="text-gray-500">{selectedAnnouncement.date}</p>
//               <p className="mt-4">{selectedAnnouncement.message}</p>
//               <button
//                 className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
//                 onClick={() => setSelectedAnnouncement(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }


import { useState } from "react";

const announcementsData = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    date: "March 30, 2025",
    category: "Events",
    priority: "bg-blue-300",
    message: "Join us for a Parent-Teacher meeting to discuss your child's progress.",
  },
  {
    id: 2,
    title: "School Holiday",
    date: "April 10, 2025",
    category: "Holidays",
    priority: "bg-green-300",
    message: "School will remain closed for Spring Break on April 10th.",
  },
//   {
//     id: 3,
//     title: "Emergency Closure",
//     date: "April 1, 2025",
//     category: "Urgent",
//     priority: "bg-red-400 text-white",
//     message: "Due to weather conditions, school will remain closed on April 1st.",
//   },
];

export default function Announcements() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const filteredAnnouncements = announcementsData.filter(
    (announcement) =>
      (selectedCategory === "All" || announcement.category === selectedCategory) &&
      announcement.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="bg-purple-800 text-white py-4 px-6 text-center text-2xl font-bold">
        School Announcements
      </nav>

      {/* Search & Filters */}
      <div className="max-w-4xl mx-auto mt-6">
        <input
          type="text"
          placeholder="🔍 Search announcements..."
          className="p-3 w-full border rounded-lg shadow-sm bg-white text-black"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-4 justify-center mt-4">
          {["All", "Events", "Holidays", "Urgent"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg font-bold transition ${
                selectedCategory === category ? "bg-purple-600 text-white" : "bg-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Announcement Cards */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className={`p-6 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 hover:shadow-xl transition ${announcement.priority}`}
              onClick={() => setSelectedAnnouncement(announcement)}
            >
              <h2 className="text-2xl font-bold">{announcement.title}</h2>
              <p className="text-black">{announcement.date}</p>
              <p className="mt-2">{announcement.message.substring(0, 50)}...</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No announcements found.</p>
        )}
      </div>

      {/* Modal for Full Announcement */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-2xl font-bold mb-2">{selectedAnnouncement.title}</h2>
            <p className="text-gray-500">{selectedAnnouncement.date}</p>
            <p className="mt-4">{selectedAnnouncement.message}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setSelectedAnnouncement(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
