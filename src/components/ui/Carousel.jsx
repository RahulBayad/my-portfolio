import React from "react";

const Carousel = ({ children, className, ...props }) => {
  return (
    <div 
        className={` ${className} `} 
        {...props}
    >
      {children}
    </div>
  );
};

export default Carousel;
