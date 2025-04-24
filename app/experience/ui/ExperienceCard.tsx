import React from "react";
import { motion } from "framer-motion";
import { cardVariantsExperience } from "@/app/utils/framerMotionConfig"; 
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa"; 

export const ExperienceCard = React.memo(({
  item,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  item: any;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const isOpen = hoveredIndex === index;

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
      className="flex flex-col gap-4 py-6"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image
            alt={`${item.name} logo`}
            width={512}
            height={512}
            decoding="async"
            className="w-20 h-20 rounded-xl"
            src={item.photo}
            loading="lazy"
          />
          <div className="flex flex-col">
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold"
            >
              {item.name}
            </Link>
            <span className="text-slate-500">{item.position}</span>
            <span className="font-mono text-sm font-medium mt-4 block text-slate-500">{item.date}</span>
          </div>
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
        variants={cardVariantsExperience}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        className="overflow-hidden"
      >
        <div className="mt-2">
          {item.details.text.map((paragraph: string, id: number) => (
            <p key={id} className="mb-1">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          {item.details.stack.map(
            (tech: { name: string; icon: React.ElementType }, idx: number) => (
              <div key={idx} className="relative cursor-pointer group">
                <tech.icon
                  size={30}
                  className="theme--light transition-colors duration-200"
                />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-2 py-1 rounded text-xs whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {tech.name}
                </span>
              </div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
});

ExperienceCard.displayName = "ExperienceCard";
