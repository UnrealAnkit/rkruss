import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Global landmarks" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-900/70"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-primary-400/20 text-primary-100 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Your Trusted Immigration Partner
          </span>
          
          <h1 className="text-white mb-6 animate-slide-up">
            Your Journey Abroad Starts Here
          </h1>
          
          <p className="text-primary-100 text-xl mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Expert guidance for immigration, education, and visa services. We help you navigate complex immigration processes with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link 
              to="/contact" 
              className="btn-accent btn-lg"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/about" 
              className="btn-secondary btn-lg text-white border-white/20 hover:bg-white/10 hover:border-white/30"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-primary-200 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">5,000+</p>
              <p className="text-primary-200 text-sm">Successful Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">20+</p>
              <p className="text-primary-200 text-sm">Countries Covered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-primary-200 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;