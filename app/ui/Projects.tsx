"use client";

import React, { useState } from "react";
import { Proj } from "@/app/utils/constants/constantsProjects";
import { ProjectCard } from "./uiProjects/ProjectCard";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mb-3 pb-3">
      <div className="grid grid-cols-1 gap-5">
        {Proj.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </section>
  );
}
