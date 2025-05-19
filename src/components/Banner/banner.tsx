"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import cartas from "@/assets/cartas.jpg";
import cuenco from "@/assets/cuenco.jpg";
import piedras from "@/assets/piedras.jpg";
import propio from "@/assets/yamiTaller.jpg";

type Slide = {
  title: string;
  subtitle: string;
  src: string;
};

const Banner: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    _swiper: unknown,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.strokeDashoffset = `${
        125.6 * (1 - progress)
      }`;
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const slides: Slide[] = [
    {
      title: "Yamila Aranda",
      subtitle: "Terapia Holistica",
      src: propio.src,
    },
    {
      title: "Conectá con tu esencia",
      subtitle: "Sanación a través de terapias holísticas",
      src: cartas.src,
    },
    {
      title: "Equilibrio y armonía interior",
      subtitle: "Espacio para cuerpo, mente y alma",
      src: cuenco.src,
    },
    {
      title: "Transformá tu energía",
      subtitle: "Bienestar y conexión interior",
      src: piedras.src,
    },
  ];

  return (
    <div className="relative w-full max-w-screen mx-auto overflow-x-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-[70vh] md:h-[80vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
