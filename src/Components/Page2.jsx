import React from "react";
import image1 from '../assets/01.png';

const Page2 = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white p-6 ">
      <div className="border-t border-gray-600 pt-6 mt-[-25vh] flex justify-between items-start gap-10 flex-wrap">
        {/* Left: Image section with logo and text already in image */}
        <div className="w-[550px] h-[500px]">
          <img
            src={image1}
            alt="Amalgum"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Project Info and CTA */}
        <div className="flex flex-col justify-between h-[600px] w-[450px]">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col text-red-500 font-semibold text-sm leading-5">
              <span className="text-base">01</span>
              <span className="text-xl">AMALGUM</span>
            </div>
            <button className="text-white hover:underline flex items-center gap-2">
              View Project
              <span className="text-lg">⟶</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
