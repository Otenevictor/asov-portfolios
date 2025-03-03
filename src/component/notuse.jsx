import React, { useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                // Correct API endpoint with proper parameters
                const response = await fetch(
                    'https://api.Github.com/users/Otenevictor/repos?sort=updated&per_page=100'
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch projects: ${response.status}`);
                }

                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // ... keep the loading and error states the same ...

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
                <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Here's a collection of my projects from Github. Each project showcases different skills
                    and technologies I've worked with.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            {/* Improved image placeholder */}
                            <div className="h-48 bg-gray-100 flex items-center justify-center">
                                <div className="text-gray-400 text-center">
                                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm">No preview available</span>
                                </div>
                            </div>

                            {/* Rest of the card content remains the same */}
                            <div className="flex-1 p-6 flex flex-col">
                                {/* ... (keep the existing card content structure) ... */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ... keep the empty state the same ... */}
            </div>
        </div>
    );
};

export default ProjectsPage;