import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Project';
import Contact from '../components/Contact';
import bgImage from '../assets/bg.jpg';
import Footer from '../components/Footer';

// একটি সাহায্যকারী সেকশন কম্পোনেন্ট


const homePageStyle = {
        backgroundImage: `url(${bgImage})`
    };

const HomePage = () => {
  return (
    <div style={homePageStyle}   className='bg-cover bg-center bg-fixed bg-no-repeat'>
      {/* Navbar এর Link 컴поненте দেওয়া 'to' prop এর সাথে section এর 'id' মিলতে হবে */}
      {/* লোগোতে ক্লিক করলে এখানে স্ক্রল করবে */}
     <HeroSection></HeroSection>

      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;