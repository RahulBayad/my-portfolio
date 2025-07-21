import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function Main() {
    return (
        <main>
            <Hero/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
        </main>
    )
}

export default Main;
