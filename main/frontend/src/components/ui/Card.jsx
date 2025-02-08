import React from "react";

const Card = ({imageUrl, heading, description}) => {
  return (
    <div>
      <div className="relative w-60 h-80 rounded-xl overflow-hidden shadow-lg mx-auto mt-12 bg-transparent">
        {/* Waves */}
        <div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-l from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-full animate-wave"></div>
        <div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-l from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-full animate-wave-second"></div>
        <div className="absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-l from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-full animate-wave-third"></div>

        {/* Info Section */}
        <div className="absolute top-2 h-full left-0 right-0 text-center text-white font-semibold">
          <div className="flex flex-col h-full items-center justify-around">
          <img src={imageUrl} alt="" srcset="" className="h-12" />
          <p className="text-lg">{heading}</p>
          <div className="text-sm font-thin text-lowercase mt-4">
            {description}
          </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Card;
