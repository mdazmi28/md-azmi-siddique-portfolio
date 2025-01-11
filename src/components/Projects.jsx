import React from 'react';
import { projectData } from '../data/projectData';

const Projects = () => {
  return (
    <div>
        <h1 className='text-4xl pb-4'>Projects</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectData.map((project, index) => (
        <div
          key={index}
          className=" bg-white dark:bg-gray-800 
                 text-gray-800 dark:text-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-gray-600 text-sm my-2">{project.description}</p>
          <div className="flex gap-4 mt-4">
            <a
              href={project.liveLink}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              href={project.githubLink}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
