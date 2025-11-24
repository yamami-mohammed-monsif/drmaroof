import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Transformation from "@/components/sections/Transformation";
import Testimonials from "@/components/sections/Testimonials";
import BeforeAfters from "@/components/sections/BeforeAfters";
import Benefits from "@/components/sections/Benefits";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Problem />
      <Transformation />
      <Testimonials />
      <BeforeAfters />
      <Benefits />
    </div>
  );
}
