import { Clock, MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import gulmargImg from "@/assets/gulmarg.jpg";
import pahalgamImg from "@/assets/pahalgam.jpg";
import sonamargImg from "@/assets/sonamarg.jpg";
import ladakhImg from "@/assets/ladakh.jpg";
import houseboatImg from "@/assets/houseboat.jpg";

const packages = [
  {
    title: "Kashmir Paradise Tour",
    image: gulmargImg,
    location: "Srinagar - Gulmarg - Pahalgam",
    duration: "5 Days / 4 Nights",
    price: "₹14,500",
    rating: 4.9,
    reviews: 120,
    features: ["Hotel Stay", "Sightseeing", "Meals", "Transport"],
  },
  {
    title: "Honeymoon Special",
    image: houseboatImg,
    location: "Srinagar - Houseboat - Gulmarg",
    duration: "6 Days / 5 Nights",
    price: "₹21,000",
    rating: 5.0,
    reviews: 85,
    features: ["Houseboat", "Shikara Ride", "Candle Dinner", "Transport"],
  },
  {
    title: "Adventure Ladakh",
    image: ladakhImg,
    location: "Leh - Nubra - Pangong",
    duration: "7 Days / 6 Nights",
    price: "₹28,500",
    rating: 4.8,
    reviews: 95,
    features: ["Camping", "Bike Option", "Permits", "Meals"],
  },
  {
    title: "Pahalgam Getaway",
    image: pahalgamImg,
    location: "Srinagar - Pahalgam",
    duration: "4 Days / 3 Nights",
    price: "₹11,800",
    rating: 4.7,
    reviews: 60,
    features: ["Hotel", "Pony Ride", "Sightseeing", "Transport"],
  },
  {
    title: "Sonamarg Glacier Trek",
    image: sonamargImg,
    location: "Srinagar - Sonamarg",
    duration: "3 Days / 2 Nights",
    price: "₹9,500",
    rating: 4.8,
    reviews: 45,
    features: ["Trekking", "Camp Stay", "Guide", "Meals"],
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-sans text-sm uppercase tracking-[0.3em] mb-3">
            Our Packages
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Explore Tour Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handcrafted tour packages designed to give you the best Kashmir & Ladakh experience at unbeatable prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={pkg.title}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border/50"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {pkg.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    {pkg.location}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-secondary" />
                    {pkg.rating} ({pkg.reviews})
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {pkg.features.map((f) => (
                    <span key={f} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <a href="#contact">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
