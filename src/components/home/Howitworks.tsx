import { CheckCircle, FileText, Play, BarChart, Calendar } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Free Billing Audit & Consultation",
    description: "We analyze your current billing processes and identify revenue opportunities",
    icon: FileText,
    color: "blue"
  },
  {
    number: "02",
    title: "Practice Assessment & Data Setup",
    description: "Seamless integration with your EHR/EMR and practice management systems",
    icon: CheckCircle,
    color: "green"
  },
  {
    number: "03",
    title: "Go-Live & Claim Submission",
    description: "Your dedicated team begins managing claims and payments",
    icon: Play,
    color: "purple"
  },
  {
    number: "04",
    title: "Ongoing AR Follow-up & Reporting",
    description: "Proactive denial management and detailed performance tracking",
    icon: BarChart,
    color: "orange"
  },
  {
    number: "05",
    title: "Monthly Performance Review",
    description: "Regular meetings to optimize your revenue cycle and address concerns",
    icon: Calendar,
    color: "indigo"
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            A streamlined onboarding process designed to minimize disruption and maximize results from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Adjusted with more spacing */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-indigo-500 -z-10"></div>

          {/* Steps Container */}
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = {
                blue: "bg-blue-50 text-blue-600 border-blue-200",
                green: "bg-green-50 text-green-600 border-green-200",
                purple: "bg-purple-50 text-purple-600 border-purple-200",
                orange: "bg-orange-50 text-orange-600 border-orange-200",
                indigo: "bg-indigo-50 text-indigo-600 border-indigo-200"
              };

              return (
                <div 
                  key={step.number}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Step Number & Icon - with z-index to appear above line */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-20 h-20 rounded-full ${colors[step.color as keyof typeof colors]} border-2 flex items-center justify-center`}>
                      <div className="text-center">
                        <Icon className="h-8 w-8 mx-auto mb-1" />
                        <span className="text-xs font-bold block">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Step Content - with responsive width and proper margins */}
                  <div className={`flex-1 bg-white rounded-xl border border-gray-200 p-6 lg:p-8 shadow-sm lg:w-[45%] ${
                    index % 2 === 0 ? 'lg:mr-8 lg:text-left' : 'lg:ml-8 lg:text-right'
                  }`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Empty div for alternating sides - keep layout balanced */}
                  <div className={`hidden lg:block flex-1 ${
                    index % 2 === 0 ? '' : 'lg:text-left'
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}