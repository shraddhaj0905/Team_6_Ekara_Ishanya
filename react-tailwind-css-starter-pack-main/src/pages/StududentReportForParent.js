// import React from "react";

// const studentReport = {
//   name: "Devonte Smith",
//   month: "March",
//   year: "2025",
//   attendance: {
//     present: 20,
//     absent: 2,
//     percentage: 90,
//   },
//   evaluation: {
//     communication: { rating: 4, comments: "Great speaker" },
//     cognition: { rating: 3, comments: "Needs better problem-solving" },
//     academics: { rating: 5, comments: "Excellent progress" },
//     functional_skills: { rating: 4, comments: "Handles tasks well" },
//   },
//   notes: "Devonte is a fast learner but needs better focus to unlock his full potential.",
// };

// const ReportComponent = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl border border-gray-400">
//         {/* Student Report Title */}
//         <div className="border-b-4 border-blue-800 pb-4 mb-6 text-center">
//           <h2 className="text-4xl font-extrabold text-blue-800">Student Report</h2>
//         </div>
        
//         <p className="text-center text-gray-900 font-bold text-2xl">{studentReport.name}</p>
//         <p className="text-center text-gray-700 text-lg font-semibold">
//           {studentReport.month}, {studentReport.year}
//         </p>

//         {/* Attendance Section */}
//         <div className="my-6 p-6 rounded-lg shadow-md border border-gray-300">
//           <h3 className="text-2xl font-semibold text-blue-900 text-center">Attendance</h3>
//           <table className="w-full mt-4 border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 p-2 text-lg">Present</th>
//                 <th className="border border-gray-300 p-2 text-lg">Absent</th>
//                 <th className="border border-gray-300 p-2 text-lg">Percentage</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="text-center">
//                 <td className="border border-gray-300 p-2 text-lg text-green-600 font-bold">{studentReport.attendance.present}</td>
//                 <td className="border border-gray-300 p-2 text-lg text-red-600 font-bold">{studentReport.attendance.absent}</td>
//                 <td className="border border-gray-300 p-2 text-lg font-bold">{studentReport.attendance.percentage}%</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Evaluation Section */}
//         <div className="my-6 p-6 rounded-lg shadow-md border border-gray-300">
//           <h3 className="text-3xl font-semibold text-gray-800 text-center">Evaluation</h3>
//           <div className="grid grid-cols-2 gap-4 mt-4">
//             {Object.entries(studentReport.evaluation).map(([category, data]) => (
//               <div key={category} className="p-4 bg-gray-100 rounded-lg shadow-md">
//                 <h4 className="text-xl font-bold capitalize text-gray-900 mb-1">{category.replace("_", " ")}</h4>
//                 <p className="text-lg text-gray-800">⭐ {data.rating} / 5</p>
//                 <p className="text-sm text-gray-700 italic">"{data.comments}"</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Notes Section */}
//         <div className="p-6 bg-green-100 border-l-4 border-green-600 rounded-md">
//           <h3 className="text-2xl font-semibold text-green-900">Notes</h3>
//           <p className="text-lg text-gray-800">{studentReport.notes}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportComponent;
import React from "react";

const studentReport = {
  name: "Reshma Khande",
  month: "March",
  year: "2025",
  attendance: {
    present: 20,
    absent: 2,
    percentage: 90,
  },
  evaluation: {
    communication: {
      rating: 4,
      comments: [
        "Great speaker, actively participates.",
        "Shares thoughts clearly in discussions.",
        "Engages with peers and teachers well.",
        "Expresses ideas with confidence.",
        "Can improve clarity in complex topics.",
      ],
    },
    cognition: {
      rating: 3,
      comments: [
        "Needs better problem-solving strategies.",
        "Struggles with complex logical tasks.",
        "Shows improvement with proper guidance.",
        "Demonstrates curiosity for learning.",
        "Needs to work on analytical thinking.",
      ],
    },
    academics: {
      rating: 5,
      comments: [
        "Excellent progress in all subjects.",
        "Scores consistently high in assessments.",
        "Completes assignments on time.",
        "Pays attention to class discussions.",
        "Can explore advanced concepts further.",
      ],
    },
    functional_skills: {
      rating: 4,
      comments: [
        "Manages tasks independently.",
        "Works well in group projects.",
        "Follows instructions accurately.",
        "Shows responsibility in work.",
        "Needs to improve time management.",
      ],
    },
  },
  notes:
    "Reshma is a fast learner but needs better focus to unlock his full potential.",
};

const ReportComponent = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl border border-gray-400">
        {/* Student Report Title */}
        <div className="border-b-4 border-blue-800 pb-4 mb-6 text-center bg-blue-100 p-4 rounded-lg">
          <h2 className="text-4xl font-extrabold text-blue-800">Student Report</h2>
        </div>

        <p className="text-center text-gray-900 font-bold text-2xl">{studentReport.name}</p>
        <p className="text-center text-gray-700 text-lg font-semibold">
          {studentReport.month}, {studentReport.year}
        </p>

        {/* Attendance Section */}
        <div className="my-6 p-6 rounded-lg shadow-md border border-gray-300 bg-gray-100">
          <h3 className="text-2xl font-semibold text-blue-900 text-center">Attendance</h3>
          <table className="w-full mt-4 border-collapse border border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-300">
                <th className="border border-gray-300 p-2 text-lg">Present</th>
                <th className="border border-gray-300 p-2 text-lg">Absent</th>
                <th className="border border-gray-300 p-2 text-lg">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-gray-300 p-2 text-lg text-green-600 font-bold">
                  {studentReport.attendance.present}
                </td>
                <td className="border border-gray-300 p-2 text-lg text-red-600 font-bold">
                  {studentReport.attendance.absent}
                </td>
                <td className="border border-gray-300 p-2 text-lg font-bold">
                  {studentReport.attendance.percentage}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Evaluation Section */}
        <div className="my-6 p-6 rounded-lg shadow-md border border-gray-300">
          <h3 className="text-3xl font-semibold text-gray-800 text-center">Evaluation</h3>

          {/* Communication & Cognition (Side by Side) */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {["communication", "cognition", "academics", "functional_skills"].map((category) => (
              <div key={category} className="p-6 rounded-lg shadow-md bg-white text-center">
                <h4 className="text-xl font-bold capitalize text-gray-900 mb-2">
                  {category.replace("_", " ")}
                </h4>
                <p className="text-lg text-gray-800 font-semibold">⭐ {studentReport.evaluation[category].rating} / 5</p>
                <ul className="text-md text-gray-900 font-medium list-disc pl-5 mt-3 text-left">
                  {studentReport.evaluation[category].comments.map((comment, index) => (
                    <li key={index} className="mb-1">{comment}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Notes Section */}
        <div className="p-6 bg-green-100 border-l-4 border-green-600 rounded-md">
          <h3 className="text-2xl font-semibold text-green-900">Notes</h3>
          <p className="text-lg text-gray-800">{studentReport.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;