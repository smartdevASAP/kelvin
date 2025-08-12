import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Responsive, fast, and accessible websites using HTML, CSS, JavaScript, React, and Tailwind CSS.",
    icon: "🌐",
  },
  {
    title: "Backend Development",
    description:
      "Server-side applications, REST APIs, and authentication with Node.js, Express, and MongoDB.",
    icon: "🛠️",
  },
  {
    title: "UI/UX Design",
    description:
      "User-friendly, modern, and engaging interface designs with a focus on usability.",
    icon: "🎨",
  },
  {
    title: "Database Management",
    description:
      "Designing, optimizing, and managing databases for scalability and performance.",
    icon: "🗄️",
  },
  {
    title: "Cloud Integration",
    description:
      "Deploying, managing, and scaling applications using cloud platforms like AWS and Vercel.",
    icon: "☁️",
  },
  {
    title: "Version Control",
    description:
      "Using Git and GitHub for efficient code management, collaboration, and version tracking.",
    icon: "📂",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving website speed, SEO readiness, and overall user experience.",
    icon: "⚡",
  },
  {
    title: "API Integration",
    description:
      "Connecting applications to third-party APIs for extended functionality and automation.",
    icon: "🔗",
  },
];

function Projects() {
  return (
    <div id="services" className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 w-72 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
