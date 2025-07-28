import React, { createContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Dialog from "../../../components/ui/Dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const projectsArr = [
  {
    title: "Urban Service",
    description: `Developed a full-stack platform using React, Node.js, Express.js,
        and MongoDB, with REST APIs for seamless frontend-backend
        communication. Built features like service booking, slot
        management, and category-based browsing to enhance user
        experience.`,
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Rest APIs",
      "Cloudinary",
    ],
    bannerImage: "/gallery.png",
    carouselImages: [
      "/projects/apexchat/img1.png",
      "/projects/apexchat/img2.png",
      "/projects/apexchat/img3.png",
      "/projects/apexchat/img4.png",
      "/projects/apexchat/img5.png",
    ],
  },
  {
    title: "Apex Chat Landing Page",
    description: ` Developed a fully responsive chat app landing page using HTML, CSS,
              and JavaScript. Implemented interactive UI components for enhanced
              user experience.`,
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    bannerImage: "/projects/apexchat/img1.png",
    carouselImages: [
      "/projects/apexchat/img1.png",
      "/projects/apexchat/img2.png",
      "/projects/apexchat/img3.png",
      "/projects/apexchat/img4.png",
      "/projects/apexchat/img5.png",
    ],
  },
];

const Projects = () => {
  const [projectDescription, setProjectDescription] = useState(
    projectsArr[0].description
  );

  useGSAP(() => {
    
    gsap.from(".project-1", {
      scale: 0.5,
      duration: 200,
      scrollTrigger: {
        trigger: ".project-1",
        top: "20%",
        scrub: true,
        onEnter: () => {
          
          setProjectDescription(projectsArr[0].description);
        },
        onEnterBack: () => {
          setProjectDescription(projectsArr[0].description);
        },
      },
    });
    gsap.from(".project-2", {
      scale: 0.5,
      duration: 200,
      scrollTrigger: {
        trigger: ".project-2",
        top: "20%",
        scrub: true,
        onEnter: () => {
          setProjectDescription(projectsArr[0].description);
        },
        onEnterBack: () => {
          setProjectDescription(projectsArr[0].description);
        },
      },
    });
  });

  return (
    <div>
      <section id="projects" className="py-16 bg-base-100">
        <div className="mb-8 overflow-hidden">
          <span className="text-clip-animation inline-block text-center text-3xl text-shadow-text-md font-bold shadow-heading border-b-3 border-primary">
            Projects
          </span>
        </div>
        <div className="flex gap-3  relative">
          <div className="flex flex-col gap-10 border-red-500">
            <div className="project-1 w-[50vw] border border-zinc-600 rounded-md p-3 aspect-[4/3] bg-zinc-400/10 backdrop-blur-sm">
              <div className="p-5 px-8 h-full bg-pink-950 rounded-sm overflow-hidden flex flex-col justify-between">
                <span className="text-xl text-pink-200">Landing Page</span>
                <figure className="flex-center">
                  <img
                    src="/projects/apexchat/image.png"
                    className="w-[90%] rounded-lg relative -bottom-10 
                      shadow-[0_-10px_30px_10px] shadow-pink-800 transition-all  duration-200
                      hover:scale-110 hover:-rotate-2"
                  />
                </figure>
              </div>
            </div>
            <div className="project-2 w-[50vw] border border-zinc-600 rounded-md p-3 aspect-[4/3] bg-zinc-400/10 backdrop-blur-sm">
              <div className="p-5 px-8 h-full bg-pink-950 rounded-sm overflow-hidden flex flex-col justify-between">
                <span className="text-xl text-pink-200">Landing Page</span>
                <img
                  src="/projects/apexchat/image.png"
                  className="w-full rounded-lg relative -bottom-10 
                    shadow-[0_-10px_30px_10px] shadow-pink-800 transition-all  duration-200
                    hover:scale-105 hover:-rotate-2"
                />
              </div>
            </div>
          </div>
          <div className="w-fulll  sticky top-20 h-52">
            {projectDescription}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
