// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import flutterLogo from "./assets/tech_logo/flutter.png";
import dartLogo from "./assets/tech_logo/dart.jpeg";
import responsiveLogo from "./assets/tech_logo/responsive.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import pythonLogo from "./assets/tech_logo/python.png";
import javaLogo from "./assets/tech_logo/java.png"
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import adobephotoshoplogo from "./assets/tech_logo/adobe-photoshop-icon.png";
import canvalogo from "./assets/tech_logo/canva-icon.png";
import phpLogo from "./assets/tech_logo/php.jpeg";
import symfonyLogo from "./assets/tech_logo/symfony.png";
import springLogo from "./assets/tech_logo/springboot.png"
import angularLogo from "./assets/tech_logo/angular.png"

// Experience Section Logo's
import iguruLogo from "./assets/company_logo/iguru.jpeg";
import freelanceLogo from "./assets/company_logo/freelance.png";

// Project Section Logo's
import website from "./assets/website.png"
import smarted from "./assets/smarted.png"
import issueTracker from "./assets/issueTracker.png"
import afyaBridge from "./assets/afyabridge.jpeg"
import kilifi from "./assets/kilifi.png"

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend & Languages",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "PHP", logo: phpLogo },
      { name: "Symfony", logo: symfonyLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Java", logo: javaLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "SpringBoot", logo: springLogo },
    ],
  },
  {
    title: "Mobile & Tools",
    skills: [
      { name: "Flutter", logo: flutterLogo },
      { name: "Dart", logo: dartLogo },
      { name: "Responsive Design", logo: responsiveLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "MongoDB Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Adobe Photoshop", logo: adobephotoshoplogo },
      { name: "Canva", logo: canvalogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: iguruLogo,
    role: "Fullstack Software Developer",
    company: "Iguru Software Company",
    date: "April 2025 - Present",
    desc: "Architect and deliver scalable end-to-end web applications. Design and implement high-throughput RESTful APIs using Node.js/Express and PHP (Symfony). Engineer relational database schemas, query optimizations, and business logic in MySQL. Build modern, responsive front-end interfaces with React.js, Next.js, and Tailwind CSS. Established strict API contract standards between frontend and backend teams, significantly accelerating feature delivery and cutting integration bugs.",
    skills: [
      "Fullstack Architecture",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "PHP (Symfony)",
      "MySQL",
      "RESTful APIs",
      "Database Optimization",
      "Tailwind CSS",
    ],
  },
  {
    id: 1,
    img: freelanceLogo,
    role: "Fullstack Developer (Freelance & Solutions)",
    company: "Client & Open Source Solutions",
    date: "2022 - Present",
    desc: "Spearhead full-cycle software development for international and local clients. Built the AfyaBridge digital healthcare platform connecting patients, doctors, and pharmacies. Developed the SmartEd AI-driven educational platform with predictive course recommendations. Delivered high-converting, performance-optimized web portals using Next.js, React, Node.js, and MongoDB.",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "Framer Motion",
      "AI Integration",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Masinde Muliro University of Science and Technology",
    date: "2022 - 2025",
    grade: "3.5 GPA",
    degree: "BSc. in Computer Science",
    desc: "Comprehensive four-year degree focusing on Software Engineering, Database Systems, Distributed Systems, Algorithms & Data Structures, and Web Architecture. Built and deployed multiple fullstack applications, spearheaded collaborative engineering projects, and maintained academic excellence with a 3.5 GPA.",
    coursework: [
      "Web Engineering",
      "Database Systems",
      "Distributed Systems",
      "Data Structures & Algorithms",
      "Software Architecture",
      "AI & Machine Learning",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "SmartEd AI Education System",
    description:
      "A fullstack AI-driven education platform. Features automated course recommendations, student grade tracking, performance analytics, and a secure backend API with role-based JWT authentication and MongoDB data modeling.",
    image: smarted,
    tags: ["React", "Node.js", "Express", "MongoDB", "AI/ML", "JWT", "Tailwind CSS", "REST API"],
    github: "https://github.com/Peterodero/SmartEdSystem/",
  },
  {
    id: 1,
    title: "AfyaBridge Healthcare Platform",
    description:
      "A comprehensive digital healthcare solution connecting patients, doctors, pharmacists, and delivery riders. Architected with micro-APIs, relational data modeling (MySQL/Sequelize), prescription management, and appointment scheduling workflows.",
    image: afyaBridge,
    tags: ["React", "Node.js", "Express", "MySQL", "Sequelize", "Go", "JWT", "Tailwind CSS"],
    github: "https://github.com/Peterodero/AfyaBridgePatientBackend/",
  },
  {
    id: 2,
    title: "Issue Tracker & Management System",
    description:
      "A fullstack issue resolution and customer management system. Engineered robust CRUD RESTful APIs, relational data state tracking, automated status lifecycle workflows, and an intuitive React interface for rapid issue resolution.",
    image: issueTracker,
    tags: ["React", "Node.js", "Express", "REST API", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/peterodero/IssueTracker",
  },
  {
    id: 3,
    title: "Kilifi Junior School & Daycare Portal",
    description:
      "A high-performance modern web application built with Next.js and Tailwind CSS. Features dynamic page routing, fluid Framer Motion animations, accessible forms, and top-tier SEO optimizations for prospective parents and students.",
    image: kilifi,
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vite", "SEO"],
    github: "https://github.com/Peterodero",
  },
  {
    id: 4,
    title: "Iguru Corporate Web Platform",
    description:
      "A sleek, responsive corporate web platform engineered for Iguru Limited. Built with modular component architecture, fast page load speeds, and clean UI/UX to maximize client conversions and enterprise engagement.",
    image: website,
    tags: ["React", "Tailwind CSS", "JavaScript", "Vite", "UI/UX"],
    github: "https://github.com/Peterodero/website/",
    webapp: "https://website-seven-sigma-36.vercel.app/",
  },
];
