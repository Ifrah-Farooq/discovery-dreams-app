import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Khan Brother</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted travel partner for unforgettable Kashmir & Ladakh experiences.
              We make your dream vacation a reality.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Packages", "Destinations", "About", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/60">
                <MapPin className="w-4 h-4 shrink-0" />
                Hamdayina Colony, Bemina, Srinagar
              </div>
              <a href="tel:9682553190" className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +91 9682553190
              </a>
              <a href="mailto:khanmusadiq48@gmail.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                khanmusadiq48@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Khan Brother Tour & Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
