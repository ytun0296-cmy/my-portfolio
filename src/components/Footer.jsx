import React from 'react';
import { Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-800/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 text-xl font-bold">
            <Code2 className="text-primary" size={24} />
            <span className="gradient-text">{personalInfo.name}</span>
          </a>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {year} Made with <Heart size={14} className="text-accent fill-accent" />
          </p>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-400 hover:text-primary text-sm">About</a>
            <a href="#projects" className="text-gray-400 hover:text-primary text-sm">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-primary text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;