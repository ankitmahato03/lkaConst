import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto">
      <Hero />
      <Services />
      <About />
    </div>
  );
}
