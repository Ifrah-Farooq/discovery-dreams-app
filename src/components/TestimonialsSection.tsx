import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "New Delhi",
    initials: "RS",
    color: "bg-blue-100 text-blue-700",
    text: "Absolutely perfect trip! Every detail — from the houseboat to Gulmarg — was taken care of flawlessly. Khan Brother delivered way beyond our expectations.",
    rating: 5,
  },
  {
    name: "Priya & Arjun Patel",
    location: "Mumbai",
    initials: "PA",
    color: "bg-rose-100 text-rose-700",
    text: "Our honeymoon in Kashmir was a dream come true. The shikara ride at sunrise on Dal Lake was magical. Thank you for the most romantic trip of our lives!",
    rating: 5,
  },
  {
    name: "Amit Singh",
    location: "Bangalore",
    initials: "AS",
    color: "bg-emerald-100 text-emerald-700",
    text: "The Ladakh adventure was incredible — great local knowledge, comfortable stays, and breathtaking landscapes. Our driver Javeed was exceptional. Will 100% book again.",
    rating: 5,
  },
  {
    name: "Sunita & Family",
    location: "Hyderabad",
    initials: "SF",
    color: "bg-amber-100 text-amber-700",
    text: "Travelled with kids and elderly parents — Musadiq bhai made sure everyone was comfortable. The Pahalgam valley and Betaab Valley were highlights. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-muted/40">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-secondary font-sans text-sm uppercase tracking-[0.3em] mb-3">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
          What Our Travelers Say
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Real reviews from real travelers who trusted us with their Kashmir dream.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-card border border-border/50 rounded-2xl p-7 hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4"
          >
            {/* Quote icon + stars */}
            <div className="flex items-start justify-between">
              <Quote className="w-8 h-8 text-primary/20 fill-primary/10 shrink-0" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
            </div>

            {/* Review text */}
            <p className="text-foreground/75 leading-relaxed text-sm flex-1">
              "{t.text}"
            </p>

            {/* Reviewer */}
            <div className="flex items-center gap-3 pt-2 border-t border-border/50">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${t.color}`}>
                {t.initials}
              </div>
              <div>
                <p className="font-serif font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
