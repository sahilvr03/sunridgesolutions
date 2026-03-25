import { CheckCircle2, ShieldCheck, TrendingUp, Workflow } from "lucide-react";

const benefits = [
  {
    title: "Revenue Optimization",
    icon: TrendingUp,
    description:
      "We maximize your reimbursements by focusing on high clean claim rates and proactive denial management. Our team identifies and recovers outstanding A/R, ensuring your practice is compensated fully for every patient encounter.",
  },
  {
    title: "Operational Efficiency",
    icon: Workflow,
    description:
      "Streamline your daily operations with our comprehensive management services. We handle the complexities of front-desk workflows and insurance follow-ups, reducing the administrative burden on your staff so they can focus on patient care.",
  },
  {
    title: "Security & Compliance",
    icon: ShieldCheck,
    description:
      "We provide HIPAA-compliant, cost-effective solutions for practices across the United States. With 24/7 transparency and secure data handling, we protect your practice's reputation as much as its revenue.",
  },
];

export default function HowWeDeliver() {
  return (
    <section className="w-full py-20">
      <div className="container-wide">
        {/* Heading - reduced gap and single line */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#242424] mb-5">
            Strategic Solutions for Financial Health
          </h2>
          <p className="text-lg text-[#807e78] leading-relaxed">
            We combine industry expertise with personalized service to streamline your revenue cycle.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
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
      </div>
    </section>
  );
}