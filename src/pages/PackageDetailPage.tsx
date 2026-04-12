import { useParams, Link } from "react-router-dom";
import {
  MapPin, Clock, Users, Star, CheckCircle2, XCircle,
  Phone, ChevronRight, Calendar, Banknote, ArrowLeft,
  Lightbulb, Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getPackageBySlug } from "@/constants/packages";

const PackageDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = getPackageBySlug(slug ?? "");

  /* ── 404 fallback ─────────────────────────────────────────────── */
  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-24">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-3">Package Not Found</h1>
          <p className="text-muted-foreground mb-6">The package you're looking for doesn't exist.</p>
          <Link to="/packages">
            <Button className="bg-primary text-primary-foreground">View All Packages</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const waMsg = encodeURIComponent(
    `Hi, I'm interested in the *${pkg.title}* (${pkg.duration}). Price: ${pkg.price}. Please share availability and details.`
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[460px] flex items-end overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

        <div className="relative container mx-auto px-4 pb-10 pt-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/55 text-xs mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/packages" className="hover:text-white transition-colors">Packages</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">{pkg.title}</span>
          </div>

          <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
            {pkg.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
            {pkg.title}
          </h1>
          <p className="text-white/70 text-lg mb-5">{pkg.tagline}</p>

          {/* Quick meta */}
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-secondary" /> {pkg.duration}
            </span>
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-lg">
              <MapPin className="w-4 h-4 text-secondary" /> {pkg.route}
            </span>
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-lg">
              <Users className="w-4 h-4 text-secondary" /> {pkg.groupSize}
            </span>
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-lg">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              {pkg.rating} ({pkg.reviews} reviews)
            </span>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────── */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* ── Left: main content ──────────────────────────── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{pkg.overview}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Trip Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 bg-accent/50 border border-border/50 rounded-xl px-4 py-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="border border-border/50 rounded-2xl overflow-hidden">
                      <div className="flex items-center gap-4 px-6 py-4 bg-primary text-primary-foreground">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary font-serif font-bold text-sm shrink-0">
                          {String(day.day).padStart(2, "0")}
                        </div>
                        <h3 className="font-serif font-bold text-white">{day.title}</h3>
                      </div>
                      <div className="px-6 py-5 bg-card">
                        <ul className="space-y-2.5">
                          {day.activities.map((act, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {act}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-3 border-t border-border/40 flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          Overnight: <span className="font-medium text-foreground">{day.overnight}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">What's Included</h2>
                  <div className="space-y-2.5">
                    {pkg.inclusions.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">Not Included</h2>
                  <div className="space-y-2.5">
                    {pkg.exclusions.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-secondary/10 border border-secondary/25 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-secondary" />
                  <h2 className="text-xl font-serif font-bold text-foreground">Travel Tips</h2>
                </div>
                <div className="space-y-2.5">
                  {pkg.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="text-secondary font-bold shrink-0">{i + 1}.</span>
                      {tip}
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Time */}
              <div className="flex items-start gap-4 bg-accent/40 border border-border/50 rounded-2xl p-6">
                <Sun className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Best Time to Visit</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pkg.bestTime}</p>
                </div>
              </div>
            </div>

            {/* ── Right: sticky booking card ──────────────────── */}
            <div className="lg:sticky lg:top-24 space-y-5">

              {/* Price card */}
              <div className="bg-card border border-border/50 rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-primary text-primary-foreground px-6 py-5">
                  <p className="text-primary-foreground/70 text-xs uppercase tracking-wide mb-1">Starting from</p>
                  <p className="text-4xl font-serif font-bold text-white">{pkg.price}</p>
                  <p className="text-primary-foreground/60 text-xs mt-1">{pkg.priceNote}</p>
                </div>

                <div className="p-6 space-y-4">
                  {/* Pricing table */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-1.5">
                      <Banknote className="w-3.5 h-3.5" /> Group Pricing
                    </p>
                    <div className="space-y-2">
                      {pkg.pricing.map((p) => (
                        <div key={p.label} className="flex justify-between text-sm border-b border-border/40 pb-2 last:border-0">
                          <span className="text-muted-foreground">{p.label}</span>
                          <span className="font-semibold text-foreground">{p.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919682553190?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 h-11">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.303-1.51A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.373l-.36-.214-3.724.893.934-3.617-.235-.373A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                      </svg>
                      Book via WhatsApp
                    </Button>
                  </a>

                  <a href="tel:9682553190">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 h-11">
                      <Phone className="w-4 h-4" /> Call to Book
                    </Button>
                  </a>

                  <p className="text-xs text-muted-foreground text-center">
                    Free cancellation up to 7 days before travel
                  </p>
                </div>
              </div>

              {/* Back to packages */}
              <Link
                to="/packages"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to all packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PackageDetailPage;
