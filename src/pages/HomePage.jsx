import React from 'react';

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
      <div id="home">
        {/* Hero Section বা প্রথম সেকশন */}
        <section className="h-screen flex justify-center items-center bg-base-100">
             <h1 className="text-4xl sm:text-5xl font-bold text-center">Welcome to My Portfolio</h1>
        </section>
      </div>

      <Section id="about" title="About Me" bgColor="bg-base-200" />
      <Section id="skills" title="My Skills" bgColor="bg-base-100" />
      <Section id="projects" title="My Projects" bgColor="bg-base-200" />
      <Section id="contact" title="Contact Me" bgColor="bg-base-100" />
    </div>
  );
};

export default HomePage;