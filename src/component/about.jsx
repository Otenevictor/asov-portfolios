import React from 'react';
import {
    SiReact,
    SiVuedotjs,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiGit,
} from 'react-icons/si';
import Cert1 from '../assets/cert1.png';
import Cert2 from '../assets/cert2.png';
import Cert3 from '../assets/cert3.png';
import Prof2 from '../assets/prof2.jpg';

const AboutPage = () => {
    const skills = [
        { name: 'React', icon: <SiReact size={80} color="#61DAFB" /> },
        { name: "Vue.js", icon: <SiVuedotjs size={64} color="#42b883" /> }, // Vue green
        { name: 'JavaScript', icon: <SiJavascript size={80} color="#F7DF1E" /> },
        { name: 'TypeScript', icon: <SiTypescript size={80} color="#3178C6" /> },
        { name: 'HTML5', icon: <SiHtml5 size={80} color="#E34F26" /> },
        { name: 'CSS3', icon: <SiCss3 size={80} color="#1572B6" /> },
        { name: 'Tailwind', icon: <SiTailwindcss size={80} color="#38B2AC" /> },
        { name: "Node.js", icon: <SiNodedotjs size={64} color="#68A063" /> }, // Node green
        { name: "MongoDB", icon: <SiMongodb size={64} color="#47A248" /> }, // MongoDB green  
        { name: 'Git', icon: <SiGit size={80} color="#F05032" /> },
    ];

    const certifications = [
        {
            title: 'Frontend Web Development',
            issuer: 'Altschool Africa',
            date: 'April 2023',
            image: Cert1,
            description: 'Comprehensive course covering modern frontend technologies including React, Vue, JavaScript, and responsive design principles.'
        },
        {
            title: 'Data Processing',
            issuer: 'Dominion Computer School',
            date: 'December 2014',
            image: Cert2,
            description: 'In-depth course on Micro-soft Office suite, Corel-Draw Graphics .'
        },
        {
            title: 'Engineering',
            issuer: 'Dominion Computer School',
            date: 'December 2015',
            image: Cert3,
            description: 'Advanced Software Installation and Hard-ware installation patterns.'
        }
    ];

    const experiences = [
        {
            title: 'Frontend Developer',
            company: 'Natquest',
            period: 'September 2024 - Present',
            description: 'Implemented UI components using React, Next.js, tailwind. integrated with REST APIs. Collaborated with UX designers to implement pixel-perfect designs.'
        },
        {
            title: 'Frontend Developer',
            company: 'Tongston.',
            period: 'April 2023 - August 2023',
            description: 'Joint a team of 3 developers to build responsive web applications using React. bootstap and TypeScript. Improved site performance by 40%.'
        },

        {
            title: 'Enumerator',
            company: 'NHGSFP',
            period: 'november 2021 - Feb 2022',
            description: 'Capturing and Collection of Pupils Data with cloud backing.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* About Section */}
            <section className="flex flex-col md:flex-row items-center py-16 px-4 md:px-8">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8 order-2 md:order-1">
                    <h1 className="text-4xl font-bold mb-6">About Me</h1>
                    <p className="text-lg text-gray-700 mb-4">
                        I'm a passionate Frontend Developer with over 4 years of experience building
                        modern web applications. My journey in web development started with a fascination
                        for creating interactive user experiences that are both functional and aesthetically pleasing.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        I specialize in React.js and modern JavaScript, with a strong focus on creating
                        responsive, accessible, and performant web applications. I enjoy turning complex
                        problems into simple, beautiful, and intuitive designs.
                    </p>
                    <p className="text-lg text-gray-700">
                        When I'm not coding, you can find me exploring new technologies, contributing to
                        open-source projects, or sharing my knowledge through blog posts and community meetups.
                    </p>
                </div>
                <div className="w-full md:w-1/2 relative group overflow-hidden order-1 md:rotate-2">
                    <div className="relative w-70 h-70 md:w-90 md:h-90 mx-auto rounded-full overflow-hidden shadow-2xl transition-all duration-300 transform group-hover:scale-105">
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
                                src={Prof2}
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

            {/* Skills Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            {skill.icon}
                            <p className="text-center font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-64 bg-gray-100">
                                <img
                                    src={cert.image}
                                    alt={`${cert.title} certificate`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                                <div className="text-gray-600 mb-3">
                                    <p className="font-medium">{cert.issuer}</p>
                                    <p className="text-sm">{cert.date}</p>
                                </div>
                                <p className="text-gray-700 text-sm">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 h-full w-0.5 -ml-0.5 md:-ml-0.5 bg-blue-500"></div>

                    {/* Experience Items */}
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mb-12">
                            {/* Timeline Circle */}
                            <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-3 mt-1.5 w-6 h-6 rounded-full bg-blue-500 shadow"></div>

                            {/* Content */}
                            <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                                    <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                                    <p className="text-gray-700">{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;