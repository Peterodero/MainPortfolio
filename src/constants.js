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
    role: "Software Engineer",
    company: "Iguru Software Company",
    date: "April 2025 - Present",
    desc: "Work with frontend and mobile teams to agree on API contracts upfront so each side knows what data to expect before building starts. Build REST APIs in Node.js/Express and PHP (Symfony) for web and mobile apps across client industries. Handle database design, query tuning, and server-side business logic. Build front-end interfaces with React.js/Next.js, Tailwind CSS, and SCSS. Improved page load speed, usability, and search rankings. Built fullstack games for hackathons and presented at a UI/React conference.",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "PHP (Symfony)",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
      "SEO",
    ],
  },
  {
    id: 1,
    img: freelanceLogo,
    role: "Fullstack Developer (Freelance & Side Projects)",
    company: "Client & Open Source Solutions",
    date: "2024 - Present",
    desc: "Built a Next.js marketing site (Vite, Tailwind CSS, Framer Motion) for Kilifi Junior School & Daycare. Developed AI-driven Smart Education System with React front end for grade checking and automated course suggestions. Building AfyaBridge healthcare platform connecting doctors, patients, pharmacists, and prescription delivery riders. Designed custom CMS front ends for clients to streamline content management.",
    skills: [
      "Next.js",
      "React.js",
      "Framer Motion",
      "AI/ML Integration",
      "Node.js",
      "MongoDB",
      "Sequelize",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Masinde Muliro University of Science and Technology",
    date: "2020 - 2024",
    grade: "3.5 GPA",
    desc: "Pursued Bachelor of Science in Computer Science. Coursework includes Web Development, Database Management, Software Engineering, AI & Machine Learning, Data Structures & Algorithms. Gained practical experience in designing and developing scalable software solutions and modern architecture.",
    degree: "BSc. Computer Science",
  },
  {
    id: 1,
    school: "Got-Rateng Secondary School, Homabay",
    date: "2017 - 2020",
    grade: "A-",
    desc: "Completed Kenya Certificate of Secondary Education (KCSE) achieving an A- grade, developing a strong analytical foundation in mathematics and sciences.",
    degree: "Secondary Education (KCSE)",
  },
  {
    id: 2,
    school: "Ayiengo Primary School, Homabay",
    date: "2008 - 2016",
    grade: "KCPE Certificate",
    desc: "Completed Kenya Certificate of Primary Education (KCPE), establishing a strong academic foundation.",
    degree: "Primary Education (KCPE)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Kilifi Junior School & Daycare Website",
    description:
      "A Next.js marketing website built for Kilifi Junior School & Daycare featuring smooth Framer Motion animations, Tailwind CSS styling, and responsive layout for prospective parents and students.",
    image: kilifi,
    tags: ["Next.js", "Vite", "Tailwind CSS", "Framer Motion", "React"],
    github: "https://github.com/Peterodero",
  },
  {
    id: 1,
    title: "SmartEd AI Education System",
    description:
      "An AI-driven Smart Education System with a React front end where students check grades, get automated course recommendations, and analyze learning metrics.",
    image: smarted,
    tags: ["React", "AI/ML", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Peterodero/SmartEdSystem/",
  },
  {
    id: 2,
    title: "AfyaBridge Healthcare Platform",
    description:
      "A healthcare connectivity platform bridging doctors, patients, pharmacists, and delivery riders for seamless prescription fulfillment, appointment scheduling, and medical records access.",
    image: afyaBridge,
    tags: ["React", "Tailwind CSS", "MySQL", "Express", "Node.js", "JWT", "Go", "Sequelize"],
    github: "https://github.com/Peterodero/AfyaBridgePatientBackend/",
  },
  {
    id: 3,
    title: "Iguru Company Website",
    description:
      "A simple, modern, and high-performance company website built for Iguru Limited with a responsive UI and fast page load times.",
    image: website,
    tags: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    github: "https://github.com/Peterodero/website/",
    webapp: "https://website-seven-sigma-36.vercel.app/",
  },
  {
    id: 4,
    title: "Issue Tracker & Management System",
    description:
      "A measurement and customer management system focused on CRUD operations, tracking customer data, and managing issue resolutions efficiently.",
    image: issueTracker,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    github: "https://github.com/peterodero/IssueTracker",
  },
];
