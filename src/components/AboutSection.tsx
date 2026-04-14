import { Shield, Heart, Clock, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "Trusted Service", desc: "Safe and reliable travel with experienced local guides" },
  { icon: Heart, title: "Personalized Trips", desc: "Customized itineraries tailored to your preferences" },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance throughout your journey" },
  { icon: Award, title: "Best Prices", desc: "Competitive pricing with no hidden charges" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-sans text-sm uppercase tracking-[0.3em] mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Your Trusted Travel Partner in Kashmir
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Khan Brother Tour & Travel</strong> is a Srinagar-based travel company
              dedicated to showcasing the pristine beauty of Kashmir and Ladakh. Run by
              <strong className="text-foreground"> Mohd Musadiq Khan</strong>, we believe in creating
              unforgettable experiences with personalized service, local expertise, and honest pricing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From serene houseboat stays on Dal Lake to thrilling adventures in Ladakh,
              we craft every journey with care and passion. Whether it's a honeymoon,
              family vacation, or solo adventure — we've got you covered.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">5000+</p>
                <p className="text-sm text-muted-foreground">Happy Guests</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Destinations</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">4.9★</p>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-card-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
