import Section from "../UI/Section";
import Image from "next/image";
import CTABtn from "../UI/CTABtn";
import { StatisticsData } from "@/constants";

const Hero = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 items-center">
        <div>
          <h1 className="animate-fade-in-up">
            Stop Hiding. Reveal Your Signature Smile.
          </h1>
          <p className="section-description animate-fade-in-up animate-delay-100">
            Experience the art of Visagism with Dr. Maroof Beg, where your smile
            is designed to match your face, personality, and confidence. Forget
            one-size-fits-all results. discover a radiant, natural look that’s
            uniquely yours.
          </p>
          <CTABtn className="mt-8 animate-fade-in-up animate-delay-200">
            Book My Signature Smile Consultation
          </CTABtn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-10 lg:mt-12 animate-fade-in-up animate-delay-300">
            {StatisticsData.map((stat) => {
              return (
                <div key={stat.id} className="flex flex-col gap-0 items-center">
                  <span className="text-heading font-bold text-base md:text-xl">
                    {stat.value}
                  </span>
                  <span className="text-text text-xs md:text-sm">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative -mx-5 md:mx-0 w-[calc(100%+2.5rem)] mt-20 md:mt-0 md:w-md lg:w-xl h-[380px] md:h-[80vh] lg:h-screen bg-[#F5F5F5] md:absolute top-0 right-0 -z-10">
        <Image
          src="/hero-image.webp"
          alt="hero image"
          width={600}
          height={700}
          className="w-[300px] md:w-[350px] lg:w-[420px] xl:w-[85%] h-auto absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-0 md:left-12 md:bottom-0 xl:-left-30"
          priority
          fetchPriority="high"
          quality={75}
        />
      </div>
    </Section>
  );
};

export default Hero;
