"use client";

import React from "react";
import { Percent, Calendar, Settings, Calculator, LucideIcon } from "lucide-react";


/* ✅ Pricing Model Type */
type PricingModel = {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  idealFor: string;
};

/* ✅ Pricing Data */
const pricingModels: PricingModel[] = [
  {
    title: "Percentage of Collections",
    icon: Percent,
    description: "Pay only when we collect for you",
    features: ["No upfront costs", "Aligns with your revenue", "Performance-based"],
    idealFor: "Practices with stable collections",
  },
  {
    title: "Flat Monthly Fee",
    icon: Calendar,
    description: "Predictable monthly billing",
    features: ["Fixed monthly cost", "Unlimited claims", "Easy budgeting"],
    idealFor: "Growing or new practices",
  },
  {
    title: "Custom Pricing",
    icon: Settings,
    description: "Tailored to your specific needs",
    features: ["Hybrid models available", "Volume discounts", "Custom service mix"],
    idealFor: "Unique or complex needs",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-gradient-to-br from-[#fff0dc] to-[#ebdbc4] text-gray-900">

      {/* HERO */}

      <section className="relative w-full min-h-[35vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/banner.png"
            alt="Medical Billing Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#5E503F]" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">

          <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Transparent Pricing
          </h1>

          <p className="font-serif text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Flexible engagement models designed to fit every practice size and specialty.
          </p>

        </div>
      </section>

      {/* PRICING */}

      <section className="py-24">
        <div className="container-wide">

          {/* Header */}

          <div className="text-center max-w-3xl mx-auto mb-16">

            <span
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
              bg-secondary/50 border border-accent/30
              text-accent text-sm font-serif font-semibold uppercase tracking-wider mb-6"
            >
              Flexible Plans
            </span>

            <h2 className="font-serif text-4xl font-bold text-[#242424] mb-6">
              Engagement Models That Work for You
            </h2>

            <p className="font-serif text-[#807e78] text-lg leading-relaxed">
              Choose a pricing model that matches your practice’s goals and growth.
            </p>

          </div>

          {/* PRICING CARDS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

            {pricingModels.map((model) => {
              const Icon = model.icon;

              return (
                <div
                  key={model.title}
                  className="p-8 bg-card rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="text-center mb-6">

                    <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#D4AF37]/10 mb-4">
                      <Icon className="w-7 h-7 text-[#cfa109]" />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#242424] mb-2">
                      {model.title}
                    </h3>

                    <p className="font-serif text-[#807e78]">
                      {model.description}
                    </p>

                  </div>

                  <h4 className="font-serif font-semibold text-[#242424] mb-3">
                    Features:
                  </h4>

                  <ul className="space-y-2 mb-6">

                    {model.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center font-serif text-[#807e78] text-sm"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#cfa109] mr-3"></span>
                        {feature}
                      </li>
                    ))}

                  </ul>

                  <div className="pt-4 border-t border-[#ead8b6] text-sm text-[#807e78]">
                    <span className="font-semibold text-[#242424]">
                      Ideal for:
                    </span>{" "}
                    {model.idealFor}
                  </div>

                </div>
              );
            })}

          </div>

          {/* CTA */}

          <div className="rounded-2xl bg-[#5E503F] p-12 text-white">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}

              <div>

                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-8 h-8 text-[#D4AF37]" />
                  <h3 className="font-serif text-3xl font-bold">
                    Request a Custom Quote
                  </h3>
                </div>

                <p className="text-white/80 mb-6 font-serif">
                  Tell us about your practice and receive personalized pricing.
                </p>

                <ul className="space-y-3 text-sm font-serif">

                  {[
                    "No obligation quote",
                    "Specialty-specific pricing",
                    "Volume discounts available",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3" />
                      {item}
                    </li>
                  ))}

                </ul>

              </div>

              {/* FORM */}

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">

                <h4 className="font-serif text-xl font-bold mb-4">
                  Get Started
                </h4>

                <form className="space-y-4">

                  <input
                    type="text"
                    placeholder="Practice Name"
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />

                  <select
                    aria-label="Select Monthly Volume"
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <option value="" className="text-gray-900">
                      Select Monthly Volume
                    </option>

                    <option value="low" className="text-gray-900">
                      Under 500 claims
                    </option>

                    <option value="medium" className="text-gray-900">
                      500 - 2,000 claims
                    </option>

                    <option value="high" className="text-gray-900">
                      Over 2,000 claims
                    </option>

                  </select>

                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-black font-semibold py-3 rounded-lg hover:opacity-90 transition"
                  >
                    Get My Custom Quote
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}