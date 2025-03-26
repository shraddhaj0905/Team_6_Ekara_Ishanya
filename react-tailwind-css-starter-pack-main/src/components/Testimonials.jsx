import React from 'react';

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    feedback: "This platform has helped us stay on top of our child's progress like never before."
  },
  {
    name: "John Smith",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    feedback: "The ability to track both grades and behavioral insights has been a game-changer for us."
  },
  {
    name: "Linda Brown",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    rating: 5,
    feedback: "We've never felt more connected to our child's learning journey. The updates are invaluable."
  }
];

const Testimonials = () => {
  return (
    <section id="impact" className="py-16 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Parents Say</h2>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 px-6 md:px-12 lg:px-24">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-start"
          >
            {/* Star Ratings */}
            <div className="flex text-yellow-500 mb-3">
              {"★".repeat(testimonial.rating)}
            </div>

            {/* Feedback */}
            <p className="text-gray-700 mb-4">{testimonial.feedback}</p>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover"/>
              <div>
                <p className="font-semibold text-indigo-600">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
