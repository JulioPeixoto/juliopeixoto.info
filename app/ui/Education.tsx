import Link from "next/link";
import React from "react";

export default function Education() {
  return (
    <section className="pb-1 mb-">
      <h1 className="font-semibold text-xl">Education</h1>
      <span className="block text-slate-500 font-normal text-lg">B.Sc</span>
      <p className="mb-2 pb-2 text-base">
        Currently im graduating in computer science at the
        <Link target="_blank" className="text-blue-700 hover:text-blue-200" href="https://www.unit.br/en/undergraduate"
        > Tiradentes University</Link> in Sergipe and intend to do an M.Sc. 
      </p>
    </section>
  );
}
