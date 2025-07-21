import React, { useRef } from 'react'
import { skills } from '../constants'

const Skills = () => {
    // Duplicate skills for seamless infinite scroll
    const skillList = [...skills, ...skills];
    const carouselRef = useRef(null);

    return (
        <section id="skills" className='mt-20 py-16 bg-base-100'>
            <div className='text-center mb-8'>
                <span className='text-center text-4xl font-bold text-primary border-b-2 pb-2'>Skills</span>
            </div>
            <div className="overflow-hidden w-full">
                <div
                    className="flex gap-8 animate-scroll-skill-carousel hover:[animation-play-state:paused]"
                    ref={carouselRef}
                    style={{ willChange: 'transform' }}
                >
                    {skillList.map((skill, idx) => (
                        <div
                            key={skill.name + idx}
                            className="card w-36 h-40 bg-transparent shadow-none flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
                        >
                            <div className="flex items-center justify-center w-24 h-24 bg-transparent">
                                <img src={skill.imgUrl} alt={skill.name} className="w-20 h-20 object-contain" />
                            </div>
                            <div className="card-body p-2 items-center bg-transparent">
                                <h2 className="card-title text-center text-base text-primary-content font-semibold bg-transparent">{skill.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes scroll-skill-carousel {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-skill-carousel {
                    animation: scroll-skill-carousel 18s linear infinite;
                }
            `}</style>
        </section>
    )
}

export default Skills