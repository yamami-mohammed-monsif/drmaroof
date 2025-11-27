import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import ClientSections from "./ClientSections";
import StickyCTA from "@/components/UI/StickyCTA";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ClientSections />
      <StickyCTA />
    </div>
  );
}
