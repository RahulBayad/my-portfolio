import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import About from "../sections/About";
import Lenis from "lenis";
import { useEffect } from "react";
import Projects from "../sections/projects/Projects";
import Footer from "./Footer";

function Main() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    useEffect(()=>{
        alert("This Website is under development. Some features might not work properly.")
    },[])


    return (
        <main className="max-w-[1300px] px-6 sm:px-8 lg:px-20 m-auto font-light">
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
