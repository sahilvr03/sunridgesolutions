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
    <div className="bg-gradient-to-br from-[#fff0dc]  to-[#ebdbc4]">
              <section className="relative w-full min-h-[35vh] flex items-center overflow-hidden ">

        <div className="absolute inset-0">
        

          <div className="absolute inset-0 bg-[#5E503F]"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">

          <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            A Streamlined Onboarding Process
          </h1>

          <p className="font-serif text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Designed to minimize disruption and maximize results from day one.

          </p>

        </div>
      </section>
      {/* Hero / Intro */}
      

      {/* Steps */}
      <div className="space-y-12 py-16 px-20">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Numeral */}
            <div className="flex-shrink-0 text-gray-700  text-4xl font-bold lg:text-5xl">
              {step.number}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default OnboardingPage;