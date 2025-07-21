import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const items = gsap.utils.toArray('.timeline-item');
        items.forEach(item => {
            const paths = item.querySelectorAll('.timeline-path');
            const tick = item.querySelector('.timeline-tick');
    
            paths.forEach(path => {
                gsap.fromTo(
                    path,
                    {
                        backgroundColor: 'gray',
                        boxShadow: 'none',
                    },
                    {
                        backgroundColor: '#2563eb',
                        boxShadow: '0 0 16px 2px #2563eb',
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 50%',
                            end: 'top 30%',
                            scrub: true,
                        }
                    }
                );
            });
    
            gsap.fromTo(
                tick,
                {
                    color: '#9ca3af',
                    filter: 'drop-shadow(0 0 0 #2563eb)',
                },
                {
                    color: '#2563eb',
                    filter: 'drop-shadow(0 0 8px #2563eb)',
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 70%',
                        end: 'top 30%',
                        scrub: true,
                    }
                }
            );
        });
    
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    

    return (
        <section id="experience" ref={sectionRef} className='mt-32 py-16 bg-base-200'>
            <div className='text-center mb-8'>
                <span className='text-center text-4xl font-bold text-primary border-b-2 pb-2'>Experience</span>
            </div>
            <ul className="timeline timeline-vertical">
                <li className='h-42 timeline-item'>
                    <div className="timeline-start">July 2023 - Aug 2023</div>
                    <div className="timeline-middle">
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
                    </div>
                    <div className="timeline-end timeline-box bg-base-100 shadow-md">
                        <div className='flex flex-col gap-0'>
                            <h3 className='text-base font-medium'>Node.js Internship</h3>
                            <span className='text-base'>Tech Nishal</span>
                        </div>
                    </div>
                    <hr className='timeline-path'/>
                </li>
                <li className='h-52 timeline-item'>
                    <hr className='timeline-path'/>
                    <div className="timeline-start">Jan 2024 - Apr 2024</div>
                    <div className="timeline-middle">
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
                    </div>
                    <div className="timeline-end timeline-box bg-base-100 shadow-md">
                        <div className='flex flex-col gap-0'>
                            <h3 className='text-base font-medium'>MERN Stack Internship</h3>
                            <span className='text-base'>Arth Infosoft Pvt. Ltd.</span>
                        </div>
                    </div>
                    <hr className='timeline-path'/>
                </li>
                <li className='h-52 timeline-item'>
                    <hr className='timeline-path'/>
                    <div className="timeline-start">Nov 2024 - Mar 2025</div>
                    <div className="timeline-middle">
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
                    </div>
                    <div className="timeline-end timeline-box bg-base-100 shadow-md">
                        <div className='flex flex-col gap-0'>
                            <h3 className='text-base font-medium'>Web Researcher</h3>
                            <span className='text-base'>Diya Infotech</span>
                        </div>
                    </div>
                    <hr className='timeline-path'/>
                </li>
                <li className='h-52 timeline-item'>
                    <hr className='timeline-path'/>
                    <div className="timeline-start">Mar 2025 - Currently Working</div>
                    <div className="timeline-middle">
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
                    </div>
                    <div className="timeline-end timeline-box bg-base-100 shadow-md">
                        <div className='flex flex-col gap-0'>
                            <h3 className='text-base font-medium'>Frontend Developer</h3>
                            <span className='text-base'>Aazovo</span>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </section>
    )
}

export default Experience