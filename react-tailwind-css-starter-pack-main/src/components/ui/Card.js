// import React from "react";

// const Card = ({ title, description, onClick }) => {
//   return (
//     <div
//       className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer transform hover:scale-105"
//       onClick={onClick}
//     >
//       <h2 className="text-xl font-bold">{title}</h2>
//       <p className="text-sm opacity-90">{description}</p>
//     </div>
//   );
// };

// export default Card;


import React from "react";

const Card = ({ title, description, onClick }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs h-44 flex flex-col justify-center items-center 
                 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl 
                 cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      {/* Soft Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-2xl"></div>

      {/* Card Content */}
      <h2 className="text-xl font-semibold text-indigo-700 relative z-10">{title}</h2>
      <p className="text-sm text-gray-600 text-center relative z-10">{description}</p>
    </div>
  );
};

export default Card;

