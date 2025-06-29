import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const resumeLink = "https://docs.google.com/document/d/1p-4pEeADtmSogOAjDisHHX_qegEweuLkcNTq5cAVGZM/edit?tab=t.0";
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          offset={-80} 
          activeClass="active"
          className="relative px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-400 cursor-pointer group text-gray-100"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      <li>
        <Link 
          to="skills" 
          smooth={true} 
          duration={500} 
          offset={-80} 
          activeClass="active"
          className="relative px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-400 cursor-pointer group text-gray-100"
        >
          Skills
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      <li>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          offset={-80} 
          activeClass="active"
          className="relative px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-400 cursor-pointer group text-gray-100"
        >
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      <li>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          offset={-80} 
          activeClass="active"
          className="relative px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-400 cursor-pointer group text-gray-100"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    </>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700'
        : 'bg-gray-900/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-110"></div>
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-transparent group-hover:border-blue-400 transition-all duration-300 shadow-lg" 
                />
              </div>
            </Link>
            <div className="hidden sm:block">
              <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300">
                  Portfolio
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navItems}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            
            {/* Resume Button */}
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center space-x-2">
                <span>Resume</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <div className="dropdown dropdown-end">
                <label 
                  tabIndex={0} 
                  className="btn btn-ghost p-2 rounded-full transition-all duration-300 hover:bg-gray-800 text-gray-100"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </label>
                <ul 
                  tabIndex={0} 
                  className="menu menu-compact dropdown-content mt-3 p-4 shadow-2xl rounded-2xl w-64 border bg-gray-800 border-gray-700 backdrop-blur-md"
                >
                  <li>
                    <Link 
                      to="about" 
                      smooth={true} 
                      duration={500} 
                      offset={-80} 
                      activeClass="active"
                      className="px-4 py-3 text-base font-medium rounded-xl hover:bg-gray-700 hover:text-blue-400 transition-all duration-300 text-gray-100"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="skills" 
                      smooth={true} 
                      duration={500} 
                      offset={-80} 
                      activeClass="active"
                      className="px-4 py-3 text-base font-medium rounded-xl hover:bg-gray-700 hover:text-blue-400 transition-all duration-300 text-gray-100"
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="projects" 
                      smooth={true} 
                      duration={500} 
                      offset={-80} 
                      activeClass="active"
                      className="px-4 py-3 text-base font-medium rounded-xl hover:bg-gray-700 hover:text-blue-400 transition-all duration-300 text-gray-100"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="contact" 
                      smooth={true} 
                      duration={500} 
                      offset={-80} 
                      activeClass="active"
                      className="px-4 py-3 text-base font-medium rounded-xl hover:bg-gray-700 hover:text-blue-400 transition-all duration-300 text-gray-100"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;