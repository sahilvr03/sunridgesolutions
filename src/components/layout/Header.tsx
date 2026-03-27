import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const companyLinks = [
  { title: "About", href: "/about" },
  { title: "Specialties", href: "/specialties" },
  { title: "Onboarding", href: "/onboarding" },
  { title: "How It Works", href: "/how-it-works" },
  { title: "Technology", href: "/technology" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
  { title: "FAQs", href: "/faqs" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItemClass =
    "text-sm font-semibold text-[#8B6508] hover:text-[#5f4000] transition-colors duration-300";

  const handleNavClick = (path: string) => {
    if (path.includes("#")) {
      const sectionId = path.split("#")[1];
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      if (location.pathname === path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(path);
      }
    }
    setMobileMenuOpen(false);
    setMoreOpen(false);
  };

  const moreLinks = companyLinks.slice(3); // last 4 links for "More" dropdown

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container-wide flex items-center justify-between h-16 lg:h-20 px-4">

        {/* Logo */}
        <button onClick={() => handleNavClick("/")} className="flex items-center gap-3">
          <img src="/logo.png" alt="Sunnyridge Solutions Logo" className="h-12 w-auto" />
          <span className="font-serif font-bold text-xl lg:text-2xl bg-gradient-to-r from-[#d49c00] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent">
            Sunnyridge Solutions
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">

          <button onClick={() => handleNavClick("/")} className={navItemClass}>
            Home
          </button>

          {companyLinks.slice(0, 3).map((link) => (
            <button
              key={link.title}
              onClick={() => handleNavClick(link.href)}
              className={navItemClass}
            >
              {link.title}
            </button>
          ))}

          {/* Core Services (Single Page Link) */}
          <button
            onClick={() => handleNavClick("/services")}
            className={navItemClass}
          >
            Core Services
          </button>

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
              setMoreOpen(true);
            }}
            onMouseLeave={() => {
              moreTimeoutRef.current = setTimeout(() => setMoreOpen(false), 200); // 200ms delay
            }}
          >
            <button
              className={`${navItemClass} flex items-center gap-1`}
              onClick={() => setMoreOpen(!moreOpen)} // click fallback
            >
              More ▾
            </button>

            {moreOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                {moreLinks.map((link) => (
                  <button
                    key={link.title}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-4 py-2 text-sm text-[#8B6508] hover:bg-gray-50 hover:text-[#5f4000] transition-colors"
                  >
                    {link.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            className="p-2 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white border-t border-gray-200 shadow-lg overflow-y-auto">
          <div className="p-6 space-y-4">

            <button
              onClick={() => handleNavClick("/")}
              className="block w-full text-left text-sm font-semibold text-[#8B6508]"
            >
              Home
            </button>

            {companyLinks.slice(0, 3).map((link) => (
              <button
                key={link.title}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-sm font-semibold text-[#8B6508]"
              >
                {link.title}
              </button>
            ))}

            {/* Core Services */}
            <button
              onClick={() => handleNavClick("/services")}
              className="block w-full text-left text-sm font-semibold text-[#8B6508]"
            >
              Core Services
            </button>

            {/* More Dropdown in Mobile */}
            <div className="mt-2">
              <p className="text-sm font-semibold mb-1">More</p>
              {moreLinks.map((link) => (
                <button
                  key={link.title}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left text-sm font-semibold text-[#8B6508] px-2 py-2 hover:bg-gray-50 hover:text-[#5f4000] rounded-md transition-colors"
                >
                  {link.title}
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}