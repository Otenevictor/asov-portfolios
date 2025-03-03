import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ExperienceTimeline from './Experience';
import Certifications from './Certifications';
import TechStack from './TechStack';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project11 from '../assets/project11.png';

const HomePage = () => {
    const navigate = useNavigate();

    const projects = [
         {
                   id: 1,
                   title: "Zove Ai",
                   description: "Creatively built an Ai chatApp using gemini Api",
                   image: Project1,
                   techStack: ["Html", "Css", "Javascript", "Api"],
                   githubUrl: "https://github.com/Emmy-24/ZOVE-Ai",
                   demoUrl: "https://zove-ai.vercel.app/"
               },
               {
                   id: 2,
                   title: "Sparkle fresh Concept",
                   description: "Liquid Soap making webPage",
                   image: Project2,
                   techStack: ["Html", "Css", "Javascript"],
                   githubUrl: "https://github.com/Otenevictor/sparkfresh",
                   demoUrl: "https://sparkfresh.vercel.app/"
               },
               {
                   id: 3,
                   title: "Tongston Website",
                   description: "Collaboration in Restructuring Tongston Entreprenueral Group Website",
                   image: Project11,
                   techStack: ["React", "Tailwind CSS", "Git"],
                   githubUrl: "#",
                   demoUrl: "https://tongston.com/"
               },
    ];
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center min-h-screen p-4 md:p-8 bg-gray-50">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span className="text-blue-600">Otene Victor</span></h1>
                    <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">Frontend Developer</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        I build responsive, accessible, and performant web applications using modern technologies.
                        Passionate about creating intuitive user experiences and clean code.
                    </p>
                    <div className="flex space-x-2 md:space-x-4 ">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-2 rounded-lg transition-colors duration-300"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Me
                        </button>
                        <button
                            className="border border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer px-6 py-2 rounded-lg transition-colors duration-300"
                            onClick={() => navigate('/projects')}
                        >
                            View Projects
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative group overflow-hidden">
                    <div className="relative w-70 h-70  md:w-90 md:h-90 mx-auto rounded-full overflow-hidden shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                        {/* Sparkle container */}
                        <div className="absolute inset-0 overflow-hidden rounded-full">
                            {/* Animated sparkle effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 animate-sparkle"></div>

                            {/* Glowing border */}
                            <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-glow"></div>
                        </div>

                        {/* Image with dynamic lighting */}
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                            <img
                
                                src="src/assets/prof1.jpg"
                                alt="Developer portrait"
                                className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Floating dots decoration */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-800/50 rounded-full animate-float"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-800/50 rounded-full animate-float-delayed"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-800/50 rounded-full animate-float"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-800/50 rounded-full animate-float-delayed"></div>


                </div>
            </section>
            {/* Projects Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gray-100 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="flex-1 p-6 flex flex-col">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center mt-auto">
                                    <a
                                        href={project.githubUrl} target='_blank'
                                        className="flex items-center text-blue-600 hover:text-blue-800"
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href={project.demoUrl} target='_blank'
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
          <Link
            to="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
          >
            View More Projects
          </Link>
        </div>
            </section>
            <section>
                <TechStack />
            </section>
            <section>
                <ExperienceTimeline />
            </section>
            <section>
                <Certifications />
            </section>
        </div>
    );
};

export default HomePage;