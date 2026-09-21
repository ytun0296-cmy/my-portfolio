import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../data';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle mx-auto">
            A selection of my best work.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <button onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg transition-all duration-300 ${
              filter === 'all' ? 'bg-primary text-white' : 'bg-secondary/50 text-gray-400 hover:text-white'
            }`}>
            All Projects
          </button>
          <button onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-lg transition-all duration-300 ${
              filter === 'featured' ? 'bg-primary text-white' : 'bg-secondary/50 text-gray-400 hover:text-white'
            }`}>
            Featured
          </button>
        </div>

        <div className="h-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-lg mb-4 bg-secondary/50">
                <img src={project.image} alt={project.title}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                     onError={(e) => {
                       e.target.src = 'https://placehold.co/600x400/2D2D3F/6C63FF?text=Project+Preview';
                     }} />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                     className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300">
                    <FiExternalLink size={20} className="text-dark" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300">
                    <FaGithub size={20} className="text-dark" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;