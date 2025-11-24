"use client";

import Section from "../UI/Section";
import Image from "next/image";
import CTABtn from "../UI/CTABtn";
import useOnScreen from "@/hooks/useOnScreen";

const CTA = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });
  return (
    <Section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gray-900 md:py-16 lg:py-[100px]"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/cta-img.webp"
          alt="Smiling woman confident about her smile"
          fill
          className="object-cover object-center md:object-[80%_center]"
          quality={90}
          priority={false}
        />
      </div>
      <div
        className="absolute inset-0 
          bg-black/70 
          md:bg-linear-to-r md:from-black/90 md:from-10% md:via-black/75 md:via-40% md:to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <div className="text-white">
          <h2
            className={`text-white mb-5 md:mb-7 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Ready to Finally <br className="hidden md:block" />
            Love Your Smile?
          </h2>

          <div
            className={`${
              isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"
            }`}
          >
            <p className="section description text-lg mb-1.5 md:mb-2.5">
              Stop hiding. Start smiling with confidence.
            </p>
            <p className="max-w-lg">
              Book your private consultation with Dr. Maroof Beg and discover
              how Visagism can reveal the smile that’s truly yours.
            </p>
          </div>

          <CTABtn
            className={`mt-8 ${
              isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
            }`}
          >
            Book My Signature Smile Consultation
          </CTABtn>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
