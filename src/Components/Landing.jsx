import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Landing = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-black font-sans">
      {/* Header */}
      <header className="flex justify-between items-start p-4 sm:p-6 md:p-10">
        <div className="flex flex-col sm:flex-row sm:space-x-6 md:space-x-12">
          <div>
            <p className="text-xs sm:text-sm font-normal">Designer</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-xs sm:text-sm font-normal">Location</p>
            <p className="text-xs sm:text-sm font-normal">JP, IND, (TIME)</p>
          </div>
        </div>
        <div>
          <button className="text-xs sm:text-sm font-medium flex items-center">
            MENU <span className="ml-1 inline-block w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Main content container to ensure everything fits on one screen */}
      <div className="flex flex-col h-[calc(100vh-120px)] px-4 sm:px-6 md:px-10">
        {/* Logo and Name section */}
        <div className="flex flex-row items-start mt-4">
          <div className="w-1/4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter">GD</h1>
          </div>
          <div className="w-3/4 pl-2 sm:pl-0">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">ADITYA</h1>
          </div>
        </div>

        {/* Text content section */}
        <div className="flex flex-row mt-4 sm:mt-6">
          <div className="w-1/4 hidden sm:block"></div>
          <div className="w-full sm:w-2/3 md:w-2/4">
            <p className="text-sm sm:text-base font-normal leading-relaxed">
              Websites are more than just functional spaces—they're immersive experiences
              where visuals, typography and motion come together to tell a story, evoke emotions and create memorable interactions.
              Every element, from the smallest detail to the overall design
              plays a role in shaping how users feel and engage
              transforming a simple visit into an inspiring journey.
            </p>
          </div>
          <div className="hidden sm:block sm:w-1/12 md:w-1/4"></div>
        </div>

        {/* Bio section */}
        <div className="flex flex-col sm:flex-row mt-6 sm:mt-8">
          <div className="w-full sm:w-1/4">
            <div className="border-2 border-black w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center mb-4">
              <span className="text-xl sm:text-2xl font-bold">!</span>
            </div>
            <p className="text-xs sm:text-sm font-normal leading-relaxed max-w-xs">
              For me, web designing is an art where logic and creativity meet. I enjoy
              crafting sleek interfaces, dynamic interactions, and intuitive designs that
              not only look good but feel seamless and engaging
            </p>
          </div>
          <div className="w-full sm:w-2/4 h-12 sm:h-auto"></div>
          <div className="w-full sm:w-1/4 mt-4 sm:mt-0">
            <div className="w-full h-24 sm:h-40 bg-black">
              <img 
                src=""
                alt="Designer portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Featured Work section - positioned at bottom of page */}
        <div className="mt-auto mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter">FEATURED WORK</h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;