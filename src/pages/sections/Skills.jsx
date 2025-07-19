import React from 'react'
import { skills } from '../constants'

const Skills = () => {
    return (
        <section className='mt-20 overflow-hidden'>
            <div className='text-center mb-8'>
                <span className='text-center text-4xl border-b-2'>Skills</span>
            </div>
            <div className='skillsCarousel-container relative h-46 w-[100vw] flex overflow-hidden'>
                <div className='skillsCarousel flex gap-20 flex-center flex-nowrap mr-20'>
                    {
                        skills.map(skill => {
                            return (
                                <div key={skill.name} className='h-36 w-36 rounded-md flex flex-center '>
                                    <img src={skill.imgUrl} className='w-full select-none' />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='skillsCarousel flex gap-20 flex-center flex-nowrap'>
                    {
                        skills.map(skill => {
                            return (
                                <div key={skill.name} className='h-36 w-36 rounded-md flex flex-center'>
                                    <img src={skill.imgUrl} className='w-full select-none' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <br />
        </section>
    )
}

export default Skills