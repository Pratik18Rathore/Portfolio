import React from "react";
import image from "../assets/CenterImage.png"; // Ensure this path is correct

const Page5 = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white font-sans overflow-hidden">

      {/* Top-left 04 and Portfolio text */}
      <div className="absolute top-[55%] left-[26%] z-20">
        <h2 className="text-[80px] font-extrabold leading-none">04</h2>
        <p className="text-[#fc3c25] text-[18px] mt-2">Portfolio 22’’</p>
      </div>

      {/* White horizontal line above image */}
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-[250px] h-[2px] bg-white opacity-70 z-10" />

      {/* Center Image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-[-25vh]">
      
        <img
          src={image}
          alt="Center"
          className="w-[600px] md:w-[750px] object-contain"
        />
      </div>

      {/* Bottom-right: View Project & Stack */}
      <div className="absolute bottom-[38%] right-[26%] text-right z-20">
        <p className="text-[20px] font-semibold hover:underline cursor-pointer">View Project →</p>
        <p className="text-white/60 text-[14px] mt-1">React - Node - GSAP</p>
      </div>
    </div>
  );
};

export default Page5;
