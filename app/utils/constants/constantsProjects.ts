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
        `Developed with Typescript, NextJS, ReactJS and deployed on Azure`,
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
        `Internal service of State Bank of Sergipe (Banese) to 
        generating data for credit provisioning and analysis
        using Artificial Intelligence.`,
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
        `Project created to store and share notes in .MD format with a markdown preview.`,
        `Developed with Typescript, ReactJS and deployed on GitHub Pages.`,
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
        `Side project created at Scrimba's React Course to improve Skills and retain knowledge.`,
        `Developed with Typescript, ReactJS and deployed on GitHub Pages.`,
      ],
      stack: [SiTypescript, FaReact, FaGithub],
    },
  },
  {
    img: "/Projects/Chatbot.png",
    name: "ChatGPT on Discord",
    position: "Side Project",
    href: "https://github.com/JulioRaf4/chatgptondiscord2",
    details: {
      describe: [
        `Project created to do a chat on Discord with OpenAI ChatGPT Models.`,
        `Developed with Python, OpenAI API and Discord API.`,
      ],
      stack: [FaPython, SiOpenai, FaDiscord],
    },
  },
  {
    img: "/Projects/WebMenu.png",
    name: "Web Menu",
    position: "Software Engineer Intern",
    href: "https://github.com/JulioRaf4/web-menu",
    details: {
      describe: [
        `Project created to improve Back-end Skills with Python and Front-end with Js`,
        `Developed with Python Flask and JavaScript.`,
      ],
      stack: [FaJsSquare, FaPython, SiFlask, FaGithub],
    },
  }
];
