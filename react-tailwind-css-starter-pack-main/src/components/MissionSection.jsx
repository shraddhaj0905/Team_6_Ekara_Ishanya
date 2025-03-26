import { motion } from "framer-motion";
import miss from "../assests/missin.jpg"
const MissionSection = () => {
  return (
    <section id="about">
      <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-between bg-white p-10 rounded-2xl shadow-lg mx-10 mt-10"
    >
      {/* Left Side Content */}


     
      <div id="#about" className="md:w-1/2 text-left">
        <motion.span
          className="bg-blue-100 text-blue-900 font-semibold px-4 py-2 rounded-full text-sm"
          whileHover={{ scale: 1.1 }}
        >
          About Ishanya
        </motion.span>

        <h2 className="text-3xl font-bold text-gray-900 mt-4">
          “ISHANYA” - A Pathway to <br />
          Education, Knowledge & Prosperity
        </h2>
        <p className="text-gray-600 mt-4">
          Ishanya India Foundation (IIF) is a Centre for Individuals with
          Special Needs started in 2015, with the intent to make society more
          inclusive.
        </p>

        {/* Vision, Mission, and Inclusion */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start space-x-3">
            <span className="w-5 h-5 bg-blue-400 rounded-full flex-shrink-0"></span>
            <div>
              <h3 className="font-semibold text-gray-800">Our Vision</h3>
              <p className="text-gray-600">
                To create a society built on Diversity, Equity & Inclusion for
                Persons with Disabilities.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-5 h-5 bg-blue-400 rounded-full flex-shrink-0"></span>
            <div>
              <h3 className="font-semibold text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                Build agency and advocacy for the Disability sector by capacity
                building, inclusive learning spaces, and person-centric
                solutions.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-5 h-5 bg-blue-400 rounded-full flex-shrink-0"></span>
            <div>
              <h3 className="font-semibold text-gray-800">
                Promoting Inclusion
              </h3>
              <p className="text-gray-600">
                Creating opportunities, ensuring freedom of choice, and
                fostering independence for Persons with Disabilities.
              </p>
            </div>
          </div>
        </div>
      

        {/* Explore Programs Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-full mt-6 shadow-md"
        >
          Explore Our Programs
        </motion.button>
      </div>

      {/* Right Side Image with Hover Effect */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={miss} // Replace with the actual path of your image
          alt="Mission Image"
          className="w-[400px] rounded-xl shadow-md"
        />
      </motion.div>
    </motion.section>
    </section>
  );
};

export default MissionSection;
