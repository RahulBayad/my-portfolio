import { MoveRight } from 'lucide-react'
import React from 'react'

const Button = ({ children, className, ...props }) => {
    console.log("porps", props.variant)
    return (
        <button
            className={`
                relative overflow-hidden flex gap-2 items-center justify-between 
                px-4 py-1.5 rounded-full bg-primary-bg cursor-pointer transition-all duration-200 
                shadow-gray-100  hover:shadow-[0_0_15px_2px]
                ${props?.variant === "filled" ? "bg-accent-background text-accent-foreground "
                    :
                    props?.variant === "primary" ?
                        "border border-primary bg-primary-background hover:border-accent-background hover:bg-accent-background hover:text-accent-foreground"
                        : "hover:bg-accent-background hover:text-accent-foreground"
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