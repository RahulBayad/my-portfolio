import {
  Center,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useEffect, useState } from "react";
import Loading from "../../components/ui/Loading";
import { useControls } from "leva";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Check,
  CheckCheck,
  Copy,
  Download,
  Eye,
  MoveRight,
  Phone,
} from "lucide-react";
import Button from "../../components/ui/Button";
import TypingWords from "../../components/ui/TypingWords";
import { myEmail } from "../constants";
import { TextPlugin } from "gsap/TextPlugin";
import Drawer from "../../components/common/Drawer";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
  const introLineRef = useRef();

  const words = ["Designs", "Concepts", "Ideas"];
  const tl = gsap.timeline();

  useGSAP(() => {
    const lines = gsap.utils.toArray(".intro-animate");
    tl.fromTo(
      lines,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.5,
      }
    );

    gsap.to(introLineRef.current, {
      text: "Hello, I'm Rahul Bayad a Full Stack Developer.",
      duration: 2,
      delay: 2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  return (
    <section
      id="home"
      className="relative grid grid-cols-1 px-6 py-24 min-h-screen items-center bg-base-200"
    >
      <div className="z-10 mt-4 text-center select-none">
        <div className="h-full  font-medium flex flex-col justify-center">
          <div className="overflow-hidden uppercase">
            <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex-center flex-row flex-wrap gap-3 intro-animate">
              <span>Shaping</span>
              {/* <span id="typing-animation" className="text-primary"></span> */}
              <TypingWords words={words} />
            </h1>
          </div>

          <div className="overflow-hidden uppercase">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4  intro-animate">
              into Real Projects
            </h1>
          </div>

          <div className="overflow-hidden uppercase">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4  intro-animate">
              that deliver results
            </h1>
          </div>
          <br />
          <br />
          <div className="overflow-hidden">
            <div className="">
              <h1
                className="text-xl md:text-2xl mb-4  intro-animate"
                ref={introLineRef}
              ></h1>
            </div>
          </div>

          <div className="flex-center flex-wrap flex-row text-sm lg:text-base mt-2 gap-2">
            <a href="/resume.pdf" download>
              <Button className="gap-1 py-1.5" variant="primary">
                <Download size={16} />
                <span>Download Resume</span>
              </Button>
            </a>
            <Drawer label="Let's Connect" className="w-[94%] max-w-md lg:w-lg">
              <div className="flex flex-col gap-4 font-light text-sm my-2">
                <div className="border border-zinc-700 rounded-md flex items-center justify-between">
                  <div className="flex-center px-1 h-9 border-r border-zinc-700">
                    <img src="/icons/github.svg" className=" invert-100 h-9" />
                  </div>
                  <span
                    className="px-4 w-full h-9 leading-9 text-left text-nowrap text-ellipsis overflow-hidden 
                      "
                  >
                    https://www.github.com/RahulBayad
                  </span>
                  <a
                    href="https://www.github.com/RahulBayad"
                    target="_blank"
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
                    https://www.linkedin.com/in/rahul-bayad-57159522b
                  </span>
                  <a
                    href="https://www.linkedin.com/in/rahul-bayad-57159522b"
                    target="_blank"
                    title="Visit"
                    className="flex-center px-1.5 h-full border-l border-zinc-700 cursor-pointer"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
