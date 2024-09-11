import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardVariantsExperience } from "@/app/utils/framerMotionConfig"; // Importando as configurações do Motion
import styles from "@/app/styles/ui/experience.module.scss";

export const ExperienceCard = ({
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
  return (
    <div
      key={index}
      className="flex flex-col gap-4 py-6"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex gap-4 items-center">
        <img
          alt={`${item.name} logo`}
          loading="lazy"
          width="56"
          height="56"
          decoding="async"
          className="w-20 h-20 rounded-xl"
          src={item.photo}
          style={{ color: "transparent" }}
        />
        <div className="flex flex-col">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold"
          >
            {item.name}
          </a>
          <span className="text-slate-500">{item.position}</span>
          <span className={styles.date}>{item.date}</span>
        </div>
      </div>

      {/* Transição Motion Frame */}
      <motion.div
        variants={cardVariantsExperience} // Usando as variantes do framerMotionConfig
        animate={hoveredIndex === index ? "open" : "closed"}
        initial="closed"
        className="overflow-hidden"
      >
        <p className="mt-2">
          {item.details.text.map((paragraph: string, id: number) => (
            <p key={id} className="mb-1">
              {paragraph}
            </p>
          ))}
        </p>
        <div className={styles["stack-icons"]}>
          {item.details.stack.map(
            (IconComponent: React.ElementType, idx: number) => (
              <IconComponent key={idx} size={24} />
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};
