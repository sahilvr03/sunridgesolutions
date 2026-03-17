import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sunridge Solutions increased our collections by 28% in the first 6 months. Their specialty-specific knowledge in cardiology coding made all the difference.",
    author: "Dr. Michael Chen",
    role: "Cardiologist",
    practice: "HeartCare Associates",
    practiceSize: "12 providers",
    metrics: ["28% increase in collections", "40% reduction in denials", "15% faster payments"],
    rating: 5
  },
  {
    quote: "As a small pediatrics practice, we struggled with billing complexity. Sunridge streamlined everything and we now have better cash flow than ever.",
    author: "Dr. Sarah Johnson",
    role: "Pediatrician",
    practice: "Children's Wellness Center",
    practiceSize: "4 providers",
    metrics: ["95% clean claim rate", "25% lower AR days", "Full compliance"],
    rating: 5
  },
  {
    quote: "The transition was seamless and their team feels like an extension of our own. We've expanded our behavioral health practice with confidence.",
    author: "Dr. Robert Williams",
    role: "Psychiatrist",
    practice: "Mindful Health Partners",
    practiceSize: "8 providers",
    metrics: ["30% practice growth", "99% compliance rate", "24/7 support"],
    rating: 5
  },
  {
    quote: "Our urgent care was losing revenue on after-hours coding. Sunridge identified gaps and implemented solutions that boosted our bottom line immediately.",
    author: "Lisa Martinez",
    role: "Practice Administrator",
    practice: "QuickCare Urgent",
    practiceSize: "3 locations",
    metrics: ["22% revenue increase", "50% fewer coding errors", "Same-day submission"],
    rating: 5
  }
];

const caseStudy = {
  title: "Case Study: Internal Medicine Practice",
  challenge: "65% clean claim rate, 45+ day AR, frequent coding denials",
  solution: "Implemented specialized coding team, denial management protocol, and daily follow-up",
  results: [
    { metric: "Clean Claim Rate", before: "65%", after: "96%", improvement: "+31%" },
    { metric: "Average AR Days", before: "45 days", after: "28 days", improvement: "-17 days" },
    { metric: "Denial Rate", before: "18%", after: "5%", improvement: "-13%" },
    { metric: "Monthly Collections", before: "$285k", after: "$375k", improvement: "+32%" }
  ]
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            Client Success
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600">
            Hear from healthcare providers who have transformed their revenue cycle with our expertise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-6 lg:p-8 hover:border-blue-200 transition-colors">
              {/* Quote */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-300 mb-4" />
                <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">{testimonial.practice}</p>
                    <p className="text-xs text-gray-500">{testimonial.practiceSize}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {testimonial.metrics.map((metric, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Measurable Impact</h3>
            <p className="text-gray-600">See the transformation in real numbers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenge & Solution */}
            <div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">The Challenge</h4>
                <p className="text-gray-700 bg-red-50 border border-red-100 rounded-lg p-4">
                  {caseStudy.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Our Solution</h4>
                <p className="text-gray-700 bg-green-50 border border-green-100 rounded-lg p-4">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Results Table */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Before & After Results</h4>
              <div className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{result.metric}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded-full">
                        {result.improvement}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-left">
                        <span className="text-gray-500">Before: </span>
                        <span className="font-semibold text-gray-700">{result.before}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-500">After: </span>
                        <span className="font-semibold text-gray-700">{result.after}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-blue-200">
            <p className="text-sm text-gray-600 text-center">
              <em>Results vary by practice. Individual outcomes depend on many factors including practice size, specialty, and current processes.</em>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to see similar results in your practice?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
          >
            Schedule a Results Consultation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}