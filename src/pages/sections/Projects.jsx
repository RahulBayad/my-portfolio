import React from "react";
import Tag from "../../components/ui/Tag";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React, DaisyUI, and Three.js.",
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack MERN e-commerce app with authentication and payment integration.",
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blog platform with markdown support and user profiles.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-base-100">
      <div className="mb-8 overflow-hidden">
        <span className="text-clip-animation inline-block text-center text-3xl text-shadow-text-md font-bold shadow-heading border-b-3 border-primary">
          Projects
        </span>
      </div>
      <div className="flex gap-3">
        <div className="relative border border-zinc-600 rounded-md w-[250px] overflow-hidden">
          <figure className="relative object-center overflow-hidden border-b border-zinc-600">
            <img src="/gallery.png" className="h-full" />
            <h1 className="text-sm absolute w-full bottom-0 py-0.5 px-1.5 bg-[rgba(256,256,256,0.1)] backdrop-blur-2xl">Urban Service</h1>
          </figure>
          <div className="p-2">
            <p className="text-sm">
              Developed a full-stack platform using React, Node.js, Express.js,
              and MongoDB, with REST APIs for seamless frontend-backend
              communication. Built features like service booking, slot
              management, and category-based browsing to enhance user
              experience.
            </p>
            <div className="flex gap-1 flex-wrap">
              <Tag className="">React.js</Tag>
              <Tag className="">Node.js</Tag>
              <Tag className="">Express.js</Tag>
              <Tag className="">MongoDB</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
