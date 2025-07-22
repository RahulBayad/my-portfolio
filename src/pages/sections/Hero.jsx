import {
  Center,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useEffect } from "react";
import Loading from "../../components/ui/Loading";
import { useControls } from "leva";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import Button from "../../components/ui/Button";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function AnimateMesh() {
  const gltf = useGLTF("/my_room.glb");
  return (
    <Center>
      <primitive object={gltf.scene} scale={0.1} />
    </Center>
  );
}

const Hero = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const lines = gsap.utils.toArray(".intro-animate");
    const tl = gsap.timeline()

    tl.fromTo(
      lines,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    let index = 0
    const words = ['Design', 'Concept', 'Ideas']
    const typeWord = () => {
      gsap.to('#type-animate', {
        duration: 1.5,
        text: words[index],
        ease: "none",
        yoyo: 1,
        onComplete: () => {
          gsap.to('#type-animate', {
          duration: 1.5,
          text: "", 
          ease: "none",
          onComplete: () => {
            index = (index + 1) % words.length;
            typeWord();
          }
        });
        },
      });
    };
    typeWord();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  // const controls = useControls({
  //   spotlightPos : [0.9, 1.5, 0.6]
  // })


  return (
    <section
      id="introduction"
      className="relative grid grid-cols-1  px-6 py-24 min-h-screen items-center bg-base-200"
    >
      <div className="z-10 mt-4 gap-4 flex ">
        <div className="h-full  uppercase font-medium">
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl font-bold mb-4  intro-animate">
              Shaping&nbsp;
              <span id="type-animate" className="inline-block text-primary"> </span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl font-bold mb-4  intro-animate">
              into Real Projects
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl font-bold mb-4  intro-animate">
              that deliver results
            </h1>
          </div>
            <Button className="gap-1" variant="primary">
              <span>Contact Me</span>
              <span className=" flex-center rounded-full">
                <MoveRight size={15} />
              </span>
            </Button>

        </div>
      </div>
      <figure className="hidden md:block">
        {/* 3D Model or Illustration can go here */}
        {/* <Suspense fallback={<Loading />}> ... </Suspense> */}
      </figure>
    </section>
  );
};

export default Hero;
