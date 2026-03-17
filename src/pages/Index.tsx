
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProcessSection } from "@/components/home/ServicesSection";
import { TrustSection } from "@/components/home/TrustSection";
import { KeyBenefits } from "@/components/home/Specialities";
import { HowItWorksSection } from "@/components/home/Howitworks";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ResourcesSection } from "@/components/home/Resources";
import { CTASection } from "@/components/home/CTASection";
import HowWeDeliver from "@/components/home/HowWeDeliver";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff0dc]  to-[#ebdbc4]">

      <main>
        <HeroSection />
        {/* <StatsSection /> */}
        <HowWeDeliver />
        <KeyBenefits />
        <ProcessSection />
        {/* <HowItWorksSection /> */}
        {/* <PricingSection /> */}
        {/* <TestimonialsSection /> */}
        {/* <ResourcesSection /> */}
      
       {/* <CTASection />  */}
      </main>

    </div>
  );
};

export default Index;