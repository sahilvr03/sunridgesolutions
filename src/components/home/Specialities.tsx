import { Eye, Users, Zap } from "lucide-react";

const benefits = [
  {
    title: "Real-Time Financial Transparency",
    icon: Eye,
    description:
      "Gain full visibility into your revenue cycle with real-time reporting and insights. Stay informed about every claim, payment, and financial metric without delays.",
  },
  {
    title: "Reduced Administrative Burden",
    icon: Users,
    description:
      "We handle complex billing workflows, insurance follow-ups, and claim management—allowing your staff to focus more on patient care instead of paperwork.",
  },
  {
    title: "Optimized Cash Flow",
    icon: Zap,
    description:
      "Our proactive billing strategies and denial management ensure faster reimbursements and improved financial stability for your practice.",
  },
];

export function KeyBenefits() {
  return (
    <section className="py-20">
      <div className="container-wide">
        {/* Heading - reduced space */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#242424] mb-3">
            Why Partner With Us?
          </h2>
          <p className="text-lg text-[#807e78] leading-relaxed">
            The Three T's: Trust, Transparency, and Total Revenue.
          </p>
        </div>

        {/* Benefits Grid - big gap before three boxes */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
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