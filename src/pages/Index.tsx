import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import TransformationsSection from "@/components/TransformationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProgramsSection />
        <TransformationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
