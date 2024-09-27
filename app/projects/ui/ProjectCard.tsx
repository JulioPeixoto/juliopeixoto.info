import React from "react";
import { motion } from "framer-motion";
import { cardVariantsProjects } from "@/app/utils/framerMotionConfig";
import { ProjectDetails } from "./ProjectDetails";
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

export const ProjectCard = React.memo(({
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
  const isOpen = hoveredIndex === index;

  const handleCardClick = () => {
    window.open(project.href, "_blank"); 
  };

  const toggleCard = () => {
    if (isOpen) {
      setHoveredIndex(null); 
    } else {
      setHoveredIndex(index); 
    }
  };

  return (
    <div
      key={index}
      className="relative cursor-pointer p-5 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-slate-500 font-semibold mb-2">{project.position}</p>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.3 }} 
          className="cursor-pointer"
        >
          <FaChevronDown onClick={toggleCard} size={20} />
        </motion.div>
      </div>

      <motion.div
        variants={cardVariantsProjects}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        className="overflow-hidden"
      >
        <Image
          src={project.img}
          alt={`${project.name} image`}
          width={1000}
          height={500}
          className="w-full object-cover rounded-md mb-4 aspect-w-16 aspect-h-9"
          onClick={handleCardClick} 
          loading="lazy"
        />
        <ProjectDetails describe={project.details.describe} stack={project.details.stack} />
      </motion.div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";
