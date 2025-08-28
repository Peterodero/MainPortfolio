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
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import pythonLogo from "./assets/tech_logo/python.png";
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

// Experience Section Logo's
import iguruLogo from "./assets/company_logo/iguru.jpeg";

// Project Section Logo's
import tmsLogo from "./assets/work_logo/tms.png";
import CGPALogo from "./assets/work_logo/Cgpa_Calculator.png";
import BuetPortalLogo from "./assets/work_logo/buet_portal.png";
import website from "./assets/website.png"
import smarted from "./assets/smarted.png"
import issueTracker from "./assets/issueTracker.png"

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
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
    role: "Fullstack Developer",
    company: "Iguru Limited",
    date: "April 2025 - September 2025",
    desc: "Developed dynamic and scalable web applications, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MySQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Masinde Muliro University of Science and Technology",
    date: "Dec 2022 - Dec 2026",
    grade: "3.5 CGPA (in process)",
    desc: "Currently pursuing a Bachelor of Computer Science. This program has provided me with a robust foundation in software development principles and practices, including **Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems**. I am gaining practical experience in designing and developing software solutions while honing my skills in various programming languages and modern software development methodologies.",
    degree: "Bachelor of Computer Science",
  },
  {
    id: 2,
    school: "Got Rateng' High School",
    date: "March 2018 - July 2021",
    grade: "A-",
    desc: "Completed my studies, achieving a strong academic foundation in various subjects. This period was crucial for developing my core knowledge and study habits.",
    degree: "Secondary Education",
  },
  {
    id: 3,
    school: "Ayiengo Primary School",
    date: "March 2007 - March 2017",
    grade: "A-",
    desc: "Completed my primary school education, establishing a foundational understanding of core subjects. This period focused on building strong learning habits and preparing for higher academic levels",
    degree: "Primary Education",
  },
];

export const projects = [
  {
    id: 0,
    title: "Issue Tracker System",
    description:
      "This project is a Tailor Measurement Management System focused on customer management. It provides functionalities to manage customer data, including creating, retrieving, updating, and deleting customer information.",
    image: issueTracker,
    tags: ["HTML", "Tailwind CSS", "Javascript", "React"],
    github: "https://github.com/peterodero/IssueTracker",
  },
  {
    id: 1,
    title: "Iguru Website",
    description:
      "This is a simple, modern, and user-friendly website for our company",
    image: website,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Peterodero/website/",
    webapp: "https://website-seven-sigma-36.vercel.app/",
  },
  {
    id: 3,
    title: "SmartEd System",
    description:
      "An AI powered system for learning ",
    image: smarted,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "bcryptjs",
      "Node.js",
      "JWT",
      "PDFMake",
      "Mongoos",
      "CORS",
      "Git",
    ],
    github: "https://github.com/Peterodero/SmartEdSystem/",
  },
  // {
  //   id: 4,
  //   title: "School Management System (SMS)",
  //   description:
  //     "A comprehensive School Management System (SMS) designed to streamline and automate administrative tasks, student and faculty management, and communication within educational institutions. This platform provides a centralized solution for efficient school operations.",
  //   image: SMSLogo,
  //   tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
  // },
];
