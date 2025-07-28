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
import Layout from "./components/common/Layout";

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
      <Layout />
    </>
  );
}

export default App;
