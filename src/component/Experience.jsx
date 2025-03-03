import { Link } from "react-router-dom";

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
  
  const ExperienceTimeline = () => {
    return (
      <section className="py-12 bg-gray-100 flex justify-center">
        <div className="container mx-auto px-6 md:px-12 ">
          <h2 className="text-3xl font-bold text-center mb-8">Experience Timeline</h2>
          <div className="relative border-l-4 border-blue-500 ml-6 flex flex-col justify-center md:flex-row ">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 ml-6 relative">
                <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-500 rounded-full"></div>
                <h2 className="text-xl font-semibold">{exp.company}</h2>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-gray-600">{exp.year}</span>
                <p className="text-gray-700 mt-2">{exp.description}</p>
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
  
  export default ExperienceTimeline;
  