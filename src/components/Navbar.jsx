import React from 'react';
import { Link } from 'react-scroll'; // স্মুথ স্ক্রলিং এর জন্য
import logo from '../assets/logo.png'; // আপনার লোগো

const Navbar = () => {
  const resumeLink = "https://docs.google.com/document/d/1p-4pEeADtmSogOAjDisHHX_qegEweuLkcNTq5cAVGZM/edit?tab=t.0";

  const navItems = (
    <>
      <li><Link to="about" smooth={true} duration={500} offset={-80} activeClass="active">About</Link></li>
      <li><Link to="skills" smooth={true} duration={500} offset={-80} activeClass="active">Skills</Link></li>
      <li><Link to="projects" smooth={true} duration={500} offset={-80} activeClass="active">Projects</Link></li>
      <li><Link to="contact" smooth={true} duration={500} offset={-80} activeClass="active">Contact</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 px-4">
      <div className="navbar-start">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-10 sm:h-12" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-base font-semibold">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm sm:btn-md mr-4 lg:mr-0">
          Resume
        </a>
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base font-semibold">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;