import { FaJsSquare, FaPython, FaDocker } from "react-icons/fa";

import { DiDjango, DiPostgresql } from "react-icons/di";

import {
  SiFastapi,
  SiLangchain,
  SiMongodb,
  SiGooglecloud,
  SiHuggingface,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";

export const EXP = [
  {
    name: "EY",
    href: "https://www.ey.com/",
    photo: "/Experience/ey.png",
    position: "AI Software Engineer",
    date: "April 2025 → Present",
    details: {
      text: [
        `As an AI Software Engineer at EY, I focus on developing innovative solutions leveraging artificial intelligence 
        technologies for enterprise clients. I design and implement backend systems that integrate AI capabilities, 
        working primarily with Python and modern AI frameworks including LangChain and Hugging Face. My role involves 
        building scalable applications that transform business processes through AI automation, natural language 
        processing, and data analysis. I collaborate closely with cross-functional teams to deliver solutions that 
        address complex business challenges while maintaining high standards of code quality and documentation.`,
      ],
      stack: [
        FaPython,
        FaJsSquare,
        DiDjango,
        SiFastapi,
        SiLangchain,
        SiHuggingface,
        SiMongodb,
        FaDocker,
      ],
    },
  },
  {
    name: "State Bank of Sergipe",
    href: "https://www.banese.com.br/",
    photo: "/Experience/Banese.png",
    position: "Backend Engineer / AI Software Engineer",
    date: "December 2023 →  April 2025",
    details: {
      text: [
        `As a Software Engineer at State Bank of Sergipe, I specialized in developing and implementing AI-powered solutions 
        that enhance the bank's internal operations. I architected and developed full-stack applications using Python 
        (FastAPI/Django) for robust backend services and TypeScript (React/Next.js) for responsive front-end interfaces. 
        My core focus was on implementing advanced AI solutions using the LangChain framework and Large Language Models, 
        creating intelligent systems that automate and optimize banking processes. Working in an agile environment, 
        I ensured high code quality through thorough code reviews and maintained efficient deployment pipelines using Docker 
        and Azure cloud services.`,
      ],
      stack: [
        FaJsSquare,
        FaPython,
        DiDjango,
        SiFastapi,
        SiLangchain,
        SiMongodb,
        FaDocker,
        VscAzure,
      ],
    },
  },
  {
    name: "Colaborativa",
    href: "https://www.colaborativa.com.br/",
    photo: "/Experience/Colaborativa.png",
    position: "Software Engineer Intern",
    date: "January 2023 → December 2023",
    details: {
      text: [
        `As a Software Engineer Intern at Colaborativa, I specialized in backend development while contributing to full-stack 
        solutions. I took ownership of significant features in the company's internal management system, including designing 
        and implementing a sophisticated role-based access control system, developing an integrated messaging platform with 
        email notifications, and creating an efficient employee calendar management system. I worked extensively with Django, 
        PostgreSQL, and Google Cloud Platform, ensuring robust and scalable solutions. My role involved maintaining system 
        stability while implementing new features and optimizing existing functionalities.`,
      ],
      stack: [
        FaJsSquare,
        FaPython,
        DiDjango,
        DiPostgresql,
        FaDocker,
        SiGooglecloud,
      ],
    },
  },
];
