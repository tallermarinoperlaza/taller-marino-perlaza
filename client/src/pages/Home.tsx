import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import BrandsSection from '@/components/BrandsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Taller Marino Perlaza - Design System: Industrial Modern Theme
 * - Dark background (#1a1a1a) with red (#d32f2f) and orange (#ff6f00) accents
 * - Roboto typography for professional, technical feel
 * - Minimal animations with 200ms transitions
 * - Straight edges, no excessive rounding
 * - Professional logo integration in header and footer
 * - Complete branding with correct contact information
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <BrandsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
