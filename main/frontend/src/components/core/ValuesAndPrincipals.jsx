import React from "react";
import Card from "../ui/Card";

const ValuesAndPrincipals = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col items-center pb-4">
      <div className="text-center text-4xl text-blue-200">
        <h2>The core values and</h2>
        <h2>principales that drive us</h2>
      </div>

      <div className="flex gap-x-24 px-4 overflow-auto flex-wrap justify-center">
        <Card
          imageUrl={"/logo.png"}
          heading={"Heading"}
          description="description"
        />
        <Card
          imageUrl={"/logo.png"}
          heading={"Heading"}
          description="description"
        />
        <Card
          imageUrl={"/logo.png"}
          heading={"Heading"}
          description="description"
        />
        <Card
          imageUrl={"/logo.png"}
          heading={"Heading"}
          description="description"
        />
        <Card
          imageUrl={"/logo.png"}
          heading={"Heading"}
          description="description"
        />
      </div>
    </div>
  );
};

export default ValuesAndPrincipals;
