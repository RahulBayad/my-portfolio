import { Suspense } from "react";
import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Loading from "./components/ui/Loading";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Canvas } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  // useEffect(() => {
  //   ScrollSmoother.create({
  //     wrapper: '#smooth-wrapper',
  //     content: '#smooth-content',
  //     smooth: 2,
  //     effects: true
  //   });
  // }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Header /> */}
          <div id="smooth-content" className="z-1">
            <Main />
          </div>
        <div className="-z-20 fixed top-0 h-screen w-screen">
          {/* <img src="/grid.png" alt="..." className='h-full w-full'/> */}
          <Canvas
            camera={{ position: [0, 0, 10], fov: 75 }}
            style={{ height: "100vh", width: "100vw" }}
          >
            <gridHelper
              args={[100, 200, "#121212", "#121212"]}
              rotation={[Math.PI / 2, 0, 0]}
              position={[0, 0, 0]}
            />
          </Canvas>
        </div>
      </Suspense>
    </>
  );
}

export default App;
