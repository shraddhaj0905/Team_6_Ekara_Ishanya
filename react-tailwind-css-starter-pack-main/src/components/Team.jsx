import React from "react";
import FadeIn from "./animations/FadIn";

// Import images
import SwathiImage from "../assests/swati.jpg";
import RaghuImage from "../assests/ragu.jpg";
import AshwanathImage from "../assests/sir.jpg";

const TeamMember = ({ name, role, image, delay }) => {
  return (
    <FadeIn direction="up" delay={delay} className="group">
      <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
        <div className="w-full h-[300px] rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </FadeIn>
  );
};

const TeamPage = () => {
  const teamMembers = [
    {
      name: "SWATHI VELLAL RAGHUNANDAN",
      role: "FOUNDER, DIRECTOR",
      image: SwathiImage,
    },
    {
      name: "RAGHUNANDAN RANGANATH",
      role: "Co-FOUNDER, TRUSTEE",
      image: RaghuImage,
    },
    {
      name: "ASHWATHANARAYANA REDDY",
      role: "CHIEF MENTOR, TRUSTEE",
      image: AshwanathImage,
    },
  ];

  return (
    <section id="team">
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <section id="team" className="py-16 px-4 w-full max-w-screen-lg mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Leadership</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-2">
              The experts behind our innovative educational solutions, bringing together design and technology expertise.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
    </div>
    </section>
  );
};

export default TeamPage;
