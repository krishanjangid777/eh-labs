import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 py-2 items-center  text-white bg-gray-700">
      <div>
        <img src="./logo.png" alt="" srcset="" className="h-12" />
      </div>
      <div>
        <ul className="flex gap-8">
          <li>
            <a className="hover:text-gray-300 cursor-pointer">Home</a>
          </li>
          <li>
            <a className="hover:text-gray-300 cursor-pointer">Community</a>
          </li>
          <li>
            <a className="hover:text-gray-300 cursor-pointer">Message</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <input type="search" name="" id="" placeholder="search 🔍" className="rounded-lg border-none p-1 text-gray-600 text-pretty pl-4" />
        <div className="rounded-full h-9 w-9 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Navbar;
