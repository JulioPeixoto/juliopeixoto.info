import React from "react";
import { motion } from "framer-motion";
import { cardVariantsExperience } from "@/app/utils/framerMotionConfig"; 
import styles from "../styles/Experience.module.scss";
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
            <span className={styles.date}>{item.date}</span>
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

        <div className={styles["stack-icons"]}>
          {item.details.stack.map(
            (IconComponent: React.ElementType, idx: number) => (
              <IconComponent
                key={idx}
                size={30}
                className="theme--light transition-colors duration-200"
              />
            )
          )}
        </div>
      </motion.div>
    </div>
  );
});

ExperienceCard.displayName = "ExperienceCard";
