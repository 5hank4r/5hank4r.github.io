import { Shield, Clock, Award, RefreshCw, HeadphonesIcon, DollarSign } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "100% Original Work",
      description: "Every assignment is written from scratch and checked for plagiarism.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect deadlines and ensure your work is delivered when promised.",
    },
    {
      icon: Award,
      title: "Expert Writers",
      description: "Our team consists of qualified professionals with advanced degrees.",
    },
    {
      icon: RefreshCw,
      title: "Free Revisions",
      description: "Not satisfied? We offer unlimited revisions until you're happy.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our support team is available around the clock to assist you.",
    },
    {
      icon: DollarSign,
      title: "Affordable Prices",
      description: "Quality doesn't have to break the bank. Student-friendly rates.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-hero-gradient text-primary-foreground">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-3 text-primary-foreground/70">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Success Is Our Priority
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We're committed to helping you achieve academic excellence with our reliable services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
