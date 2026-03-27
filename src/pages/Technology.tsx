"use client";

import React from "react";
import {
  Shield,
  Lock,
  Zap,
  BarChart,
  Database,
  LucideIcon,
} from "lucide-react";

/* ✅ Feature Type */
type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

/* ✅ Features Data */
const features: Feature[] = [
  {
    title: "HIPAA Compliant",
    description:
      "Full compliance with healthcare privacy regulations and annual audits",
    icon: Shield,
    points: [
      "BAAs with all partners",
      "Regular security training",
      "Compliance documentation",
    ],
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade encryption and security protocols",
    icon: Lock,
    points: [
      "256-bit encryption",
      "SOC 2 Type II certified",
      "Multi-factor authentication",
    ],
  },
  {
    title: "EHR/EMR Integrations",
    description: "Seamless integration with your existing systems",
    icon: Zap,
    points: ["Athenahealth", "eClinicalWorks", "Office Ally", "Epic, Cerner"],
  },
  {
    title: "Clearinghouse Partners",
    description: "Direct connections with major clearinghouses",
    icon: Database,
    points: ["Change Healthcare", "Availity", "Waystar", "Zirmed"],
  },
  {
    title: "Advanced Analytics",
    description: "Real-time reporting and performance insights",
    icon: BarChart,
    points: [
      "Custom dashboards",
      "Claim tracking",
      "Performance metrics",
      "Trend analysis",
    ],
  },
];

/* ✅ Badge Props Type */
type BadgeProps = {
  icon: LucideIcon;
  label: string;
};

/* ✅ Badge Component */
function Badge({ icon: Icon, label }: BadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
        <Icon className="h-6 w-6 text-blue-700" />
      </div>
      <span className="font-semibold text-gray-700">{label}</span>
    </div>
  );
}

/* ✅ Main Page Component */
export default function TechnologyPage() {
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
            Compliances
          </h1>

          <p className="font-serif text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Enterprise-grade security, healthcare compliance, and powerful
            integrations built for modern medical billing systems.
          </p>

        </div>
      </section>

      {/* CONTENT */}

      <section className="py-24">
        <div className="container-wide">

          {/* Header */}

          <div className="text-center max-w-3xl mx-auto mb-16">

       
            <h2 className="font-serif text-4xl font-bold text-[#242424] mb-6">
              Built for Healthcare Compliance
            </h2>

            <p className="font-serif text-[#807e78] text-lg leading-relaxed">
              Our platform meets strict healthcare security and compliance standards.
            </p>

          </div>

          {/* FEATURES */}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">

            {features.slice(0, 3).map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="p-7 bg-card rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="flex items-start gap-4 mb-6">

                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#D4AF37]/10">
                      <Icon className="w-6 h-6 text-[#cfa109]" />
                    </div>

                    <div>

                      <h3 className="font-serif text-xl font-semibold text-[#242424] mb-1">
                        {feature.title}
                      </h3>

                      <p className="font-serif text-[#807e78] text-sm">
                        {feature.description}
                      </p>

                    </div>

                  </div>

                  <ul className="space-y-2">

                    {feature.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center font-serif text-[#807e78] text-sm"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#cfa109] mr-3"></span>
                        {point}
                      </li>
                    ))}

                  </ul>

                </div>
              );
            })}

          </div>

          {/* INTEGRATION PARTNERS */}

          <div className="rounded-2xl border border-[#e5d6b8] bg-white p-12 mb-20">

            <div className="text-center mb-10">

              <h3 className="font-serif text-3xl font-bold text-[#242424] mb-3">
                Trusted Integration Partners
              </h3>

              <p className="font-serif text-[#807e78]">
                We connect seamlessly with the tools you already use.
              </p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

              {[
                "Athenahealth",
                "eClinicalWorks",
                "Office Ally",
                "Epic",
                "Cerner",
                "Allscripts",
                "NextGen",
                "Practice Fusion",
                "Greenway Health",
                "DrChrono",
              ].map((partner) => (
                <div
                  key={partner}
                  className="bg-[#fffaf2] rounded-xl border border-[#ead8b6] p-6 text-center hover:border-[#cfa109] transition"
                >

                  <p className="font-serif font-semibold text-[#242424]">
                    {partner}
                  </p>

                  <span className="text-xs text-[#807e78]">
                    Integration Available
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* SECURITY BADGES */}

          <div className="text-center">

            <p className="font-serif text-[#807e78] mb-10">
              Our commitment to security is certified
            </p>

            <div className="flex flex-wrap justify-center gap-12">

              <Badge icon={Shield} label="HIPAA Compliant" />
              <Badge icon={Lock} label="SOC 2 Type II" />
              <Badge icon={Database} label="256-bit Encryption" />

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}