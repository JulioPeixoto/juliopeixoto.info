"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Proj } from "@/app/utils/constants/constantsProjects";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Definir as variantes de animação
  const cardVariants = {
    open: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      y: 20,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="mb-3 pb-3">
      <div className="grid grid-cols-1 gap-5">
        {Proj.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative cursor-pointer p-5 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Ícone GitHub no topo direito */}
            <a
              href={project.href}
              target="_blank"
              className="absolute top-3 right-3"
              aria-label="GitHub Link"
            >
              <FaGithub size={30} className=" hover:text-gray-500" />
            </a>

            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-slate-500 font-semibold mb-2">{project.position}</p>

            {/* Motion Frame */}
            <motion.div
              variants={cardVariants}
              animate={hoveredIndex === index ? "open" : "closed"}
              initial="closed"
              className="overflow-hidden"
            >
              <img
                src={project.img}
                alt={`${project.name} image`}
                className="w-full h-96 object-cover rounded-md mb-4"
              />
              <div className="text-sm">
                {project.details.describe.map((paragraph, idx) => (
                  <p key={idx} className="mb-2 text-lg">{paragraph}</p>
                ))}
              </div>
              <div className="flex space-x-3 mt-4">
                {project.details.stack.map((IconComponent, idx) => (
                  <IconComponent key={idx} size={34} className="" />
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
