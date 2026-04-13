import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  MapPin, Car, Package, Phone, Shield, Clock, Award, Star,
  Users, ChevronRight, HeartHandshake, Compass, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Service card images (original assets)
import gulmargImg    from "@/assets/gulmarg.jpg";
import ladakhImg     from "@/assets/ladakh.jpg";
import pahalgamImg   from "@/assets/pahalgam.jpg";
import houseboatImg  from "@/assets/houseboat.jpg";

// Popular destination circle images (high-quality user assets)
import gulmargResortImg  from "@/assets/gulmarg-resort.jpg";
import sonamargMdwImg    from "@/assets/sonamarg-meadow.jpg";
import dalHouseboatImg   from "@/assets/dal-houseboat.jpg";
import yusmargImg        from "@/assets/yusmarg-meadow.jpg";
import srinagarImg       from "@/assets/srinagar-city.jpg";
import nubraImg          from "@/assets/nubra-valley.jpg";
import pangongImg        from "@/assets/pangong-lake.jpg";

/* ─── Data ──────────────────────────────────────────────────────────── */

const popularDestinations = [
  { name: "Gulmarg",      image: gulmargResortImg, href: "/destinations" },
  { name: "Pahalgam",     image: pahalgamImg,       href: "/destinations" },
  { name: "Sonamarg",     image: sonamargMdwImg,    href: "/destinations" },
  { name: "Dal Lake",     image: dalHouseboatImg,   href: "/destinations" },
  { name: "Yusmarg",      image: yusmargImg,        href: "/destinations" },
  { name: "Srinagar",     image: srinagarImg,       href: "/destinations" },
  { name: "Nubra Valley", image: nubraImg,          href: "/destinations" },
  { name: "Pangong Tso",  image: pangongImg,        href: "/destinations" },
];

const services = [
  {
    icon: Package,
    title: "Tour Packages",
    desc: "Carefully crafted Kashmir & Ladakh packages for couples, families, and groups.",
    image: gulmargImg,
    href: "/packages",
    cta: "View Packages",
  },
  {
    icon: Car,
    title: "Taxi Service",
    desc: "Comfortable cabs across every route in Kashmir — Innova, Scorpio, Tempo & more.",
    image: ladakhImg,
    href: "/taxi",
    cta: "Book a Cab",
  },
  {
    icon: MapPin,
    title: "Destinations",
    desc: "Gulmarg, Pahalgam, Sonamarg, Dal Lake, Leh — discover every corner of paradise.",
    image: pahalgamImg,
    href: "/destinations",
    cta: "Explore Places",
  },
  {
    icon: Phone,
    title: "Houseboat Stays",
    desc: "Authentic Dal Lake houseboat stays, shikara rides & bespoke experiences.",
    image: houseboatImg,
    href: "/contact",
    cta: "Enquire Now",
  },
];

const featuredPackages = [
  {
    slug: "kashmir-paradise-tour",
    title: "Kashmir Paradise Tour",
    image: gulmargImg,
    badge: "Best Seller",
    route: "Srinagar · Gulmarg · Pahalgam",
    duration: "5 Days / 4 Nights",
    price: "₹14,500",
    priceNote: "per person",
    rating: 4.9,
    reviews: 120,
    includes: ["Hotel Stay", "Meals", "Transport"],
  },
  {
    slug: "honeymoon-special",
    title: "Honeymoon Special",
    image: houseboatImg,
    badge: "Most Romantic",
    route: "Srinagar · Houseboat · Gulmarg",
    duration: "6 Days / 5 Nights",
    price: "₹21,000",
    priceNote: "per couple",
    rating: 5.0,
    reviews: 85,
    includes: ["Houseboat Stay", "Shikara Ride", "Candle Dinner", "Transport"],
  },
  {
    slug: "adventure-ladakh",
    title: "Adventure Ladakh",
    image: ladakhImg,
    badge: "Top Rated",
    route: "Leh · Nubra · Pangong",
    duration: "7 Days / 6 Nights",
    price: "₹28,500",
    priceNote: "per person",
    rating: 4.8,
    reviews: 95,
    includes: ["Camping", "Bike Option", "Permits", "Meals"],
  },
];

const whyChooseUs = [
  {
    icon: HeartHandshake,
    title: "Family-Run & Personal",
    desc: "You deal directly with Musadiq Khan — no call centres, no middlemen, just genuine care.",
  },
  {
    icon: Compass,
    title: "Local Expertise",
    desc: "Born & raised in Kashmir. We know every hidden valley, shortcut, and off-season gem.",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    desc: "Licensed vehicles, experienced drivers, and 24/7 emergency support throughout your trip.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    desc: "Direct booking, no middlemen. Honest pricing with zero hidden charges — guaranteed.",
  },
];

const trustStats = [
  { value: "5,000+", label: "Happy Travelers" },
  { value: "10+",    label: "Years Experience" },
  { value: "50+",    label: "Destinations" },
  { value: "4.9★",  label: "Average Rating"  },
];

const certifications = ["J&K Tourism Approved", "Verified Agency", "5★ on Google"];

/* ─── Index Page ────────────────────────────────────────────────────── */
const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />

    {/* ── Popular Destinations ─────────────────────────────────────── */}
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-2 font-sans">
              Explore Kashmir
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Popular Destinations
            </h2>
          </div>
          <a
            href="/destinations"
            className="hidden md:flex items-center gap-1 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300"
          >
            View All <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {popularDestinations.map((dest) => (
            <a
              key={dest.name}
              href={dest.href}
              className="group flex flex-col items-center gap-2.5"
            >
              <div className="w-full aspect-square rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary transition-all duration-300 shadow-md group-hover:shadow-lg">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-semibold text-foreground/75 text-center group-hover:text-primary transition-colors leading-tight">
                {dest.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="/destinations">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Destinations
            </Button>
          </a>
        </div>
      </div>
    </section>

    {/* ── Services ─────────────────────────────────────────────────── */}
    <section className="py-16 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-2 font-sans">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Everything you need for the perfect Kashmir vacation — under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group relative rounded-2xl overflow-hidden h-64 block shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-3">
                  <s.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-1">{s.title}</h3>
                <p className="text-white/65 text-xs leading-relaxed mb-3 line-clamp-2">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary group-hover:gap-2.5 transition-all duration-300">
                  {s.cta} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* ── Featured Packages ────────────────────────────────────────── */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-2 font-sans">
              Tour Packages
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Featured Packages
            </h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-md">
              Handcrafted itineraries at honest prices — for couples, families & groups.
            </p>
          </div>
          <a
            href="/packages"
            className="hidden md:flex items-center gap-1 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300"
          >
            All Packages <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.title}
              className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {pkg.badge}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-foreground text-xl mb-1.5">{pkg.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  {pkg.route}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                  {pkg.includes.map((item) => (
                    <span key={item} className="text-xs bg-accent text-accent-foreground px-2.5 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {item}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={`/packages/${pkg.slug}`} className="flex-1">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      View Details
                    </Button>
                  </a>
                  <a
                    href={`https://wa.me/919682553190?text=${encodeURIComponent(`Hi, I'm interested in *${pkg.title}* (${pkg.duration}). Please share availability.`)}`}
                    target="_blank" rel="noopener noreferrer"
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

        <div className="mt-8 text-center md:hidden">
          <a href="/packages">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Packages
            </Button>
          </a>
        </div>
      </div>
    </section>

    {/* ── Why Choose Us ────────────────────────────────────────────── */}
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-3 font-sans">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5 leading-tight">
              Kashmir Travel You Can<br />Actually Trust
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8 text-sm max-w-md">
              Hundreds of travelers choose Khan Brother every season — not because of flashy ads,
              but because of genuine service, local roots, and a personal touch no large agency can offer.
            </p>
            <a href="/about">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                Learn About Us <ChevronRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 border border-white/15 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-serif font-bold text-white text-sm mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/55 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Trust Strip ──────────────────────────────────────────────── */}
    <section className="py-10 bg-secondary/10 border-y border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-serif font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:block h-10 w-px bg-border" />
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {certifications.map((cert) => (
              <span key={cert} className="text-xs font-semibold bg-card border border-border px-3 py-1.5 rounded-full text-foreground/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <TestimonialsSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
