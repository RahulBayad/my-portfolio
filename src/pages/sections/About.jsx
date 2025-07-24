import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

const About = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from("#about .text-clip-animation", {
            y: 100,
            duration: 1,
            scrollTrigger: {
                // scrub: true,
                trigger: "#about",
                start: "top 50%",
            }
        });
        gsap.from("#about p", {
            opacity: 0,
            delay: 1,
            duration: 2,
            scrollTrigger: {
                // scrub: true,
                trigger: "#about",
                start: "top 50%",
            }
        })
    });

    return (
        <section
            id="about"
            className="relative flex-center box-border min-h-screen"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
                <div className="">
                    <h1 className="text-2xl font-bold text-gray-200 mb-2 overflow-hidden">
                        <span className="text-clip-animation shadow-heading border-b-3 border-primary inline-block">
                            About Me
                        </span>
                    </h1>

                    <h1 className="text-4xl md:text-5xl font-bold overflow-hidden ">
                        <span className="text-clip-animation inline-block">
                            Full Stack Developer
                        </span>
                    </h1>
                    <br />
                    <p className="text-lg text-justify">
                        I'm Rahul Bayad, a passionate full-stack developer focused on building
                        dynamic, user-friendly web applications. I love bringing ideas to life —
                        from designing responsive frontends with React to crafting robust
                        backends with Node.js and Express.
                    </p>
                    <br />
                    <p className="text-lg text-justify">
                        Problem-solving drives me. Whether it's debugging tricky logic or
                        optimizing performance, I enjoy writing clean, efficient code that
                        delivers real value.
                    </p>
                    <br />
                    <p className="text-lg text-justify"  >
                        Outside of development, I'm always exploring new ideas, learning new
                        tools, and staying curious. I believe every day is a chance to grow,
                        create, and make an impact and that's what keeps me going.
                    </p>
                </div>
                <div className="">
                    <figure className="flex aspect-square h-full w-full sm:w-auto max-h-[500px] box-border p-2 rounded-md">
                        <img src="/myimage.jpg" className="rounded-lg"/>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default About;
