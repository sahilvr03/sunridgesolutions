import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter, ArrowRight, Shield, Award, CheckCircle } from "lucide-react";

const healthcareLinks = [
  { name: "Medical Billing", href: "/services/medical-billing" },
  { name: "Credentialing", href: "/services/credentialing" },
  { name: "Medical Coding", href: "/services/medical-coding" },
  { name: "A/R Recovery", href: "/services/ar-recovery" },
  { name: "Revenue Cycle Management", href: "/services/rcm" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "./pages/ContactPage" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-[#5E503F] text-[#F5F0F6] relative overflow-hidden">

      <div className="container-wide section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="SunnyridgeSolutions"
                  className="h-12 w-12"
                />
              </div>
              <span className="font-bold text-2xl font-serif text-[#F5F0F6]">
                SunnyridgeSolutions
              </span>
            </Link>
            
            <p className="text-[#F5F0F6]/80 max-w-sm leading-relaxed font-serif">
              Your trusted partner for healthcare operational excellence.
              We deliver measurable and reliable revenue cycle solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="p-3 rounded-xl bg-[#D7B377]/20 hover:bg-[#D7B377]/40 transition border border-[#D7B377]/30 group"
              >
                <Linkedin className="h-5 w-5 text-[#F5F0F6]" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-xl bg-[#D7B377]/20 hover:bg-[#D7B377]/40 transition border border-[#D7B377]/30 group"
              >
                <Twitter className="h-5 w-5 text-[#F5F0F6]" />
              </a>
            </div>

            {/* Contact */}
            <div className="space-y-3 pt-2">
              <a 
                href="mailto:contact@sunnyridgesolutions.com" 
                className="flex items-center gap-3 text-[#F5F0F6]/70 hover:text-white transition"
              >
                <Mail className="h-4 w-4 text-[#D7B377]" />
                <span className="text-sm font-serif">contact@sunnyridgesolutions.com</span>
              </a>

              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-3 font-serif text-[#F5F0F6]/70 hover:text-white transition"
              >
                <Phone className="h-4 w-4 text-[#D7B377]" />
                <span className="text-sm font-serif">2033689932</span>
              </a>
            </div>
          </div>

          {/* Healthcare Solutions */}
          <div className="space-y-5">
            <h4 className="font-semibold font-serif text-sm uppercase tracking-wider text-[#D7B377] relative inline-block">
              Healthcare Solutions
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D7B377] rounded-full" />
            </h4>

            <ul className="space-y-3">
              {healthcareLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-[#F5F0F6]/80 hover:text-white transition text-sm inline-flex items-center gap-2 group font-serif"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D7B377]" />
                    <span className="group-hover:translate-x-1 transition-transform font-serif">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h4 className="font-semibold font-serif text-sm uppercase tracking-wider text-[#D7B377] relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D7B377] rounded-full font-serif" />
            </h4>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-[#F5F0F6]/80 hover:text-white transition text-sm inline-flex items-center gap-2 group font-serif"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D7B377]" />
                    <span className="group-hover:translate-x-1 transition-transform font-serif">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#D7B377]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F5F0F6]/60 text-sm font-serif">
            © {new Date().getFullYear()} SunnyridgeSolutions. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-xs hover:text-[#F5F0F6] transition">
              <Shield className="h-3.5 w-3.5 text-[#D7B377] font-serif" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-xs hover:text-[#F5F0F6] transition">
              <Award className="h-3.5 w-3.5 text-[#D7B377] font-serif" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-xs hover:text-[#F5F0F6] transition">
              <CheckCircle className="h-3.5 w-3.5 text-[#D7B377] font-serif" />
              <span>ISO 27001</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}