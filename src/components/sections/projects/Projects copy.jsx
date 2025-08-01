import React, { createContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Dialog from "../../../components/ui/Dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (!activeProject) return;
    setCurrentIndex((prev) =>
      prev === activeProject.carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!activeProject) return;
    setCurrentIndex((prev) =>
      prev === 0 ? activeProject.carouselImages.length - 1 : prev - 1
    );
  };

  // Optional: Reset current index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeProject]);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setCurrentIndex(0)
    setIsDialogOpen(false)
  };

  return (
    <div>
      <section id="projects" className="py-16 bg-base-100">
        <div className="mb-8 overflow-hidden">
          <span className="text-clip-animation inline-block text-center text-3xl text-shadow-text-md font-bold shadow-heading border-b-3 border-primary">
            Projects
          </span>
        </div>
        <div className="flex gap-3">
          {projectsArr.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              bannerImage={project.bannerImage}
              onClick={() => {
                setActiveProject(project);
                openDialog();
              }}
            />
          ))}
          <Dialog
            isOpen={isDialogOpen}
            handleClose={closeDialog}
            title={activeProject?.title}
            className=""
          >
            <div>
              <figure className="flex overflow-hidden">
                {activeProject?.carouselImages?.length > 0 && (
                  <div className="relative w-full">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                      }}
                    >
                      {activeProject.carouselImages.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt={`Slide ${index + 1}`}
                          className="min-w-full  object-contain rounded-sm"
                        />
                      ))}
                    </div>

                    {/* Arrows */}
                    <button
                      onClick={handlePrev}
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 p-1 rounded-full text-white"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 p-1 rounded-full text-white"
                    >
                      <ChevronRight />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-1 mt-2">
                      {activeProject.carouselImages.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === currentIndex
                              ? "bg-zinc-200"
                              : "bg-zinc-600"
                          }`}
                          onClick={() => setCurrentIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </figure>
            </div>
          </Dialog>
        </div>
      </section>
    </div>
  );
};

export default Projects;
