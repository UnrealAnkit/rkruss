import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { StatsSection } from '@/components/home/stats-section';
import { ServicesSection } from '@/components/home/services-section';
import { RussiaHighlightSection } from '@/components/home/russia-highlight-section';
import { RussiaUniversitiesSection } from '@/components/home/russia-universities-section';
import { DestinationsSection } from '@/components/home/destinations-section';
import { ProcessSection } from '@/components/home/process-section';
import { RussiaProcessSection } from '@/components/home/russia-process-section';
import { RussiaIndianServicesSection } from '@/components/home/russia-indian-services-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { VideoGuidesSection } from '@/components/home/video-guides-section';
import { ContactSection } from '@/components/home/contact-section';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div className="h-px bg-black" />
        <StatsSection />
        <div className="h-px bg-black" />
        <ServicesSection />
        <div className="h-px bg-black" />
        <RussiaHighlightSection />
        <div className="h-px bg-black" />
        <RussiaUniversitiesSection />
        <div className="h-px bg-black" />
        <DestinationsSection />
        <div className="h-px bg-black" />
        <ProcessSection />
        <div className="h-px bg-black" />
        <RussiaProcessSection />
        <div className="h-px bg-black" />
        <RussiaIndianServicesSection />
        <div className="h-px bg-black" />
        <VideoGuidesSection />
        <div className="h-px bg-black" />
        <TestimonialsSection />
        <div className="h-px bg-black" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
