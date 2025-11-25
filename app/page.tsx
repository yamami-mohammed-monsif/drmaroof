import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import ClientSections from "./ClientSections";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ClientSections />
    </div>
  );
}
