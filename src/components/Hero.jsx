// Hero.jsx
import React from 'react';

function Hero() {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="gradient-text">Deepkumar Parejiya</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400">Web Developer</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Software Engineering Technician crafting exceptional digital experiences
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#contact"
              className="gradient-border px-8 py-3 bg-black/50 hover:bg-black/70 transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;