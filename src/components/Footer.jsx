import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="  text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright Text */}
          <div className="text-sm">
            &copy; {currentYear} Tanvir Rahman. All Rights Reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/tanvirrahmanaz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tanvirrahmanaz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://leetcode.com/u/tanvirrahmanaz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300"
              aria-label="LeetCode"
            >
              <SiLeetcode size={24} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;