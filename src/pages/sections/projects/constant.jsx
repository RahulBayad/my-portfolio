import Card from "../../../components/ui/Card";

export const projectsArr = [
  {
    title: "Personal Portfolio",
    description: (
      <div className="">
        <p className="mb-2">
          Developed a fully responsive portfolio using React.js with tailwind
          css. Implemented interactive UI components for enhanced user
          experience.
        </p>
        <ul className="flex flex-col gap-1 mb-5">
          <li className="text-sm flex gap-2">
            <span>🌟</span>
            <span>
              Built with React, Node.js, Express, and MongoDB to ensure scalable
              and efficient backend–frontend integration.
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
              Used MongoDB for structured service data storage and REST APIs for
              efficient backend communication.
            </span>
          </li>
        </ul>
        <div className="flex gap-2">
          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/react.png" className={`h-4`} />
            <span>React.js</span>
          </Card>
          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/node.png" className={`h-4`} />
            <span>Node.js</span>
          </Card>

          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/express.png" className={`h-4 invert-100`} />
            <span>Express.js</span>
          </Card>
          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/mongodb.png" className={`h-4`} />
            <span>MongoDB</span>
          </Card>
        </div>
      </div>
    ),
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    bgColor: "bg-linear-to-b from-red-900/90 to-red-600",
    shadow: "shadow-red-600",
    borderColor: "border-red-600",
    bannerImage: "/projects/portfolio/image.png",
    carouselImages: [
      "/projects/apexchat/img1.png",
      "/projects/apexchat/img2.png",
      "/projects/apexchat/img3.png",
      "/projects/apexchat/img4.png",
      "/projects/apexchat/img5.png",
    ],
  },
  {
    title: "Urban Service",
    description: (
      <div className="">
        <p className="mb-2">
          A full-stack service booking platform inspired by Urban Company,
          enabling users to easily schedule home services like salon,
          electrical, plumbing, and more — all from the comfort of their homes.
        </p>
        <ul className="flex flex-col gap-1 mb-5">
          <li className="text-sm flex gap-2">
            <span>🌟</span>
            <span>
              Built with React, Node.js, Express, and MongoDB to ensure scalable
              and efficient backend–frontend integration.
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
              Used MongoDB for structured service data storage and REST APIs for
              efficient backend communication.
            </span>
          </li>
        </ul>
        <div className="flex gap-2">
          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/react.png" className={`h-4`} />
            <span>React.js</span>
          </Card>
          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/node.png" className={`h-4`} />
            <span>Node.js</span>
          </Card>

          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/express.png" className={`h-4 invert-100`} />
            <span>Express.js</span>
          </Card>
          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/mongodb.png" className={`h-4`} />
            <span>MongoDB</span>
          </Card>

          {/* <Card className="border px-2 py-0.5 rounded-sm text-sm border-zinc-500 bg-zinc-900">
            React.js
          </Card>
          <Card className="border px-2 py-0.5 rounded-sm text-sm border-zinc-500 bg-zinc-900">
            Express.js
          </Card>
          <Card className="border px-2 py-0.5 rounded-sm text-sm border-zinc-500 bg-zinc-900">
            MongoDB
          </Card> */}
        </div>
      </div>
    ),
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Rest APIs",
      "Cloudinary",
    ],
    bgColor: "bg-linear-to-b from-cyan-950 to-cyan-500",
    shadow: "shadow-cyan-700",
    borderColor: "border-cyan-600",
    bannerImage: "/projects/urbanservice/image.png",
  },
  {
    title: "Apex Chat Landing Page",
    description: (
      <div className="">
        <p className="mb-2">
          Developed a fully responsive chat app landing page using HTML, CSS,
          and JavaScript. Implemented interactive UI components for enhanced
          user experience.
        </p>
        <ul className="flex flex-col gap-1 mb-5">
          <li className="text-sm flex gap-2">
            <span>🌟</span>
            <span>
              Built with React, Node.js, Express, and MongoDB to ensure scalable
              and efficient backend–frontend integration.
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
              Used MongoDB for structured service data storage and REST APIs for
              efficient backend communication.
            </span>
          </li>
        </ul>
        <div className="flex gap-2">
          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/react.png" className={`h-4`} />
            <span>React.js</span>
          </Card>
          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/node.png" className={`h-4`} />
            <span>Node.js</span>
          </Card>

          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/express.png" className={`h-4 invert-100`} />
            <span>Express.js</span>
          </Card>
          <Card
            className="skill-card border px-2 h-8 flex shrink-0 items-center gap-2 border-zinc-600
            bg-zinc-800 inset-shadow-zinc-300 text-sm"
          >
            <img src="/skills/mongodb.png" className={`h-4`} />
            <span>MongoDB</span>
          </Card>
        </div>
      </div>
    ),
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    bgColor: "bg-linear-to-b from-blue-950 to-blue-600",
    shadow: "shadow-blue-800",
    borderColor: "border-blue-600",
    bannerImage: "/projects/apexchat/image.png",
    carouselImages: [
      "/projects/apexchat/img1.png",
      "/projects/apexchat/img2.png",
      "/projects/apexchat/img3.png",
      "/projects/apexchat/img4.png",
      "/projects/apexchat/img5.png",
    ],
  },
  
];
