import React from "react";

const steps = [
  {
    number: "01",
    title: "Free Billing Audit & Consultation",
    description:
      "We begin by analyzing your current billing lifecycle. Our team identifies untapped revenue opportunities and provides a clear roadmap for improving your collections.",
  },
  {
    number: "02",
    title: "Practice Assessment & Secure Setup",
    description:
      "Integration should be seamless. We coordinate with your existing EHR/EMR and practice management systems to ensure a secure, HIPAA-compliant data connection without interrupting your patient schedule.",
  },
  {
    number: "03",
    title: "Go-Live & Claim Management",
    description:
      "Your dedicated billing team takes the lead. We begin scrubbing, submitting, and tracking claims immediately, ensuring every encounter is captured with complete accuracy.",
  },
  {
    number: "04",
    title: "Proactive A/R Follow-Up",
    description:
      "We don’t wait for denials to pile up. Our team aggressively manages outstanding accounts receivable and handles insurance follow-ups to accelerate your cash flow.",
  },
  {
    number: "05",
    title: "Monthly Performance Review",
    description:
      "Success is measured by data. We hold regular strategy meetings to review detailed performance reports, address any concerns, and continuously optimize your revenue cycle for long-term growth.",
  },
];

const OnboardingPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#fff0dc] to-[#ebdbc4]">

      {/* Hero Section */}
            <section className="relative w-full min-h-[35vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#5E503F]"></div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            A Streamlined Onboarding Process

          </h1>
          <p className="font-serif text-white/80 text-xl">
            Designed to minimize disruption and maximize results from day one.

          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#242424] mb-6">
              A Simple Process Designed for Your Practice
            </h2>
            <p className="text-[#6f6c66] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              We minimize disruption to your daily operations while maximizing your financial results from day one.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#d6cec2]"></div>

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex items-start gap-8 group"
                >

                  {/* Number */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
                    <span className="text-2xl lg:text-3xl font-serif font-bold text-[#2F6F6F]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:translate-x-2">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-[#242424] mb-3 font-serif">
                      {step.title}
                    </h3>
                    <p className="text-[#6f6c66] text-base sm:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default OnboardingPage;