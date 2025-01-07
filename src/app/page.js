import About from "@/components/About";
import ClientTestimonials from "@/components/ClientTestimonials";
import Hero from "@/components/Hero";
import MarqueeClients from "@/components/MarqueeClients";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto">
      <Hero />
      <Services />
      <About />
      <MarqueeClients />
      <ClientTestimonials />
    </div>
  );
}
