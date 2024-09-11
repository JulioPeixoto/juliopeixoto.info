"use client";

import React, { useState } from "react";
import { EXP } from "@/app/utils/constants/constantsExperience"; 
import { ExperienceCard } from "./uiExperience/ExperienceCard";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mb-12">
      <h2 className="font-semibold text-2xl tracking-tight mb-4 mt-2">
        Experience
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
