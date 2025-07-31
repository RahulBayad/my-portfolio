import { ArrowUpRight, Mail } from "lucide-react";
import React from "react";
import { myEmail, myGithub, myLinkedin } from "../../pages/constants";

const ContactDrawer = () => {
  return (
    <div className="flex flex-col gap-4 font-light text-sm my-2">
      <div className="border border-zinc-700 rounded-md flex items-center justify-between">
        <div className="flex-center px-1 min-w-9 h-9 border-r border-zinc-700">
          {/* <img src="/icons/github.svg" className=" invert-100 h-9" /> */}
          <Mail size={22} />
        </div>
        <span
          className="px-4 w-full h-9 leading-9 text-left text-nowrap text-ellipsis overflow-hidden 
                      "
        >
          {myEmail}
        </span>
        <a
          href={`mailto:${myEmail}`}
          title="Visit"
          className="flex-center px-1.5 border-l border-zinc-700 cursor-pointer"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>

      <div className="border border-zinc-700 rounded-md flex items-center justify-between">
        <div className="flex-center px-1 h-9 border-r border-zinc-700">
          <img src="/icons/linkedin.svg" className="invert-100 h-9" />
        </div>
        <span className="px-4 w-full text-left text-nowrap text-ellipsis overflow-hidden">
          {myLinkedin}
        </span>
        <a
          href={myLinkedin}
          target="_blank"
          title="Visit"
          className="flex-center px-1.5 h-full border-l border-zinc-700 cursor-pointer"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="border border-zinc-700 rounded-md flex items-center justify-between">
        <div className="flex-center px-1 h-9 border-r border-zinc-700">
          <img src="/icons/github.svg" className=" invert-100 h-9" />
        </div>
        <span
          className="px-4 w-full h-9 leading-9 text-left text-nowrap text-ellipsis overflow-hidden 
                      "
        >
          {myGithub}
        </span>
        <a
          href={myGithub}
          target="_blank"
          title="Visit"
          className="flex-center px-1.5 border-l border-zinc-700 cursor-pointer"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default ContactDrawer;
