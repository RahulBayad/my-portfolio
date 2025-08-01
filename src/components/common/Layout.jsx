import React, { Suspense } from "react";
import Header from "./Header";
import { Canvas } from "@react-three/fiber";
import Loading from "../ui/Loading";
import Main from "./Main";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />

        {/* Main Section  */}
        <div className="z-1">
          <Main />
        </div>

        <Footer />

        {/* Grid Background */}
        <div className="-z-20 fixed top-0 h-screen w-screen">
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
