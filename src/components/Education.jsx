// Education.jsx
import React from 'react';

function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="gradient-border p-6 bg-black/50 card-hover">
            <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text">
              Diploma in Software Engineering Technician
            </h3>
            <p className="text-gray-400 mb-4">Centennial College, Toronto, ON | Jan 2024 – Apr 2025</p>
            
            <h4 className="font-medium text-gray-300 mb-2">Relevant Courses:</h4>
            <ul className="list-disc list-inside mb-4 text-gray-400 space-y-1">
              <li>Full stack development (MERN)</li>
              <li>Advanced Oracle database management</li>
              <li>Data Structure And Algorithms in C#</li>
            </ul>
            
            <p className="text-green-400 font-medium">
              Graduated with distinction; awarded scholarships for academic excellence.
            </p>
          </div>

          <div className="gradient-border p-6 bg-black/50 card-hover">
            <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text">
              High School Diploma
            </h3>
            <p className="text-gray-400 mb-4">JMC Vidyalaya, Mehsana, India | 2020 – 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;