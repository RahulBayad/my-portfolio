import React, { createContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Dialog from "../../../components/ui/Dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      <div className="flex gap-8  relative">
        <div className="flex flex-col gap-16 border-red-500">
          {projectsArr?.length > 0 &&
            projectsArr?.map((project, index) => (
              <div
                key={project?.title}
                className={`project-${
                  index + 1
                } w-full lg:min-w-xl lg:w-2xl  border border-zinc-600 rounded-2xl p-3 aspect-4/3  bg-zinc-400/10 backdrop-blur-sm`}
              >
                <div
                  className={`p-7 px-12 h-full rounded-lg overflow-hidden flex flex-col justify-between ${project?.bgColor}`}
                >
                  <span className={`text-2xl `}>{project?.title}</span>
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
            ))}
        </div>
        <div className="w-full flex gap-4 sticky lg:top-1/4 h-52">
          <div className="flex-center h-8">
            <div
              className={`border-b-3 ${activeProject.borderColor}  h-1 w-5`}
            ></div>
          </div>
          <div>
            <h2 className={`text-2xl font-medium mb-2 ${activeProject.border}`}>
              {" "}
              {activeProject?.title}
            </h2>
            {activeProject?.description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
