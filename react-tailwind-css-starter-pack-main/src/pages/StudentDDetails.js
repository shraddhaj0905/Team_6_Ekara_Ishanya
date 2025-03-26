// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const studentsData = [
//   {
//       id: 1,
//       name: "John Doe",
//       age: 12,
//       rollNumber: "S1234",
//       photo: "https://randomuser.me/api/portraits/men/1.jpg",
//       teacher: "Mr. Anderson",
//       parent_name: "Sarah Doe",
//       parent_email: "sarah.doe@example.com",
//       contact_number: "+1234567890",
//       address: "123 Maple Street, Springfield",
//       dob: "2013-05-12",
//       blood_group: "O+",
//       gender: "Male",
//       disability_type: "Dyslexia",
//       disability_description: "Difficulty in reading and writing.",
//       progress: "Good improvement in reading."
//   },
//   {
//       id: 2,
//       name: "Jane Smith",
//       age: 11,
//       rollNumber: "S5678",
//       photo: "https://randomuser.me/api/portraits/women/2.jpg",
//       teacher: "Mr. Anderson",
//       parent_name: "Emily Smith",
//       parent_email: "emily.smith@example.com",
//       contact_number: "+9876543210",
//       address: "456 Oak Avenue, Lincoln",
//       dob: "2014-09-22",
//       blood_group: "A+",
//       gender: "Female",
//       disability_type: "Hearing Impairment",
//       disability_description: "Requires sign language for communication.",
//       progress: "Excelling in sign language."
//   },
//   {
//       id: 3,
//       name: "Sam Wilson",
//       age: 10,
//       rollNumber: "S9101",
//       photo: "https://randomuser.me/api/portraits/men/3.jpg",
//       teacher: "Mr. Anderson",
//       parent_name: "Robert Wilson",
//       parent_email: "robert.wilson@example.com",
//       contact_number: "+1357924680",
//       address: "789 Pine Road, Madison",
//       dob: "2015-02-18",
//       blood_group: "B-",
//       gender: "Male",
//       disability_type: "Autism",
//       disability_description: "Challenges with social interaction and communication.",
//       progress: "Great improvement in communication."
//   },
//   {
//       id: 4,
//       name: "Emily Davis",
//       age: 13,
//       rollNumber: "S1122",
//       photo: "https://randomuser.me/api/portraits/women/4.jpg",
//       teacher: "Mr. Anderson",
//       parent_name: "Anna Davis",
//       parent_email: "anna.davis@example.com",
//       contact_number: "+2468013579",
//       address: "234 Birch Lane, Denver",
//       dob: "2012-07-30",
//       blood_group: "AB+",
//       gender: "Female",
//       disability_type: "Visual Impairment",
//       disability_description: "Relies on braille and assistive technology.",
//       progress: "Excellent progress with braille."
//   },
//   {
//       id: 5,
//       name: "Michael Brown",
//       age: 14,
//       rollNumber: "S3344",
//       photo: "https://randomuser.me/api/portraits/men/5.jpg",
//       teacher: "Mr. Anderson",
//       parent_name: "William Brown",
//       parent_email: "william.brown@example.com",
//       contact_number: "+1122334455",
//       address: "567 Cedar Street, Austin",
//       dob: "2011-12-05",
//       blood_group: "O-",
//       gender: "Male",
//       disability_type: "ADHD",
//       disability_description: "Struggles with focus and attention.",
//       progress: "Improving focus and attention."
//   }
// ];


// const StudentDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate(); // For going back

//   const student = studentsData.find((s) => s.id === Number(id));

//   if (!student) {
//     return <p className="text-center text-red-500 font-bold text-xl">Student Not Found</p>;
//   }

//   return (
//     <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center border-black">
//       <div className="bg-purple-900 bg-opacity-10 shadow-xl rounded-lg p-8 max-w-md w-full text-center border border-gray-700">
//         <img src={student.photo} alt={student.name} className="w-32 h-32 mx-auto rounded-full border-4 border-black" />
//         <h1 className="text-3xl font-bold mt-4 text-black">{student.name}</h1>
//         <p className="text-balck-300 mt-2">Age: {student.age}</p>
//         <p className="text-black-300">Roll No: {student.rollNumber}</p>
//         <p className="text-black-300">Course: {}</p>
//         <p className="text-black-300">Assigned Teacher: {student.teacher}</p>

//         <div className="bg-gray bg-opacity-20 p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-black">Special Needs:</h3>
//           <p className="text-gray-200">{student.specialNeeds}</p>
//         </div>

//         <div className="bg-white  p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-[#4A90E2]">Progress Notes:</h3>
//           <p className="text-black-200">{student.progress}</p>
//         </div>

//         <div className="bg-white p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-black-300">Parent Info:</h3>
//           <p className="text-black-300">{student.parent_name} ({student.parent_email})</p>
//           <p className="text-black-300">Contact: {student.contact}</p>
//           <p className="text-black-300">Address: {student.address}</p>
//         </div>

//         <div className="bg-white  p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-black-300">Additional Details:</h3>
//           <p className="text-black-300">DOB: {student.dob}</p>
//           <p className="text-black-300">Blood Group: {student.blood_group}</p>
//           <p className="text-black-300">Gender: {student.gender}</p>
//         </div>

//         <button
//           onClick={() => navigate(-1)}
//           className="mt-6 px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#9B51E0] transition transform hover:scale-105 shadow-lg"
//         >
//           ⬅ Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StudentDetails;


// import { useLocation } from "react-router-dom";
// import StudentAssessment from "../Components/StudentReport";

// const StudentProfile = () => {
//   const location = useLocation();
//   const student = location.state?.student || null;

//   if (!student) {
//     return <p className="text-center text-red-500">No student data found.</p>;
//   }

//   return (
//     <div className="min-h-screen bg-white text-black p-6">
//       <h1 className="text-3xl font-bold text-center text-black">{student.name}'s Profile</h1>

//       {/* Student Info */}
//       <div className="flex flex-col md:flex-row items-center justify-center mt-4">
//         <img src={student.photo} alt={student.name} className="w-32 h-32 rounded-full border-4 border-purple-500" />
//         <div className="ml-6">
//           <p><strong>Age:</strong> {student.age}</p>
//           <p><strong>Roll No:</strong> {student.rollNumber}</p>
//           <p><strong>Gender:</strong> {student.gender}</p>
//           <p><strong>Disability:</strong> {student.disability_type}</p>
//           <p><strong>Description:</strong> {student.disability_description}</p>
//           <p><strong>Progress:</strong> {student.progress}</p>
//         </div>
//       </div>

//       {/* Include Student Report */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold text-center text-black">Student Report</h2>
//         <StudentAssessment student={student} />
//       </div>
//     </div>
//   );
// };

// export default StudentProfile;



// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import StudentReport from "../components/StudentReport";

// // Mock Student Data
// const studentsData = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 12,
//     rollNumber: "S1234",
//     photo: "https://randomuser.me/api/portraits/men/1.jpg",
//     teacher: "Mr. Anderson",
//     parent_name: "Sarah Doe",
//     parent_email: "sarah.doe@example.com",
//     contact_number: "+1234567890",
//     address: "123 Maple Street, Springfield",
//     dob: "2013-05-12",
//     blood_group: "O+",
//     gender: "Male",
//     disability_type: "Dyslexia",
//     disability_description: "Difficulty in reading and writing.",
//     progress: "Good improvement in reading."
//   },
//   // Add more student objects here...
//   {
//     id: 2,
//     name: "Jane Smith",
//     age: 11,
//     rollNumber: "S5678",
//     photo: "https://randomuser.me/api/portraits/women/2.jpg",
//     teacher: "Mr. Anderson",
//     parent_name: "Emily Smith",
//     parent_email: "emily.smith@example.com",
//     contact_number: "+9876543210",
//     address: "456 Oak Avenue, Lincoln",
//     dob: "2014-09-22",
//     blood_group: "A+",
//     gender: "Female",
//     disability_type: "Hearing Impairment",
//     disability_description: "Requires sign language for communication.",
//     progress: "Excelling in sign language."
// },
// {
//     id: 3,
//     name: "Sam Wilson",
//     age: 10,
//     rollNumber: "S9101",
//     photo: "https://randomuser.me/api/portraits/men/3.jpg",
//     teacher: "Mr. Anderson",
//     parent_name: "Robert Wilson",
//     parent_email: "robert.wilson@example.com",
//     contact_number: "+1357924680",
//     address: "789 Pine Road, Madison",
//     dob: "2015-02-18",
//     blood_group: "B-",
//     gender: "Male",
//     disability_type: "Autism",
//     disability_description: "Challenges with social interaction and communication.",
//     progress: "Great improvement in communication."
// },
// {
//     id: 4,
//     name: "Emily Davis",
//     age: 13,
//     rollNumber: "S1122",
//     photo: "https://randomuser.me/api/portraits/women/4.jpg",
//     teacher: "Mr. Anderson",
//     parent_name: "Anna Davis",
//     parent_email: "anna.davis@example.com",
//     contact_number: "+2468013579",
//     address: "234 Birch Lane, Denver",
//     dob: "2012-07-30",
//     blood_group: "AB+",
//     gender: "Female",
//     disability_type: "Visual Impairment",
//     disability_description: "Relies on braille and assistive technology.",
//     progress: "Excellent progress with braille."
// },
// {
//     id: 5,
//     name: "Michael Brown",
//     age: 14,
//     rollNumber: "S3344",
//     photo: "https://randomuser.me/api/portraits/men/5.jpg",
//     teacher: "Mr. Anderson",
//     parent_name: "William Brown",
//     parent_email: "william.brown@example.com",
//     contact_number: "+1122334455",
//     address: "567 Cedar Street, Austin",
//     dob: "2011-12-05",
//     blood_group: "O-",
//     gender: "Male",
//     disability_type: "ADHD",
//     disability_description: "Struggles with focus and attention.",
//     progress: "Improving focus and attention."
// }
// ];

// const StudentProfile = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const student = studentsData.find((s) => s.id === Number(id));
//   if (!student) {
//     return <p className="text-center text-red-500 font-bold text-xl">Student Not Found</p>;
//   }

//   return (
//     <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center border-black">
//       <div className="bg-purple-900 bg-opacity-10 shadow-xl rounded-lg p-8 max-w-2xl w-full text-center border border-gray-700">
//         <img
//           src={student.photo}
//           alt={student.name}
//           className="w-32 h-32 mx-auto rounded-full border-4 border-black"
//         />
//         <h1 className="text-3xl font-bold mt-4 text-black">{student.name}</h1>
//         <p className="text-black-300">Age: {student.age}</p>
//         <p className="text-black-300">Roll No: {student.rollNumber}</p>
//         <p className="text-black-300">Gender: {student.gender}</p>
//         <p className="text-black-300">Assigned Teacher: {student.teacher}</p>

//         {/* Disability Details */}
//         <div className="bg-gray-100 p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-black">Disability:</h3>
//           <p>{student.disability_type}</p>
//           <p className="text-gray-600">{student.disability_description}</p>
//         </div>

//         {/* Progress Notes */}
//         <div className="bg-gray-100 p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-black">Progress Notes:</h3>
//           <p>{student.progress}</p>
//         </div>

//         {/* Parent Information */}
//         <div className="bg-gray-100 p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-black">Parent Info:</h3>
//           <p>{student.parent_name} ({student.parent_email})</p>
//           <p>Contact: {student.contact_number}</p>
//           <p>Address: {student.address}</p>
//         </div>

//         {/* Additional Details */}
//         <div className="bg-gray-100 p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-black">Additional Details:</h3>
//           <p>DOB: {student.dob}</p>
//           <p>Blood Group: {student.blood_group}</p>
//         </div>
//       </div>

//       {/* Student Report */}
//       {/* <div className="mt-8 w-full max-w-3xl">
//         <h2 className="text-2xl font-semibold text-center text-black">Student Report</h2>
//         <StudentAssessment student={student} />
//       </div> */}

//       <div  className="mt-6 px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-gray-300 transition transform hover:scale-105 shadow-lg">
//             <StudentReport student={student} />
//       </div>

//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition transform hover:scale-105 shadow-lg"
//       >
//         ⬅ Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default StudentProfile;
// import { useLocation, useNavigate } from "react-router-dom";

// const StudentProfile = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const student = location.state?.student;

//   if (!student) {
//     return <p className="text-center text-red-500 font-bold text-xl">Student Not Found</p>;
//   }

//   return (
//     <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center border-black">
//       <div className="bg-purple-900 bg-opacity-10 shadow-xl rounded-lg p-8 max-w-2xl w-full text-center border border-gray-700">
//         <img src={student.photo} alt={student.name} className="w-32 h-32 mx-auto rounded-full border-4 border-black" />
//         <h1 className="text-3xl font-bold mt-4 text-black">{student.student_name}</h1>
//         <p>Age: {student.age}</p>
//         <p>Roll No: {student.student_id}</p>
//         <p>Gender: {student.gender}</p>
//         <p>Assigned Teacher: {student.teacher}</p>

//         {/* Disability Details */}
//         <div className="bg-gray-100 p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-black">Disability:</h3>
//           <p>{student.disability_type}</p>
//           <p className="text-gray-600">{student.disability_description}</p>
//         </div>

//         {/* Parent Information */}
//         <div className="bg-gray-100 p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-black">Parent Info:</h3>
//           <p>{student.parent_name} ({student.parent_email})</p>
//           <p>Contact: {student.contact_number}</p>
//         </div>

//         {/* Progress Notes */}
//         <div className="bg-gray-100 p-4 rounded-md mt-4 border border-black">
//           <h3 className="text-lg font-semibold text-black">Progress Notes:</h3>
//           <p>{student.progress}</p>
//         </div>
//       </div>

//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition transform hover:scale-105 shadow-lg"
//       >
//         ⬅ Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default StudentProfile;
import { useLocation, useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student;

  if (!student) {
    return <p className="text-center text-red-500 font-bold text-xl">Student Not Found</p>;
  }

  return (
    <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center border-black">
      <div className="bg-purple-900 bg-opacity-10 shadow-xl rounded-lg p-8 max-w-2xl w-full text-center border border-gray-700">
        <h1 className="text-3xl font-bold mt-4 text-black">{student.student_name}</h1>
        <p>Age: {student.age}</p>
        <p>Roll No: {student.student_id}</p>
        <p>Gender: {student.gender}</p>
        <p>Blood Group: {student.blood_group}</p>
        <p>UDID: {student.udid}</p>
        <p>Join Date: {new Date(student.join_date).toLocaleDateString()}</p>

        {/* Disability Details */}
        <div className="bg-gray-100 p-4 rounded-md mt-4 border border-black">
          <h3 className="text-lg font-semibold text-black">Disability:</h3>
          <p>{student.disability_type}</p>
          <p className="text-gray-600">{student.disability_description}</p>
        </div>

        {/* Parent Information */}
        <div className="bg-gray-100 p-4 rounded-md mt-4 border border-black">
          <h3 className="text-lg font-semibold text-black">Parent Info:</h3>
          <p>{student.parent_name} ({student.parent_email})</p>
          <p>Contact: {student.contact_number}</p>
          <p>Address: {student.address}</p>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition transform hover:scale-105 shadow-lg"
      >
        ⬅ Back to Dashboard
      </button>
    </div>
  );
};

export default StudentProfile;
