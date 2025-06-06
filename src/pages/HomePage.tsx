import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ServicesOverview from '../components/home/ServicesOverview';
import CountriesSection from '../components/home/CountriesSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image with darker overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.85)), url('/images/hero/world-map.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <h4 className="text-accent-400 font-semibold mb-4 text-lg">Your Trusted Immigration Partner</h4>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Your Journey Abroad Starts Here
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Expert guidance for immigration, education, and visa services. We help you navigate complex immigration processes with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  to="/contact" 
                  className="btn-accent btn-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/about" 
                  className="btn-secondary btn-lg text-white border-white/30 hover:bg-white/10 hover:border-white/50"
                >
                  Learn More About Us
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-accent-400 mb-2">10+</div>
                  <div className="text-gray-100">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-400 mb-2">5,000+</div>
                  <div className="text-gray-100">Successful Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-400 mb-2">20+</div>
                  <div className="text-gray-100">Countries Covered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent-400 mb-2">98%</div>
                  <div className="text-gray-100">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Column - Featured Countries */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                    <img 
                      src="/images/countries/russia.jpg" 
                      alt="Study in Russia" 
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-white font-semibold">Study in Russia</h3>
                    <p className="text-gray-100 text-sm">World-class education at affordable costs</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                    <img 
                      src="/images/countries/singapore.jpg" 
                      alt="Study in Singapore" 
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-white font-semibold">Study in Singapore</h3>
                    <p className="text-gray-100 text-sm">Asia's leading education hub</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                    <img 
                      src="/images/countries/dubai.jpg" 
                      alt="Study in Dubai" 
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-white font-semibold">Study in Dubai</h3>
                    <p className="text-gray-100 text-sm">Experience world-class facilities</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                    <img 
                      src="/images/countries/armenia.jpg" 
                      alt="Study in Armenia" 
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-white font-semibold">Study in Armenia</h3>
                    <p className="text-gray-100 text-sm">Rich culture & quality education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* Rest of the homepage content */}
      <ServicesOverview />
      <CountriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;