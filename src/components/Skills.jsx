import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Server, 
  GitBranch, 
  Github, 
  Upload,
  Terminal,
  Layers,
  Palette
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: <Code className="text-yellow-400" /> },
      { name: "Python", icon: <Terminal className="text-blue-400" /> },
      { name: "C++", icon: <Code className="text-green-400" /> },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <Layers className="text-cyan-400" /> },
      { name: "Redux", icon: <Database className="text-purple-400" /> },
      { name: "HTML5", icon: <Globe className="text-orange-400" /> },
      { name: "CSS3", icon: <Palette className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <Palette className="text-cyan-400" /> },
      { name: "Material-UI", icon: <Layers className="text-blue-400" /> },
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: <Server className="text-green-400" /> },
      { name: "Express.js", icon: <Server className="text-gray-400" /> },
      { name: "MongoDB", icon: <Database className="text-green-400" /> },
      { name: "Mongoose", icon: <Database className="text-red-400" /> },
      { name: "RESTful APIs", icon: <Globe className="text-emerald-400" /> },
    ]
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", icon: <GitBranch className="text-orange-400" /> },
      { name: "GitHub", icon: <Github className="text-white" /> },
      { name: "VS Code", icon: <Code className="text-blue-400" /> },
      { name: "Heroku", icon: <Upload className="text-purple-400" /> },
      { name: "Netlify", icon: <Upload className="text-cyan-400" /> },
    ]
  },
];

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate skills one by one with delay
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                const totalIndex = categoryIndex * 6 + skillIndex;
                setTimeout(() => {
                  setVisibleItems(prev => [...prev, totalIndex]);
                }, totalIndex * 100);
              });
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 text-white relative overflow-hidden">
      

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600  mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`border border-gray-700 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${categoryIndex * 200}ms`
              }}
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-gray-700 pb-3">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const totalIndex = categoryIndex * 6 + skillIndex;
                  const isItemVisible = visibleItems.includes(totalIndex);
                  
                  return (
                    <div 
                      key={skillIndex} 
                      className={`flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group transform ${
                        isItemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                    >
                      <span className="text-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-bounce" style={{animationDelay: `${totalIndex * 100}ms`, animationDuration: '2s', animationIterationCount: isItemVisible ? '1' : 'infinite'}}>
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;