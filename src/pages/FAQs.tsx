import { useState } from "react";

const faqs = [
  {
    question: "Which EHR/EMR systems do you work with?",
    answer:
      "We are system-agnostic and have experience integrating with most major platforms. Our team works within your existing software to ensure a seamless transition and data continuity.",
  },
  {
    question: "How do you handle denied or rejected claims?",
    answer:
      "We take a proactive approach. Every denial is analyzed, corrected, and resubmitted within 24–48 hours. We also track denial patterns to help your front-desk staff reduce errors at the point of entry.",
  },
  {
    question: "Is patient data secure and HIPAA compliant?",
    answer:
      "Absolutely. Security is our top priority. We utilize bank-grade encryption and follow strict HIPAA protocols to ensure all Protected Health Information (PHI) is handled with complete confidentiality.",
  },
  {
    question: "How soon can we see results?",
    answer:
      "While every practice is different, most clients see a noticeable reduction in their Days in A/R and an increase in clean-claim rates within the first 60 to 90 days of our partnership.",
  },
 
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff0dc] to-[#ebdbc4]">

      {/* HERO */}
      <section className="bg-[#5E503F] py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Common Questions</h1>
        <p className="text-white/80">
          Everything you need to know about partnering with us for your RCM.



        </p>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <h1 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        {/* <p className="text-gray/90 text-center mb-8">
          Everything you need to know about our services.
        </p> */}
        <div className="max-w-3xl mx-auto space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow border"
            >
              <button
                className="w-full p-5 flex justify-between items-center"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}