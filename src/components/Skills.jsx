// Skills.jsx
import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.JS", "Next.JS", "Node.js", "C#", "Java", "Python", "SQL", "Git"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Tools",
      items: ["GitHub", "Oracle", "MySQL", "Firebase", "VS Code", "Visual Studio", "IntelliJ", "Eclipse", "PyCharm", "Figma", "MS Office"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Frameworks",
      items: ["React.JS", "Next.JS", "JavaFX", "WinForms", "Bootstrap CSS", "Tailwind CSS", "Material UI"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="gradient-border p-6 bg-black/50 card-hover">
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, index) => (
                  <span
                    key={index}
                    className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors duration-200"
                  >
                    {item}
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

export default Skills;