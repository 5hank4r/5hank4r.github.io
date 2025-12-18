import { Send, Users, FileCheck, ThumbsUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Send,
      step: "01",
      title: "Submit Your Request",
      description: "Share your assignment details, requirements, and deadline with us.",
    },
    {
      icon: Users,
      step: "02",
      title: "Expert Assignment",
      description: "We match you with a qualified expert in your subject area.",
    },
    {
      icon: FileCheck,
      step: "03",
      title: "Quality Work",
      description: "Your expert completes the work with thorough research and analysis.",
    },
    {
      icon: ThumbsUp,
      step: "04",
      title: "Receive & Review",
      description: "Get your completed assignment on time with free revisions if needed.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16 stagger-children">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-gradient-accent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting help is easy. Follow these simple steps to ace your assignments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gradient text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Step {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto bg-secondary rounded-2xl flex items-center justify-center mb-5 mt-4 group-hover:bg-accent/10 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
