interface TestimonialData {
  id: number;
  name: string;
  content: string;
}

const TestimonialCard = ({ id, name, content }: TestimonialData) => {
  return (
    <div
      key={id}
      className="flex flex-col gap-5 p-6 rounded-lg bg-light-gray hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="flex flex-col gap-4 md:gap-5">
        <img
          src="/five-stars.png"
          alt="five stars rating"
          className="w-[101px] h-4"
        />
        <p>{content}</p>
      </div>
      <p className="font-semibold text-lg md:text-xl">{name}</p>
    </div>
  );
};

export default TestimonialCard;
