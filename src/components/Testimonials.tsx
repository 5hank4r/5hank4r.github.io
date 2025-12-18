import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      course: "Business Management",
      rating: 5,
      text: "GoAssignment saved my semester! The quality of work was exceptional and delivered before my deadline. Highly recommend!",
    },
    {
      name: "James K.",
      course: "Computer Science",
      rating: 5,
      text: "I was struggling with my dissertation and these experts helped me structure everything perfectly. Got an A+!",
    },
    {
      name: "Emily R.",
      course: "Psychology",
      rating: 5,
      text: "Professional, fast, and reliable. The support team was available whenever I had questions. Will use again!",
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 stagger-children">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what students have to say about us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
