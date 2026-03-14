import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Works } from "@/components/sections/Works";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { WormDivider } from "@/components/WormDivider";

export default function Home() {
  return (
    <div className="bg-background min-h-screen selection:bg-foreground selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <WormDivider />
        <About />
        <WormDivider />
        <Experience />
        <Works />
        <WormDivider />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
