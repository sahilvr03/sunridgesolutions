import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[40vh] flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#5E503F]" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">

        {/* Main Heading (approx 24px responsive) */}
        <h1 className="font-serif text-white text-3xl sm:text-4xl font-bold mb-3">
          Medical Billing and Management Services
        </h1>

        {/* Subheading (approx 16–20px responsive) */}
        <h2 className="font-serif text-white text-xl sm:text-2xl font-semibold mb-4">
          Maximize Your Revenue Minimize Your Denials
        </h2>

        {/* Sub-Subheading */}
        <p className="font-serif text-white/80 text-base sm:text-lg leading-relaxed mb-8">
          We simplify the complexities of the revenue cycle, ensuring every claim is processed 
          accurately and every dollar is accounted for
        </p>

        {/* CTA Button */}
        <Link to="/contact">
          <Button className="bg-white text-[#5E503F] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Request a Free Analysis
          </Button>
        </Link>

      </div>
    </section>
  );
}