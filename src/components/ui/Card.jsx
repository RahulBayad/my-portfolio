import React from 'react'

const Card = ({children, className, ...props}) => {
  return (
    <div 
        className={
            `text-xs lg:text-base rounded-lg ${className}`
        } 
        {...props}
    >
        {children}
    </div>
  )
}

export default Card