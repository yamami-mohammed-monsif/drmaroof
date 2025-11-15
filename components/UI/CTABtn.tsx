import Link from "next/link";

interface CTAProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CTABtn = ({ children, className, onClick }: CTAProps) => {
  return (
    <div>
      <button
        className={`${className} w-full md:w-auto bg-cta text-white flex items-center justify-center gap-2 px-8 py-3 rounded-lg hover:bg-cta-hover transition-colors duration-300 drop-shadow-lg`}
        onClick={onClick}
      >
        <Link href="">{children}</Link>
      </button>
    </div>
  );
};

export default CTABtn;
