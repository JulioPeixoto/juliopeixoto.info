import React from "react";
import Experience from "../experience/ui/Experience";

export default function Stack() {
  return (
    <section className="pb-1 mb-1">
      <h1 className="font-semibold text-xl">Work</h1>
      <span className="block text-slate-500 font-normal text-base">Stack</span>
      <p className="mb-2 pb-2">
        Experienced Software Engineer with strong expertise in Python and JavaScript/TypeScript. 
        Proficient in AI development using AI frameworks and Large Language Models. 
        Skilled in both SQL (PostgreSQL) and NoSQL (MongoDB) databases. 
        Skilled in Backend development using Python and TypeScript.
        Strong background in modern frameworks including FastAPI, Django, React, and Next.js. 
        Experienced with containerization and deployment using Docker and cloud platforms (Azure, GCP).
      </p>
      <Experience />
    </section>
  );
}
