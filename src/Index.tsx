import { LanguageProvider } from "./assets/components/context/LanguageContext";
import PromoBanner from "./assets/components/PromoBanner";
import Navbar from "./assets/components/Navbar";
import HeroSection from "./assets/components/HeroSection";
import ServicesSection from "./assets/components/ServicesSection";
import MenuSection from "./assets/components/MenuSection";
import GallerySection from "./assets/components/GallerySection";
import BookingSection from "./assets/components/BookingSection";
import SocialSection from "./assets/components/SocialSection";
import Footer from "./assets/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <PromoBanner />
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <MenuSection />
        <GallerySection />
        <BookingSection />
        <SocialSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
