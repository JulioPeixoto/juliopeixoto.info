import Link from "next/link";
import Hackton from "./ui/Hackaton";
import Projects from "./ui/Projects";

export default function Home() {
  return (
    <main className="">
      <section className="mb-4 pb-4">
        <h2 className="text-3xl font-semibold mb-3 pb-3">
          Projects
          <span className="block text-slate-500 font-normal text-2xl">
          Some stuffs
          </span>
        </h2>
        <p className="text-base leading-normal mt-2">
          Here are some of the projects Ive done during my career and
          some side projects Ive done during my spare time. If you want to see more stuff Ive done, just go to my{" "}
          <Link
            className="text-blue-700 hover:text-blue-200"
            href="https://github.com/JulioRaf4"
            target="_blank"
          >
            github.
          </Link>
        </p>
      </section>
      <Projects />
      <Hackton />
    </main>
  );
}
