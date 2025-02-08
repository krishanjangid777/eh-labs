import React from "react";

const Brands = () => {
  return (
    <div className="bg-slate-300 text-center p-4 flex flex-col gap-8">
        <h2 className="font-bold text-xl">BRANDS THAT TRUST US</h2>
      <div className="flex md:flex-row flex-col gap-12 py-4 items-center justify-center">
        <div>
          <img src="./vite.svg" alt="" srcset="" className="h-15" />
        </div>
        <div>
          <img src="./vite.svg" alt="" srcset="" className="h-15" />
        </div>
        <div>
          <img src="./vite.svg" alt="" srcset="" className="h-15" />
        </div>
      </div>
      <button>CUSTOMER STORIES &gt;</button>
    </div>
  );
};

export default Brands;
