import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Works } from "@/components/sections/Works";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Certificates } from "@/components/sections/Certificates";
import { Blog } from "@/components/sections/Blog";
import { OpenSource } from "@/components/sections/OpenSource";
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
        <TechStack />
        <WormDivider />
        <Experience />
        <Works />
        <WormDivider />
        <Services />
        <WormDivider />
        <Certificates />
        <WormDivider />
        <Blog />
        <WormDivider />
        <OpenSource />
        <WormDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
