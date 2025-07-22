import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { experience } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const elems = gsap.utils.toArray(sectionRef.current.querySelectorAll('.timeline-element'))

        gsap.to('#experience', {
            scrollTrigger: {
                trigger: '#experience',
                pin: true,
                start: "top top",          // start pinning when #experience reaches top of viewport
                end: "+=1000",             // pin for 1000px scroll (adjust as needed)
                scrub: true,
            }
        })

    }, [])


    return (
        <section id="experience" ref={sectionRef} className='mt-32 py-16 bg-base-200'>
            <div className='text-center mb-8'>
                <span className='text-center text-4xl font-bold text-primary border-b-2 pb-2'>Experience</span>
            </div>
            <ul className="">
                {
                    experience.map(exp => (
                        <li className='timeline-element border flex justify-center items-center w-full'>
                            <div className='card border'>
                                <span>{exp.title}</span>
                                <span>{exp.company}</span>
                                <p>{exp.description}</p>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5 timeline-tick"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div className='w-1 h-[200px] bg-red-500'></div>
                            </div>
                            <div>
                                <span>{exp.duration}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Experience