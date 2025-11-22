"use client";

import { useRef, useState } from "react";
import Section from "../UI/Section";
import { TestimonialsData } from "../../constants";
import TestimonialCard from "../UI/TestimonialCard";
import useOnScreen from "@/hooks/useOnScreen";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <Section ref={sectionRef} className="overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="md:w-[300px] lg:w-md shrink-0">
          <h2 className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            Real Patients. Real Transformations.
          </h2>
          <p
            className={`section-description ${
              isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"
            }`}
          >
            Watch how patients who once hid their smiles now radiate confidence
            with Visagism.
          </p>
        </div>

        <div className="flex-1 min-w-0">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
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
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="pb-8"
          >
            {TestimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 md:mt-8">
            {/* Pagination Bullets */}
            <div ref={paginationRef} className="testimonials-pagination" />

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="testimonials-swiper-button-prev flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="text-text" size={20} />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="testimonials-swiper-button-next flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
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

export default Testimonials;
