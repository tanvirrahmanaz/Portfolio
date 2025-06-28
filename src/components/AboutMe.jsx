import React from 'react';
// একটি ছবি ব্যবহার করতে পারেন, যা আপনার ব্যক্তিত্ব প্রকাশ করে।
// ছবিটি src/assets/ ফোল্ডারে রাখতে পারেন।
// import aboutImage from '../assets/about-me-image.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="divider w-24 mx-auto mt-2"></div>
        </div>

        <div className="hero">
          <div className="hero-content flex-col lg:flex-row gap-12 items-center">
            
            {/* এখানে একটি ছবি যোগ করতে পারেন (ঐচ্ছিক) */}
            {/* <div className="w-full max-w-sm">
              <img 
                src={aboutImage} 
                className="rounded-lg shadow-2xl w-full"
                alt="About me" 
              />
            </div>
            */}

            {/* ডান দিকে আপনার সম্পর্কে লেখা */}
            <div className="w-full max-w-2xl text-lg text-base-content/80">
              <p className="mb-4">
                হ্যালো! আমি তানভীর রহমান, একজন প্যাশনেট MERN স্ট্যাক ডেভেলপার, যার মূল লক্ষ্য হলো সুন্দর, কার্যকরী এবং ব্যবহারকারী-বান্ধব ওয়েব অ্যাপ্লিকেশন তৈরি করা। কোডিংয়ের প্রতি আমার ভালোবাসা শুরু হয়েছিল মূলত সমস্যা সমাধানের আনন্দ থেকে। প্রতিটি নতুন চ্যালেঞ্জ আমার কাছে একটি নতুন কিছু শেখার সুযোগ।
              </p>
              <p className="mb-4">
                আমি React ব্যবহার করে ডায়নামিক এবং রেসপন্সিভ ইউজার ইন্টারফেস তৈরি করতে ভালোবাসি। Node.js এবং Express.js দিয়ে শক্তিশালী সার্ভার-সাইড অ্যাপ্লিকেশন তৈরি করা এবং MongoDB-এর মাধ্যমে ডেটা ম্যানেজ করা আমার কাজের মূল অংশ। আমি বিশ্বাস করি, একজন ভালো ডেভেলপারের সবচেয়ে বড় গুণ হলো নতুন প্রযুক্তি দ্রুত শেখার এবং প্রয়োগ করার ক্ষমতা।
              </p>
              <p>
                যখন আমি কোডিং করি না, তখন নতুন কোনো প্রযুক্তি নিয়ে গবেষণা করতে, ওপেন-সোর্স প্রকল্পে অবদান রাখতে বা এক কাপ কফি হাতে ভালো কোনো বই পড়তে পছন্দ করি। আমি সব সময় নতুন সুযোগ এবং সমমনা মানুষদের সাথে কাজ করার জন্য উন্মুখ।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;