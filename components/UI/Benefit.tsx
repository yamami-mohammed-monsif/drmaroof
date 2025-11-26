import Image from "next/image";

interface BenefitProps {
  description: string;
}

const Benefit = ({ description }: BenefitProps) => {
  return (
    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
      <Image
        src="/checkmark.png"
        alt="checkmark icon"
        width={20}
        height={20}
        className="w-5 h-5 md:w-7 md:h-7"
      />
      <p>{description}</p>
    </div>
  );
};

export default Benefit;
