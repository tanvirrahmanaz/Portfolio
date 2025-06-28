import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Project';
import Contact from '../components/Contact';

// একটি সাহায্যকারী সেকশন কম্পোনেন্ট
const Section = ({ id, title, bgColor }) => (
  <section id={id} className={`h-screen flex justify-center items-center ${bgColor}`}>
    <h1 className="text-4xl sm:text-5xl font-bold text-center">{title}</h1>
  </section>
);

const HomePage = () => {
  return (
    <div>
      {/* Navbar এর Link 컴поненте দেওয়া 'to' prop এর সাথে section এর 'id' মিলতে হবে */}
      {/* লোগোতে ক্লিক করলে এখানে স্ক্রল করবে */}
     <HeroSection></HeroSection>

      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;