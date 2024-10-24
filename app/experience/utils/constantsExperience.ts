import { FaJsSquare, FaPython, FaDocker } from "react-icons/fa";

import { DiDjango, DiPostgresql } from "react-icons/di";

import {
  SiFastapi,
  SiLangchain,
  SiMongodb,
  SiGooglecloud,
  SiMicrosoftazure,
} from "react-icons/si";

export const EXP = [
  {
    name: "State Bank of Sergipe",
    href: "https://www.banese.com.br/",
    photo: "/Experience/Banese.png",
    position: "Software Engineer / AI Developer",
    date: "December 2023 → Moment",
    details: {
      text: [
        `Experience at State Bank of Sergipe [BANESE] as a Software Engineer and AI Engineer in the Data and AI team.
        Developing and releasing internal services with Artificial Intelligence using Generative AI language models.`,
      ],
      stack: [
        FaJsSquare,
        FaPython,
        DiDjango,
        SiFastapi,
        SiLangchain,
        SiMongodb,
        FaDocker,
        SiMicrosoftazure,
      ],
    },
  },
  {
    name: "Colaborativa",
    href: "https://www.colaborativa.com.br/",
    photo: "/Experience/Colaborativa.png",
    position: "Estagiário em Software Engineer",
    date: "January 2023 → December 2023",
    details: {
      text: [
        `Internship at Colaborativa, an Edtech startup, as a Developer working in the software development team
         creating and releasing new features and maintaining the company's internal systems`,
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
