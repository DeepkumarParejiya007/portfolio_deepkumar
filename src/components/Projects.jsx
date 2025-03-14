// Projects.jsx
import React from 'react';

function Projects() {
  const projects = [
    {
      title: "IngredientIQ",
      period: "Jan 2025 – Present",
      description: [
        "A web app where users can find the best recipes for everyday life.",
        "A platform where professional chefs can get appreciation for new recipe inventions and generate fan-base."
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "JugaadAI",
      period: "May 2024 – Dec 2024",
      description: [
        "An enhanced platform for finding best AI tools from the market based on user's requirement.",
        "Posting latest news related to Artificial Intelligence and new development in this emerging field."
      ],
      technologies: ["Next.js", "TailwindCSS", "AI APIs", "Node.js"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="gradient-border p-6 bg-black/50 card-hover">
              <h3 className={`text-xl font-semibold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.period}</p>
              <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors duration-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;