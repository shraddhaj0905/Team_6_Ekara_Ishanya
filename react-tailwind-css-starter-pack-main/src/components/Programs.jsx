import React from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
  const programs = [
    { title: "SAMETI", description: "Pre-Academic Skills Program designed to support children with special needs in a group setting, enhancing socialization and learning.", bgColor: "bg-blue-200", textColor: "text-blue-900" },
    { title: "SATTVA", description: "A bridge between academics and functional skills, focusing on soft skills for transitioning to adulthood.", bgColor: "bg-purple-200", textColor: "text-purple-900" },
    { title: "SIDDHI", description: "1-2-1 remedial program with individual goals and IEPs, using an eclectic approach tailored to each individual’s needs.", bgColor: "bg-yellow-200", textColor: "text-yellow-900" },
    { title: "SUTANTRA", description: "A Digital Literacy program covering computer basics, MS Office, internet usage, and email operations.", bgColor: "bg-red-200", textColor: "text-red-900" },
    { title: "SHAALE", description: "NIOS tutoring with everyday sessions for secondary and senior secondary courses, helping students succeed in exams.", bgColor: "bg-green-200", textColor: "text-green-900" },
    { title: "SPRUHA", description: "Our flagship program, providing essential skills and personal transition opportunities for a strong foundation.", bgColor: "bg-indigo-200", textColor: "text-indigo-900" },
    { title: "VOCATIONAL", description: "A training program designed to equip individuals with job-specific skills, aligned with market trends and employment opportunities.", bgColor: "bg-orange-200", textColor: "text-orange-900" },
  ];

  return (
    <section id="programs" className="py-16 px-6 lg:px-20 bg-gray-100">
      {/* Title Animation */}
      <motion.h2 
        className="text-4xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Programs
      </motion.h2>

      {/* First Row: 4 Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.slice(0, 4).map((program, index) => (
          <motion.div 
            key={program.title}
            className={`${program.bgColor} ${program.textColor} p-6 rounded-xl shadow-md text-center transition-all duration-300`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          >
            <h3 className="text-2xl font-semibold">{program.title}</h3>
            <p className="mt-2 text-gray-700">{program.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Second Row: 3 Programs (Centered) */}
      <div className="flex justify-center mt-8 gap-8">
        {programs.slice(4, 7).map((program, index) => (
          <motion.div 
            key={program.title}
            className={`${program.bgColor} ${program.textColor} p-6 rounded-xl shadow-md text-center transition-all duration-300`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          >
            <h3 className="text-2xl font-semibold">{program.title}</h3>
            <p className="mt-2 text-gray-700">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
