import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutSection from "@/components/AboutSection";
import PageBanner from "@/components/PageBanner";
import sonamargImg from "@/assets/sonamarg.jpg";

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-[72px] md:pt-20">
      <PageBanner
        title="About Us"
        subtitle="Your trusted local partner for unforgettable Kashmir experiences."
        image={sonamargImg}
        breadcrumb="About"
      />
      <AboutSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default AboutPage;
