import React from 'react';
import { User, MapPin, Code, BookOpen, Rocket, Heart } from 'lucide-react';
import { personalInfo } from '../data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle mx-auto">
            Building my future, one line of code at a time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary" size={28} />
              </div>
              <h4 className="text-lg font-bold text-light mb-2">Developer</h4>
              <p className="text-sm text-gray-400">
                Specializing in React, Next.js, and modern web technologies
              </p>
            </div>

            {/* Card 2 */}
            <div className="card text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary" size={28} />
              </div>
              <h4 className="text-lg font-bold text-light mb-2">Learner</h4>
              <p className="text-sm text-gray-400">
                Passionate about continuous learning and skill development
              </p>
            </div>

            {/* Card 3 */}
            <div className="card text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-primary" size={28} />
              </div>
              <h4 className="text-lg font-bold text-light mb-2">Creator</h4>
              <p className="text-sm text-gray-400">
                Building projects that solve real-world problems
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-8 card border-primary/30 bg-primary/5 text-center">
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm <span className="text-primary font-semibold">{personalInfo.name}</span>, 
              a passionate developer from {personalInfo.location}. I'm on a mission to become 
              a full-stack developer by building amazing web applications and continuously 
              expanding my skills. I believe that great things are built through curiosity, 
              persistence, and a love for learning.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
              <Heart size={16} className="text-accent" />
              <span>Code. Create. Learn. Repeat.</span>
              <Heart size={16} className="text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;