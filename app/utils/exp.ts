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
    name: "Banco do Estado de Sergipe (Banese)",
    href: "https://www.banese.com.br/",
    photo: "/Experience/Banese.png",
    position: "Software Engineer / AI Developer",
    date: "Dezembro 2023 → Presente",
    details: {
      text: [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. `,
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
    date: "Janeiro 2023 → Dezembro 2023",
    details: {
      text: [
        `Lorem impsum dolor sit amet, consectetur adipisicing elit. Lorem impsum dolor sit amet, consectetur adipisicing elit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
        `Lorem impsum dolor sit amet, consectetur adipisicing elit. Lorem impsum dolor sit amet, consectetur adipisicing elit.`,
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
