import React from "react";

export default function Hello() {
  return (
    <section className="pb-14 border-b border-slate-300 mb-14">
      <h1 className="font-semibold text-4xl mb-4">
        Ciao, i'm Julio Peixoto.
        <span className="block text-slate-500 font-normal text-2xl">
          Lorem ipsum, dolor sit amet consectetur.
        </span>
      </h1>
      <p className="text-lg md:text-xl leading-normal">
        I work with leading-edge companies to create exceptional products. I
        most recently worked with MoonPay to help make web3 accessible. Before
        that, I built personal and business banking products for millions of
        customers at Monzo.
      </p>
      <a
        className="group transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3"
        href="/info"
      >
        More Information{" "}
        <span className="inline-block group-hover:translate-x-2 transition-transform">
          →
        </span>
      </a>
    </section>
  );
}
