import React from "react";
import { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import SubscribeButton from "../components/utils/SubscribeButton";
import EmailSubscription from "../components/ui/EmailSubscription";

export function BackgroundBeamsWithCollisionDemo() {
  const initialPositions = {
    topLeft: { top: '50%', left: '10%' },
    topRight: { top: '25%', right: '36%' },
    bottomLeft: { bottom: '25%', left: '36%' },
    bottomRight: { bottom: '39%', right: '17%' },
  };

  // Define possible movement positions for each element (predefined fixed positions)
  const positionVariants = {
    topLeft: [
      { top: '51%', left: '10%' },
      { top: '49%', left: '10%' },
      { top: '52%', left: '10%' },
      { top: '48%', left: '10%' }
    ],
    topRight: [
      { top: '24%', right: '36%' },
      { top: '26%', right: '37%' },
      { top: '25%', right: '38%' },
      { top: '23%', right: '39%' }
    ],
    bottomLeft: [
      { bottom: '25%', left: '36%' },
      { bottom: '27%', left: '37%' },
      { bottom: '26%', left: '38%' },
      { bottom: '28%', left: '35%' }
    ],
    bottomRight: [
      { bottom: '39%', right: '17%' },
      { bottom: '42%', right: '13%' },
      { bottom: '41%', right: '17%' },
      { bottom: '42%', right: '14%' }
    ]
  };

  // State to track the positions, initialized with the initial positions
  const [positions, setPositions] = useState(initialPositions);

  // Function to get a random position from the available fixed positions for each element
  const getNextPosition = (key) => {
    const nextPos = positionVariants[key][Math.floor(Math.random() * positionVariants[key].length)];
    return nextPos;
  };

  // Set an interval to move the divs around every 2 or 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPositions((prevPositions) => ({
        topLeft: getNextPosition('topLeft'),
        topRight: getNextPosition('topRight'),
        bottomLeft: getNextPosition('bottomLeft'),
        bottomRight: getNextPosition('bottomRight'),
      }));
    }, 2000 + Math.random() * 1000); // Random interval between 2 and 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  return (
    <BackgroundBeamsWithCollision className="flex flex-col justify-around h-screen">
      <div className="md:block hidden">
      <div
          className="text-pink-300 shadow-amber-500 shadow-sm absolute rounded-lg border py-1 px-3 text-center"
          style={{
            top: positions.topLeft.top,
            left: positions.topLeft.left,
            transition: "top 1s ease, left 1s ease", // Smooth transition for top and left
          }}
        >
          Web
        </div>
        <div
          className="text-indigo-500 absolute rounded-lg border py-1 px-3 text-center"
          style={{
            top: positions.topRight.top,
            right: positions.topRight.right,
            transition: "top 1s ease, right 1s ease", // Smooth transition for top and right
          }}
        >
          AI/ML
        </div>
        <div
          className="text-orange-500 absolute rounded-lg border py-1 px-3 text-center"
          style={{
            bottom: positions.bottomLeft.bottom,
            left: positions.bottomLeft.left,
            transition: "bottom 1s ease, left 1s ease", // Smooth transition for bottom and left
          }}
        >
          Block-Chain
        </div>
        <div
          className="text-blue-200 shadow-sm shadow-indigo-600 absolute rounded-lg border py-1 px-3 text-center"
          style={{
            bottom: positions.bottomRight.bottom,
            right: positions.bottomRight.right,
            transition: "bottom 1s ease, right 1s ease", // Smooth transition for bottom and right
          }}
        >
          OpenSource
        </div>
      </div>
      <h2
        className="text-xl relative z-20 md:text-3xl lg:text-5xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Bringing People, Passions,
        <div
          className="relative mx-auto block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Possibilities Together!</span>
          </div>
        </div>
      </h2>
      <EmailSubscription />
      {/* <SubscribeButton /> */}
    </BackgroundBeamsWithCollision>
  );
}