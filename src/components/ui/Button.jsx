import { MoveRight } from 'lucide-react'
import React from 'react'

const Button = ({ children, className, ...props }) => {
    console.log("porps", props.variant)
    return (
        <button
            className={`
                relative overflow-hidden flex gap-1.5 items-center justify-between 
                px-4 py-1 rounded-full bg-primary-bg cursor-pointer transition-all duration-200 
                shadow-gray-100  hover:shadow-[0_0_15px_2px] border hover:border-accent-border
                ${
                    props?.variant === "filled" ? "bg-accent-background text-muted "
                    :
                    props?.variant === "primary" ?

                    "border border-primary bg-primary-background  hover:bg-accent-background hover:text-muted"
                    
                    : "hover:bg-accent-background hover:text-muted"
                }
                ${className}`}
            {...props}
        >
            {children}
            {/* <div className="animate-effect absolute hover-effect -z-10 left-0 rounded-full"></div> */}
        </button>
    )
}

export default Button