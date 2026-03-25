import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight, Shield, Award, CheckCircle } from "lucide-react";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/about" },
  { name: "Terms of Service", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#5E503F] text-[#F5F0F6] relative overflow-hidden">
      <div className="container-wide section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand & Contact - Left Side */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Sunnyridge Solutions"
                  className="h-12 w-12"
                />
              </div>
              <span className="font-bold text-2xl font-serif text-[#F5F0F6]">
                Sunnyridge Solutions
              </span>
            </Link>
            
            <p className="text-[#F5F0F6]/80 max-w-sm leading-relaxed font-serif">
              Your trusted partner for healthcare operational excellence.
              We deliver measurable and reliable revenue cycle solutions.
            </p>
          </div>

          {/* Contact - Right Aligned */}
          <div className="flex flex-col items-end justify-center space-y-4">
            <a 
              href="mailto:contact@sunnyridgesolutions.com" 
              className="flex items-center gap-3 text-[#F5F0F6]/70 hover:text-white transition"
            >
              <Mail className="h-5 w-5 text-[#D7B377]" />
              <span className="text-base font-serif">contact@sunnyridgesolutions.com</span>
            </a>

            <a 
              href="tel:+12033689932" 
              className="flex items-center gap-3 font-serif text-[#F5F0F6]/70 hover:text-white transition"
            >
              <Phone className="h-5 w-5 text-[#D7B377]" />
              <span className="text-base font-serif">(203) 368-9932</span>
            </a>
          </div>
        </div>

        {/* Company Links - Horizontal Layout */}
        <div className="mt-12 pt-8 border-t border-[#D7B377]/30">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {companyLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                className="text-[#F5F0F6]/80 hover:text-white transition text-sm font-serif"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#D7B377]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F5F0F6]/60 text-sm font-serif">
            © {new Date().getFullYear()} Sunnyridge Solutions. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-xs hover:text-[#F5F0F6] transition">
              <Shield className="h-3.5 w-3.5 text-[#D7B377]" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-xs hover:text-[#F5F0F6] transition">
              <Award className="h-3.5 w-3.5 text-[#D7B377]" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-xs hover:text-[#F5F0F6] transition">
              <CheckCircle className="h-3.5 w-3.5 text-[#D7B377]" />
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}