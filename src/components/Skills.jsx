import React from 'react';
// শুধুমাত্র সাধারণ এবং সব ভার্সনে থাকা আইকনগুলো ইম্পোর্ট করা হয়েছে
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGitAlt, FaGithub, FaNodeJs, FaDatabase, FaCloudUploadAlt, FaCode, FaServer 
} from 'react-icons/fa';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "C++", icon: <FaCode className="text-blue-600" /> }, // Generic Icon
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Redux", icon: <FaCode className="text-purple-500" /> }, // Generic Icon
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt className="text-cyan-500" /> }, // Generic Icon
      { name: "Material-UI", icon: <FaCode className="text-blue-500" /> }, // Generic Icon
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <FaServer className="text-gray-400" /> }, // Generic Icon
      { name: "MongoDB", icon: <FaDatabase className="text-green-600" /> }, // Generic Icon
      { name: "Mongoose", icon: <FaDatabase className="text-red-700" /> }, // Generic Icon
      { name: "RESTful APIs", icon: <span className="text-green-400">🌐</span> },
    ]
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-400" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-500" /> }, // Generic Icon
      { name: "Heroku", icon: <FaCloudUploadAlt className="text-purple-600" /> }, // Generic Icon
      { name: "Netlify", icon: <FaCloudUploadAlt className="text-cyan-400" /> }, // Generic Icon
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Technical Skills</h2>
          <div className="divider w-24 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">{category.title}</h3>
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3 text-lg">
                      <span className="text-2xl">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;