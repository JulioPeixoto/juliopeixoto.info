import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

import {
  FaPython,
  FaReact,
  FaDiscord,
} from "react-icons/fa";

import {
  SiTypescript,
  SiOpenai,
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
    name: "Agent for Mental Health", 
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
