import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardVariantsProjects } from "@/app/utils/framerMotionConfig"; 
import { GitHubIcon } from "./GitHubIcon";
import { ProjectDetails } from "./ProjectDetails";
import Image from 'next/image';

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
        <Image
          src={project.img}
          alt={`${project.name} image`}
          width={1000} 
          height={500} 
          className="w-full object-cover rounded-md mb- aspect-w-16 aspect-h-94"
        />
        <ProjectDetails describe={project.details.describe} stack={project.details.stack} />
      </motion.div>
    </div>
  );
};
