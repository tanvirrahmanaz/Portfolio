import React from 'react';
// 1. এখানে FaTwitter এর পরিবর্তে SiLeetcode ইম্পোর্ট করা হয়েছে
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import profilePhoto from '../assets/profile-photo.jpg'; // আপনার ছবির পাথ

const HeroSection = () => {
  const resumeLink = "https://docs.google.com/document/d/1p-4pEeADtmSogOAjDisHHX_qegEweuLkcNTq5cAVGZM/edit?tab=t.0";

  return (
    <section id="home" className="min-h-screen bg-base-100 flex items-center justify-center py-20 px-4">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          
          {/* ডান দিকে ছবি */}
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <img 
              src={profilePhoto} 
              className="w-full h-full object-cover rounded-full shadow-2xl ring ring-primary ring-offset-base-100 ring-offset-4" 
              alt="Profile" 
            />
          </div>

          {/* বাম দিকে তথ্য */}
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-4xl md:text-6xl font-bold">Nazmul Hussain</h1>
            <p className="py-4 text-2xl font-semibold text-primary">Web Developer</p>
            <p className="text-lg">
              Hello! I am from Bangladesh, I make beautiful web apps!
            </p>

            {/* সোশ্যাল আইকন */}
            <div className="flex justify-center lg:justify-start gap-4 my-6">
              <a href="https://github.com/tanvirrahmanaz" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-primary btn-outline">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/tanvirrahmanaz/" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-primary btn-outline">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://leetcode.com/u/tanvirrahmanaz/" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-primary btn-outline">
                {/* 2. এখানে FaTwitter এর জায়গায় SiLeetcode ব্যবহার করা হয়েছে */}
                <SiLeetcode className="text-2xl" />
              </a>
            </div>

            {/* রেজিউমে বাটন */}
            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;