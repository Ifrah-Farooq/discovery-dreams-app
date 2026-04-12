import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DestinationsSection from "@/components/DestinationsSection";
import PageBanner from "@/components/PageBanner";
import pahalgamImg from "@/assets/pahalgam.jpg";

const DestinationsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-[72px] md:pt-20">
      <PageBanner
        title="Destinations"
        subtitle="Explore the most breathtaking places in Kashmir & Ladakh."
        image={pahalgamImg}
        breadcrumb="Destinations"
      />
      <DestinationsSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default DestinationsPage;
