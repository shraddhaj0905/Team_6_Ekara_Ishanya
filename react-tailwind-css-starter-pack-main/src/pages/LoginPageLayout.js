// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import Card from "../components/Cards"; // Adjust based on your folder structure
// import { Mail } from "lucide-react";

// export default function ApplyNow() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="flex flex-col items-center py-8 px-6 bg-white rounded-lg shadow-md w-96">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         <p className="text-gray-600 mb-4">What are you applying for?</p>

//         <div className="flex flex-col gap-6 w-full">
//           <Card
//             className="w-full p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition-all rounded-lg border border-black"
//             onClick={() => navigate("/employeeLogin")}
//           >
//             <Mail size={24} className="text-blue-500 mb-2" />
//             <h3 className="font-semibold">Employee Login</h3>
//             <p className="text-sm text-gray-500">Apply for employment opportunities</p>
//           </Card>

//           <Card
//             className="w-full p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition-all rounded-lg border border-black"
//             onClick={() => navigate("/parentLogin")}
//           >
//             <Mail size={24} className="text-blue-500 mb-2" />
//             <h3 className="font-semibold">Parent Login</h3>
//             <p className="text-sm text-gray-500">Register a child for our programs</p>
//           </Card>

//           <Card
//             className="w-full p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition-all rounded-lg border border-black"
//             onClick={() => navigate("/adminLogin")}
//           >
//             <Mail size={24} className="text-blue-500 mb-2" />
//             <h3 className="font-semibold">Admin Login</h3>
//             <p className="text-sm text-gray-500">Access admin dashboard</p>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Mail } from "lucide-react";

export default function ApplyNow() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center py-8 px-6 bg-white rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <p className="text-gray-600 mb-4">What are you applying for?</p>

        <div className="flex flex-col gap-6 w-full">
          {/* Employee Login */}
          <div
            className="w-full p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition-all rounded-lg border border-black"
            onClick={() => navigate("/employeeLogin")}
          >
            <Mail size={24} className="text-blue-500 mb-2" />
            <h3 className="font-semibold">Employee Login</h3>
            <p className="text-sm text-gray-500">Apply for employment opportunities</p>
          </div>

          {/* Parent Login */}
          <div
            className="w-full p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition-all rounded-lg border border-black"
            onClick={() => navigate("/parentLogin")}
          >
            <Mail size={24} className="text-blue-500 mb-2" />
            <h3 className="font-semibold">Parent Login</h3>
            <p className="text-sm text-gray-500">Register a child for our programs</p>
          </div>

          {/* Admin Login */}
          <div
            className="w-full p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition-all rounded-lg border border-black"
            onClick={() => navigate("/adminLogin")}
          >
            <Mail size={24} className="text-blue-500 mb-2" />
            <h3 className="font-semibold">Admin Login</h3>
            <p className="text-sm text-gray-500">Access admin dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
