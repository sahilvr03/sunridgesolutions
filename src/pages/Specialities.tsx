// src/pages/SpecialtiesPage.jsx
import {
  Stethoscope,
  Heart,
  Baby,
  Brain,
  Activity,
  Video,
  Dumbbell,
  Pill,
  User,
  Thermometer,
  Bandage,
  Hospital,
  FileText,
  Eye,
  Scissors,
  Ear,
  Zap,
  Users,
  BarChart3,
  Coffee,
  Clipboard,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const specialties = [
  { name: "Allergy & Immunology", icon: Pill, description: "" },
  { name: "Anesthesiology", icon: Thermometer, description: "" },
  { name: "Cardiology", icon: Heart, description: "" },
  { name: "Dermatology", icon: Bandage, description: "" },
  { name: "Emergency Medicine", icon: Zap, description: "" },
  { name: "Endocrinology", icon: Pill, description: "" },
  { name: "Family Medicine", icon: Stethoscope, description: "" },
  { name: "Gastroenterology", icon: Coffee, description: "" },
  { name: "General Practice", icon: Stethoscope, description: "" },
  { name: "General Surgery", icon: Scissors, description: "" },
  { name: "Geriatrics", icon: Users, description: "" },
  { name: "Hematology", icon: Pill, description: "" },
  { name: "Hospice", icon: Hospital, description: "" },
  { name: "Infectious Disease", icon: Thermometer, description: "" },
  { name: "Internal Medicine", icon: Pill, description: "" },
  { name: "Laboratory", icon: FileText, description: "" },
  { name: "Mental Health", icon: Brain, description: "" },
  { name: "Neonatology", icon: Baby, description: "" },
  { name: "Nephrology", icon: Pill, description: "" },
  { name: "Neurology", icon: Brain, description: "" },
  { name: "Nurse Practitioner", icon: User, description: "" },
  { name: "Nursing Home", icon: Hospital, description: "" },
  { name: "Nutritionist/RD", icon: Coffee, description: "" },
  { name: "OB/GYN", icon: Baby, description: "" },
  { name: "Oncology", icon: Pill, description: "" },
  { name: "Ophthalmology", icon: Eye, description: "" },
  { name: "Orthopedics", icon: Dumbbell, description: "" },
  { name: "Otolaryngology", icon: Ear, description: "" },
  { name: "Pain Management", icon: Zap, description: "" },
  { name: "Pathology", icon: FileText, description: "" },
  { name: "Pediatrics", icon: Baby, description: "" },
  { name: "Physical Medicine", icon: Dumbbell, description: "" },
  { name: "Physical Therapy", icon: Dumbbell, description: "" },
  { name: "Plastic Surgery", icon: Scissors, description: "" },
  { name: "Podiatry", icon: Activity, description: "" },
  { name: "Psychiatry", icon: Brain, description: "" },
  { name: "Psychology", icon: Brain, description: "" },
  { name: "Pulmonology", icon: Thermometer, description: "" },
  { name: "Radiology", icon: BarChart3, description: "" },
  { name: "Rheumatology", icon: Pill, description: "" },
  { name: "Sleep Medicine", icon: Activity, description: "" },
  { name: "Speech Therapy", icon: Video, description: "" },
  { name: "Sports Medicine", icon: Dumbbell, description: "" },
  { name: "Technologist", icon: Clipboard, description: "" },
  { name: "Urology", icon: Pill, description: "" },
];

export default function SpecialtiesPage() {
  return (
    <main className="bg-gradient-to-br from-[#fff0dc] to-[#ebdbc4]">

      {/* HERO */}
      <section className="relative w-full min-h-[35vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#5E503F]"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Healthcare Specialties We Support
          </h1>
          <p className="font-serif text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Sunnyridge Solutions works with a wide range of healthcare
            specialties, providing tailored billing and revenue cycle
            management services designed to maximize reimbursements.
          </p>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-24">
        <div className="container-wide">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* <span
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
              bg-secondary/50 border border-accent/30
              text-accent text-sm font-serif font-semibold uppercase tracking-wider mb-6"
            >
              Our Expertise
            </span> */}
            <h2 className="font-serif text-4xl font-bold text-[#242424] mb-6">
              Medical Specialties
            </h2>
            <p className="font-serif text-[#807e78] text-lg leading-relaxed">
              Our experienced billing professionals understand the unique
              coding, compliance, and reimbursement requirements for each
              specialty we serve.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {specialties.map((specialty) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={specialty.name}
                  className="p-7 bg-card rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#D4AF37]/10 mb-4">
                    <Icon className="w-7 h-7 text-[#cfa109]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#242424] mb-2">
                    {specialty.name}
                  </h3>
                  {specialty.description && (
                    <p className="font-serif text-[#807e78] text-sm leading-relaxed">
                      {specialty.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}