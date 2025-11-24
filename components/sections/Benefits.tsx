"use client";

import Section from "../UI/Section";
import { BenefitsData } from "@/constants";
import Benefit from "../UI/Benefit";
import Image from "next/image";
import useOnScreen from "@/hooks/useOnScreen";

const Benefits = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });
  return (
    <Section ref={sectionRef}>
      <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16 lg:gap-20 max-w-7xl mx-auto">
        <div>
          <div>
            <h2
              className={`max-w-[600px] ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Why Visagism? Because Your Smile Should Fit You.
            </h2>
            <p
              className={`section-description ${
                isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"
              }`}
            >
              Standard dentistry uses templates. We don’t. Dr. Beg doesn’t just
              change teeth. He enhances your natural beauty, so your smile looks
              effortless, authentic, and completely you.
            </p>
          </div>
          <div
            className={`mt-5 md:mt-8 ${
              isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
            }`}
          >
            {BenefitsData.map((benefit) => {
              return (
                <Benefit key={benefit.id} description={benefit.description} />
              );
            })}
          </div>
        </div>
        <div className="w-[335px] md:w-[450px] lg:w-[600px] mx-auto">
          <Image
            src="/clinic-interior.webp"
            alt="clinic interior image"
            width={500}
            height={500}
            className="w-[335px] md:w-[450px] lg:w-[600px] md:mr-auto"
            loading="lazy"
            quality={80}
            sizes="(max-width: 768px) 335px, (max-width: 1024px) 450px, 600px"
          />
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
