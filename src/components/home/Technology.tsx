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


import { Footer } from "@/components/layout/Footer";


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
    <main className="bg-white text-gray-900">
      {/* ✅ Banner Section (1/3 Screen Height) */}
      <div className="h-[33vh] w-full bg-gradient-to-r from-blue-50 to-white flex items-center justify-center border-b">
        <div className="text-center px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-700 mb-3">
            Compliance & Technology
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade security, healthcare compliance, and powerful
            integrations built for modern medical billing systems.
          </p>
        </div>
      </div>

      {/* ✅ Page Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Secure & Certified
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
              Built for Healthcare Compliance
            </h2>

            <p className="text-lg text-gray-600">
              Our platform meets strict healthcare security and compliance
              standards.
            </p>
          </div>

          {/* ✅ Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.slice(0, 3).map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-1">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {feature.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* ✅ Integration Partners */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                Trusted Integration Partners
              </h3>

              <p className="text-gray-600">
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
                  className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-blue-400 transition"
                >
                  <p className="font-semibold text-gray-700">{partner}</p>

                  <span className="text-xs text-gray-500">
                    Integration Available
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Security Badges */}
          <div className="text-center">
            <p className="text-gray-600 mb-8">
              Our commitment to security is certified
            </p>

            <div className="flex flex-wrap justify-center gap-10">
              <Badge icon={Shield} label="HIPAA Compliant" />
              <Badge icon={Lock} label="SOC 2 Type II" />
              <Badge icon={Database} label="256-bit Encryption" />
            </div>
          </div>
        </div>
      </section>

    
    <Footer/>
    </main>
  );
}
