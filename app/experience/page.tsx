import Experience from "./ui/Experience";
import Info from "./ui/Info";

export default function Home() {
  return (
    <main className="flex flex-col">
        <Info />
        <Experience />
    </main>
  );
}
