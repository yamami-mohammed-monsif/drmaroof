import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className = "" }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`
          px-5 md:px-8 lg:px-16
          py-10 md:py-12 lg:py-16
          ${className}
        `}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

export default Section;
