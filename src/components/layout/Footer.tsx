import { Link } from "react-router-dom";
import { Mail, Phone, Shield, Award, CheckCircle } from "lucide-react";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "/faqs" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/about" }, // temp
];

export function Footer() {
  return (
    <footer className="bg-[#5E503F] text-[#F5F0F6] relative overflow-hidden">
      <div className="container-wide section-padding relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          
          {/* LEFT */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" className="h-12 w-12" alt="Sunnyridge Solutions logo" />
              <span className="font-bold text-2xl font-serif">
                Sunnyridge Solutions
              </span>
            </Link>

            {/* ✅ ONE LINE TEXT */}
            <p className="text-[#F5F0F6]/80 max-w-md font-serif">
              Your trusted partner for healthcare operational excellence. We deliver measurable and reliable revenue cycle solutions.
            </p>

            {/* ✅ CONTACT BELOW TAGLINE */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#D7B377]" />
                <a
                  href="mailto:contact@sunnyridgesolutions.com"
                  className="text-white text-lg font-semibold"
                >
                  contact@sunnyridgesolutions.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#D7B377]" />
                <a
                  href="tel:+12033689932"
                  className="text-white text-lg font-semibold"
                >
                  (203) 368-9932
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT EMPTY SPACE (maintained layout balance) */}
          <div></div>
        </div>

        {/* LINKS */}
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

        {/* BOTTOM */}
        <div className="mt-8 pt-6 border-t border-[#D7B377]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F5F0F6]/60 text-sm font-serif">
            © {new Date().getFullYear()} Sunnyridge Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-xs">
              <Shield className="h-3.5 w-3.5 text-[#D7B377]" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-xs">
              <Award className="h-3.5 w-3.5 text-[#D7B377]" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2 text-[#F5F0F6]/60 text-xs">
              <CheckCircle className="h-3.5 w-3.5 text-[#D7B377]" />
              <span>ISO 27001</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}