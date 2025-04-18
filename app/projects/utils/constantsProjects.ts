import { RiNextjsFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

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
  SiTypescript,
  SiMysql,
  SiOpenai,
  SiFlask,
  SiVercel,
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
      stack: [SiTypescript, RiNextjsFill, FaReact],
    },
  },
  {
    img: "/Projects/MentalChatbot.png",
    name: "RAG Chatbot for psychology aplicattion", 
    position: "Article Project",
    href: "https://rag-psychology-ui.vercel.app/",
    details: {
      describe: [
        `Project developed from a scientific article where the focus is to develop 
        a Rag system for psychologists to apply in the area of mental health.
        Developed with Typescript, NextJS, ReactJS, Pinecone and Postgres. Deployed on Vercel.`,
      ],
      stack: [SiTypescript, RiNextjsFill, FaReact, BiLogoPostgresql, SiVercel],
    },
  },
  {
    img: "/Projects/BaneseHome.png",
    name: "Banese 4966",
    position: "Software Engineer",
    href: "https://github.com/JulioRaf4/banese-4966",
    details: {
      describe: [
        `Internal application for the State Bank of Sergipe (Banese) on generating data for 
        credit provisioning and analysis using Artificial Intelligence.`,
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
];
