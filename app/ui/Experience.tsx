import React from "react";
import { EXP } from "@/app/utils/constants"; // Ajuste o caminho para o arquivo constants.ts
import styles from '@/app/styles/ui/experience.module.scss'; // Importando o arquivo SCSS

export default function Experience() {
  return (
    <section className="mb-12">
      <h2 className="font-semibold text-2xl tracking-tight mb-4 mt-2">
        Experience
      </h2>
      <div className="divide-y divide-blue-gray-700">
        {EXP.map((item, index) => (
          <div key={index} className="flex gap-4 py-6">
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
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-slate-800 text-xl font-semibold">
                {item.name}
              </a>
              <span className={styles.position}>{item.position}</span>
              <span className={styles.date}>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
