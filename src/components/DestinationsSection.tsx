import gulmargImg from "@/assets/gulmarg.jpg";
import pahalgamImg from "@/assets/pahalgam.jpg";
import sonamargImg from "@/assets/sonamarg.jpg";
import ladakhImg from "@/assets/ladakh.jpg";
import houseboatImg from "@/assets/houseboat.jpg";
import heroImg from "@/assets/hero-kashmir.jpg";

const destinations = [
  { name: "Srinagar", image: heroImg, desc: "City of Lakes & Gardens" },
  { name: "Gulmarg", image: gulmargImg, desc: "Meadow of Flowers" },
  { name: "Pahalgam", image: pahalgamImg, desc: "Valley of Shepherds" },
  { name: "Sonamarg", image: sonamargImg, desc: "Meadow of Gold" },
  { name: "Ladakh", image: ladakhImg, desc: "Land of High Passes" },
  { name: "Houseboat", image: houseboatImg, desc: "Stay on Dal Lake" },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-sans text-sm uppercase tracking-[0.3em] mb-3">
            Top Destinations
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Places to Explore
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2 h-72 md:h-[28rem]" : "h-48 md:h-56"
              }`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-primary-foreground font-serif text-lg md:text-2xl font-bold">
                  {dest.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
