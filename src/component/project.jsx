import React from 'react';
// import {  ExternalLink } from 'lucide-react';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';
import Project4 from '../assets/project4.png';
import Project5 from '../assets/project5.png';
import Project6 from '../assets/project6.png';
import Project7 from '../assets/project7.png';
import Project8 from '../assets/project8.png';
import Project9 from '../assets/project9.png';
import Project11 from '../assets/project11.png';


const ProjectsPage = () => {
    const allProjects = [
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
            description: " website for a Liquid Soap making company Sparkle fresh Concept ",
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
        {
            id: 4,
            title: " quizapp coding ",
            description: "Creating a quiz app for Javascript, Python, Rust etc. programming language. ",
            image: Project4,
            techStack: ["Html", "Css", "JAvascript"],
            githubUrl: "https://github.com/Otenevictor/asovdev-quiz-app",
            demoUrl: "https://asovdev-quiz-app.vercel.app/"
        },
        {
            id: 5,
            title: "Muisc App",
            description: "Building music app from freecode camp Data-Structure & algorithm",
            image: Project5,
            techStack: ["Html", "Css", "Javascript"],
            githubUrl: "https://github.com/Otenevictor/music-app",
            demoUrl: "https://music-app-hazel-alpha.vercel.app/"
        },
        {
            id: 6,
            title: "Naija_Support",
            description: "This project was built to help reach out to Ngos currently on flood issues",
            image: Project6,
            techStack: ["Html", "Bootstrap css", "Javacript"],
            githubUrl: "https://github.com/Otenevictor/naija-support",
            demoUrl: "https://naija-support.vercel.app/index.html"
        },
        {
            id: 7,
            title: "Asov Banking",
            description: "Creatively building a banking landing page from frontend Mentors",
            image: Project7,
            techStack: ["Html", "Tailwind", "Javascript"],
            githubUrl: "https://github.com/Otenevictor/Asovbanking",
            demoUrl: "https://asovbanking.vercel.app/"
        },
        {
            id: 8,
            title: "Shopping Cart",
            description: "A basic shopping cart app when applying for web3bridge with a capon code",
            image: Project8,
            techStack: ["Html", "Css", "Javscript"],
            githubUrl: "https://github.com/Otenevictor/shopping-cart",
            demoUrl: "https://shopping-cart-tau-ashen.vercel.app/"
        },
        {
            id: 9,
            title: "Rock, Paper, Scissor",
            description: "Cratively building a Rock paper Scissors game with localstorage",
            image: Project9,
            techStack: ["Html", "Css", "Javscript"],
            githubUrl: "https://github.com/Otenevictor/asov-rock-paper-scissors",
            demoUrl: "https://asov-rock-paper-scissors.vercel.app/"
        },
        {
            id: 10,
            title: " Save Data bio",
            description: "creatively build a Multi-step form for user data collection and final summary",
            image: Project3,
            techStack: ["Html", "Tailwind CSS", "Javascript"],
            githubUrl: "https://github.com/Otenevictor/asov-multi-step-form",
            demoUrl: "https://asov-multi-step-form.vercel.app/"
        },
         
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8 pt-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
                <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Here's a collection of my projects from Github. Each project showcases different skills
                    and technologies I've worked with.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gray-100 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
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
            </div>
        </div>
    );
};

export default ProjectsPage;