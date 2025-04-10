import React from "react";

const Page1 = () => {
  return (
    <div className="bg-black min-h-screen text-white  px-8 py-20 flex items-center justify-center">
      <div className="grid grid-cols-12 gap-4 w-full mt-[-30vh] max-w-screen-xl">
        {/* Column 1 */}
        <div className="col-span-3 flex flex-col justify-between h-96">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-red-500 font-semibold text-base">01</p>
              <p className="text-red-500 font-semibold text-lg">AMALGUM</p>
            </div>

            <div>
              <p className="text-red-500 font-semibold text-base">03</p>
              <p className="text-red-500 font-semibold text-lg">Nimbus</p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-3 flex flex-col justify-between h-96">
          <div className="space-y-1 text-left">
            <p>Empowering Farmers, Enriching India</p>
            <p>2D Visualization</p>
            <p>Language Conversion</p>
            <p>3D Area Scanning</p>
            <p>Pre-Setup Analysis</p>
          </div>

          <div className="space-y-1 text-left">
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-span-3 flex flex-col justify-between h-96">
          <div>
            <p className="text-red-500 font-semibold text-base">02</p>
            <p className="text-red-500 font-semibold text-lg">Bayez.AI</p>
          </div>

          <div>
            <p className="text-red-500 font-semibold text-base">04</p>
            <p className="text-red-500 font-semibold text-lg">Portfolio”22</p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="col-span-3 flex flex-col justify-between h-96 text-left">
          <div className="space-y-1">
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
          </div>

          <div className="space-y-1">
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
            <p>Empowering Farmers, Enriching India</p>
          </div>
        </div>
      </div>
      
    </div>
    

  );
};

export default Page1;
