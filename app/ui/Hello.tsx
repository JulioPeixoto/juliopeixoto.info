import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hello() {
  return (
    <section className="py-1">
      <h1 className="font-semibold text-xl mb-3">
        Hi, I'm Julio Peixoto.
        <span className="block text-slate-500 font-normal text-base mt-1">
          AI Software Engineer
        </span>
      </h1>
      <p className="mb-4 max-w-3xl text-base">
        Software Engineer with over 2+ years of experience working in startups and the banking sector, 
        currently at{" "}
        <Link
          target="_blank"
          href="https://www.ey.com/"
          className="text-blue-700 hover:text-blue-400"
        >
          EY
        </Link>{" "}
        as an AI Software Engineer. My professional journey has led me to specialize in backend development 
        and artificial intelligence solutions using Python, JavaScript, and TypeScript.
      </p>
      
      <p className="mb-4 max-w-3xl text-base">
        I work with frameworks and libraries such as Django, FastAPI, LangChain, and Hugging Face to 
        create robust AI-powered applications. I'm also an open-source contributor and volunteer 
        researcher at Tiradentes University.
      </p>
    </section>
  );
}
