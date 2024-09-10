import { RiNextjsFill } from "react-icons/ri";
import { DiDjango, DiPostgresql } from "react-icons/di";

import {
  FaJsSquare,
  FaPython,
  FaDocker,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiFastapi,
  SiLangchain,
  SiMongodb,
  SiGooglecloud,
  SiMicrosoftazure,
  SiTypescript,
  SiMysql,
} from "react-icons/si";

export const Proj = [
  {
    img: "/Projects/Portfolio.png",
    name: "portfolio",
    position: "side project",
    href: "/",
    details: {
      describe: [
        `Meu proprio portfolio criado para ...`,
        `Desenvolvido com Typescript, NextJS, ReactJS e deploy feito na Azure`,
      ],
      stack: [SiTypescript, RiNextjsFill, FaReact, SiMicrosoftazure],
    },
  },
  {
    img: "/Projects/Notes.png",
    name: "Banese 4966",
    position: "Software Egineer | Full Stack",
    href: "/",
    details: {
      describe: [
        `Meu proprio portfolio criado para ...`,
        `Desenvolvido com Typescript, NextJS, ReactJS e deploy feito na Azure`,
      ],
      stack: [FaJsSquare, FaPython, DiDjango, FaDocker, SiMongodb, SiMysql],
    },
  },
  {
    img: "/Projects/Notes.png",
    name: "Colab",
    position: "Software Egineer Intern",
    href: "/",
    details: {
      describe: [
        `Meu proprio portfolio criado para ...`,
        `Desenvolvido com Typescript, NextJS, ReactJS e deploy feito na Azure`,
      ],
      stack: [SiTypescript, FaReact, FaGithub],
    },
  },
  {
    img: "/Projects/Notes.png",
    name: "Notes .MD",
    position: "side project",
    href: "/",
    details: {
      describe: [
        `Meu proprio portfolio criado para ...`,
        `Desenvolvido com Typescript, NextJS, ReactJS e deploy feito na Azure`,
      ],
      stack: [SiTypescript, FaReact, FaGithub],
    },
  },
];
