import { CheckCircle2, Workflow, TrendingUp, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Step 01: Comprehensive Audit",
    icon: CheckCircle2,
    description:
      "We begin with a thorough analysis of your current revenue cycle and aging A/R to identify immediate opportunities for revenue recovery.",
  },
  {
    title: "Step 02: Custom Integration",
    icon: Workflow,
    description:
      "Our team integrates seamlessly with your EHR/EMR systems, ensuring a secure, HIPAA-compliant workflow tailored to your specialty.",
  },
  {
    title: "Step 03: Proactive Management",
    icon: TrendingUp,
    description:
      "From claim scrubbing to denial follow-ups, we actively manage your billing while providing full transparency through real-time dashboards.",
  },
  {
    title: "Step 04: Continuous Optimization",
    icon: ShieldCheck,
    description:
      "We deliver ongoing reports and strategic insights to continuously reduce denials and accelerate your revenue growth.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-[#e6d5b5]">
      <div className="container-wide">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#242424] mb-5">
            A Seamless Transition to Better Billing
          </h2>

          <p className="text-lg text-[#807e78] leading-relaxed">
            We’ve simplified our onboarding to ensure zero disruption to your patient care.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-[#e7e3da] rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-[#cfa109] mb-4" />

                <h3 className="font-serif text-xl font-semibold text-[#242424] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#807e78] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-[#242424] font-medium mb-6">
            Ready to optimize your practice’s financial performance?
          </p>

          <Link to="/contact">
            <Button className="bg-[#b3973e] text-white px-8 py-3 rounded-md hover:opacity-90 transition">
              Request a Free Analysis
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}