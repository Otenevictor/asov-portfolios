import { Link } from "react-router-dom";
import {
    SiReact,
    SiVuedotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiJavascript,
    SiHtml5,
    SiCss3,
  } from "react-icons/si";
  
  const techStack = [
    { name: "React.js", icon: <SiReact size={64} color="#61DAFB" /> }, // React blue
  { name: "Vue.js", icon: <SiVuedotjs size={64} color="#42b883" /> }, // Vue green
  { name: "Tailwind CSS", icon: <SiTailwindcss size={64} color="#38B2AC" /> }, // Tailwind teal
  { name: "Node.js", icon: <SiNodedotjs size={64} color="#68A063" /> }, // Node green
  { name: "MongoDB", icon: <SiMongodb size={64} color="#47A248" /> }, // MongoDB green
  { name: "JavaScript", icon: <SiJavascript size={64} color="#F7DF1E" /> }, // JavaScript yellow
  { name: "HTML5", icon: <SiHtml5 size={64} color="#E34F26" /> }, // HTML orange
  { name: "CSS3", icon: <SiCss3 size={64} color="#1572B6" /> }, // CSS blue
  ];
  const TechStack = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                {tech.icon} 
                <h3 className="text-xl font-semibold">{tech.name}</h3>
                
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
          >
            View More
          </Link>
        </div>
        </div>
      </section>
    );
  };
  
  export default TechStack;
  