const About = () => {
  const personalInfo = [
    { label: "Name", value: "Iqra Irfan" },
    { label: "Location", value: "Khanewal, Pakistan" },
    { label: "Email", value: "khanzadi8566@gmail.com" },
    { label: "Languages", value: "English, Urdu, Saraiki" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title animate-fade-up">About Me</h2>

          <p
            className="section-subtitle mb-12 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            I am a Mathematics graduate and M.Phil student with a strong focus
            on Business Analytics and Data Analysis. Backed by a solid
            mathematical foundation, I specialize in transforming data into
            meaningful insights to support strategic, data-driven decisions. I
            possess strong analytical, quantitative, and problem-solving skills
            and continuously enhance my expertise with modern analytical tools
            to solve real-world business challenges.
          </p>

          {/* Personal Info - Simple Lines */}
          <div className="flex flex-col items-center gap-3 mb-10">
            {personalInfo.map((item, index) => (
              <div
                key={item.label}
                className="animate-fade-up flex items-center justify-between bg-gray-100 p-3 rounded-md w-1/2"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <span className="font-semibold">{item.label} </span>
                <span className="text-muted-foreground text-[#555]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* CV Button */}
          <a
            href="https://puremath-dotcom.github.io/IqraIrfan/assets/cv/iqra%20irfan%20cv.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0066FF] animate-fade-up text-white rounded-full font-semibold py-4 px-10"
            style={{ animationDelay: "0.6s" }}
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
