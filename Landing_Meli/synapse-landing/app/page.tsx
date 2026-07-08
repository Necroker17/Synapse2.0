import Navbar from "@/app/components/sections/Navbar";
import Hero from "@/app/components/sections/Hero";
import HowItWorks from "@/app/components/sections/HowItWorks";
import Testimonios from "@/app/components/sections/Testimonios";
import Stats from "@/app/components/sections/Stats";
import Pricing from "@/app/components/sections/Pricing";
import CTAFinal from "@/app/components/sections/CTAFinal";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Testimonios />
      <Stats />
      <Pricing />
      <CTAFinal />
      <Footer />
    </main>
  );
}
