import React from 'react'

const Tag = ({className, ...props}) => {
  return (
    <span
        className={`rounded-sm px-2 py-0.5 text-sm border border-zinc-500 ${className}`}
        {...props}
    >

    </span>
  )
}

export default Tag