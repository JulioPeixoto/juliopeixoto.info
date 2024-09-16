import Link from "next/link";
import React from "react";

export default function Info() {
  return (
    <div>
      <h1 className="font-semibold tracking-tight text-4xl mb-3 pb-3 ">Work</h1>
      <section className="md:text-lg text-base leading-normal mb-2 pb-2 *:mb-4">
        <p>
          And here is my professional experience until now, I went through
          Edtech startup where I was able to learn a lot, and after a year I
          passed a selection process in the{" "}
          <Link
            target="_blank"
            href="https://www.banese.com.br/"
            className="text-blue-700 hover:text-blue-200"
          >
            State Bank of Sergipe
          </Link>{" "}
          where I am today. Both as a Software Engineer.
        </p>
        <p>
          So far Ive met a lot of focused and dedicated people, with a lot of
          potential, from whom Ive learned and am learning every day, bosses and
          coworkers that Ill keep with me and with my evolution.
        </p>
        <p>
          In the places where I worked, the stack was very similar, working with
          Python and JavaScript. With frameworks like as Django and FastAPI; LangChain;
          React and Nextjs.
        </p>
        <p>
          Here are the companies i have worked until now, all of them very good and
          essential to my development, where Ive made friends in all of them and
          have enormous affection.
        </p>
      </section>
    </div>
  );
}
