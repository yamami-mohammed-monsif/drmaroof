"use client";

import Section from "../UI/Section";
import Image from "next/image";
import useOnScreen from "@/hooks/useOnScreen";

const Transformation = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });
  return (
    <Section ref={sectionRef}>
      <div className="grid gap-12 md:gap-16 lg:gap-20 md:grid-cols-2 items-center">
        <div>
          <div className="mb-7">
            <h2
              className={`mb-4 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Your Transformation:Where Art Meets Science
            </h2>
            <p
              className={`section-description ${
                isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"
              }`}
            >
              Your journey begins with a deep understanding of you.
            </p>
          </div>
          <div
            className={`flex flex-col gap-4 max-w-xl ${
              isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
            }`}
          >
            <p>
              Using Visagism, Dr. Maroof studies your facial structure,
              expressions, and personality, your unique blueprint. Then, with
              precision artistry and advanced materials like flawless porcelain
              veneers, he designs a smile in perfect harmony with your features.
            </p>
            <p>
              The result? A natural, confident smile that belongs to you, not a
              template. That’s the Signature Smiles difference.
            </p>
          </div>
        </div>
        <div className="w-[335px] md:w-[450px] lg:w-[600px] mx-auto">
          <Image
            src="/drmaroof-with-patient.webp"
            alt="dr maroof with patient working on smile transformation"
            width={500}
            height={500}
            className="w-[335px] md:w-[450px] lg:w-[600px]"
            loading="lazy"
            quality={75}
            sizes="(max-width: 767px) 335px, (max-width: 1023px) 450px, 600px"
            priority={false}
          />
        </div>
      </div>
    </Section>
  );
};

export default Transformation;
