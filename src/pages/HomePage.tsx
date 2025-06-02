import React from 'react';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import CountriesSection from '../components/home/CountriesSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <CountriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;