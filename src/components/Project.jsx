import React, { useState } from 'react';

// Swiper.js থেকে প্রয়োজনীয় মডিউল ইম্পোর্ট করুন
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper এর CSS ইম্পোর্ট করুন
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// আপনার প্রজেক্টের ছবিগুলো ইম্পোর্ট করুন
import courseflow1 from '../assets/projects/courseflow/1.png';
import courseflow2 from '../assets/projects/courseflow/2.png';
import roommate1 from '../assets/projects/roommate/1.png';
import roommate2 from '../assets/projects/roommate/2.png';

// প্রজেক্টের সব তথ্য এখানে একটি অ্যারেতে গুছিয়ে রাখা হয়েছে
const projectsData = [
  {
    title: "CourseFlow - Course Management",
    images: [courseflow1, courseflow2], // ছবির অ্যারে
    description: "A full-stack e-learning platform where students can enroll in courses with limited seats, and instructors manage their own course content securely.",
    liveLink: "https://course-management-bd.web.app/",
    clientLink: "https://github.com/tanvirrahmanaz/course-management",
    serverLink: "https://github.com/tanvirrahmanaz/Course-management-server",
    features: [
      "Secure user authentication (Firebase + JWT).",
      "Distinct dashboards for Students, Instructors, and Admins.",
      "Instructors can perform CRUD operations on their courses.",
      "Students can enroll in courses, with real-time seat tracking.",
      "Payment integration with Stripe for course enrollment.",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "JWT", "Stripe"],
  },
  {
    title: "Roommate Finder",
    images: [roommate1, roommate2], // ছবির অ্যারে
    description: "A responsive web app for listing and finding shared rooms with secure auth, smart filtering, and real-time availability updates.",
    liveLink: "https://room-mate-finderbd.web.app/",
    clientLink: "https://github.com/tanvirrahmanaz/room-mate-finder-client",
    serverLink: "https://github.com/tanvirrahmanaz/room-mate-finder-server",
    features: [
      "User-friendly interface for posting and Browse room listings.",
      "Advanced search and filtering options based on location, rent, etc.",
      "Secure user registration and login system.",
      "'Like' functionality to save interesting posts.",
      "Real-time availability status for each room.",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Firebase Auth", "Axios", "Framer Motion"],
  },
];


const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleViewDetails = (project) => {
        setSelectedProject(project);
        document.getElementById('project_modal').showModal();
    }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">My Recent Projects</h2>
          <div className="divider w-40 mx-auto mt-2"></div>
        </div>

        {/* পরিবর্তন ২: এখানে লেআউট পরিবর্তন করে একটি কলাম করা হয়েছে এবং max-width যোগ করা হয়েছে */}
        <div className="grid grid-cols-1 max-w-4xl mx-auto gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl overflow-hidden">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-80" // উচ্চতা কিছুটা বাড়ানো হলো
              >
                {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                        {/* পরিবর্তন ১: এখানে ছবির ক্লাস পরিবর্তন করা হয়েছে */}
                        <img 
                            src={image} 
                            alt={`${project.title} screenshot ${imgIndex + 1}`} 
                            className=" h-full object-contain p-4" // পুরো ছবি দেখানোর জন্য object-contain এবং প্যাডিং যোগ করা হলো
                        />
                    </SwiperSlide>
                ))}
              </Swiper>
              <div className="card-body">
                <h2 className="card-title text-2xl">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end mt-4">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary">Live Site</a>
                    <a href={project.clientLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Client</a>
                    <a href={project.serverLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Server</a>
                    <button onClick={() => handleViewDetails(project)} className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <dialog id="project_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            {selectedProject && (
                <>
                    <h3 className="font-bold text-3xl">{selectedProject.title}</h3>
                    <div className="divider"></div>
                    <p className="py-4 text-base">{selectedProject.description}</p>
                    <h4 className="font-semibold text-xl mt-4">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 my-2">
                        {selectedProject.features.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                    <h4 className="font-semibold text-xl mt-4">Technology Used:</h4>
                    <div className="flex flex-wrap gap-2 my-2">
                        {selectedProject.techStack.map((tech, i) => <div key={i} className="badge badge-outline">{tech}</div>)}
                    </div>
                </>
            )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Projects;