import React from 'react';
import projectBg from '../assets/images/Screenshot 2025-06-12 152226.png'; 
import { Link } from "react-router-dom";

const ProjectBanner = () => {
  return (
    <section
      className="relative h-[50vh] sm:h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${projectBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 sm:px-8 flex flex-col items-center">
        <nav className="text-sm sm:text-lg md:text-xl mb-2">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-1 sm:mx-2">❯</span>
          <Link to="/projects" className="hover:underline">Projects</Link>
        </nav>

        <h2 className="text-base sm:text-lg md:text-2xl font-light">
          Sparking Innovation, Illuminating Lives
        </h2>
      </div>
    </section>
  );
};

export default ProjectBanner;
