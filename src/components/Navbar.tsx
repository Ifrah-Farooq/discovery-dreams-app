import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  
  { label: "Taxi Service", href: "/taxi" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ── Logo Mark SVG ─────────────────────────────────────────────────── */
export const LogoMark = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg
    viewBox="0 0 56 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M28 4L50 44H6Z" fill="currentColor" fillOpacity="0.08" />
    <path
      d="M10 44L26 10L42 44"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M24 44L38 20L52 44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeOpacity="0.55"
    />
    <path d="M26 10L31 20.5L26 17.5L21 20.5Z" fill="currentColor" />
    <path
      d="M38 20L42 28L38 25.5L34 28Z"
      fill="currentColor"
      fillOpacity="0.6"
    />
    <line
      x1="4"
      y1="44"
      x2="52"
      y2="44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="7" cy="14" r="1.4" fill="currentColor" fillOpacity="0.5" />
    <circle cx="50" cy="9" r="1" fill="currentColor" fillOpacity="0.4" />
  </svg>
);

/* ── Component ─────────────────────────────────────────────────────── */
const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    // reset on route change
    setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // transparent only on home page before scrolling
  const transparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-white shadow-md border-b border-border/40"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px] md:h-20 py-3">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div
              className={`transition-colors duration-300 ${transparent ? "text-white" : "text-primary"}`}
            >
              <LogoMark className="w-10 h-10" />
            </div>
            <div>
              <span
                className={`block text-xl font-serif font-bold leading-tight transition-colors duration-300 ${transparent ? "text-white" : "text-primary"}`}
              >
                Khan Brother
              </span>
              <span
                className={`block text-[10px] uppercase tracking-[0.25em] font-sans transition-colors duration-300 ${transparent ? "text-white/70" : "text-muted-foreground"}`}
              >
                Tour & Travel
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                  transparent ? "text-white/90" : "text-foreground/80"
                }`}
              >
                {item.label}
              </a>
            ))}
            {/* <a href="tel:9682553190">
              <Button
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 animate-pulse-glow"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a> */}
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden transition-colors ${transparent ? "text-white" : "text-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-5 animate-slide-down bg-white rounded-b-xl shadow-lg border-t border-border/30 -mx-4 px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium border-b border-border/20 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:9682553190" className="block mt-4">
              <Button className="w-full bg-secondary text-secondary-foreground gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
