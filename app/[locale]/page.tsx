import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/sections/footer";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
