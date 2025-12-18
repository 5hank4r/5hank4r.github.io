import { BookOpen, FileText, GraduationCap, PenTool, Calculator, Microscope } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Essays & Research Papers",
      description: "Well-researched, original essays and academic papers tailored to your requirements.",
    },
    {
      icon: GraduationCap,
      title: "Dissertations & Theses",
      description: "Comprehensive dissertation support from topic selection to final submission.",
    },
    {
      icon: BookOpen,
      title: "Case Studies",
      description: "In-depth analysis and professional case study writing for business and management.",
    },
    {
      icon: Calculator,
      title: "Math & Statistics",
      description: "Expert help with calculations, problem-solving, and statistical analysis.",
    },
    {
      icon: PenTool,
      title: "Editing & Proofreading",
      description: "Polish your work with our professional editing and proofreading services.",
    },
    {
      icon: Microscope,
      title: "Lab Reports & Science",
      description: "Accurate scientific writing for lab reports, experiments, and research.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 stagger-children">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Assignment Help for <span className="text-gradient">Every Subject</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From essays to dissertations, we've got you covered with expert writers in every field.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
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
