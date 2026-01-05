import {
  Database,
  BarChart3,
  Briefcase,
  FileText,
  Network,
  Code,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: "lni lni-database",
      title: "Data Handling",
      description:
        "Collecting, cleaning, and organizing data to ensure accuracy, consistency, and usability for analysis.",
    },
    {
      icon: "lni lni-bar-chart",
      title: "Data Visualization",
      description:
        "Creating clear and meaningful charts and dashboards to transform data into easy-to-understand insights.",
    },
    {
      icon: "lni lni-briefcase",
      title: "Business Analytics",
      description:
        "Analyzing business data to identify trends, support decisions, and improve organizational performance.",
    },
    {
      icon: "lni lni-files",
      title: "Feasibility Report",
      description:
        "Evaluating project viability by analyzing technical, financial, and operational feasibility.",
    },
    {
      icon: "lni lni-network",
      title: "BPMN",
      description:
        "Designing and documenting business processes using BPMN to improve efficiency and clarity.",
    },
    {
      icon: "lni lni-code",
      title: "C++",
      description:
        "Strong foundation in C++ for problem-solving, logical thinking, and developing efficient algorithms.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-up">My Services</h2>
          <p
            className="section-subtitle animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            I provide data-driven business analysis services focused on
            transforming information into actionable insights, improving
            processes, and supporting informed decision-making.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <div className="relative">
                  <i className={`text-primary text-7xl ${service.icon}`} />
                  <img
                    src="https://puremath-dotcom.github.io/IqraIrfan/assets/images/f-shape-1.svg"
                    className="absolute top-2 right-2 -z-10"
                  />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
