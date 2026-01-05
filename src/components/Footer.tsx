const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: "lni lni-facebook-original",
      href: "https://facebook.com/",
      label: "Facebook",
    },
    {
      icon: "lni lni-instagram-original",
      href: "https://instagram.com/",
      label: "Instagram",
    },
    {
      icon: "lni lni-linkedin-original",
      href: "https://linkedin.com/",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <footer className="py-16 bg-black text-white border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <img src="https://puremath-dotcom.github.io/IqraIrfan/assets/images/logo.svg" />

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-6 mt-14">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  aria-label={social.label}
                >
                  <i className={`text-white ${social.icon} text-2xl`} />
                </a>
              ))}
            </div>

            {/* Email */}
            <a
              href="mailto:khanzadi8566@gmail.com"
              className="text-white hover:text-primary text-md font-bold transition-colors mb-6"
            >
              khanzadi8566@gmail.com
            </a>

            {/* Copyright */}
            <p className="text-white text-md">Designed by UIdeck</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-md flex items-center justify-center shadow-lg hover:shadow-[var(--cyan-glow)] transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <i className="lni lni-chevron-up text-2xl" />
      </button>
    </>
  );
};

export default Footer;
