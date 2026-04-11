import { MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-kashmir.jpg";

const stats = [
  { icon: Users, value: "5000+", label: "Happy Travelers" },
  { icon: Star, value: "4.9", label: "Rating" },
  { icon: MapPin, value: "50+", label: "Destinations" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Beautiful Dal Lake Kashmir with shikaras and Himalayan mountains"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <p className="text-secondary font-sans text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-up">
            Welcome to Paradise
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover the Magic of{" "}
            <span className="text-gradient-gold">Kashmir</span>
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-xl mb-8 font-sans leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Experience breathtaking valleys, serene lakes, and majestic mountains
            with Khan Brother Tour & Travel — your trusted travel partner since day one.
          </p>
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a href="#packages">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8">
                Explore Packages
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                Contact Us
              </Button>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-10 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 bg-glass rounded-lg px-5 py-3">
              <stat.icon className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-primary-foreground font-bold text-lg">{stat.value}</p>
                <p className="text-primary-foreground/60 text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
