import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { personalInfo } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold">
            <Code2 className="text-primary" size={32} />
            <span className="gradient-text">{personalInfo.name}</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} 
                 className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-medium">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm px-5 py-2">
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-light" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-800">
            <div className="flex flex-col items-center gap-6 bg-dark">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} 
                   className="text-gray-300 hover:text-primary text-lg"
                   onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary" onClick={() => setIsOpen(false)}>
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;