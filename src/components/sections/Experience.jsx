import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Briefcase,
  BriefcaseBusiness,
  Flag,
  FlagTriangleRight,
  MapPin,
  User,
} from "lucide-react";
import Card from "../../components/ui/Card";
import Tag from "../../components/ui/Tag";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    title: "Node.js Internship",
    company: "Tech Nishal",
    location: "Ahmedabad, Gujarat, India",
    type: "Office",
    duration: "July 2023 - August 2023",
    description: () => (
      <div>
        <ul className="list-disc pl-4.5">
          <li>
            Strengthened backend development skills with advanced JavaScript and
            Node.js.
          </li>
          <li>Worked with the native HTTP module and Express.js.</li>
          <li>Built and managed RESTful APIs with full CRUD functionality.</li>
          <li>Focused on clean architecture and modular code structure.</li>
        </ul>
        {/* <div>
          <Tag>Node.js</Tag>
        </div> */}
      </div>
    ),
  },
  {
    title: "MERN Stack Internship",
    location: "Ahmedabad, Gujarat, India",
    company: "Arth Infosoft Pvt. Ltd.",
    type: "Office",
    duration: "Jan 2024 - Apr 2024",
    description: () => (
      <div className="font-">
        <p className="pb-2">
          During my internship, I deepened my understanding of full-stack web
          development using MongoDB, Express.js, React.js, and Node.js. On the
          frontend, I worked extensively with advanced React concepts like
          hooks, props drilling, component architecture, and state management,
          which improved my ability to build scalable and responsive user
          interfaces.
        </p>
        <p>
          On the backend, I built RESTful APIs using Express.js and Node.js,
          handling routing, middleware, and server-side logic. I also integrated
          MongoDB for data persistence, working with CRUD operations and schema
          design. This internship gave me a solid foundation in building
          complete web applications and understanding the end-to-end flow
          between client and server.
        </p>
      </div>
    ),
  },
  {
    title: "Web Researcher",
    location: "Ahmedabad, Gujarat, India",
    company: "Diya Infotech",
    type: "Office",
    duration: "Nov 2024 - Feb 2025",
    description: () => (
      <ul className="list-disc pl-4.5">
        <li>
          Specialized in collecting accurate and structured data for Crunchbase
          by sourcing from a variety of online platforms.
        </li>
        <li>
          Performed deep-dive research on market trends, industry developments,
          and competitor analysis.
        </li>
        <li>
          Applied domain understanding to ensure research outputs were both
          relevant and insightful.
        </li>
        <li>
          Maintained high standards of data accuracy, completeness, and
          consistency to support business intelligence.
        </li>
      </ul>
    ),
  },
  {
    title: "Frontend Developer",
    location: "Ahmedabad, Gujarat, India",
    company: "Aazovo",
    type: "Office",
    duration: "Feb 2025 - Present",
    description: () => (
      <div className="">
        <p className="pb-2">
          I am currently working as a Frontend Developer, where I develop and
          maintain responsive and user-friendly web pages for the company
          website using HTML, CSS, and JavaScript. My role focuses on crafting
          intuitive interfaces that ensure a seamless experience across
          different devices.
        </p>
        <p>
          I'm also actively contributing to the development of an internal admin
          panel using React.js with TypeScript. Working in a live project
          environment, I collaborate with the team to build scalable features
          and improve workflow efficiency, gaining valuable hands-on experience
          in real-world development practices.
        </p>
      </div>
    ),
  },
];

const Experience = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.to(".track-thumb", {
      top: "98%",
      ease: "none",
      scrollTrigger: {
        trigger: "#experience",
        start: "top 10%",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.to(".scrolled-track", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "#experience",
        start: "top 10%",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-12 w-full bg-base-200"
    >
      <div className="mb-8 overflow-hidden">
        <span className="text-clip-animation inline-block text-center text-3xl text-shadow-text-md font-bold shadow-heading border-b-3 border-primary">
          Experience
        </span>
      </div>
      <div className="grid sm:grid-cols-[20px_auto] gap-x-3 lg:gap-x-5">
        {/* For Track */}
        <div className="relative flex-center">
          <div className="track w-1.5 h-[100%] bg-zinc-800 flex justify-center overflow-visible rounded-sm">
            <div
              className="scrolled-track w-1.5 rounded-sm h-0 shadow-[0_0_6px_1px] shadow-blue-600"
              style={{
                background: "linear-gradient(to bottom, #0080ff 85%, #006dd9 )",
              }}
            ></div>
            <div className="track-thumb absolute w-8 h-8 flex-center -top-0.5 bg-zinc-700 shrink-0 rounded-full ">
              <FlagTriangleRight size={16} />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-8">
          {experience.map((exp, idx) => (
            <div
              key={exp.title}
              className={`bg-zinc-900 top-10 sm:border border-zinc-800 p-3 sm:p-5 flex flex-col md:flex-row  gap-10
                rounded-lg w-full`}
            >
              <div className="flex flex-col min-w-[250px] text-sm gap-y-1">
                <span className="uppercase text-xs">{exp.duration}</span>
                <h2 className="text-xl sm:text-2xl mb-1">{exp.company}</h2>
                <span className="flex gap-1.5 items-center">
                  <MapPin size={14} /> {exp.location}
                </span>
                <span className="flex gap-1.5 items-center">
                  <BriefcaseBusiness size={14} /> {exp.type}
                </span>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-medium mb-2">{exp.title}</h2>
                <div className="text-sm sm:text-base">
                  {exp.description()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
