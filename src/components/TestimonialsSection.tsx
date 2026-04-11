import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    text: "Amazing experience! The Kashmir trip organized by Khan Brother was absolutely perfect. Every detail was taken care of. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    location: "Mumbai",
    text: "Our honeymoon in Kashmir was a dream come true. The houseboat stay and shikara ride on Dal Lake were magical. Thank you Khan Brother!",
    rating: 5,
  },
  {
    name: "Amit Singh",
    location: "Bangalore",
    text: "The Ladakh adventure tour was incredible. Great local knowledge, comfortable stays, and breathtaking views. Will definitely book again!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-sans text-sm uppercase tracking-[0.3em] mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border/50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-serif font-bold text-card-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
