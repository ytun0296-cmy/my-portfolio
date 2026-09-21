import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-light mb-6">🚀 Frontend Development</h3>
            <div className="space-y-4">
              {skills.frontend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-300 font-medium">{skill.icon} {skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-primary to-accent rounded-full"
                         style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-light mb-6">🛠️ Tools & Technologies</h3>
            <div className="space-y-4">
              {skills.tools.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-300 font-medium">{skill.icon} {skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-primary to-accent rounded-full"
                         style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-light mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'JavaScript', 'Tailwind', 'Redux', 'Node.js'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-secondary/50 border border-gray-700/50 rounded-full text-gray-300 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;