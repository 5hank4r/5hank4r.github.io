import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card-gradient rounded-3xl p-8 md:p-12 shadow-card-hover text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to <span className="text-gradient-accent">Ace</span> Your Assignments?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Contact us today and let our experts help you achieve the grades you deserve. 
              Available 24/7 to assist you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:contact@goassignment.com">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">contact@goassignment.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
