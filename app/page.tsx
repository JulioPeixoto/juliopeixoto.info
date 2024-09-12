import Education from "./ui/Education";
import Hello from "./ui/Hello";
import { PhotosCarousel } from "./ui/PhotosCarousel";
import Projects from "./ui/Projects";
import Stack from "./ui/Stack";

export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col">
      <Hello />
      <PhotosCarousel />
      <Stack />
      <Education />
    </main>
  );
}
