import { FaJsSquare, FaPython, FaDocker } from "react-icons/fa";

import { DiDjango, DiPostgresql } from "react-icons/di";

import {
  SiFastapi,
  SiLangchain,
  SiMongodb,
  SiGooglecloud,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";

export const EXP = [
  {
    name: "State Bank of Sergipe",
    href: "https://www.banese.com.br/",
    photo: "/Experience/Banese.png",
    position: "Software Engineer / AI Developer",
    date: "December 2023 → Moment",
    details: {
      text: [
        `As a Software Engineer at State Bank of Sergipe, I focus on developing AI-powered solutions for the bank's internal operations. 
        I work with full-stack development using Python (FastAPI/Django) and TypeScript (React/Next.js), specializing in implementing 
        AI solutions through the LangChain framework. Working in an agile environment, I actively participate in Scrum ceremonies, 
        perform code reviews, and maintain high code quality standards. My responsibilities include collaborating with team members 
        through Git version control and resolving technical challenges across the entire stack.`,
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
        `During my internship at Colaborativa, I worked as a full-stack developer with a strong focus on backend development. 
        I played a key role in developing the company's internal management system, where I implemented several critical features 
        including a comprehensive authorization system for role-based access control, a messaging and email notification system, 
        and an employee calendar management system. Throughout my tenure, I maintained and enhanced existing features while ensuring 
        system stability, and actively collaborated with the team to deliver robust solutions for various internal projects.`,
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
