import React, { Suspense } from "react";
import Loading from "../ui/Loading";
import Header from "../../pages/Header";
import Main from "../../pages/Main";
import { Canvas } from "@react-three/fiber";

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
        <div className="z-1">
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
    </div>
  );
};

export default Layout;
