"use client";

import { ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-border last:border-none">
      <button
        className="w-full flex items-center justify-between py-4 md:py-5 text-left cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="faq-answer"
      >
        <p className="text-text font-semibold text-lg">{question}</p>
        <ChevronUp
          className={`w-5 h-5 text-gray-900 shrink-0 transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id="faq-answer"
        className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="pb-4 text-text text-sm max-w-3xl">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
