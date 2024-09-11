"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { EXP } from "@/app/utils/constants/constantsExperience";
import styles from "@/app/styles/ui/experience.module.scss";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section className="mb-12">
      <h2 className="font-semibold text-2xl tracking-tight mb-4 mt-2">
        Experience
      </h2>
      <div className="divide-y divide-blue-gray-700">
        {EXP.map((item, index) => (
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
                className="w-14 h-14 rounded-xl"
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
              variants={cardVariants}
              animate={hoveredIndex === index ? "open" : "closed"}
              initial="closed"
              className="overflow-hidden"
            >
              <p className=" mt-2">{item.details.text.map((paragraph, id) => (
                <p key={id} className="mb-1">{paragraph}</p>
              ))}</p>
              <div className={styles["stack-icons"]}>
                {item.details.stack.map((IconComponent, idx) => (
                  <IconComponent key={idx} size={24} className="" />
                ))}
              </div>
            </motion.div>
            {/* Transição Motion Frame */}

          </div>
        ))}
      </div>
    </section>
  );
}
