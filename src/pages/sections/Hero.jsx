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

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    const lines = gsap.utils.toArray(".intro-animate");
    gsap.fromTo(
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
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // const controls = useControls({
  //   spotlightPos : [0.9, 1.5, 0.6]
  // })
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.utils.toArray(".text-blur").forEach((el, i) => {
      tl.from(el, {
        y: 50,
        duration: 1,
        stagger: 1,
      });
    });
  });

  return (
    <section
      id="introduction"
      className="relative grid grid-cols-1 md:grid-cols-2 px-6 py-24 min-h-screen items-center bg-base-200"
    >
      <div className="z-10 mt-4 gap-4 flex flex-col justify-center">
        <div className="h-full font-medium">
          <div className="uppercase" ref={textRef}>
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary intro-animate">
                Hi, I'm Rahul Bayad
              </h1>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-secondary intro-animate">
                Software Developer
              </h2>
            </div>
            <div className="overflow-hidden">
              <p className="mb-6 text-lg text-base-content intro-animate">
                I love building beautiful, performant web apps that deliver real
                value. Welcome to my portfolio!
              </p>
            </div>
            <div className="overflow-hidden">
              <a
                href="#contact"
                className="btn btn-primary btn-wide intro-animate"
              >
                Contact Me
              </a>
            </div>
          </div>
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
