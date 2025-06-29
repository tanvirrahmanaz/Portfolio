import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiLeetcode, SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import profilePhoto from '../assets/profile-photo.jpg';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    "MERN Stack Developer",
    "Problem Solver", 
    "Full Stack Developer",
    "Coding Enthusiast"
  ];

  const skills = [
    { icon: <FaReact className="text-2xl text-blue-500" />, name: "React.js" },
    { icon: <FaNodeJs className="text-2xl text-green-500" />, name: "Node.js" },
    { icon: <SiMongodb className="text-2xl text-green-600" />, name: "MongoDB" },
    { icon: <SiExpress className="text-2xl text-gray-700" />, name: "Express.js" },
    { icon: <SiJavascript className="text-2xl text-yellow-500" />, name: "JavaScript" }
  ];

  const resumeLink = "https://docs.google.com/document/d/1p-4pEeADtmSogOAjDisHHX_qegEweuLkcNTq5cAVGZM/edit?tab=t.0";

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">

      <div className="hero relative z-10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-6xl">
          
          {/* Profile Image Section */}
          <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-secondary animate-spin" style={{animationDuration: '10s'}}></div>
              
              {/* Profile Photo */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-300 group">
                <img 
                  src={profilePhoto} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  alt="Tanvir Rahman - MERN Stack Developer"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image doesn't load */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary hidden items-center justify-center text-white text-6xl font-bold">
                  TR
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">MERN Developer</span>
                </div>
              </div>

              {/* Floating Skills Icons */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer" style={{animationDelay: '0s'}} title={skills[0].name}>
                <div className="bg-white p-3 rounded-full shadow-lg border-2 border-primary/20 hover:border-primary transition-all duration-300">
                  {skills[0].icon}
                </div>
              </div>
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer" style={{animationDelay: '0.5s'}} title={skills[1].name}>
                <div className="bg-white p-3 rounded-full shadow-lg border-2 border-primary/20 hover:border-primary transition-all duration-300">
                  {skills[1].icon}
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer" style={{animationDelay: '1s'}} title={skills[2].name}>
                <div className="bg-white p-3 rounded-full shadow-lg border-2 border-primary/20 hover:border-primary transition-all duration-300">
                  {skills[2].icon}
                </div>
              </div>
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer" style={{animationDelay: '1.5s'}} title={skills[3].name}>
                <div className="bg-white p-3 rounded-full shadow-lg border-2 border-primary/20 hover:border-primary transition-all duration-300">
                  {skills[3].icon}
                </div>
              </div>
              <div className="absolute top-8 right-8 animate-bounce hover:scale-125 transition-transform duration-300 cursor-pointer" style={{animationDelay: '2s'}} title={skills[4].name}>
                <div className="bg-white p-3 rounded-full shadow-lg border-2 border-primary/20 hover:border-primary transition-all duration-300">
                  {skills[4].icon}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`text-center lg:text-left max-w-2xl transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Greeting */}
            <div className="mb-4">
              <span className="text-lg text-primary font-medium">👋 Hello, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Tanvir Rahman
            </h1>

            {/* Animated Role */}
            <div className="py-6">
              <span className="text-2xl md:text-3xl font-semibold text-primary">
                I'm a{' '}
                <span className="text-secondary">
                  <span 
                    key={currentRole}
                    className="inline-block animate-pulse"
                  >
                    {roles[currentRole]}
                  </span>
                  <span className="animate-blink text-accent">|</span>
                </span>
              </span>
            </div>

            {/* Description */}
            <div className="text-lg mb-8 space-y-3">
              <p className="hover:text-primary transition-colors duration-300">
                🚀 I love building modern web applications and solving complex problems
              </p>
              <p className="hover:text-secondary transition-colors duration-300">
                🧩 Passionate about algorithmic thinking and clean code architecture
              </p>
              <p className="hover:text-accent transition-colors duration-300">
                💡 Always exploring new technologies and optimization techniques
              </p>
              <p className="hover:text-primary transition-colors duration-300">
                🇧🇩 Based in Bangladesh, turning ideas into reality through code
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-primary">🛠️ Tech Stack</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 bg-base-200 px-4 py-2 rounded-full border-2 border-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    {skill.icon}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mb-8 flex justify-center lg:justify-start gap-8 text-center">
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-base-content/70">Problems Solved</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-base-content/70">Projects Built</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-accent">2+</div>
                <div className="text-sm text-base-content/70">Years Experience</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <a 
                href="https://github.com/tanvirrahmanaz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-circle btn-primary btn-outline hover:btn-primary hover:scale-110 transition-all duration-300"
                title="GitHub Profile"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tanvirrahmanaz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-circle btn-primary btn-outline hover:btn-primary hover:scale-110 transition-all duration-300"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://leetcode.com/u/tanvirrahmanaz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-circle btn-secondary btn-outline hover:btn-secondary hover:scale-110 transition-all duration-300"
                title="LeetCode Profile"
              >
                <SiLeetcode className="text-xl" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={resumeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/50"
              >
                📄 Download Resume
              </a>
              <button 
                className="btn btn-outline btn-secondary btn-lg hover:scale-105 transform transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                💬 Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;