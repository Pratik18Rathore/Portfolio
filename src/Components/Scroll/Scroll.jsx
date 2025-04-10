// src/components/Scroll.jsx
import React from "react";
import "./Scroll.css"; // We'll style the marquee here

const Scroll = () => {
  return (
    <div className="relative bg-black overflow-hidden py-4 border-y border-white">
      <div className="scroll-track whitespace-nowrap flex gap-12 animate-marquee">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex gap-8 items-center">
            <span className="text-white text-xl italic">SINCE 2022</span>
            <span className="text-white text-xl">SINCE 2022</span>
            <span className="text-white text-2xl font-bold">SINCE 2022</span>
            <span className="text-white text-xl">✷</span>
            <span className="text-white text-xl italic">FROM INDIA</span>
            <span className="text-white text-xl">FROM INDIA</span>
            <span className="text-white text-2xl font-bold">FROM INDIA</span>
            <span className="text-white text-xl">✷</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;

