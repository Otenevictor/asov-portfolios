const ProjectCard = ({ project }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg flex">
        {/* Left Image Placeholder */}
        <div className="w-1/3 bg-gray-300 h-40 rounded-lg"></div>
        
        {/* Right Content */}
        <div className="w-2/3 pl-4 flex flex-col justify-between">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-gray-600 text-sm">{project.description || "No description available."}</p>
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2"
          >
            View on GitHub
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  