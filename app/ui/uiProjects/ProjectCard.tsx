import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardVariantsProjects } from "@/app/utils/framerMotionConfig"; 
import { GitHubIcon } from "./GitHubIcon";
import { ProjectDetails } from "./ProjectDetails";

export const ProjectCard = ({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  project: any;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative cursor-pointer p-5 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <GitHubIcon href={project.href} />
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="text-slate-500 font-semibold mb-2">{project.position}</p>

      {/* Motion Frame */}
      <motion.div
        variants={cardVariantsProjects}
        animate={hoveredIndex === index ? "open" : "closed"}
        initial="closed"
        className="overflow-hidden"
      >
        <img
          src={project.img}
          alt={`${project.name} image`}
          className="w-full h-96 object-cover rounded-md mb-4"
        />
        <ProjectDetails describe={project.details.describe} stack={project.details.stack} />
      </motion.div>
    </div>
  );
};
