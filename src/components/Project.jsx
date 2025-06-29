import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Eye, X, Calendar, Users, Code, Star, Heart, Shield, CreditCard, Database, Smartphone, Smile } from 'lucide-react';
import coursephoto1 from '../assets//projects/courseflow/1.png';
import coursephoto2 from '../assets//projects/courseflow/2.png';
import coursephoto3 from '../assets//projects/courseflow/3.png';
import coursephoto4 from '../assets//projects/courseflow/4.png';
import coursephoto5 from '../assets//projects/courseflow/5.png';
import coursephoto6 from '../assets//projects/courseflow/6.png';

import roomphoto1 from '../assets/projects/roommate/1.png';
import roomphoto2 from '../assets/projects/roommate/2.png';
import roomphoto3 from '../assets/projects/roommate/3.png';
import roomphoto4 from '../assets/projects/roommate/4.png';
import roomphoto5 from '../assets/projects/roommate/5.png';


import billpayphoto1 from '../assets/projects/billpay/1.png';
import billpayphoto2 from '../assets/projects/billpay/2.png';
import billpayphoto3 from '../assets/projects/billpay/3.png';
import billpayphoto4 from '../assets/projects/billpay/4.png';
import billpayphoto5 from '../assets/projects/billpay/5.png';

// Mock project images - Replace with your actual image paths
const projectImages = {
  courseflow: [
    coursephoto1,
    coursephoto2,
    coursephoto3,
    coursephoto4,
    coursephoto5,
    coursephoto6
  ],
  roommate: [
    roomphoto1,
    roomphoto2,
    roomphoto3,
    roomphoto4,
    roomphoto5
  ],
  billpay: [
    billpayphoto1,
    billpayphoto2,
    billpayphoto3,
    billpayphoto4,
    billpayphoto5
  ]
};

const projectsData = [
  {
    id: 1,
    title: "CourseFlow - Course Management System",
    shortDescription: "A full-stack e-learning platform where students can enroll in courses with limited seats, and instructors manage their own course content securely.",
    images: projectImages.courseflow,
    liveLink: "https://course-management-bd.web.app/",
    clientLink: "https://github.com/tanvirrahmanaz/course-management",
    serverLink: "https://github.com/tanvirrahmanaz/Course-management-server",
    category: "Full Stack Web Application",
    duration: "3 weeks",
    status: "Completed",
    detailedDescription: "CourseFlow is a comprehensive course management system that bridges the gap between students and instructors in the digital learning space. The platform features a modern, intuitive interface built with React and styled with Tailwind CSS, ensuring a seamless user experience across all devices.",
    keyFeatures: [
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Secure Authentication",
        description: "Firebase authentication with email/password and social login options, protected with JWT tokens"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Role-Based Dashboards",
        description: "Distinct dashboards for Students, Instructors, and Admins with personalized functionality"
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "CRUD Operations",
        description: "Instructors can create, read, update, and delete their courses with real-time validation"
      },
      {
        icon: <Calendar className="w-5 h-5" />,
        title: "Enrollment Management",
        description: "Students can enroll in up to 3 courses simultaneously with real-time seat tracking"
      },
      {
        icon: <CreditCard className="w-5 h-5" />,
        title: "Payment Integration",
        description: "Secure payment processing with Stripe for course enrollment and transactions"
      },
      {
        icon: <Smartphone className="w-5 h-5" />,
        title: "Responsive Design",
        description: "Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices"
      }
    ],
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "Express.js", color: "bg-gray-100 text-gray-800" },
      { name: "MongoDB", color: "bg-green-100 text-green-800" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
      { name: "Firebase", color: "bg-orange-100 text-orange-800" },
      { name: "JWT", color: "bg-purple-100 text-purple-800" },
      { name: "Stripe", color: "bg-indigo-100 text-indigo-800" }
    ],
    challenges: [
      "Implementing real-time seat tracking across multiple user sessions",
      "Designing a secure JWT-based authentication system",
      "Creating responsive dashboards for different user roles",
      "Integrating Stripe payment gateway with enrollment system"
    ],
    achievements: [
      "Successfully deployed with 99.9% uptime",
      "Implemented secure payment processing",
      "Created intuitive user interface with positive feedback",
      "Built scalable architecture supporting concurrent users"
    ]
  },
  {
    id: 2,
    title: "Roommate Finder Platform",
    shortDescription: "A responsive web app for listing and finding shared rooms with secure auth, smart filtering, and real-time availability updates.",
    images: projectImages.roommate,
    liveLink: "https://room-mate-finderbd.web.app/",
    clientLink: "https://github.com/tanvirrahmanaz/room-mate-finder-client",
    serverLink: "https://github.com/tanvirrahmanaz/room-mate-finder-server",
    category: "Social Platform",
    duration: "2.5 weeks",
    status: "Completed",
    detailedDescription: "Roommate Finder is a comprehensive platform designed to help individuals find compatible roommates based on location, budget, lifestyle preferences, and interests. The application facilitates seamless connections between potential roommates through advanced filtering and real-time communication features.",
    keyFeatures: [
      {
        icon: <Users className="w-5 h-5" />,
        title: "Smart Matching",
        description: "Advanced algorithms to match users based on lifestyle preferences, budget, and location"
      },
      {
        icon: <Heart className="w-5 h-5" />,
        title: "Like & Save",
        description: "Users can like and save interesting listings for later reference and contact"
      },
      {
        icon: <Database className="w-5 h-5" />,
        title: "Real-time Updates",
        description: "Live availability status updates and instant notifications for new matches"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Secure Profiles",
        description: "Verified user profiles with secure authentication and privacy controls"
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "Advanced Filtering",
        description: "Comprehensive search filters for location, rent range, room type, and lifestyle preferences"
      },
      {
        icon: <Smartphone className="w-5 h-5" />,
        title: "Mobile Optimized",
        description: "Fully responsive design optimized for mobile-first user experience"
      }
    ],
    techStack: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Vite", color: "bg-purple-100 text-purple-800" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
      { name: "DaisyUI", color: "bg-green-100 text-green-800" },
      { name: "Firebase Auth", color: "bg-orange-100 text-orange-800" },
      { name: "Axios", color: "bg-red-100 text-red-800" },
      { name: "Framer Motion", color: "bg-pink-100 text-pink-800" },
      { name: "React Router", color: "bg-indigo-100 text-indigo-800" }
    ],
    challenges: [
      "Implementing complex filtering system for roommate matching",
      "Designing intuitive user interface for mobile and desktop",
      "Creating real-time availability status updates",
      "Building secure messaging system between users"
    ],
    achievements: [
      "Created user-friendly interface with high engagement rates",
      "Implemented advanced search and filtering capabilities",
      "Built responsive design that works across all devices",
      "Successfully integrated real-time features for better user experience"
    ]
  },
  {
  id: 2,
  title: "BillPay - Bill Payment Application",
  shortDescription: "A modern web application for managing and paying utility bills with a beautiful UI and smooth user experience.",
  images: projectImages.billpay, // তুমি তোমার image গুলো যেখানে রাখো সেই অনুযায়ী ঠিক করে নিও
  liveLink: "https://bill-pay-873f7.web.app/",
  clientLink: "https://github.com/tanvirrahmanaz/Bill-Pay",
  category: "Frontend Web Application",
  duration: "2 weeks",
  status: "Completed",
  detailedDescription: "BillPay is a user-friendly bill payment platform that enables users to securely manage and pay their utility bills online. Designed with a clean, responsive UI, it ensures a seamless and efficient experience across all devices.",
  keyFeatures: [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure Authentication",
      description: "Firebase authentication using email/password and Google login with protected routes"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Bill Management",
      description: "Users can view, filter, and pay bills in real-time with detailed billing history"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Payment History",
      description: "Track past payments with timestamped records and detailed transaction data"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Responsive Design",
      description: "Mobile-first layout with touch-friendly UI and adaptive component behavior"
    },
    {
      icon: <Smile className="w-5 h-5" />,
      title: "Enhanced UX",
      description: "Interactive animations, toast notifications, and confetti effects enhance user satisfaction"
    }
  ],
  techStack: [
    { name: "React", color: "bg-blue-100 text-blue-800" },
    { name: "React Router DOM", color: "bg-violet-100 text-violet-800" },
    { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
    { name: "DaisyUI", color: "bg-rose-100 text-rose-800" },
    { name: "Framer Motion", color: "bg-pink-100 text-pink-800" },
    { name: "Firebase", color: "bg-orange-100 text-orange-800" },
    { name: "React Hot Toast", color: "bg-yellow-100 text-yellow-800" },
    { name: "React Icons", color: "bg-slate-100 text-slate-800" }
  ],
  challenges: [
    "Implementing secure and smooth authentication with multiple providers",
    "Creating a clean, responsive layout with Tailwind & DaisyUI",
    "Managing real-time state updates for bill status and history",
    "Providing user feedback with dynamic notifications and animations"
  ],
  achievements: [
    "Deployed with Firebase Hosting ensuring fast global access",
    "Created an intuitive and responsive design with strong user engagement",
    "Integrated confetti & toast feedback system to improve user satisfaction",
    "Developed a simple yet powerful bill filtering and tracking interface"
  ]
}

];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageSlideIndexes, setImageSlideIndexes] = useState({});
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageProject, setSelectedImageProject] = useState(null);

  // Auto-slide images for each project
  useEffect(() => {
    const intervals = projectsData.map((project, projectIndex) => {
      return setInterval(() => {
        setImageSlideIndexes(prev => ({
          ...prev,
          [projectIndex]: (prev[projectIndex] || 0) + 1 >= project.images.length ? 0 : (prev[projectIndex] || 0) + 1
        }));
      }, 3000 + projectIndex * 500); // Stagger the intervals
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleImageClick = (project, imageIndex) => {
    setSelectedImageProject(project);
    setCurrentImageIndex(imageIndex);
    setIsImageModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImageProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImageProject) {
      setCurrentImageIndex((prev) =>
        prev + 1 >= selectedImageProject.images.length ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedImageProject) {
      setCurrentImageIndex((prev) =>
        prev - 1 < 0 ? selectedImageProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 min-h-screen ">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest full-stack development projects showcasing modern web technologies and innovative solutions
          </p>
          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {projectsData.map((project, projectIndex) => (
            <div key={project.id} className="group bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Image Slider */}
<div className="relative h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
  <div
    className="flex transition-transform duration-700 ease-in-out h-full"
    style={{ transform: `translateX(-${(imageSlideIndexes[projectIndex] || 0) * 100}%)` }}
  >
    {project.images.map((image, imgIndex) => (
      <img
        key={imgIndex}
        src={image}
        alt={`${project.title} screenshot ${imgIndex + 1}`}
        className="w-full h-full object-cover flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => handleImageClick(project, imgIndex)}
      />
    ))}
  </div>

  {/* Image indicators - Mobile (centered) / Desktop (bottom) */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {project.images.map((_, index) => (
      <button
        key={index}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          (imageSlideIndexes[projectIndex] || 0) === index
            ? 'bg-white scale-125'
            : 'bg-white/50 hover:bg-white/75'
        }`}
        onClick={() => setImageSlideIndexes(prev => ({ ...prev, [projectIndex]: index }))}
      />
    ))}
  </div>

  {/* Category Badge - Mobile (smaller) / Desktop (normal) */}
  <div className="absolute top-3 left-3 lg:bottom-4 lg:left-4">
    <span className="bg-blue-600 text-white px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs lg:text-sm font-medium shadow-lg">
      {project.category}
    </span>
  </div>

  {/* Status Badge - Mobile (smaller) / Desktop (normal) */}
  <div className="absolute top-3 right-3 lg:bottom-4 lg:right-4">
    <span className="bg-green-500 text-white px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs lg:text-sm font-medium shadow-lg flex items-center gap-1">
      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full animate-pulse"></div>
      {project.status}
    </span>
  </div>
</div>

                {/* Right Side - Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.slice(0, 6).map((tech, index) => (
                      <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300 border border-gray-600">
                        {tech.name}
                      </span>
                    ))}
                    {project.techStack.length > 6 && (
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                        +{project.techStack.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {/* Live Demo Button */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>

                    {/* Frontend Button */}
                    <a
                      href={project.clientLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-600 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-600/20 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:border-transparent hover:shadow-md hover:shadow-purple-500/20"
                    >
                      <Github className="w-4 h-4" />
                      Frontend
                    </a>

                    {/* Backend Button */}
                    <a
                      href={project.serverLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-600 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-600/20 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:border-transparent hover:shadow-md hover:shadow-purple-500/20"
                    >
                      <Database className="w-4 h-4" />
                      Backend
                    </a>

                    {/* View Details Button */}
                    <button
                      onClick={() => handleViewDetails(project)}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-purple-600/30 hover:from-blue-500 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl border border-gray-600 hover:border-transparent"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>
            {/* Modal Content */}
            <div className="p-6">
              {/* Project Overview */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                  <Star className="w-5 h-5 text-blue-400" />
                  Project Overview
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {selectedProject.detailedDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <div className="font-semibold text-blue-400">Duration</div>
                    <div className="text-gray-300">{selectedProject.duration}</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <div className="font-semibold text-green-400">Status</div>
                    <div className="text-gray-300">{selectedProject.status}</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <div className="font-semibold text-purple-400">Category</div>
                    <div className="text-gray-300">{selectedProject.category}</div>
                  </div>
                </div>
              </div>
              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-white">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-700">
                      <div className="text-blue-400 mt-1">{feature.icon}</div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">{feature.title}</h5>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Technology Stack */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-white">Technology Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="px-4 py-2 rounded-lg font-medium bg-gray-800 text-gray-300 border border-gray-600 shadow-sm">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              {/* Challenges & Solutions */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-white">Challenges & Solutions</h4>
                <div className="space-y-3">
                  {selectedProject.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border-l-4 border-blue-400 bg-gray-800 rounded-r-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-white">Key Achievements</h4>
                <div className="space-y-3">
                  {selectedProject.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border-l-4 border-blue-400 bg-gray-800 rounded-r-lg">
                      <Star className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </a>

                <a
                  href={selectedProject.clientLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
                >
                  <Github className="w-5 h-5" />
                  Frontend Code
                </a>

                <a
                  href={selectedProject.serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
                >
                  <Database className="w-5 h-5" />
                  Backend Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && selectedImageProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative">
              <img
                src={selectedImageProject.images[currentImageIndex]}
                alt={`${selectedImageProject.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {selectedImageProject.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === index
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                    }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;