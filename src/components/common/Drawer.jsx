import React, { useCallback, useRef, useState } from "react";
import Button from "../ui/Button";

const Drawer = ({ label, children, className }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const [dragStart, setDragStart] = useState(0);

  function handleDragDown(e) {
    setDragStart(e.clientY);
  }
  function handleDragUp(e) {
    if (e.clientY - dragStart > 30) {
      closeDrawer();
    }
  }

  return (
    <>
      <Button onClick={openDrawer} className="py-1.5">{label}</Button>
      <div
        className={`
            h-screen w-screen bg-black/20 backdrop-blur-sm z-10 fixed top-0 left-0 transition-all duration-1000
            ${isDrawerOpen ? "" : "hidden"}
        `}
      >
      </div>
      <div
          className={`fixed border border-zinc-700 rounded-xl z-20 -bottom-2 left-1/2 -translate-x-1/2 pb-4 lg:px-6
            transition-all duration-500
           bg-zinc-900 
           ${isDrawerOpen ? "-bottom-1" : "-bottom-full"}
           ${className}
           
           `}
          onPointerDown={handleDragDown}
          onPointerUp={handleDragUp}
          
        >
          <div className="flex-center pb-6 pt-4" onClick={closeDrawer} >
            <div className="h-2 w-20 rounded-full bg-zinc-700"></div>
          </div>

          <div className="py-2 ">{children}</div>
        </div>
    </>
  );
};

export default Drawer;
