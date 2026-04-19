import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-sans text-sm uppercase tracking-[0.3em] mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to explore Kashmir? Reach out to us for customized packages
            and best deals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Khan Brother Tour & Travel
            </h3>
            <p className="text-muted-foreground mb-8">
              We'd love to hear from you! Contact us for tour bookings, custom
              packages, or any travel inquiries.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <p className="text-muted-foreground text-sm">
                  Hamdayina Colony, Bemina, Srinagar, Kashmir
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <a
                  href="tel:9682553190"
                  className="text-primary text-sm hover:underline block"
                >
                  +91 9682553190
                </a>
                <a
                  href="tel:9906472544"
                  className="text-primary text-sm hover:underline block"
                >
                  +91 9906472544
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <a
                  href="mailto:rd2598712@gmail.com"
                  className="text-primary text-sm hover:underline block"
                >
                  rd2598712@gmail.com
                </a>
                <a
                  href="mailto:khanmusadiq48@gmail.com"
                  className="text-primary text-sm hover:underline block"
                >
                  khanmusadiq48@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
