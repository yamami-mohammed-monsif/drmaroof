"use client";

import Section from "../UI/Section";
import { BeforeAfterData } from "@/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useOnScreen from "@/hooks/useOnScreen";
import Image from "next/image";
import { useRef, useState } from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const BeforeAfters = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <Section ref={sectionRef}>
      <div>
        <h2
          className={`max-w-xl mb-8 md:mb-10  ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Real results from real patients.
        </h2>
      </div>
      <div className="flex-1 min-w-0">
        {/* Swiper Slider */}
        <div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={setSwiperInstance} // Capture swiper instance
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              type: "bullets",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="pb-8"
          >
            {BeforeAfterData.map((img) => (
              <SwiperSlide key={img.id}>
                <div className="relative w-full aspect-4/3 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={img.id === 1}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-between mt-6 md:mt-8">
            {/* Pagination Bullets */}
            <div ref={paginationRef} className="beforeafters-pagination" />

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="beforeafters-swiper-button-prev flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous before/after"
              >
                <ArrowLeft className="text-text" size={20} />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="beforeafters-swiper-button-next flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next before/after"
              >
                <ArrowRight className="text-text" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BeforeAfters;
