// About.jsx
import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="max-w-3xl mx-auto gradient-border p-8 bg-black/50">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Innovative and detail-oriented Software Engineering Technician student with hands-on experience in full-stack development, database management, and UI/UX design. Skilled in designing, coding, testing, and implementing scalable software solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Proficient in debugging, troubleshooting, and deploying software systems, with a strong understanding of programming languages, object-relational mapping (ORM) frameworks, and Agile development methodologies.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Passionate about developing clean, efficient code and optimizing software performance. Committed to collaborating with development teams to enhance software functionality and maintain security standards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;