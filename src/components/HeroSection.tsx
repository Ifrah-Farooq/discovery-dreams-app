import { useState } from "react";
import { MapPin, Star, Users, Car, Search, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/Navbar";
import heroImg from "@/assets/hero-kashmir.jpg";

const stats = [
  { icon: Users,   value: "5,000+", label: "Happy Travelers" },
  { icon: Star,    value: "4.9★",   label: "Average Rating"  },
  { icon: MapPin,  value: "50+",    label: "Destinations"    },
  { icon: Car,     value: "24/7",   label: "Taxi Service"    },
];

const destinations = [
  "Gulmarg", "Pahalgam", "Sonamarg", "Dal Lake", "Leh Ladakh",
  "Yusmarg", "Doodhpathri", "Wular Lake", "Betaab Valley",
];

/* ── Component ─────────────────────────────────────────────────────── */
const HeroSection = () => {
  const [tab, setTab]           = useState<"tours" | "taxi">("tours");
  const [destination, setDest]  = useState("");
  const [travelDate, setDate]   = useState("");
  const [guests, setGuests]     = useState("");
  const [pickup, setPickup]     = useState("");
  const [drop, setDrop]         = useState("");
  const [taxiDate, setTaxiDate] = useState("");

  const handleTourSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/packages";
  };

  const handleTaxiSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Taxi Booking*\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${taxiDate}`
    );
    window.open(`https://wa.me/919682553190?text=${msg}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background with Ken Burns ───────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Kashmir valley with snow-capped Himalayan mountains"
          className="w-full h-full object-cover animate-ken-burns origin-center"
          style={{ filter: "brightness(1.15) saturate(1.3) contrast(1.05)" }}
          width={1920}
          height={1080}
          fetchPriority="high"
        />
      </div>

      {/* ── Layered gradient overlay — lighter so the scenery shows ─ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full container mx-auto px-4 pt-24 pb-10 flex flex-col items-center text-center">

        {/* Logo mark */}
        <div className="animate-fade-in mb-4" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
              <LogoMark className="w-12 h-12 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px w-10 bg-white/30" />
              <span className="text-white/80 text-[11px] uppercase tracking-[0.3em] font-sans">
                Est. Kashmir
              </span>
              <div className="h-px w-10 bg-white/30" />
            </div>
          </div>
        </div>

        {/* Trust badge */}
        <div className="animate-fade-up mb-5" style={{ animationDelay: "0.25s" }}>
          <span className="inline-flex items-center gap-2 bg-black/40 border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md shadow-lg">
            <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
            Kashmir's Most Trusted Travel Agency
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-5 max-w-4xl"
          style={{ animationDelay: "0.4s" }}
        >
          Discover the Magic of{" "}
          <span className="text-gradient-gold">Kashmir</span>
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-up text-white/75 text-base md:text-lg max-w-2xl mb-3 font-sans leading-relaxed"
          style={{ animationDelay: "0.55s" }}
        >
          Breathtaking valleys · Serene dal lakes · Snow-capped peaks · Houseboat stays
        </p>
        <p
          className="animate-fade-up text-white/60 text-sm max-w-xl mb-9"
          style={{ animationDelay: "0.65s" }}
        >
          Khan Brother Tour & Travel — your family-run guide to the paradise on earth.
        </p>

        {/* ── Booking Widget ───────────────────────────────────── */}
        <div
          className="animate-fade-up w-full max-w-3xl"
          style={{ animationDelay: "0.75s" }}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">

            {/* Tabs */}
            <div className="flex border-b border-white/15">
              <button
                onClick={() => setTab("tours")}
                className={`flex items-center gap-2 px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  tab === "tours"
                    ? "bg-white text-primary border-b-2 border-primary"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <MapPin className="w-4 h-4" />
                Tour Packages
              </button>
              <button
                onClick={() => setTab("taxi")}
                className={`flex items-center gap-2 px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  tab === "taxi"
                    ? "bg-white text-primary border-b-2 border-primary"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <Car className="w-4 h-4" />
                Book Taxi
              </button>
            </div>

            {/* Tours Form */}
            {tab === "tours" && (
              <form
                onSubmit={handleTourSearch}
                className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 items-end"
              >
                <div className="relative">
                  <label className="block text-white/70 text-xs mb-1.5 font-medium uppercase tracking-wide">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/70 pointer-events-none" />
                    <select
                      value={destination}
                      onChange={(e) => setDest(e.target.value)}
                      className="w-full h-11 pl-9 pr-4 rounded-lg border border-white/20 bg-white/90 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                    >
                      <option value="">All Destinations</option>
                      {destinations.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-xs mb-1.5 font-medium uppercase tracking-wide">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/70 pointer-events-none" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full h-11 pl-9 pr-3 rounded-lg border border-white/20 bg-white/90 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-xs mb-1.5 font-medium uppercase tracking-wide">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/70 pointer-events-none" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full h-11 pl-9 pr-4 rounded-lg border border-white/20 bg-white/90 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                    >
                      <option value="">No. of Guests</option>
                      {[1,2,3,4,5,6,7,8,9,"10+"].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Button
                    type="submit"
                    className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-semibold text-base"
                  >
                    <Search className="w-4 h-4" />
                    Search Tour Packages
                  </Button>
                </div>
              </form>
            )}

            {/* Taxi Form */}
            {tab === "taxi" && (
              <form
                onSubmit={handleTaxiSearch}
                className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 items-end"
              >
                <div>
                  <label className="block text-white/70 text-xs mb-1.5 font-medium uppercase tracking-wide">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/70 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Srinagar Airport"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      required
                      className="w-full h-11 pl-9 pr-3 rounded-lg border border-white/20 bg-white/90 text-foreground text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-xs mb-1.5 font-medium uppercase tracking-wide">
                    Drop Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/80 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Gulmarg"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      required
                      className="w-full h-11 pl-9 pr-3 rounded-lg border border-white/20 bg-white/90 text-foreground text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-xs mb-1.5 font-medium uppercase tracking-wide">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/70 pointer-events-none" />
                    <input
                      type="date"
                      value={taxiDate}
                      onChange={(e) => setTaxiDate(e.target.value)}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full h-11 pl-9 pr-3 rounded-lg border border-white/20 bg-white/90 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Button
                    type="submit"
                    className="w-full h-11 bg-green-600 hover:bg-green-700 text-white gap-2 font-semibold text-base"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.303-1.51A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.373l-.36-.214-3.724.893.934-3.617-.235-.373A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                    </svg>
                    Book Taxi via WhatsApp
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ── Stats bar ─────────────────────────────────────────── */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4 md:gap-8"
          style={{ animationDelay: "0.9s" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3">
              <s.icon className="w-4 h-4 text-secondary" />
              <div>
                <p className="text-white font-bold text-base leading-tight">{s.value}</p>
                <p className="text-white/55 text-xs">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-1 text-white/40">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
