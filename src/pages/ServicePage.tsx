import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  BarChart3,
  IdCard,
  UserCheck,
  FileSearch,
  Receipt,
  Presentation,
  RefreshCw,
  Target,
  Shield,
  FastForward,
  Search,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-br from-[#fff0dc] to-[#ebdbc4]">
      {/* HERO */}
      <section className="relative w-full min-h-[35vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#5E503F]"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Comprehensive Solutions for the Modern Practice
          </h1>
          <p className="font-serif text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            From the first patient appointment to the final payment, we manage every detail of your revenue cycle.
          </p>
        </div>
      </section>

      {/* ================= CORE SERVICES (6 GRID) ================= */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Credentialing & Provider Enrollment",
                icon: IdCard,
                desc: "Avoid the delays of being out-of-network. We handle the complex paperwork and follow-up required for insurance credentialing and re-validations, ensuring you are authorized to receive payments from all major payers.",
              },
              {
                title: "Eligibility & Benefits Verification",
                icon: UserCheck,
                desc: "Prevent denials before they happen. Our team verifies patient coverage and benefits prior to the date of service, clarifying co-pays, deductibles, and authorization requirements to ensure a smooth billing process.",
              },
              {
                title: "A/R & Denial Management",
                icon: FileSearch,
                desc: "We turn unpaid claims into revenue. Our specialists aggressively pursue outstanding accounts receivable and analyze every denial to resubmit corrected claims within 24–48 hours, significantly reducing your aging A/R.",
              },
              {
                title: "Patient Billing & Statements",
                icon: Receipt,
                desc: "Maintain a professional relationship with your patients. We manage the generation and mailing of clear, accurate patient statements and handle billing inquiries with the same level of care and professionalism you provide in your clinic.",
              },
              {
                title: "Comprehensive RCM Reporting",
                icon: Presentation,
                desc: "Data-driven decisions lead to better outcomes. We provide detailed monthly RCM reports and real-time dashboards, giving you total transparency into your collection rates, payer performance, and financial trends.",
              },
              {
                title: "Full-Cycle Medical Billing",
                icon: RefreshCw,
                desc: "Our end-to-end billing service includes claim scrubbing, submission, and payment posting. We utilize your existing EHR/EMR to ensure that every clinical encounter is accurately captured and reimbursed at the highest possible rate.",
              },
            ].map((item, index) => {
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
                  <p className="text-[#807e78] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-[#807e78] mt-12 text-sm">
            All services are tailored to the unique coding requirements of over 40+ medical and dental specialties.
          </p>
        </div>
      </section>

      {/* ================= SERVICE STANDARDS (2x2 GRID) ================= */}
      <section className="py-20 bg-[#f8f6f2]">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#242424] mb-5">
              Our Service Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Clinical Accuracy",
                icon: Target,
                desc: "Precision is the foundation of a healthy revenue cycle. We perform rigorous \"claim scrubbing\" before submission to ensure every code is accurate and every modifier is correct, leading to a 98%+ clean claim rate from day one.",
              },
              {
                title: "Rigorous Compliance",
                icon: Shield,
                desc: "Navigate the complexities of healthcare regulations with confidence. Our services are fully HIPAA-compliant, and our team stays ahead of evolving ICD-10, CPT, and payer-specific requirements to protect your practice from audits and liability.",
              },
              {
                title: "Accelerated Turnaround",
                icon: FastForward,
                desc: "We turn \"pending\" into \"paid.\" By submitting claims within 24–48 hours of service and aggressively following up on unpaid accounts, we significantly reduce your Days in A/R and provide a predictable, steady cash flow.",
              },
              {
                title: "Actionable Analytics",
                icon: Search,
                desc: "Knowledge is power. Gain total transparency into your practice's financial health with detailed monthly reports and real-time dashboards. We don't just provide data; we provide insights that help you make informed business decisions.",
              },
            ].map((item, index) => {
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
                  <p className="text-[#807e78] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY PARTNER (SIDE BY SIDE) ================= */}
      <section className="py-24">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="/pti.png"
              alt="Why Partner With Us"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-4xl font-bold text-[#242424]">
              Why Partner With Us?
            </h2>

            {[
              {
                title: "Real-Time Financial Transparency",
                desc: "Never wonder about the status of your claims again. You retain 24/7 access to your data and financial dashboards. We believe in an \"open books\" partnership where you see exactly what we see, from initial submission to final payment.",
              },
              {
                title: "Reduced Administrative Burden",
                desc: "Burnout is a reality in modern medicine. By offloading the complex and time-consuming tasks of insurance follow-ups and denial management to us, you and your staff can reclaim your time and refocus entirely on patient care.",
              },
              {
                title: "Optimized Cash Flow",
                desc: "We don't just \"process\" bills; we manage revenue. Our proactive approach minimizes \"Days in A/R\" and ensures that your practice's financial health is as robust as the clinical care you provide. We turn outstanding accounts into consistent, predictable revenue.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-serif text-xl font-semibold text-[#242424] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#807e78] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HEALTHCARE EXPERTISE ================= */}
      <section className="py-24 bg-[#f8f6f2]">
        <div className="container-wide grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl font-bold text-[#242424] mb-4">
              We Speak Your Language
            </h2>
            <p className="text-[#807e78] text-lg leading-relaxed">
              Our team understands the healthcare workflows, clinical documentation, and payer rules that directly impact your bottom line.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: "Multi-Specialty Proficiencies",
                desc: "From General Practice to specialties, our deep experience across various fields ensures your coding is precise and your claims are optimized for your specific area of medicine.",
              },
              {
                title: "Complex Case Management",
                desc: "We don't shy away from difficult claims. Our team specializes in navigating high-complexity cases and persistent denials that other billing companies often overlook.",
              },
              {
                title: "Government Payer Mastery",
                desc: "With a proven track record of success in Medicare and Medicaid reimbursements, we ensure your practice remains compliant while maximizing recovery from government-funded programs.",
              },
              {
                title: "Continuous Code Training",
                desc: "The medical world never stands still. We undergo regular training on ICD-10 and CPT updates to ensure your practice is always ahead of regulatory changes and payer policy shifts.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#e7e3da] rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-serif text-lg font-semibold text-[#242424] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#807e78] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY & PAYER ADVANTAGE ================= */}
      <section className="py-24">
        <div className="container-wide max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-[#242424] mb-4">
            Enterprise-Grade Technology. Insider Payer Knowledge.
          </h2>
          <p className="text-[#807e78] text-lg leading-relaxed">
            Highlighting our 15 years of experience at the nation's largest payer and familiarity with adjudication and EDI feeds.
          </p>
        </div>
      </section>
    </div>
  );
}