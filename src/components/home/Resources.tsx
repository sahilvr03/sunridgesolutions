import { FileText, HelpCircle, BookOpen, TrendingUp, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Top 5 Medical Billing Mistakes in 2024",
    excerpt: "Avoid these common errors that cost practices thousands each year",
    category: "Billing Tips",
    readTime: "5 min read",
    date: "Mar 15, 2024"
  },
  {
    title: "Understanding CMS Updates for 2024",
    excerpt: "New Medicare guidelines and how they affect your practice",
    category: "CMS Updates",
    readTime: "7 min read",
    date: "Feb 28, 2024"
  },
  {
    title: "Denial Management Strategies",
    excerpt: "Proactive approaches to reduce claim denials by 40%",
    category: "Denial Trends",
    readTime: "6 min read",
    date: "Feb 12, 2024"
  }
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Typically 2-4 weeks depending on practice size and systems."
  },
  {
    question: "Do you work with my current EHR/EMR?",
    answer: "We integrate with most major systems including Epic, Cerner, and Athena."
  },
  {
    question: "What's included in your monthly fee?",
    answer: "End-to-end billing, coding, AR follow-up, and regular reporting."
  },
  {
    question: "How do you ensure HIPAA compliance?",
    answer: "We use encrypted systems, BAAs, and regular security audits."
  }
];

const guides = [
  {
    title: "Medical Coding Checklist",
    description: "Ensure accuracy with our specialty-specific coding guide",
    icon: FileText,
    download: true
  },
  {
    title: "RCM Optimization Guide",
    description: "Step-by-step revenue cycle improvement framework",
    icon: TrendingUp,
    download: true
  },
  {
    title: "Compliance Handbook",
    description: "HIPAA and regulatory compliance guidelines",
    icon: BookOpen,
    download: true
  }
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full mb-4">
            Knowledge Hub
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Resources & Insights
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed with expert insights, guides, and industry updates.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Latest from Our Blog</h3>
              <a href="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                View all
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <a
                  key={index}
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group block bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="h-6 w-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">FAQs</h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <a
              href="/faq"
              className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              See all FAQs
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Guides & Downloads */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Free Provider Guides</h3>
            <p className="text-blue-200">Download our expert guides to optimize your practice</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:border-white/30 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{guide.title}</h4>
                      <p className="text-blue-200 text-sm">{guide.description}</p>
                    </div>
                  </div>
                  {guide.download && (
                    <button className="w-full mt-4 bg-white text-blue-900 font-semibold py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                      Download Free Guide
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for monthly billing tips, CMS updates, and industry insights.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}