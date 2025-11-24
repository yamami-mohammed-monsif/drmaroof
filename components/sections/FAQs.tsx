"use client";

import Section from "../UI/Section";
import { FAQData } from "@/constants";
import FAQItem from "../UI/FAQItem";
import { useState } from "react";
import useOnScreen from "@/hooks/useOnScreen";

const FAQs = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });

  const handleToggle = (id: number) => {
    setOpenId((prev: number | null) => (prev === id ? null : id));
  };
  return (
    <Section ref={sectionRef} className="bg-light-gray">
      <div className="flex justify-center">
        <h2
          className={`text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Your Questions, Answered.
        </h2>
      </div>
      <div className="w-full md:w-3xl mx-auto mt-8 md:mt-10 lg:mt-16">
        {FAQData.map((faq) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </Section>
  );
};

export default FAQs;
