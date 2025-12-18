import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const highlights = [
    "Expert Writers",
    "100% Original Work",
    "24/7 Support",
    "On-Time Delivery",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-gradient opacity-[0.03]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="stagger-children">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                Trusted by 10,000+ Students
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Academic Success{" "}
              <span className="text-gradient">Starts Here</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Professional assignment help from expert writers. Get top grades with original, 
              plagiarism-free work delivered on time, every time.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Get Your Assignment Done
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">View Our Services</a>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative animate-float">
              <div className="w-80 h-80 bg-card-gradient rounded-3xl shadow-card-hover p-8 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="GoAssignment" 
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-card p-4 animate-fade-up">
                <p className="text-2xl font-bold text-gradient">A+</p>
                <p className="text-xs text-muted-foreground">Average Grade</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-card p-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-2xl font-bold text-gradient-accent">98%</p>
                <p className="text-xs text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
