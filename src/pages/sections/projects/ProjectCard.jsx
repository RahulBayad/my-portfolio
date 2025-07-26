import React, { useEffect, useState } from "react";
import Tag from "../../../components/ui/Tag";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Eye } from "lucide-react";

const ProjectCard = (props) => {
  const [index, setIndex] = useState(0);

  // useEffect(()=>{
  //     const interval = setInterval(()=>{
  //         gsap.to("")
  //     },2000)

  // },[])

  const { title, description, techStack, bannerImage, carouselImages, onClick } = props;
  return (
    <div
      key={title}
      className="project-card relative border border-zinc-600 rounded-md w-[400px] overflow-hidden"
    >
      <div 
        className="view absolute top-2 right-2 text-gray-400 z-10 backdrop-blur-2xl p-1 rounded-md 
        opacity-0 hover:opacity-100 cursor-pointer"
        onClick={onClick ? onClick : ""}
      >
        <Eye size={18} />
      </div>
      <figure 
        onClick={onClick ? onClick : ""}
        className="relative flex-center bg-zinc-800 overflow-hidden border-b h-[300px] border-zinc-600 cursor-pointer">
        <img
          src={bannerImage ? bannerImage : "/gallery.png"}
          className="h-full max-w-none max-h-none"
          style={{ maxHeight: "auto" }}
        />
      </figure>
      <h1 className="text-sm w-full font-normal bg-zinc-900  py-0.5 px-1.5 ">
        {title}
      </h1>
      <div className="p-2">
        <p className="text-sm pb-2">{description}</p>
        <div className="flex gap-1 flex-wrap">
          {techStack.length > 0 && techStack.map((stack) => <Tag>{stack}</Tag>)}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
