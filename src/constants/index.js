import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Growthclub",
    icon: web,
    iconBg: "#383E56",
    date: "Jun 2025 - Present",
    points: [
      "Built scalable outreach feature enabling calendar campaigns to thousands of contacts, driving core product adoption.",
      "Designed and deployed analytics dashboard from scratch, reducing user time-to-insight by 40% through real-time KPI visualization.",
      "Improved application performance by refactoring backend logic, achieving 25% reduction in API response latency.",
      "Implemented user-centric features like RSVP data export based on client feedback, measurably increasing product utility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Quicko",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Mar 2025",
    points: [
      "Architected and deployed QR-based food ordering platform processing 1,000+ transactions in the first quarter.",
      "Developed secure session management using anonymous authentication, ensuring data integrity and seamless user flow.",
      "Built real-time order processing system with integrated analytics, enabling rapid inventory and pricing decisions.",
      "Enabled collaborative ordering sessions via WebSockets, increasing average order value by 15% for groups.",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "H.D. Solutions",
    icon: backend,
    iconBg: "#383E56",
    date: "Aug 2021 - Nov 2022",
    points: [
      "Developed 15+ responsive client websites using HTML, CSS, JavaScript, and modern frameworks, delivering projects on time.",
      "Collaborated with design and client teams to translate business requirements into functional web solutions.",
      "Maintained production websites, resolving critical bugs and implementing enhancements to improve stability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kheem proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "ABC Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kheem does.",
    name: "Chris Brown",
    designation: "COO",
    company: "XYZ Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kheem optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "111 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
