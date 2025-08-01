import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#about .text-clip-animation", {
      y: 100,
      duration: 1,
      scrollTrigger: {
        // scrub: true,
        trigger: "#about",
        start: "top 80%",
      },
    });
    gsap.from("#about p", {
      opacity: 0,
      delay: 1,
      duration: 2,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });
  });

  return (
    <section
      id="about"
      className="relative flex-center box-border min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-200 mb-2">
          <span className="text-clip-animation shadow-heading border-b-3 border-primary inline-block">
            About Me
          </span>
        </h1>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-6">
          <span className="text-clip-animation inline-block">
            Full Stack Developer
          </span>
        </h1>

        <div className="relative">
          <img
            src="/myimage.jpg"
            alt="Rahul Bayad"
            className="float-right ml-6 mb-4 w-full sm:w-2xs md:w-xs lg:w-md rounded-lg shadow-md"
          />

          <p className="text-sm md:text-base text-justify mb-4">
            I'm Rahul Bayad, a passionate full-stack developer focused on
            building dynamic, user-friendly web applications. I love bringing
            ideas to life — from designing responsive frontends with React to
            crafting robust backends with Node.js and Express.
          </p>
          <p className="text-sm md:text-base text-justify mb-4">
            Problem-solving drives me. Whether it's debugging tricky logic or
            optimizing performance, I enjoy writing clean, efficient code that
            delivers real value.
          </p>
          <p className="text-sm md:text-base text-justify mb-4">
            Outside of development, I'm always exploring new ideas, learning new
            tools, and staying curious. I believe every day is a chance to grow,
            create, and make an impact — and that's what keeps me going.
          </p>
          <p className="text-sm md:text-base text-justify mb-4">
            I enjoy collaborating with other developers, and continuously
            improving my skills through hands-on experience. Whether I'm working
            on a personal project or contributing to a team effort, I strive to
            write code that is clean, maintainable, and scalable.
          </p>
          <p className="text-sm md:text-base text-justify mb-4">
            My current focus is on deepening my expertise in backend
            architecture and mastering modern frontend tools to deliver seamless
            full-stack solutions. I'm particularly interested in performance
            optimization, security best practices, and creating user experiences
            that feel smooth and intuitive.
          </p>
        </div>
      </div>

      {/* <div className="fixed left-6 top-1/2 -translate-y-1/2 p-2 py-3 flex flex-col gap-4 
        bg-zinc-900 backdrop-blur-2xl border-2 border-zinc-800 rounded-full">
        <a
          href="https://github.com/RahulBayad"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <img src="/icons/github.svg" className="h-7 w-7 invert-100" />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-bayad-57159522b/"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <img src="/icons/linkedin.svg" className="h-7 w-7 invert-100 " />
        </a>
      </div> */}
    </section>
  );
};

export default About;
