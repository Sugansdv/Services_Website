import React from 'react';
import workerImage from '../assets/images/Screenshot 2025-06-12 152750.png'; 
import { Link } from "react-router-dom";
const ContactHero = () => {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${workerImage})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-end text-white">
       

        <div className="w-full md:w-1/2 text-center">
  <nav className="text-2xl font-medium mb-4">
    <Link to="/" className="hover:underline">Home</Link>
    <span className="text-white"> ❯| </span>
    <Link to="/about" className="hover:underline">Contact Us</Link>
  </nav>
  <h2 className="text-2xl md:text-3xl font-semibold">
    Sparking Innovation, Illuminating Lives
  </h2>
</div>

      </div>
    </div>
  );
};

export default ContactHero;
