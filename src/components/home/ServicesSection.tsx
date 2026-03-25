import { ClipboardList, Plug, Settings, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Step 01: Comprehensive Audit",
    icon: ClipboardList,
    description:
      "We begin with a thorough analysis of your current revenue cycle and aging A/R. This allows us to identify immediate opportunities to recover lost revenue.",
  },
  {
    title: "Step 02: Custom Integration",
    icon: Plug,
    description:
      "Our team works with your existing EHR/EMR systems to create a secure, HIPAA-compliant connection. We tailor our workflows to match the specific needs of your specialty.",
  },
  {
    title: "Step 03: Proactive Management",
    icon: Settings,
    description:
      "Once live, we handle the heavy lifting—from claim scrubbing and submission to aggressive denial follow-ups. You maintain full transparency with real-time access to dashboards.",
  },
  {
    title: "Step 04: Continuous Optimization",
    icon: BarChart,
    description:
      "We provide regular performance reports and ongoing consultation to further reduce denials and accelerate your cash flow over time.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-[#f5f0e6]">
      <div className="container-wide">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#242424] mb-5">
            A Seamless Transition to Better Billing
          </h2>
          <p className="text-base text-[#807e78] leading-relaxed">
            We've simplified our onboarding to ensure zero disruption to your patient care
          </p>
        </div>

        {/* Steps Grid - 2x2 layout */}
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
            Ready to optimize your practice's financial performance?
          </p>
          <Link to="/contact">
            <Button className="bg-[#cfa109] text-white px-8 py-3 rounded-md hover:bg-[#b89208] transition-colors">
              Request a Free Analysis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}