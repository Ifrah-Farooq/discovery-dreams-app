import { useState, useEffect } from "react";
import { MapPin, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  type Category,
  destinations as fallbackDestinations,
  categories,
  categoryColors,
} from "@/constants/destinations";
import type { Dest } from "@/constants/destinations";
import { fetchDestinations } from "@/lib/queries";

/* ─── Image Carousel ──────────────────────────────────────────────── */
const ImageCarousel = ({
  images,
  name,
}: {
  images: string[];
  name: string;
}) => {
  const [idx, setIdx] = useState(0);

  // Single image — plain static display, no carousel chrome
  if (images.length === 1) {
    return (
      <div className="h-52 overflow-hidden bg-muted">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          width={900}
          height={600}
        />
      </div>
    );
  }

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setIdx((i) => (i + 1) % images.length);
  };

  return (
    <div className="relative h-52 overflow-hidden bg-muted">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${name} — photo ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          width={900}
          height={600}
        />
      ))}

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center transition-colors z-10"
        aria-label="Prev"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/45 hover:bg-black/70 text-white flex items-center justify-center transition-colors z-10"
        aria-label="Next"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              setIdx(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "bg-white w-4" : "bg-white/50 w-1.5"}`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );

};

/* ─── Main Component ─────────────────────────────────────────────── */
const DestinationsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [destinations, setDestinations] = useState<Dest[]>(fallbackDestinations);

  useEffect(() => {
    fetchDestinations().then((data) => {
      if (data) setDestinations(data);
    });
  }, []);

  const filtered =
    active === "All"
      ? destinations
      : destinations.filter((d) => d.category === active);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? destinations.length
                : destinations.filter((d) => d.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card text-foreground/70 border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}{" "}
                <span className="ml-1.5 text-xs opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((dest) => (
            <div
              key={dest.name}
              className="group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative">
                <ImageCarousel images={dest.images} name={dest.name} />
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none ${categoryColors[dest.category]}`}
                >
                  {dest.category}
                </span>
                {dest.highlight && (
                  <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground pointer-events-none">
                    {dest.highlight}
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <h3 className="font-serif font-bold text-foreground text-base leading-tight">
                    {dest.name}
                  </h3>
                </div>
                <p className="text-secondary text-xs font-semibold mb-2">
                  {dest.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {dest.desc}
                </p>
                <a
                  href={`https://wa.me/919682553190?text=${encodeURIComponent(`Hi, I'm interested in visiting ${dest.name} in Kashmir. Please share tour details and pricing.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5" /> Enquire Now
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-accent/40 rounded-2xl p-10 border border-border/50">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We cover every corner of Kashmir & Ladakh — including off-beat
            treks, village homestays, and fully custom itineraries. Just call
            us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:9682553190">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Phone className="w-4 h-4" /> Call +91 9682553190
              </Button>
            </a>
            <a href="/packages">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
              >
                View All Packages
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
