import { classifiedSkills, skills } from '../constants'
import Card from '../../components/ui/Card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const Skills = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from("#skills .text-clip-animation", {
            y: 100,
            duration: 1,
            scrollTrigger: {
                // scrub: true,
                trigger: "#skills",
                start: "top 50%",
            }
        });
        gsap.from("#skills .skill-card, #skills .subheading", {
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#skills",
                start: "top 50%",
            }
        })
    });

    return (
        <section id="skills" className='bg-base-100 pt-20 min-h-screen w-full'>
            <div className=' mb-8 overflow-hidden'>
                <span
                    className='text-clip-animation inline-block text-center text-3xl text-shadow-text-md font-bold shadow-heading border-b-3 border-primary'
                >Skills</span>
            </div>
            <div className="overflow-hidden ">

                <div className='flex overflow-hidden'>
                    <em className='text-2xl'>Tech Stack At a Glance</em>
                </div>

                <ul className=' flex flex-col gap-y-8 mt-6'>
                    <li>
                        <span className='subheading text-lg font-semibold'>Frontend</span>
                        <div className="mt-1 flex gap-3 pr-3 flex-wrap">
                            {classifiedSkills.languages.map((skill, idx) => (
                                <Card
                                    key={skill.name + idx}
                                    className="skill-card border px-2 h-9 flex shrink-0 items-center gap-2 border-zinc-600
                                    bg-zinc-800 inset-shadow-zinc-300 text-sm"
                                >
                                    <img src={skill.imgUrl} alt={skill.name} className={`h-5 ${skill.className}`} />
                                    <span>{skill.name}</span>
                                </Card>
                            ))}
                        </div>
                    </li>
                    <li>
                        <span className='subheading text-lg font-semibold'>Framework & Libraries</span>
                        <div className="mt-1 flex gap-3 pr-3 flex-wrap">
                            {classifiedSkills.frameworkAndLibraries.map((skill, idx) => (
                                <Card
                                    key={skill.name + idx}
                                    className="skill-card border px-2 h-9 flex shrink-0 items-center gap-2 border-zinc-600
                                    bg-zinc-800 inset-shadow-zinc-300 text-sm"
                                >
                                    <img src={skill.imgUrl} alt={skill.name} className={`h-5 ${skill.className}`} />
                                    <span>{skill.name}</span>
                                </Card>
                            ))}
                        </div>
                    </li>
                    <li>
                        <span className='subheading text-lg font-semibold'>Database and Tools</span>
                        <div className="mt-1 flex gap-3 pr-3 flex-wrap">
                            {classifiedSkills.dbAndTools.map((skill, idx) => (
                                <Card
                                    key={skill.name + idx}
                                    className="skill-card border px-2 h-9 flex shrink-0 items-center gap-2 border-zinc-600
                                    bg-zinc-800 inset-shadow-zinc-300 text-sm"
                                >
                                    <img src={skill.imgUrl} alt={skill.name} className={`h-5 ${skill.className}`} />
                                    <span>{skill.name}</span>
                                </Card>
                            ))}
                        </div>
                    </li>

                </ul>



            </div>
        </section>
    )
}

export default Skills