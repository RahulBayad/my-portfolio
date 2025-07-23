import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin)

const TypingWords = ({ words, ...props }) => {
    const [wordIdx, setWordIdx] = useState(0)

    useEffect(() => {
        gsap.to('#typing-animation', {
            duration: 1,
            text: words[wordIdx],
            repeat: 1,
            yoyo: true,
        })

    }, [wordIdx])

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIdx(prev => (prev + 1) % words.length)
        }, 3000) 

        return () => clearInterval(interval)
    }, [wordIdx, words])

    return (
        <div className="flex">
            <span id='typing-animation' className="relative text-primary" {...props}></span>
            <div className="w-2 animate-blink transition-none">_</div>
        </div>
    )
}

export default TypingWords