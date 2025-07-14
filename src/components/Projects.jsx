// Projects.jsx
import React from 'react';

function Projects() {
  const projects = [
    {
      title: "IngredientIQ",
      period: "Jan 2025 – Apr 2025",
      description: [
        "A full-stack recipe management web application where users can discover, search, and bookmark recipes for everyday cooking.",
        "Professional chefs can register to create and share custom recipes with images and preparation instructions.",
        "Role-based authentication system (admin, chef, user) using JWT tokens for secure access control.",
        "Image upload workflows built with Multer and Cloudinary for fast and reliable hosting.",
        "Dynamic recipe creation forms with real-time validation and ingredient management.",
        "Bookmark system enabling personalized recipe collections for each user.",
        "Deployed on Render with MongoDB Atlas cloud database integration."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
      gradient: "from-blue-500 to-cyan-500",
      link: "https://ingredientiq-1-nzs2.onrender.com/"
    },
    {
      title: "JugaadAI",
      period: "May 2024 – Dec 2024",
      description: [
        "An AI tool discovery platform designed to help users find, explore, and compare the latest AI-powered services.",
        "Developed a secure architecture using AWS services including Cognito for authentication, S3 for storage, and CloudFront for fast asset delivery.",
        "Built a fully-featured admin dashboard with moderation tools, content tracking, and usage analytics.",
        "Integrated a blogging system to share AI industry trends and drive user engagement.",
        "Dynamic search and filtering functionality enabling users to quickly locate tools by category, price, and popularity.",
        "Implemented secure user registration and authentication using AWS Cognito with email verification.",
        "Optimized performance and scalability with Lambda functions and API Gateway for serverless APIs."
      ],
      technologies: ["React", "Node.js", "Express", "AWS Cognito", "DynamoDB", "S3", "Lambda", "API Gateway", "CloudFront"],
      gradient: "from-purple-500 to-pink-500",
      link: "https://github.com/DeepkumarParejiya007/jugaadai"
    },
    {
      title: "Enhanced Code Viewer",
      period: "Feb 2025 – Apr 2025",
      description: [
        "A modern code editor and viewer with multi-language syntax highlighting and advanced code analysis.",
        "Integrates Hugging Face's CodeLlama API for AI-powered code suggestions and autocompletion.",
        "Supports dark and light modes for customizable viewing experience.",
        "Code analysis tools display real-time line and character counts to improve productivity.",
        "Copy to clipboard functionality and file export options for easy sharing and saving.",
        "Responsive UI designed with Tailwind CSS to ensure usability across all devices.",
        "Built using React and TypeScript with modular component architecture for maintainability."
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Hugging Face CodeLlama"],
      gradient: "from-green-500 to-emerald-500",
      link: "https://github.com/DeepkumarParejiya007" // Replace with your project link if available
    },
    {
      title: "Amrut Cup – Volleyball Tournament Live Score Website",
      period: "Apr 2025 – May 2025",
      description: [
        "A live tournament platform built to broadcast volleyball match schedules, scores, and team standings in real time.",
        "Integrated Google Sheets API to update scores dynamically without redeploying the site.",
        "Developed comprehensive team profiles including captains, players, skill levels, and achievements.",
        "Live point tables with automatic ranking updates and MVP highlights for standout performers.",
        "Sponsor promotion areas and archives of previous tournaments to increase community engagement.",
        "Responsive design ensures fans can access scores and updates from any device.",
        "Deployed with Next.js SSR for fast load times and better SEO performance."
      ],
      technologies: ["Next.js", "Supabase", "Google Sheets API"],
      gradient: "from-orange-500 to-yellow-500",
      link: "https://amrutcup.com/" // Replace with actual link if deployed
    },
    {
      title: "Unionville Athletic Club Website",
      period: "May 2025 – Jun 2025",
      description: [
        "A professional, modern website for Unionville Athletic Club, a premier fitness and wellness center in Markham, Ontario.",
        "Features a responsive service showcase for gym facilities, fitness classes, squash courts, and wellness services.",
        "Dynamic testimonials system highlighting feedback from members with 3–27 years of experience.",
        "Optimized image gallery leveraging WebP format for fast load times and better SEO.",
        "FAQ section and detailed contact module including maps, phone, email, and hours of operation.",
        "Built with Next.js and Tailwind CSS following modern UI/UX standards.",
        "Automated deployment pipeline with Vercel for continuous integration and updates."
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      gradient: "from-indigo-500 to-blue-500",
      link: "https://unionvilleac.vercel.app/" // Replace with actual link if available
    },
    {
      title: "Email Automation Tool",
      period: "Jun 2025 – Jul 2025",
      description: [
        "A comprehensive email automation platform for managing contacts, templates, campaigns, and analytics.",
        "Developed contact management with CSV import, tagging, and advanced filtering.",
        "Dynamic template builder supporting personalization variables and version management.",
        "Campaign management system with scheduling, previewing, and status control.",
        "Real-time analytics dashboard displaying open rates, click rates, and bounce rates with visual charts.",
        "Built with shadcn/ui and Tailwind CSS for a clean, modern user experience.",
        "Leveraged React Query for efficient data fetching and state management.",
        "Optimized for performance and deployed via Vercel for instant production releases."
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts", "Vite"],
      gradient: "from-pink-500 to-rose-500",
      link: "https://github.com/DeepkumarParejiya007" // Replace with your project link if deployed
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
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block gradient-border p-6 bg-black/50 card-hover transition-transform duration-200 hover:scale-[1.02] rounded-xl"
            >
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
