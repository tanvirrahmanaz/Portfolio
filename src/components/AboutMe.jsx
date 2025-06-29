import React, { useState, useEffect } from 'react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setAnimateCards(true), 300);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-4 animate-pulse">About Me</h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full transition-all duration-1000 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Left Column - My Journey (spans 2 rows) */}
            <div className={`lg:row-span-2 bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 
              hover:shadow-2xl hover:scale-105 hover:bg-gray-750 transition-all duration-500 
              hover:border-blue-400 group ${
                animateCards ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: '200ms' }}>
              <h4 className="text-xl font-semibold text-white mb-3 flex items-center group-hover:text-blue-300 transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse group-hover:animate-bounce"></span>
                My Journey
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Hello! I'm Tanvir Rahman, a passionate full-stack developer specializing in the MERN stack. 
                My journey began with a fascination for problem-solving and has evolved into a deep love for 
                creating beautiful, functional, and user-friendly web applications that make a real difference.
              </p>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                I believe that a great developer's most valuable trait is the ability to quickly learn and apply 
                new technologies. Every challenge is an opportunity to grow, and I embrace each one with enthusiasm 
                and curiosity.
              </p>
            </div>
            
            {/* Right Column Top - Technical Expertise */}
            <div className={`lg:col-span-2 bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 
              hover:border-blue-500 hover:shadow-2xl hover:scale-105 hover:bg-gray-750 
              transition-all duration-500 cursor-pointer group ${
                animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: '400ms' }}
              onClick={() => scrollToSection('skills')}>
              <h4 className="text-xl font-semibold text-white mb-3 flex items-center group-hover:text-blue-300 transition-colors duration-300">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse group-hover:animate-bounce"></span>
                Technical Expertise
                <span className="ml-auto text-blue-400 text-sm group-hover:text-blue-300 animate-pulse">→ View Skills</span>
              </h4>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                I excel at building dynamic and responsive user interfaces with React, developing robust 
                server-side applications using Node.js and Express.js, and managing data efficiently with MongoDB. 
                Additionally, I work with AI technologies and have hands-on experience in Machine Learning 
                and Natural Language Processing projects.
              </p>
            </div>
            
            {/* Right Column Bottom - Continuous Learning */}
            <div className={`lg:col-span-2 bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 
              hover:border-purple-500 hover:shadow-2xl hover:scale-105 hover:bg-gray-750 
              transition-all duration-500 cursor-pointer group ${
                animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: '600ms' }}
              onClick={() => scrollToSection('projects')}>
              <h4 className="text-xl font-semibold text-white mb-3 flex items-center group-hover:text-purple-300 transition-colors duration-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse group-hover:animate-bounce"></span>
                Continuous Learning
                <span className="ml-auto text-purple-400 text-sm group-hover:text-purple-300 animate-pulse">→ View Projects</span>
              </h4>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                I'm constantly sharpening my skills in Data Structures and Algorithms to write more efficient code. 
                When I'm not coding, you'll find me exploring cutting-edge AI tools, contributing 
                to open-source projects, or diving deep into the latest tech trends.
              </p>
            </div>
          </div>
          
          {/* Bottom - Let's Connect */}
          <div className={`mt-6 relative overflow-hidden rounded-xl shadow-xl group cursor-pointer
            bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 
            hover:from-blue-500 hover:via-indigo-600 hover:to-purple-700
            transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
              animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '800ms' }}
            onClick={() => scrollToSection('contact')}>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
              <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
              <div className="absolute bottom-0 left-1/2 w-12 h-12 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
            </div>
            
            {/* Content */}
            <div className="relative p-6 text-white">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-semibold group-hover:text-yellow-200 transition-colors duration-300 flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse group-hover:animate-bounce"></span>
                  Let's Connect!
                </h4>
                <div className="text-yellow-200 text-sm group-hover:text-yellow-100 animate-pulse flex items-center">
                  <span className="mr-2">Get in Touch</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
              <p className="leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                I'm always excited about new opportunities and collaborating with like-minded people who share 
                a passion for technology and innovation. Let's build something amazing together!
              </p>
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 
              group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
              transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;