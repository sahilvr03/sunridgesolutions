import { Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-[#fff0dc] to-[#ebdbc4]">
      {/* HERO */}
      <section className="relative w-full min-h-[35vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#5E503F]"></div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Decades of Strategic Insight.
            <br />
            A Lifetime of Technical Precision
          </h1>
          <p className="font-serif text-white/80 text-xl">
            Merging 15 years of multi-state billing expertise with 30 years of enterprise data engineering and largest Payer experience
          </p>
        </div>
      </section>

      {/* SECTION 1: OUR STORY */}
      <section className="py-14">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#242424] mb-2">
              OUR STORY
            </h1>
          </div>

          <div className="space-y-6 text-[#7a7974] text-lg leading-relaxed">
            <p>
              For over 15 years, our leadership has served as a dedicated partner to healthcare providers, navigating the evolving landscapes of medical billing and practice management. From busy multi-specialty groups in New York and New Jersey to innovative practices in Connecticut and California several states, we have optimized revenue cycles for providers across the country.
            </p>

            <p>
              Our firm was founded on a singular vision: to bridge the gap between clinical care and the "black box" of insurance adjudication. We realized that for a practice to truly thrive, it needs more than just a billing service—it needs a technical architect who understands the payer's internal logic.
            </p>

            <p>
              By combining 15 years of frontline billing experience across multiple specialties with a 30-year career in Corporate IT and Data Engineering and Payer Experience, we offer a perspective few others can. Having managed the database segments for Audit, Fraud, and Adjudication at the nation's largest healthcare payer, we bring "inside-out" knowledge to every claim we process. We don't just submit data; we engineer workflows that align with payer expectations to ensure faster, more accurate reimbursements.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: LEADERSHIP PROFILE */}
      <section className="py-14 bg-[#f8f6f2]">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#242424] mb-5">
              Clinical Insight Meets Enterprise Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Billing Authority */}
            <div className="bg-white border border-[#e7e3da] rounded-xl p-8 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-[#242424] mb-4">
                The Billing Authority (15+ Years)
              </h3>
              <ul className="space-y-3 text-[#807e78] leading-relaxed">
                <li>• Deep regulatory knowledge across 40+ medical specialties.</li>
                <li>• Proven track record in high-volume, multi-state practice management.</li>
                <li>• Expertise in manual and automated claim scrubbing and denial recovery.</li>
              </ul>
            </div>

            {/* Technical Architect / Payer Experience */}
            <div className="bg-white border border-[#e7e3da] rounded-xl p-8 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-[#242424] mb-4">
                The Leading Healthcare Payer Experience (20+ Years)
              </h3>
              <ul className="space-y-3 text-[#807e78] leading-relaxed">
                <li>• Masters in Computer Science with a Focus on high-integrity data pipelines.</li>
                <li>• 20 years at the largest US Payer, managing enterprise-level database operations for Audit, Fraud and Abuse, and Employer Claims Reporting.</li>
                <li>• Specialist in EDI Feeds and Adjudication logic, ensuring your practice's data is secure and formatted for success.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PHILOSOPHY */}
      <section className="py-14">
        <div className="container-wide max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-[#242424] mb-4">
            A Provider-First Perspective
          </h2>
          <p className="text-lg text-[#7a7974] mb-6">
            We understand the administrative challenges of modern medicine because we see them every day through our own family of physicians.
          </p>
          <p className="text-[#141414] text-lg leading-relaxed">
            Our commitment to healthcare is rooted in a deep, personal understanding of the medical profession. With several physicians in our immediate and extended family, we have a front-row seat to the daily challenges that providers face—from increasing documentation requirements to the complexities of payer reimbursements.
            <br /><br />
            We believe that a healthy revenue cycle is the lifeblood of a successful practice. Our mission is to handle the high-stakes financial operations of your business so you can focus on what matters most: your patients. We bring a level of care and integrity to our work that can only come from a team that truly values the work of the provider.
          </p>
        </div>
      </section>

      {/* LEADERSHIP NOTE */}
      <section className="pb-24">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="flex gap-4 p-8 bg-white border border-[#e7e3da] rounded-xl shadow-sm items-start">
            <Heart className="text-[#cfa109]" size={28} />
            <p className="text-[#807e78] text-lg leading-relaxed">
              <strong className="text-[#242424]">A Note From Our Leadership</strong>
              <br />
              "At our core, we believe that financial transparency is the backbone of a successful practice. Our goal has always been to bring the highest level of data integrity and professional reliability to the medical billing world, so providers can focus on what they do best."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}