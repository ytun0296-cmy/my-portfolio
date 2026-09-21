import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsArrowDown } from 'react-icons/bs';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <br />
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              {personalInfo.tagline}. I love creating beautiful, performant web applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              
              {/* Direct Download Anchor Link */}
              <a 
                href={personalInfo.resume} 
                download={`${personalInfo.name.replace(/\s+/g, '_')}_CV.pdf`}
                className="btn-outline cursor-pointer flex items-center justify-center"
              >
                Download CV
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-secondary/50 rounded-lg hover:bg-primary/20 transition-colors duration-300 border border-gray-700/50">
                <FaGithub size={22} className="text-gray-300 hover:text-primary" />
              </a>
              
              <a href={`mailto:${personalInfo.email}`}
                 className="p-3 bg-secondary/50 rounded-lg hover:bg-primary/20 transition-colors duration-300 border border-gray-700/50">
                <MdEmail size={22} className="text-gray-300 hover:text-primary" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-float" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${personalInfo.name.replace(' ', '+')}&size=400&background=6C63FF&color=fff&bold=true`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <BsArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;