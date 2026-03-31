import { CheckCircle, FileText, Play, BarChart, Calendar } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Free Billing Audit & Consultation",
    description:
      "We analyze your current billing processes and identify revenue opportunities.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Practice Assessment & Data Setup",
    description:
      "Seamless integration with your EHR/EMR and practice management systems.",
    icon: CheckCircle,
  },
  {
    number: "03",
    title: "Go-Live & Claim Submission",
    description:
      "Your dedicated team begins managing claims and payments.",
    icon: Play,
  },
  {
    number: "04",
    title: "Ongoing AR Follow-up & Reporting",
    description:
      "Proactive denial management and detailed performance tracking.",
    icon: BarChart,
  },
  {
    number: "05",
    title: "Monthly Performance Review",
    description:
      "Regular meetings to optimize your revenue cycle and address concerns.",
    icon: Calendar,
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-gradient-to-br from-[#fff0dc]  to-[#ebdbc4]">

      {/* HERO SECTION */}

      <section className="relative w-full min-h-[35vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">
        

          <div className="absolute inset-0 bg-[#5E503F]"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">

          <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            How We Deliver Results
          </h1>

          <p className="font-serif text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Sunnyridge Solutions provides trusted medical billing and management
            services designed to support healthcare practices across the United
            States. Our streamlined onboarding ensures smooth transitions and
            maximum revenue performance.
          </p>

        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="py-14">

        <div className="container-wide">

          {/* Header */}

          <div className="text-center max-w-3xl mx-auto mb-16">

          
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#242424] mb-6">
              How It Works
            </h2>

            <p className="font-serif text-[#807e78] text-lg leading-relaxed">
              A streamlined onboarding process designed to minimize disruption
              and maximize results from day one.
            </p>

          </div>

          {/* Timeline */}

          <div className="relative">

            {/* Center Line */}

            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#D4AF37]/40"></div>

            <div className="space-y-14">

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Icon Circle */}

                    <div className="flex-shrink-0 relative z-10">

                      <div className="w-20 h-20 rounded-full bg-white shadow-lg border flex items-center justify-center">

                        <div className="text-center">

                          <Icon className="h-8 w-8 text-[#cfa109] mx-auto mb-1" />

                          <span className="text-xs font-serif font-bold text-[#242424] block">
                            {step.number}
                          </span>

                        </div>

                      </div>

                    </div>

                    {/* Content Card */}

                    <div
                      className={`flex-1 bg-card rounded-xl shadow-lg p-8 lg:w-[45%] ${
                        index % 2 === 0
                          ? "lg:mr-8 lg:text-left"
                          : "lg:ml-8 lg:text-right"
                      }`}
                    >
                      <h3 className="font-serif text-xl font-semibold text-[#242424] mb-3">
                        {step.title}
                      </h3>

                      <p className="font-serif text-[#807e78] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="hidden lg:block flex-1"></div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}