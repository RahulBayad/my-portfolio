import { X } from "lucide-react";
import React from "react";

const Dialog = ({
  children,
  isOpen,
  handleClose,
  className,
  title,
  ...props
}) => {
  console.log("is open", isOpen);
  return (
    <div
      className={`
            flex-center z-10 h-screen w-screen fixed top-0 left-0 backdrop-blur-xs transition-all overflow-hidden
            
        `}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div
        className={`border border-zinc-600 bg-zinc-900 w-2xl max-w-[900px] rounded-lg p-4 px-6 max-h-[90vh] 
            overflow-x-hidden overflow-y-auto ${className}`}
      >
        {/* Header  */}
        <div className="flex justify-end mb-1">
          {/* <h1 className="text-xl">{title || "Title"}</h1> */}
          <button
            className="border border-zinc-700 text-zinc-500 rounded-md flex-center w-6 h-6 
                hover:cursor-pointer hover:text-white hover:border-white transition-all duration-100"
            onClick={handleClose}
          >
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
