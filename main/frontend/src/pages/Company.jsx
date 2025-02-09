import React, { useState } from "react";

const sections = {
  team: {
    title: "Meet the Team of EH",
    content:
      "EH-Labs is driven by a passionate team of developers, designers, and community builders who believe in empowering students and businesses through technology. Our team works tirelessly to create a seamless experience for event management and collaboration.",
  },
  about: {
    title: "About EH-Labs",
    content:
      "EH-Labs is a platform designed to bring students, college societies, and companies together under one roof. Our mission is to make event sharing, networking, and learning more accessible for everyone.",
  },
  story: {
    title: "Our Story",
    content:
      "EH-Labs started as a simple idea to help college students stay updated with events and networking opportunities. Today, we’ve grown into a hub for internships, freelancing, and live events, bridging the gap between learners and professionals.",
  },
};

const Company = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-slate-800 text-white">
      {/* Navbar Section */}
      <div className="flex justify-center gap-4 space-x-6 border-b pb-4">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            id={key}
            className={`py-2 text-lg font-semibold ${
              activeSection === key
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-300 hover:text-orange-400"
            }`}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold text-gray-300">{sections[activeSection].title}</h2>
        <p className="text-gray-200 max-w-2xl mx-auto mt-4">{sections[activeSection].content}</p>
      </div>
    </div>
  );
};

export default Company;
