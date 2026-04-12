import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PackagesSection from "@/components/PackagesSection";
import PageBanner from "@/components/PageBanner";
import gulmargImg from "@/assets/gulmarg.jpg";

const PackagesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-[72px] md:pt-20">
      <PageBanner
        title="Tour Packages"
        subtitle="Handcrafted Kashmir & Ladakh packages for every budget and interest."
        image={gulmargImg}
        breadcrumb="Packages"
      />
      <PackagesSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default PackagesPage;
