import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import Hero from './sections/hero';

function Main() {
    return (
        <main >

            <div className="px-6 py-4 grid grid-cols-[auto_auto]  justify-center">

                <Hero/>

            </div>
            
        </main>
    )
}

export default Main;
