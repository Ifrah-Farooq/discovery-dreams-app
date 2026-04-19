import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { LogoMark } from "@/components/Navbar";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Taxi Service", href: "/taxi-service" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const topPackages = [
  "Kashmir Paradise Tour",
  "Honeymoon Special",
  "Adventure Ladakh",
  "Pahalgam Getaway",
  "Sonamarg Glacier Trek",
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    {/* Main grid */}
    <div className="container mx-auto px-4 py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <LogoMark className="w-9 h-9 text-secondary" />
            <div>
              <span className="block text-xl font-serif font-bold text-white leading-tight">
                Khan Brother
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
                Tour & Travel
              </span>
            </div>
          </div>
          <p className="text-primary-foreground/50 text-sm leading-relaxed mb-5">
            Your trusted, family-run travel partner for unforgettable Kashmir &
            Ladakh experiences. Est. in Srinagar.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919682553190"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-bold text-base mb-5 text-white">
            Quick Links
          </h4>
          <div className="space-y-2.5">
            {quickLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-primary-foreground/50 hover:text-secondary text-sm transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Top Packages */}
        <div>
          <h4 className="font-serif font-bold text-base mb-5 text-white">
            Top Packages
          </h4>
          <div className="space-y-2.5">
            {topPackages.map((pkg) => (
              <a
                key={pkg}
                href="/packages"
                className="block text-primary-foreground/50 hover:text-secondary text-sm transition-colors duration-200"
              >
                {pkg}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif font-bold text-base mb-5 text-white">
            Reach Us
          </h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-2.5 text-primary-foreground/50">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Hamdayina Colony, Bemina, Srinagar — J&K, India</span>
            </div>
            <a
              href="tel:9682553190"
              className="flex items-center gap-2.5 text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              +91 9682553190
            </a>
            <a
              href="tel:9906472544"
              className="flex items-center gap-2.5 text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              +91 9906472544
            </a>

            <a
              href="mailto:rd2598712@gmail.com"
              className="flex items-center gap-2.5 text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              rd2598712@gmail.com
            </a>
            <a
              href="mailto:khanmusadiq48@gmail.com"
              className="flex items-center gap-2.5 text-primary-foreground/50 hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              khanmusadiq48@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10 py-5">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/35">
        <p>
          © {new Date().getFullYear()} Khan Brother Tour & Travel. All rights
          reserved.
        </p>
        <p>Srinagar, Jammu & Kashmir, India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
