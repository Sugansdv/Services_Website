import React from 'react';
import electricalIcon from '../assets/images/Group 534.png';
import bmsIcon from '../assets/images/Group 540.png';
import maintenanceIcon from '../assets/images/Group 538j.png';
import serviceBg from '../assets/images/standard-quality-control-collage-concept.png';
import cctvIcon from '../assets/images/Group 537.png';
import { Zap } from "lucide-react";

const Services = () => {
  return (
    <section className="py-12 px-4 bg-white">
     <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 flex items-center justify-center">
  <span className="flex items-center">
    Our Servi<span className="underline decoration-[#4A66A0] underline-offset-4">ces</span>
    <Zap className="text-[#4A66A0] ml-2" size={22} />
  </span>
</h2>


      <h1 className="text-2xl text-[#4A66A0] md:text-3xl font-bold text-center mb-10">
        Expert Services for a Safer, Smarter World
      </h1>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Row 1: 40:60 (Image : Content) */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Card: Image (40%) */}
          <div className="flex-[2.5] relative rounded-xl overflow-hidden shadow-lg h-64 md:h-72">
            <img
              src={serviceBg}
              alt="Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
              <p className="text-white text-base md:text-lg text-center font-semibold leading-snug">
                “Experience the best in electrical,<br /> CCTV, BMS Solutions “
              </p>
            </div>
          </div>

          {/* Right Card: Content (60%) */}
          <div className="flex-[3] bg-[#F2F4FD] p-4 md:p-5 rounded-xl shadow-md flex flex-col justify-center">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={cctvIcon} alt="Install" className="w-24 h-24" />
              </div>
              <h1 className="text-sm md:text-3xl  font-bold text-[#4A66A0]">
                CCTV 
              </h1>
            </div>

            <p className="text-gray-700 text-sm md:text-2xl leading-snug text-center md:text-left px-6 md:px-0">
  Advanced CCTV systems for enhanced security and surveillance, providing peace of mind and protection.
  <Zap className="inline ml-1 text-[#4A66A0]" size={22} />
</p>


            <div className="mt-2 flex justify-end px-6 md:px-0">
              <button className="text-sm text-[#4A66A0] font-medium hover:underline flex items-center gap-1">
                Read more <span className="text-[#4A66A0]">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Row 2*/}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-[3] bg-[#F2F4FD] p-4 md:p-5 rounded-xl shadow-md flex flex-col justify-center">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={bmsIcon} alt="bms" className="w-24 h-24 object-contain" />
              </div>
              <h1 className="text-sm md:text-3xl  font-bold text-[#4A66A0]">
                BMS
              </h1>
            </div>

            <p className="text-gray-700 text-sm md:text-2xl leading-snug text-center md:text-left px-6 md:px-0">
  Intelligent Building Management Systems for optimized energy efficiency, security, and comfort.
  <Zap className="inline ml-1 text-[#4A66A0]" size={18} />
</p>


            <div className="mt-2 flex justify-end px-6 md:px-0">
              <button className="text-sm text-[#4A66A0] font-medium hover:underline flex items-center gap-1">
                Read more <span className="text-[#4A66A0]">→</span>
              </button>
            </div>
          </div>
          <div className="flex-[2.5] bg-[#F2F4FD] p-4 md:p-5 rounded-xl shadow-md flex flex-col justify-center">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
              <div className="w-24 h-24 flex items-center justify-center">
                <img
                  src={electricalIcon}
                  alt="Electrical"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h1 className="text-sm md:text-3xl  font-bold text-[#4A66A0]">
                Electrical
              </h1>
            </div>

            <p className="text-gray-700 text-sm md:text-2xl leading-snug text-center md:text-left px-6 md:px-0">
  Expert electrical solutions for homes and businesses, ensuring safety, efficiency, and reliablity
  <Zap className="inline ml-1 text-[#4A66A0]" size={22} />
</p>


            <div className="mt-2 flex justify-end px-6 md:px-0">
              <button className="text-sm text-[#4A66A0] font-medium hover:underline flex items-center gap-1">
                Read more <span className="text-[#4A66A0]">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
