"use client";

import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

export function PhotosCarousel() {
  return (
    <section className="pb-3 mb-3">
      <Carousel
        className="rounded-xl"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <Image
          src="/Carousel/JulioPerfil.jpeg"
          alt="image 1"
          width={1200} 
          height={500} 
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <Image
          src="/Carousel/JulioApresentacao.jpeg"
          alt="image 2"
          width={1200} 
          height={500} 
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <Image
          alt="image 3"
          src="/Carousel/JulioBanese1.jpeg"
          width={1200} 
          height={500} 
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <Image
          src="/Carousel/JulioTime1.jpg"
          alt="image 4"
          width={1200} 
          height={500} 
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </Carousel>
    </section>
  );
}
