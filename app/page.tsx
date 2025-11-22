import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Transformation from "@/components/sections/Transformation";
import Testimonials from "@/components/sections/Testimonials";
import BeforeAfters from "@/components/sections/BeforeAfters";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Problem />
      <Transformation />
      <Testimonials />
      <BeforeAfters />
    </div>
  );
}
