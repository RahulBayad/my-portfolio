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
import { Check, CheckCheck, Copy, Download, MoveRight, Phone } from "lucide-react";
import Button from "../../components/ui/Button";
import TypingWords from "../../components/ui/TypingWords";
import { myEmail } from "../constants";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
  const introLineRef = useRef();

  const [copied, setCopied] = useState(false)
  const words = ["Designs", "Concepts", "Ideas"];
  const [wordIdx, setWordIdx] = useState(0)
  const tl = gsap.timeline()

  function handleCopyEmail() {
    setCopied(true)
    navigator.clipboard.writeText(myEmail)

    setTimeout(() => setCopied(false), 3000)
  }

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
      delay: 2
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  return (
    <section
      id="introduction"
      className="relative grid grid-cols-1 px-6 py-24 min-h-screen items-center bg-base-200"
    >
      <div className="z-10 mt-4 text-center ">
        <div className="h-full  font-medium flex flex-col justify-center">
          <div className="overflow-hidden uppercase">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 flex-center flex-col sm:flex-row flex-wrap gap-3 intro-animate">
              <span>Shaping</span>
              {/* <span id="typing-animation" className="text-primary"></span> */}
              <TypingWords words={words} />
            </h1>
          </div>

          <div className="overflow-hidden uppercase">
            <h1 className="text-4xl md:text-6xl font-bold mb-4  intro-animate">
              into Real Projects
            </h1>
          </div>

          <div className="overflow-hidden uppercase">
            <h1 className="text-4xl md:text-6xl font-bold mb-4  intro-animate">
              that deliver results
            </h1>
          </div>
          <br />
          <br />
          <div className="overflow-hidden">
            <div className="">
              <h1 className="text-xl md:text-2xl mb-4  intro-animate" ref={introLineRef}>
              </h1>
            </div>
          </div>

          <div className="flex-center flex-col sm:flex-row mt-2 gap-2">
            <a href="/resume.pdf" download>
              <Button className="gap-1 py-1.5" variant="primary">
                <Download size={16} />
                <span>Download Resume</span>
              </Button>
            </a>
            <div>
              <Button variant="" className="gap-1 py-1.5" onClick={handleCopyEmail}>
                {
                  copied
                    ?
                    <>
                      <CheckCheck size={15} />
                      <span>Copied to Clipboard</span>
                    </>
                    :
                    <>
                      <Copy size={15} />
                      <span>{myEmail}</span>
                    </>
                }
              </Button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
