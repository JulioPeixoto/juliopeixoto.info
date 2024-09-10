import Projects from "../ui/Projects";

export default function Home() {
  return (
    <main className="">
      <section className="mb-4 pb-4">
        <h2 className="text-3xl font-semibold mb-3 pb-3">
          Projects
          <span className="block text-slate-500 font-normal text-2xl">
            Lorem ipsum dolor. laudantium eius aliquid
          </span>
        </h2>
        <p className="text-lg md:text-xl leading-normal prose prose-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci vel
          rem ab minus quidem perferendis officiis recusandae distinctio
          quisquam facilis ducimus ipsam quia, repellat iusto, libero nesciunt
          iure illo dolores.
        </p>
      </section>
      <Projects />
    </main>
  );
}
