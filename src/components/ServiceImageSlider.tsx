"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ImageSlide } from "@/lib/images";

type ServiceImageSliderProps = {
  slides: readonly ImageSlide[];
  intervalMs?: number;
};

export function ServiceImageSlider({
  slides,
  intervalMs = 5000,
}: ServiceImageSliderProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  if (slides.length === 0) return null;

  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, 600px"
          priority={index === 0}
        />
      ))}

      {slides.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2"
          aria-hidden="true"
        >
          {slides.map((slide, index) => (
            <span
              key={slide.src}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === active ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
