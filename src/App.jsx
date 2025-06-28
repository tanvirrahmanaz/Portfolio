import React from 'react';
import Navbar from './components/Navbar';

// সেকশনগুলোতে id দেওয়া হয়েছে যা Navbar এর to এর সাথে মিলবে
const Section = ({ id, title, bgColor }) => (
  <section id={id} className={`h-screen flex justify-center items-center ${bgColor}`}>
    <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
  </section>
);

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Section id="about" title="About Me" bgColor="bg-base-200" />
        <Section id="skills" title="My Skills" bgColor="bg-base-100" />
        <Section id="projects" title="My Projects" bgColor="bg-base-200" />
        <Section id="contact" title="Contact Me" bgColor="bg-base-100" />
      </div>
    </div>
  );
}

export default App;