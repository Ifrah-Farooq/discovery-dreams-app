import { useEffect, useState } from "react";
import { Clock, MapPin, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages as fallbackPackages } from "@/constants/packages";
import type { Package } from "@/constants/packages";
import { fetchPackages } from "@/lib/queries";

const PackagesSection = () => {
  const [packages, setPackages] = useState<Package[]>(fallbackPackages);

  useEffect(() => {
    fetchPackages().then((data) => {
      if (data) setPackages(data);
    });
  }, []);

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
        {packages.map((pkg) => (
          <div
            key={pkg.slug}
            className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border/50 flex flex-col"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold">
                {pkg.badge}
              </span>
              <div className="absolute bottom-3 right-3 bg-black/55 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-right">
                <p className="text-lg font-bold leading-none">{pkg.price}</p>
                <p className="text-[10px] text-white/65">{pkg.priceNote}</p>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-serif font-bold text-card-foreground mb-1.5">
                {pkg.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                {pkg.route}
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  {pkg.rating} ({pkg.reviews})
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                {pkg.inclusions.slice(0, 4).map((item) => (
                  <span key={item} className="text-xs bg-accent text-accent-foreground px-2.5 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    {item.split(" ").slice(0, 3).join(" ")}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={`/packages/${pkg.slug}`} className="flex-1">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-1.5">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </a>
                <a
                  href={`https://wa.me/919682553190?text=${encodeURIComponent(`Hi, I'm interested in the *${pkg.title}* (${pkg.duration}) — ${pkg.price}. Please share availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default PackagesSection;
