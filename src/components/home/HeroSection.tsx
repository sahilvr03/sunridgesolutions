import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[40vh] flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#5E503F]"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">

        {/* Headline */}
        <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Medical Billing and Management Services 
Maximize Your Revenue. Minimize Your Denials.

        </h1>

        {/* Subheadline */}
        <p className="font-serif text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
          We simplify the complexities of the revenue cycle, ensuring every
          claim is processed accurately and every dollar is accounted for.
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