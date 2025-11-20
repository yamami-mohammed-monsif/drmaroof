"use client";

import Section from "../UI/Section";
import Image from "next/image";
import useOnScreen from "@/hooks/useOnScreen";

const problemPoints = [
  {
    id: 1,
    text: "Generic dental procedures strip away your unique identity. A manufactured smile betrays the subtle nuances of your personality, leaving you feeling disconnected and uncertain.",
    delay: "animate-delay-100",
  },
  {
    id: 2,
    text: "A manufactured smile can be a prison of self-doubt. It speaks nothing of your true self, silencing the subtle language of your personality.",
    delay: "animate-delay-200",
  },
  {
    id: 3,
    text: "Every forced grin erodes your confidence, creating a disconnect between who you are and how the world perceives you.",
    delay: "animate-delay-300",
  },
];

const Problem = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });

  return (
    <Section className="lg:pt-24" ref={sectionRef}>
      <div className="grid gap-12 md:gap-16 lg:gap-20 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-7 md:gap-8 lg:gap-10 order-1 md:order-2">
          <h2 className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
            Tired of a Smile That Doesn't Feel Like You?
          </h2>

          <div className="flex flex-col gap-4 md:gap-5 max-w-[550px]">
            {problemPoints.map((point) => (
              <div
                key={point.id}
                className={`
                  lg:py-3 pl-8 
                  hover:bg-[#f8f8f8] hover:border-l hover:border-neutral-dark
                  transition-colors duration-300
                  ${
                    isVisible
                      ? `animate-fade-in-up ${point.delay}`
                      : "opacity-0"
                  }
                `}
              >
                <p>{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-2 md:order-1 flex justify-center">
          <Image
            src="/problem-img.webp"
            alt="Person feeling disconnected from their smile - dental concerns illustration"
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

export default Problem;
