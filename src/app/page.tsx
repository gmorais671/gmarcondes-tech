import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { TechnicalDifference } from "@/components/TechnicalDifference";
import { Leadership } from "@/components/Leadership";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1E36] text-[#F4EFEA] selection:bg-[#C6A87C] selection:text-[#0F1E36]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <TechnicalDifference />
        <Leadership />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
