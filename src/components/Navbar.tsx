import { useState, useEffect } from "react";
import { Menu, X, Monitor } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#services", label: "SERVICES" },
    { href: "#education", label: "EDUCATION" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 md:h-20 relative">
          {/* Logo - positioned left */}
          <a
            href="#home"
            className="absolute left-4 flex items-center gap-2 text-primary"
          >
            {isScrolled ? (
              <img src="https://puremath-dotcom.github.io/IqraIrfan/assets/images/logo-2.svg" />
            ) : (
              <img src="https://puremath-dotcom.github.io/IqraIrfan/assets/images/logo.svg" />
            )}
          </a>

          {/* Desktop Navigation - centered */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <div
                  key={link.href}
                  className="group flex flex-col items-center space-y-2"
                >
                  <a
                    href={link.href}
                    className={`nav-link text-md tracking-wide font-extrabold ${
                      isScrolled ? "" : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>

                  {/* bottom line */}
                  <div
                    className={`h-1 w-10 bg-gradient-to-tr from-white to-gray-500 transition-all duration-300 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                    }
  `}
                  />
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="absolute right-4 md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <>
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link px-4 py-3 text-sm tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
