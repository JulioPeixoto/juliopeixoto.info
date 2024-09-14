"use client";

import React, { useState } from "react";
import { EXP } from "../utils/constantsExperience"; 
import { ExperienceCard } from "./ExperienceCard";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mb-6">
      <h2 className="font-semibold text-2xl tracking-tight mb-2 mt-2">
        Experience
        <span className="block text-slate-500 font-normal text-lg">
        companies Ive worked for        
        </span>
      </h2>
      <div className="divide-y divide-blue-gray-700">
        {EXP.map((item, index) => (
          <ExperienceCard
            key={index}
            item={item}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </section>
  );
}
