import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Lenis from "lenis";
import { useEffect } from "react";
import Projects from "./sections/projects/Projects";

function Main() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 2,
        });

        // Use requestAnimationFrame to continuously update the scroll
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);


    return (
        <main className="max-w-[1300px] px-20 m-auto font-light">
            <Hero />
            <About />
            <Skills />
            <Experience/>
            <Projects/>
            {/* <Contact/> */}
        </main>
    );
}

export default Main;
