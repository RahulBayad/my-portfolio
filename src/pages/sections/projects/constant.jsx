import Card from "../../../components/ui/Card";

export const projectsArr = [
  {
    techStack: ["React.js", "Tailwind", "GSAP", "R3F"],
    title: "Personal Portfolio",
    liveLink: "https://rahulbayad.vercel.app",
    description: function () {
      return (
        <div className="">
          <p className="mb-2">
            A modern and interactive portfolio website to showcase my profile,
            skills, and projects — designed to present my work and personality
            in a creative, scroll-driven experience.
          </p>
          <ul className="hidden lg:flex  flex-col gap-1 mb-5">
            <li className="text-sm flex gap-2">
              <span>🎨</span>
              <span>
                Built using React.js and Tailwind CSS for a clean, responsive,
                and developer-friendly UI.
              </span>
            </li>
            <li className="text-sm flex gap-2">
              <span>🎞️</span>
              <span>
                Enhanced scroll and animation experience with GSAP and smooth
                scrolling via Lenis.
              </span>
            </li>
            <li className="text-sm flex gap-2">
              <span>🧠</span>
              <span>
                Integrated R3F (React Three Fiber) to render a lightweight 3D
                grid.
              </span>
            </li>
            <li className="text-sm flex gap-2">
              <span>⚡</span>
              <span>
                Optimized for performance, animation timing, and seamless
                section transitions.
              </span>
            </li>
          </ul>
          <div className="flex gap-2 flex-wrap">
            {this.techStack.map((tech, index) => (
              <Card
                key={tech}
                className="skill-card border px-2 h-7 lg:h-8 flex shrink-0 items-center gap-2 border-zinc-600
              bg-zinc-800 inset-shadow-zinc-300 text-sm"
              >
                <span>{tech}</span>
              </Card>
            ))}
          </div>
        </div>
      );
    },
    bgColor: "bg-linear-to-b from-red-900/90 to-red-600",
    shadow: "shadow-red-600",
    borderColor: "border-red-600",
    bannerImage: "/projects/portfolio/image.png",
  },
  {
    title: "Urban Service",
    liveLink: "https://urbanservice.vercel.app",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Rest APIs",
      "Cloudinary",
    ],
    description: function () {
      return (
        <div className="">
          <p className="mb-2">
            A full-stack service booking platform inspired by Urban Company,
            enabling users to easily schedule home services like salon,
            electrical, plumbing, and more — all from the comfort of their
            homes.
          </p>
          <ul className="hidden lg:flex flex-col gap-1 mb-5">
            <li className="text-sm flex gap-2">
              <span>🌟</span>
              <span>
                Built with React, Node.js, Express, and MongoDB to ensure
                scalable and efficient backend–frontend integration.
              </span>
            </li>
            <li className="text-sm flex gap-2">
              <span>🔧</span>
              <span>
                Designed a modular system for managing bookings, service
                categories, and user authentication.
              </span>
            </li>
            <li className="text-sm flex gap-2">
              <span>🔐</span>
              <span>
                Implemented secure OTP-based password reset flow for account
                recovery.
              </span>
            </li>
            <li className="text-sm flex gap-2">
              <span>🔌 </span>
              <span>
                Structured modular service categories and a clean service
                selection interface.
              </span>
            </li>
            <li className="text-sm flex gap-2">
              <span>🧰</span>
              <span>
                Used MongoDB for structured service data storage and REST APIs
                for efficient backend communication.
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {this.techStack.map((tech, index) => (
              <Card
                key={tech}
                className="skill-card border px-2 h-7 lg:h-8 flex shrink-0 items-center gap-2 border-zinc-600
              bg-zinc-800 inset-shadow-zinc-300 text-sm"
              >
                <span>{tech}</span>
              </Card>
            ))}
          </div>
        </div>
      );
    },
    bgColor: "bg-linear-to-b from-cyan-950 to-cyan-500",
    shadow: "shadow-cyan-700",
    borderColor: "border-cyan-600",
    bannerImage: "/projects/urbanservice/image.png",
  },
  {
    title: "Apex Chat Landing Page",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    liveLink: "https://apexchat.netlify.app",
    description: function () {
      return (
        <div className="">
          <p className="mb-2">
            A sleek and responsive landing page designed for a real-time chat
            platform, built to highlight product features and drive user
            engagement with clean animations and visual clarity.
          </p>
          <ul className="hidden lg:flex  flex-col gap-1 mb-5">
            <li className="text-sm flex gap-2">
              <span>🛠️</span>
              <span>
                Developed using pure HTML, CSS, and JavaScript for lightweight, fast-loading performance.
              </span>
            </li>
            <li className="text-sm flex gap-2">
              <span>🎞️</span>
              <span>
                Used GSAP to create smooth entrance animations and subtle micro-interactions.
              </span>
            </li>
            <li className="text-sm flex gap-2">
              <span>📱</span>
              <span>
                Fully responsive design optimized for both desktop and mobile devices.
              </span>
            </li>
            <li className="text-sm flex gap-2">
              <span>📈</span>
              <span>
                Focused on clean layout, scroll-based sections, and CTA visibility to boost conversions.
              </span>
            </li>
          </ul>
          <div className="flex gap-2 flex-wrap">
            {this.techStack.map((tech, index) => (
              <Card
                key={tech}
                className="skill-card border px-2 h-7 lg:h-8 flex shrink-0 items-center gap-2 border-zinc-600
              bg-zinc-800 inset-shadow-zinc-300 text-sm"
              >
                <span>{tech}</span>
              </Card>
            ))}
          </div>
        </div>
      );
    },
    bgColor: "bg-linear-to-b from-blue-950 to-blue-600",
    shadow: "shadow-blue-800",
    borderColor: "border-blue-600",
    bannerImage: "/projects/apexchat/image.png",
  },
];
