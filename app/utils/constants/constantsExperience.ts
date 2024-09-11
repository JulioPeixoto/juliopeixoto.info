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
        `Experiência no Banco do Estado de Sergipe como Software Engineer no time de Dados e IA.
        Desenvolvendo SaaS internos com Inteligência Artificial utilizando Modelos de linguagem de IA Generativa.`,
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
        `Estágio na Colaborativa como Desenvolvedor, trabalhando na equipe de desenvolvimento de software
        criando novas features e realizando manutenção no sistema interno da empresa.`,
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
