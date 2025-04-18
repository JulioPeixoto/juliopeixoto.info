import Education from "./ui/Education";
import Hello from "./ui/Hello";
import Stack from "./ui/Stack";

export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col">
      <Hello />
      <Stack />
      <Education />
    </main>
  );
}
