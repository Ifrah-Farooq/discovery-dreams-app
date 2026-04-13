import { MapPin, Star, Users, Car, ChevronDown } from "lucide-react";
import { LogoMark } from "@/components/Navbar";
import { useEffect, useState } from "react";

import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import hero4 from "@/assets/hero4.jpg";
import hero5 from "@/assets/hero5.avif";
import hero6 from "@/assets/hero6.avif";
import hero7 from "@/assets/hero7.avif";
import hero8 from "@/assets/hero8.avif";
import hero9 from "@/assets/hero9.avif";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9];

const stats = [
  { icon: Users, value: "5,000+", label: "Happy Travelers" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
  { icon: MapPin, value: "50+", label: "Destinations" },
  { icon: Car, value: "24/7", label: "Taxi Service" },
];

/* ── Component ─────────────────────────────────────────────────────── */
const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Carousel Background ─────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Kashmir scenery ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
            fetchPriority={i === 0 ? "high" : "low"}
          />
        ))}
      </div>

      {/* ── Layered gradient overlay ─────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full container mx-auto px-4 pt-24 pb-10 flex flex-col items-center text-center">
        {/* Logo mark */}
        <div
          className="animate-fade-in mb-4"
          style={{ animationDelay: "0.1s" }}
        >
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
        <div
          className="animate-fade-up mb-5"
          style={{ animationDelay: "0.25s" }}
        >
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
          Breathtaking valleys · Serene dal lakes · Snow-capped peaks ·
          Houseboat stays
        </p>
        <p
          className="animate-fade-up text-white/60 text-sm max-w-xl mb-9"
          style={{ animationDelay: "0.65s" }}
        >
          Khan Brother Tour & Travel — your family-run guide to the paradise on
          earth.
        </p>

        {/* ── Stats bar ─────────────────────────────────────────── */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4 md:gap-8"
          style={{ animationDelay: "0.9s" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3"
            >
              <s.icon className="w-4 h-4 text-secondary" />
              <div>
                <p className="text-white font-bold text-base leading-tight">
                  {s.value}
                </p>
                <p className="text-white/55 text-xs">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dot indicators ───────────────────────────────────────── */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
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
