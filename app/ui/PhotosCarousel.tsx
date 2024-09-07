"use client";

import { Carousel } from "@material-tailwind/react";

export function PhotosCarousel() {
  return (
    <section className="pt-2 pb-2 mb-2 mt-2">
      <Carousel
        className="rounded-xl"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
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
        <img
          src="/JulioPerfil.jpeg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/JulioApresentacao.jpeg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          alt="image 3"
          src="/JulioBanese1.jpeg"
          className="h-full w-full object-cover"
        />
        <img
          src="/JulioTime1.jpg"
          alt="image 4"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </section>
  );
}
