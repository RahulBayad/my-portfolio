import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React, DaisyUI, and Three.js.',
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack MERN e-commerce app with authentication and payment integration.',
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support and user profiles.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-base-100">
      <div className="text-center mb-8">
        <span className="text-center text-4xl font-bold text-primary border-b-2 pb-2">Projects</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
        {projects.map((project, idx) => (
          <div key={idx} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <a href={project.link} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 