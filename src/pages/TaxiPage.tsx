import { useState, useEffect } from "react";
import {
  Car, MapPin, Users, Clock, Star, Phone,
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp,
  MessageCircle, BadgeCheck, Fuel,
} from "lucide-react";
import { fetchVehicles, fetchRoutes } from "@/lib/queries";
import type { SanityVehicle, SanityRoute } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/* ─── Vehicle Fleet ─────────────────────────────────────────────────── */
const fallbackVehicles: SanityVehicle[] = [
  {
    name: "Sedan",
    examples: "Swift Dzire / Toyota Etios",
    capacity: "4 Passengers",
    bags: "2 Bags",
    pricePerDay: "₹2,500",
    tag: "Economy",
    tagColor: "bg-sky-100 text-sky-700",
    imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=85&fit=crop",
    features: ["AC", "Music System", "Comfortable Seats"],
    ideal: "Couples & Solo Trips",
  },
  {
    name: "Ertiga / Xylo",
    examples: "Maruti Ertiga / Mahindra Xylo",
    capacity: "6 Passengers",
    bags: "3 Bags",
    pricePerDay: "₹3,000",
    tag: "Family",
    tagColor: "bg-green-100 text-green-700",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=85&fit=crop",
    features: ["AC", "Spacious Cabin", "Good Fuel Economy"],
    ideal: "Small Family Trips",
  },
  {
    name: "Innova / Innova Crysta",
    examples: "Toyota Innova Crysta",
    capacity: "6–7 Passengers",
    bags: "4 Bags",
    pricePerDay: "₹4,500",
    tag: "Most Popular",
    tagColor: "bg-amber-100 text-amber-700",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=85&fit=crop",
    features: ["AC", "Captain Seats", "USB Charging"],
    ideal: "Families & Comfort Trips",
  },
  {
    name: "Scorpio / Bolero",
    examples: "Mahindra Scorpio / Bolero",
    capacity: "7–8 Passengers",
    bags: "4 Bags",
    pricePerDay: "₹3,300",
    tag: "Off-road Ready",
    tagColor: "bg-lime-100 text-lime-700",
    imageUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=85&fit=crop",
    features: ["AC", "4×4 Capable", "High Ground Clearance"],
    ideal: "Mountain & Ladakh Routes",
  },
  {
    name: "Fortuner",
    examples: "Toyota Fortuner",
    capacity: "7 Passengers",
    bags: "4 Bags",
    pricePerDay: "₹6,500",
    tag: "Premium",
    tagColor: "bg-violet-100 text-violet-700",
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=85&fit=crop",
    features: ["AC", "Luxury Interior", "Premium Sound System"],
    ideal: "VIP & Luxury Travel",
  },
  {
    name: "Tempo Traveller 14",
    examples: "Force Traveller 14-Seater",
    capacity: "14 Passengers",
    bags: "Large",
    pricePerDay: "₹6,000",
    tag: "Group",
    tagColor: "bg-indigo-100 text-indigo-700",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=85&fit=crop",
    features: ["AC", "Push-back Seats", "Overhead Storage"],
    ideal: "Mid-size Groups",
  },
  {
    name: "Tempo Traveller 17",
    examples: "Force Traveller 17-Seater",
    capacity: "17 Passengers",
    bags: "Large",
    pricePerDay: "₹7,500",
    tag: "Large Group",
    tagColor: "bg-rose-100 text-rose-700",
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=900&q=85&fit=crop",
    features: ["AC", "Wide Reclining Seats", "Luggage Bay"],
    ideal: "Large Groups & Pilgrimages",
  },
  {
    name: "Mini Bus",
    examples: "27-Seater Mini Bus",
    capacity: "27 Passengers",
    bags: "Extra Large",
    pricePerDay: "₹8,500",
    tag: "Large Fleet",
    tagColor: "bg-orange-100 text-orange-700",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=85&fit=crop",
    features: ["AC", "Large Cabin", "Bulk Group Discount"],
    ideal: "School, Corporate & Yatra Groups",
  },
];

/* ─── Popular Routes ────────────────────────────────────────────────── */
const fallbackRoutes: SanityRoute[] = [
  { from: "Srinagar", to: "Gulmarg",       distance: "56 km",  duration: "1.5 hrs", price: "₹1,800",  popular: true  },
  { from: "Srinagar", to: "Pahalgam",      distance: "96 km",  duration: "2.5 hrs", price: "₹2,200",  popular: true  },
  { from: "Srinagar", to: "Sonamarg",      distance: "87 km",  duration: "2 hrs",   price: "₹2,000",  popular: true  },
  { from: "Srinagar", to: "Yusmarg",       distance: "47 km",  duration: "1.5 hrs", price: "₹1,600",  popular: false },
  { from: "Srinagar", to: "Doodhpathri",   distance: "42 km",  duration: "1.5 hrs", price: "₹1,500",  popular: false },
  { from: "Srinagar", to: "Wular Lake",    distance: "55 km",  duration: "1.5 hrs", price: "₹1,700",  popular: false },
  { from: "Srinagar", to: "Verinag",       distance: "80 km",  duration: "2 hrs",   price: "₹1,900",  popular: false },
  { from: "Srinagar", to: "Leh (Ladakh)",  distance: "434 km", duration: "1 Day",   price: "₹9,500",  popular: true  },
  { from: "Airport",  to: "Srinagar City", distance: "14 km",  duration: "30 min",  price: "₹600",    popular: false },
  { from: "Gulmarg",  to: "Pahalgam",      distance: "130 km", duration: "3.5 hrs", price: "₹3,200",  popular: false },
];

/* ─── Why Choose Us ─────────────────────────────────────────────────── */
const trustPoints = [
  { icon: BadgeCheck,   title: "Verified Drivers",       desc: "Police-verified, licensed local drivers with years of mountain experience." },
  { icon: Clock,        title: "24/7 Available",          desc: "Airport pickups at 3 AM or late-night drops — always on time." },
  { icon: Star,         title: "4.9★ Rated",              desc: "Trusted by 500+ happy travelers every season." },
  { icon: Car,          title: "Well-maintained Fleet",   desc: "Clean, AC vehicles inspected before every single trip." },
  { icon: Users,        title: "Group Friendly",          desc: "From solo trips to 27-seater buses — we have you covered." },
  { icon: CheckCircle2, title: "No Hidden Charges",       desc: "The price quoted is the price you pay. Always." },
];

/* ─── How to Book Steps ─────────────────────────────────────────────── */
const steps = [
  {
    step: "01",
    title: "Call or WhatsApp",
    desc: "Reach us on +91 9682553190 via call or WhatsApp to start your booking.",
  },
  {
    step: "02",
    title: "Share Your Itinerary",
    desc: "Tell us your pickup, drop, travel date, and number of passengers.",
  },
  {
    step: "03",
    title: "Confirm & Travel",
    desc: "Pay a small advance of ₹2,000 to confirm. Your cab will arrive on time.",
  },
];

/* ─── FAQ ────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Are the prices per day or per kilometre?",
    a: "All vehicle rates listed are per day (8 hours / ~250 km). For longer routes or extra hours, a small additional charge applies — discussed transparently before booking.",
  },
  {
    q: "Do taxi prices include fuel and toll charges?",
    a: "Yes. Our quoted prices are all-inclusive — fuel, toll, driver allowance, and parking are all covered. No surprise bills.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2–3 days before your travel. For peak season (May–June, December–January), booking 7–10 days ahead is advised.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI (GPay, PhonePe, Paytm), NEFT/bank transfer, and cash. A ₹2,000 advance confirms your booking.",
  },
  {
    q: "Can I hire a cab for multiple days?",
    a: "Yes! Multi-day packages are our specialty. We offer discounts for 3+ day bookings. Call us for a customised quote.",
  },
  {
    q: "Are Ladakh routes covered?",
    a: "Absolutely. We cover all Ladakh routes including Leh, Nubra Valley, Pangong Tso, and Tso Moriri. Permits are included for most routes.",
  },
];

/* ─── Includes List ─────────────────────────────────────────────────── */
const includes = [
  "Pickup & drop from your hotel / airport",
  "AC vehicle throughout the journey",
  "Experienced local Kashmiri driver",
  "Fuel & toll charges included",
  "Free waiting up to 30 minutes",
  "24/7 support on call & WhatsApp",
];

/* ─── Component ─────────────────────────────────────────────────────── */
const TaxiPage = () => {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [vehicles, setVehicles] = useState<SanityVehicle[]>(fallbackVehicles);
  const [routes, setRoutes] = useState<SanityRoute[]>(fallbackRoutes);
  const [form, setForm] = useState({
    name: "", phone: "", pickup: "", drop: "",
    date: "", vehicle: "", passengers: "",
  });

  useEffect(() => {
    fetchVehicles().then((data) => { if (data) setVehicles(data); });
    fetchRoutes().then((data) => { if (data) setRoutes(data); });
  }, []);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Taxi Booking Request*\n\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate: ${form.date}\nVehicle: ${form.vehicle}\nPassengers: ${form.passengers}`
    );
    window.open(`https://wa.me/919682553190?text=${msg}`, "_blank");
    toast({ title: "Opening WhatsApp!", description: "Your booking details are pre-filled." });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative h-[72vh] min-h-[500px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=90&fit=crop"
          alt="Taxi on a Kashmir mountain road"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

        <div className="relative container mx-auto px-4 pt-20">
          <p className="text-secondary font-sans text-sm uppercase tracking-[0.3em] mb-3 animate-fade-up">
            Khan Brother Tour & Travel
          </p>
          <h1
            className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-4 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Taxi Service<br />
            <span className="text-secondary">Across Kashmir</span>
          </h1>
          <p
            className="text-white/80 text-base md:text-lg max-w-lg mb-3 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Safe, comfortable & affordable cabs to every corner of Kashmir & Ladakh.
          </p>
          <p
            className="text-white/55 text-sm max-w-sm mb-8 animate-fade-up"
            style={{ animationDelay: "0.38s" }}
          >
            Verified drivers · Clean vehicles · No hidden charges · Rates from <span className="text-secondary font-semibold">₹2,500 / day</span>
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <a href="#book-taxi">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 px-8">
                Book a Cab <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="tel:9682553190">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 px-8 font-semibold">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── How to Book ──────────────────────────────────────────────── */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-2 font-sans">Simple Process</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold">How to Book Your Taxi</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px border-t-2 border-dashed border-white/20" />
                )}
                <div className="w-16 h-16 rounded-full bg-secondary/20 border-2 border-secondary/40 flex items-center justify-center mb-4 text-secondary font-serif font-bold text-xl">
                  {s.step}
                </div>
                <h3 className="font-serif font-bold text-white mb-2">{s.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vehicle Fleet ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-2 font-sans">Our Fleet</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              Choose Your Ride
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              From budget sedans to luxury SUVs and large group travellers — all rates are <strong className="text-foreground">per day</strong> (8 hrs / ~250 km).
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((v) => (
              <div
                key={v.name}
                className="group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={v.imageUrl}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${v.tagColor}`}>
                    {v.tag}
                  </span>
                  {/* Per-day price badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-white/60 text-[10px] uppercase tracking-wide">Per Day</span>
                        <p className="text-white font-bold text-2xl leading-none">{v.pricePerDay}</p>
                      </div>
                      <span className="text-white/50 text-[10px] text-right">{v.ideal}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-serif font-bold text-foreground text-base mb-0.5">{v.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{v.examples}</p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {v.capacity}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Fuel className="w-3.5 h-3.5" /> {v.bags}
                    </span>
                  </div>

                  <div className="space-y-1 mb-4 flex-1">
                    {v.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/919682553190?text=${encodeURIComponent(`Hi, I want to book a ${v.name} cab in Kashmir. Rate: ${v.pricePerDay}/day`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5" /> Book {v.name}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            * Per-day rate covers 8 hours and up to 250 km. Extra hours/km billed at nominal rate. Ladakh permit charges extra.
          </p>
        </div>
      </section>

      {/* ── Route Pricing Table ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-2 font-sans">Fare Guide</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              Popular Route Fares
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              One-way fares for a sedan. Larger vehicles priced proportionally. Return trips at discounted rates.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-5 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide px-5 py-3.5">
              <span className="col-span-2">Route</span>
              <span className="text-center">Distance</span>
              <span className="text-center">Duration</span>
              <span className="text-right">Fare (Sedan)</span>
            </div>
            {/* Rows */}
            {routes.map((r, i) => (
              <div
                key={`${r.from}-${r.to}`}
                className={`grid grid-cols-5 items-center px-5 py-4 text-sm border-t border-border/40 ${i % 2 === 0 ? "" : "bg-muted/30"}`}
              >
                <div className="col-span-2 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>
                    <span className="text-muted-foreground text-xs">{r.from} → </span>
                    <span className="font-semibold text-foreground">{r.to}</span>
                  </span>
                  {r.popular && (
                    <span className="bg-secondary/15 text-secondary text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <span className="text-center text-muted-foreground">{r.distance}</span>
                <span className="text-center text-muted-foreground">{r.duration}</span>
                <div className="flex items-center justify-end gap-2">
                  <span className="font-bold text-primary">{r.price}</span>
                  <a
                    href={`https://wa.me/919682553190?text=${encodeURIComponent(`Hi, I want to book a taxi from ${r.from} to ${r.to}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="h-7 text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground px-3">
                      Book
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-5">
            Don't see your route?{" "}
            <a href="tel:9682553190" className="text-primary font-semibold hover:underline">
              Call us
            </a>{" "}
            for a custom quote.
          </p>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-2 font-sans">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Kashmir's Trusted Cab Service
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustPoints.map((t) => (
              <div key={t.title} className="flex gap-4 items-start bg-card border border-border/50 rounded-xl p-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <t.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-0.5">{t.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Form ──────────────────────────────────────────────── */}
      <section id="book-taxi" className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-2 font-sans">Reservations</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Book Your Taxi</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            {/* Form */}
            <form onSubmit={handleBook} className="bg-card border border-border/50 rounded-2xl p-7 shadow-md space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Your Name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-background" />
                <Input type="tel" placeholder="Phone Number" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="bg-background" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Pickup Location" value={form.pickup}
                  onChange={(e) => setForm({ ...form, pickup: e.target.value })} required className="bg-background" />
                <Input placeholder="Drop Location" value={form.drop}
                  onChange={(e) => setForm({ ...form, drop: e.target.value })} required className="bg-background" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input type="date" value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })} required className="bg-background"
                  min={new Date().toISOString().split("T")[0]} />
                <Input placeholder="No. of Passengers" type="number" min={1} max={27}
                  value={form.passengers}
                  onChange={(e) => setForm({ ...form, passengers: e.target.value })} required className="bg-background" />
              </div>
              <select
                value={form.vehicle}
                onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                required
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select Vehicle Type</option>
                {vehicles.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name} — {v.capacity} — {v.pricePerDay}/day
                  </option>
                ))}
              </select>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 h-11">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.303-1.51A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.373l-.36-.214-3.724.893.934-3.617-.235-.373A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                Book via WhatsApp
              </Button>
            </form>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-primary rounded-2xl p-7 text-primary-foreground">
                <h3 className="text-xl font-serif font-bold mb-2">Need Instant Booking?</h3>
                <p className="text-primary-foreground/70 text-sm mb-5">
                  Call us directly — our team confirms your cab instantly, 24 hours a day.
                </p>
                <a href="tel:9682553190">
                  <Button className="bg-white text-primary hover:bg-white/90 gap-2 font-semibold w-full">
                    <Phone className="w-4 h-4" /> +91 9682553190
                  </Button>
                </a>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <h4 className="font-serif font-bold text-foreground mb-4">Every Booking Includes</h4>
                <div className="space-y-2.5">
                  {includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-2 font-sans">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-primary shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center bg-accent/40 rounded-2xl p-8 border border-border/50">
            <h3 className="font-serif font-bold text-foreground text-xl mb-2">Still have questions?</h3>
            <p className="text-muted-foreground text-sm mb-5">Our team is available 24/7 to help plan your Kashmir taxi.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:9682553190">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <Phone className="w-4 h-4" /> Call +91 9682553190
                </Button>
              </a>
              <a href={`https://wa.me/919682553190`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TaxiPage;
