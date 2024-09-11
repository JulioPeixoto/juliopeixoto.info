import { RiNextjsFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";

import {
  FaJsSquare,
  FaPython,
  FaDocker,
  FaReact,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

import {
  SiMongodb,
  SiGooglecloud,
  SiMicrosoftazure,
  SiTypescript,
  SiMysql,
  SiOpenai,
  SiFlask,
} from "react-icons/si";

export const Proj = [
  {
    img: "/Projects/Portfolio.png",
    name: "Portfolio",
    position: "Side Project",
    href: "/",
    details: {
      describe: [
        `Desenvolvido com Typescript, NextJS, ReactJS e deploy feito na Azure`,
      ],
      stack: [SiTypescript, RiNextjsFill, FaReact, SiMicrosoftazure],
    },
  },
  {
    img: "/Projects/BaneseHome.png",
    name: "Banese 4966",
    position: "Software Engineer",
    href: "https://github.com/JulioRaf4/banese-4966",
    details: {
      describe: [
        `Serviço interno do Banco do Estado de Sergipe (Banese) para 
        geração de dados fictícios para provisionamento e análise de crédito
        utilizando Inteligência Artificial.`,
      ],
      stack: [FaJsSquare, FaPython, DiDjango, FaDocker, SiMongodb, SiMysql],
    },
  },
  {
    img: "/Projects/Notes.png",
    name: "Notes .MD",
    position: "Side Project",
    href: "https://github.com/JulioRaf4/notes-project",
    details: {
      describe: [
        `Projeto criado para armazenar e compartilhar anotações em formato .MD
        Com preview do markdown.`,
        `Desenvolvido com Typescript, ReactJS e deploy feito no GitHub Pages`,
      ],
      stack: [SiTypescript, FaReact, FaGithub],
    },
  },
  {
    img: "/Projects/TenzieGame.png",
    name: "Tenzie Game",
    position: "Side Project",
    href: "https://github.com/JulioRaf4/tenzies-game",
    details: {
      describe: [
        `Projeto criado durante o curso ReactJS do Scrimba.`,
        `Desenvolvido com Typescript, ReactJS e deploy feito na Github Pages`,
      ],
      stack: [SiTypescript, FaReact, FaGithub],
    },
  },
  {
    img: "/Projects/Notes.png",
    name: "ChatGPT on Discord",
    position: "Side Project",
    href: "https://github.com/JulioRaf4/chatgptondiscord2",
    details: {
      describe: [
        `Projeto criado para interagir com o ChatGPT da OpenAI via chat no Discord.`,
        `Desenvolvido com Python e OpenAI API`,
      ],
      stack: [FaPython, SiOpenai, FaGithub, FaDiscord],
    },
  },
  {
    img: "/Projects/Notes.png",
    name: "Web Menu",
    position: "Software Engineer Intern",
    href: "/",
    details: {
      describe: [
        `Projeto criado para desenvolver skills em Back-End com Python`,
        `Desenvolvido com Python com Flask, JavaScript.`,
      ],
      stack: [FaJsSquare, FaPython, SiFlask, FaGithub],
    },
  },
  {
    img: "/Projects/Notes.png",
    name: "Colab",
    position: "Software Engineer Intern",
    href: "/",
    details: {
      describe: [
        `Craiação de novas features e manutenção do sistema interno da empresa.`,
        `Criação parcial do sistema de Autorização e Autenticação. Feature de 
        agenda interativa de colaborades.`,
      ],
      stack: [FaJsSquare, FaPython, DiDjango, SiGooglecloud, FaDocker, SiMysql],
    },
  },
];
