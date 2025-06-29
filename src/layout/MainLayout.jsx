import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // আগের উত্তরে বানানো Navbar
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* The Outlet will render the component for the matched route */}
        <Outlet /> 
      </main>
    </>
  );
};

export default MainLayout;