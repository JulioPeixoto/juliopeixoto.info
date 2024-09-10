"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Proj } from "@/app/utils/projects";

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
    <section>
      <h2 className="text-3xl font-semibold mb-2 pb-2">
        Projects
        <span className="block text-slate-500 font-normal text-2xl">
          Lorem ipsum dolor. laudantium eius aliquid
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {Proj.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cursor-pointer p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
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
                  <IconComponent key={idx} size={30} className="" />
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
