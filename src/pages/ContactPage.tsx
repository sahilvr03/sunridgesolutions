import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  HelpCircle,
} from "lucide-react";

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
    question: "Is my patient data secure and HIPAA-compliant?",
    answer:
      "Absolutely. Security is our top priority. We utilize bank-grade encryption and follow strict HIPAA protocols to ensure all Protected Health Information (PHI) is handled with complete confidentiality.",
  },
  {
    question: "How soon can we expect to see results?",
    answer:
      "While every practice is different, most clients see a noticeable reduction in their Days in A/R and an increase in clean-claim rates within the first 60 to 90 days of our partnership.",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff0dc] to-[#ebdbc4]">

      {/* HERO */}

      <section className="relative w-full min-h-[35vh] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#5E503F]" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">

          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">
            Let's Talk About Your Goals
          </h1>

          <p className="font-serif text-white/80 text-lg max-w-2xl mx-auto">
            Ready to transform your operations? Our team is here to help you
            find the right solution.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="py-24">
        <div className="container-wide">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT SIDE */}

            <div>

              <span
                className="inline-flex items-center px-6 py-2 rounded-full
                bg-[#D4AF37]/10 border border-[#D4AF37]/30
                text-[#cfa109] text-sm font-serif font-semibold uppercase tracking-wider mb-6"
              >
                Get In Touch
              </span>

              <h2 className="font-serif text-4xl font-bold text-[#242424] mb-6">
                We're Here to Help
              </h2>

              <p className="font-serif text-[#807e78] text-lg mb-10">
                Whether you have questions about our services or want to explore
                how we can help your organization, we'd love to hear from you.
              </p>

              {/* CONTACT DETAILS */}

              <div className="space-y-6">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#D4AF37]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#242424]">
                      Email Us
                    </h3>

                    <a
                      href="mailto:contact@sunnyridgesolutions.com"
                      className="text-[#cfa109] hover:underline"
                    >
                      contact@sunnyridgesolutions.com
                    </a>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-[#D4AF37]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#242424]">
                      Call Us
                    </h3>

                    <a
                      href="tel:+12033689932"
                      className="text-[#cfa109] hover:underline"
                    >
                      2033689932
                    </a>

                    <p className="text-sm text-[#807e78]">
                      Mon-Fri 9am-6pm EST
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#D4AF37]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#242424]">
                      Visit Us
                    </h3>

                    <p className="text-[#807e78]">
                      123 Business Avenue, Suite 500 <br />
                      New York, NY 10001
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* FORM */}

            <div>

              <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-xl border border-white/40">

                <h3 className="font-serif text-2xl font-bold text-[#242424] mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid sm:grid-cols-2 gap-4">

                    <Input placeholder="First Name" required />
                    <Input placeholder="Last Name" required />

                  </div>

                  <Input type="email" placeholder="Email Address" required />

                  <Input placeholder="Company Name" />

                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#D4AF37] hover:bg-[#b8962e] text-black font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>

                </form>

              </div>

              {/* FAQ SECTION */}

              <div className="mt-16">

                <div className="text-center max-w-2xl mx-auto mb-10">

                  <h3 className="font-serif text-3xl font-bold text-[#242424] mb-4">
                    Common Questions
                  </h3>

                  <p className="text-[#807e78]">
                    Everything you need to know about partnering with us for your RCM.
                  </p>

                </div>

                <div className="space-y-4">

                  {faqs.map((faq, index) => (

                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur rounded-xl shadow"
                    >

                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left p-5 flex justify-between items-center"
                      >

                        <span className="font-semibold text-[#242424]">
                          {faq.question}
                        </span>

                        <span className="text-[#D4AF37] text-xl">
                          {openIndex === index ? "−" : "+"}
                        </span>

                      </button>

                      {openIndex === index && (

                        <div className="px-5 pb-5 text-sm text-[#6b6b6b] leading-relaxed">
                          {faq.answer}
                        </div>

                      )}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
