import React, { useCallback, useRef, useState } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

const Drawer = ({ buttonLabel, btnVariant, label, children, className }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const dragStart = useRef(0);

  function handleDragDown(e) {
    dragStart.current = e.clientY;
  }
  function handleDragUp(e) {
    if (e.clientY - dragStart.current > 30) {
      closeDrawer();
    }
  }

  return (
    <>

      <div onClick={openDrawer} variant={btnVariant}>
        {label}
      </div>
      { createPortal(
        <>
          <div
            className={`
            h-screen w-screen bg-black/20 backdrop-blur-sm z-10 fixed top-0 left-0 transition-all duration-1000
            ${isDrawerOpen ? "" : "hidden"}
        `}
          ></div>
          <div
            className={`fixed border border-zinc-700 rounded-xl z-20 left-1/2  -translate-x-1/2 pb-6 px-4 lg:px-6
          transition-all duration-500 bg-zinc-900 
          ${isDrawerOpen ? "-bottom-3 scale-100" : "-bottom-full scale-75"}
          ${className}
        `}
            role="dialog"
            onPointerDown={handleDragDown}
            onPointerUp={handleDragUp}
          >
            <div className="flex-center pb-6 pt-4" onClick={closeDrawer}>
              <div className="h-2 w-20 rounded-full bg-zinc-700"></div>
            </div>

            <div className="py-2">{children}</div>
          </div>
        </>,
        document.body
      )}
    </>
  );
};

export default Drawer;
