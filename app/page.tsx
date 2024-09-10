import Hello from "./ui/Hello";
import { PhotosCarousel } from "./ui/PhotosCarousel";
import Projects from "./ui/Projects";

export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col">
      <Hello />
      <PhotosCarousel />
    </main>
  );
}
