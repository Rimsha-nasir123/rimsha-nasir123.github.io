const Education = () => {
  const educationData = [
    {
      degree: 'BS Mathematics',
      period: '2021 – 2025',
      description:
        'Developed a strong foundation in mathematics, statistics, and analytical thinking with a focus on problem-solving, data interpretation, and quantitative analysis relevant to business analytics.',
    },
    {
      degree: 'Higher Secondary School',
      period: '2018 – 2020',
      description:
        'Studied pre-engineering subjects with emphasis on mathematics and logical reasoning, strengthening analytical and critical thinking skills.',
    },
    {
      degree: 'Secondary School',
      period: '2016 – 2018',
      description:
        'Built a solid academic foundation in science and mathematics through structured coursework and academic activities.',
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-up">Education</h2>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((item, index) => (
              <div
                key={item.degree}
                className="bg-secondary/30 border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <span className="text-primary font-medium text-sm">{item.period}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-4">{item.degree}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
