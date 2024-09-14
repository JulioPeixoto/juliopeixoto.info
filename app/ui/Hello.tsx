import React from "react";

export default function Hello() {
  return (
    <section className="pb-1 mb-1">
      <h1 className="font-semibold text-4xl mb-3">
        Hi, i'm Julio Peixoto.
        <span className="block text-slate-500 font-normal text-2xl">
          Software Engineer
        </span>
      </h1>
      <p className="md:text-lg leading-normal mb-2 pb-2">
        I work developing and launching robust and secure services and
        softwares. I currently work at{" "}
        <a
          target="_blank"
          href="https://www.banese.com.br/"
          className="text-blue-700 hover:text-blue-200"
        >
          State Bank of Sergipe
        </a>{" "}
        as a software engineer creating internal services with artificial
        intelligence in the data and artificial intelligence team.
      </p>
    </section>
  );
}
