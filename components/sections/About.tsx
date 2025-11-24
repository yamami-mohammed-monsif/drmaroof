"use client";

import Section from "../UI/Section";
import Image from "next/image";
import useOnScreen from "@/hooks/useOnScreen";

const About = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });
  return (
    <Section ref={sectionRef}>
      <div className="flex flex-col gap-12 md:flex-row items-center md:gap-16 lg:gap-20">
        <div className="max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
          <h2 className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            Meet Dr. Maroof Beg Artist, Dentist, and Smile Designer.
          </h2>
          <div className="flex flex-col gap-4 mt-5 md:mt-8">
            <p
              className={`${
                isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
              }`}
            >
              With over 5 years of experience in cosmetic dentistry and
              Visagism, Dr. Maroof Beg blends clinical precision with an
              artist’s eye.
            </p>
            <p
              className={`${
                isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            >
              Dr. Maroof Beg holds a Master’s Degree in Advanced Aesthetic
              Restorative Dentistry and a Diploma in Periodontology from
              Barcelona.
            </p>
            <p
              className={`${
                isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
              }`}
            >
              Licensed by the Dubai Health Authority in Restorative and General
              Dentistry and accredited as a Specialist by the Spanish Ministry
              of Health, he blends precision technology with a deeply human
              approach making each smile uniquely yours.
            </p>
          </div>
        </div>
        <div className="aspect-square w-[335px] md:w-[450px] lg:w-[500px] mx-auto">
          <Image
            src="/dr.maroof.webp"
            alt="clinic interior image"
            width={500}
            height={500}
            className="aspect-square w-[335px] md:w-[450px] lg:w-[500px]"
            loading="lazy"
            quality={80}
            sizes="(max-width: 768px) 335px, (max-width: 1024px) 450px, 500px"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
