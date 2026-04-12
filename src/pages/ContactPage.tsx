import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import PageBanner from "@/components/PageBanner";
import houseboatImg from "@/assets/houseboat.jpg";

const ContactPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-[72px] md:pt-20">
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch to plan your perfect Kashmir vacation."
        image={houseboatImg}
        breadcrumb="Contact"
      />
      <ContactSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default ContactPage;
