import React, { createContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Dialog from "../../../components/ui/Dialog";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { projectsArr } from "./constant";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectsArr[0]);

  useGSAP(() => {
    const projectCssSelectors = projectsArr.map((project, index) => {
      return `.project-${index + 1}`;
    });

    projectCssSelectors?.forEach((selector, index) => {
      gsap.from(selector, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: selector,
          scrub: true,
          start: "top 100%",
          end: "top 40%",
        },
      });
      // Description update on top 50%
      ScrollTrigger.create({
        trigger: selector,
        start: "top 50%",
        onEnter: () => setActiveProject(projectsArr[index]),
        // onEnterBack: () => setActiveProject(projectsArr[index]),
        // markers: true
      });
      ScrollTrigger.create({
        trigger: selector,
        start: "top top",
        end: "top 80%",
        onEnterBack: () => setActiveProject(projectsArr[index]),
      });
    });
  });

  return (
    <section id="projects" className="mt-20 py-16 bg-base-100">
      <div className="mb-9 overflow-hidden">
        <span className="text-clip-animation inline-block text-center text-3xl text-shadow-text-md font-bold shadow-heading border-b-3 border-primary">
          Projects
        </span>
      </div>
      <div className="lg:flex gap-8 relative">
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-16 lg:flex flex-col lg:gap-16">
          {projectsArr?.length > 0 &&
            projectsArr?.map((project, index) => (
              <div className="">
                <div
                  key={project?.title}
                  className={`project-${
                    index + 1
                  } w-full lg:min-w-xl border border-zinc-600 rounded-2xl 
                    p-2 sm:p-3 md:h-58 lg:h-auto lg:aspect-4/3 bg-zinc-400/10 backdrop-blur-sm`}
                >
                  <div
                    className={`lg:py-5 px-10 h-full rounded-lg overflow-hidden flex flex-col justify-between ${project?.bgColor}`}
                  >
                    <span className={`text-2xl hidden lg:block`}>
                      {project?.title}
                    </span>
                    <figure className="flex-center">
                      <img
                        src={project?.bannerImage || "/gallery.png"}
                        className={`w-full rounded-lg relative -bottom-9
                        shadow-[0_-3px_20px_5px] ${project.shadow} transition-all  duration-200
                        hover:scale-105 hover:-rotate-2`}
                      />
                    </figure>
                  </div>
                </div>

                {/* Description for mobile */}
                <div className="lg:hidden mt-3">
                  {/* <h2
                    className={`text-xl lg:text-2xl text-wrap font-medium mb-2 ${project.border}`}
                  >
                    {project?.title}
                  </h2> */}
                  <a
                    href={project?.liveLink || "#"}
                    target={project?.liveLink ? "_blank" : "_self"}
                    className="flex items-center gap-2  mb-2 border-b border-transparent hover:border-zinc-400 cursor-pointer"
                  >
                    <h2
                      className={`text-xl text-wrap font-medium ${project.border}`}
                    >
                      {project?.title}
                    </h2>
                    <ArrowUpRight size={20} className="mt-1" />
                  </a>
                  <div className="text-sm">{project?.description()}</div>
                </div>
              </div>
            ))}
        </div>

        {/* Description for Desktop/Laptop */}
        <div className="w-full min-w-sm  hidden lg:flex gap-4 p-4 rounded-lg sticky lg:top-[10%] h-fit">
          <div className="flex-center h-8">
            <div
              className={`border-b-3 ${activeProject.borderColor}  h-1 w-5`}
            ></div>
          </div>
          <div className="w-full">
            <div className="inline-block">
              <a
                href={activeProject?.liveLink || "#"}
                target={activeProject?.liveLink ? "_blank" : "_self"}
                className="flex items-center gap-2  mb-2 border-b border-transparent hover:border-zinc-400 cursor-pointer"
              >
                <h2
                  className={`text-2xl text-wrap font-medium ${activeProject.border}`}
                >
                  {activeProject?.title}
                </h2>
                <ArrowUpRight size={20} className="mt-1" />
              </a>
            </div>
            <div className="leading-relaxed text-wrap break-words w-full">
              {activeProject?.description()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
