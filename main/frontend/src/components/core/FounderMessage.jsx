import React from "react";

const FounderMessage = () => {
  return (
    <div className="bg-slate-900 text-white flex flex-col md:flex-row justify-around py-20 px-2 items-center">
      <div className="w-full md:w-2/4 flex flex-col gap-6">
        <span>
          EH-Labs was founded with one goal – to bridge the gap between
          students, college societies, and companies by providing a centralized
          hub for events and opportunities. Too often, amazing events and career
          opportunities go unnoticed. EH-Labs changes that by bringing
          everything into one powerful platform.
        </span>
        <span>
          With our partnerships in certified internships, freelancing, and
          events, we are building a community-driven ecosystem that empowers
          students and professionals alike.
        </span>
        <span className="font-bold text-orange-500 text-xl">
          Naveen Kumar, Founder & CEO, EH-Labs
        </span>
      </div>

      <div className="relative w-[254px] h-[254px] bg-[#171717] flex justify-center items-center overflow-hidden cursor-pointer rounded-full">
        {/* Rotating Border */}
        <div
          className="absolute top-0 left-0 w-[254px] h-[254px] bg-gradient-to-b from-[#ff2288] to-[#387ef0] rounded-full opacity-100 transition-opacity duration-300"
          style={{
            animation: "rotation_9018 8s infinite linear",
          }}></div>

        {/* Content inside the card */}
        <div className="content relative w-[250px] h-[250px] rounded-full bg-[#171717] flex justify-center items-center">
          <span className="text-white opacity-100 transition-opacity duration-300">
            HOVER ME
          </span>
        </div>

        {/* Overlay and blur effect */}
        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#17171733] backdrop-blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default FounderMessage;
