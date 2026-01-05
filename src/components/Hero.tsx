import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl text-white font-bold text-foreground mb-4 tracking-tight">
            IQRA IRFAN
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#00c6ff] mb-6">
            Business Analyst
          </h3>
          <p className="text-lg text-white md:text-xl text-muted-foreground max-w-xl mx-auto">
            Turning data into insights to support smarter business decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
