'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/banner1.jpg',
    alt: 'Immigration Services Banner 1',
    mobilePosition: 'object-[center_25%]',
    desktopPosition: 'object-center'
  },
  {
    id: 2,
    image: '/images/banner2.jpg',
    alt: 'Immigration Services Banner 2',
    mobilePosition: 'object-[center_40%]',
    desktopPosition: 'object-center'
  },
  {
    id: 3,
    image: '/images/banner3.jpg',
    alt: 'Immigration Services Banner 3',
    mobilePosition: 'object-[center_35%]',
    desktopPosition: 'object-center'
  },
  {
    id: 4,
    image: '/images/banner4.jpg',
    alt: 'Immigration Services Banner 4',
    mobilePosition: 'object-[center_75%]',
    desktopPosition: 'object-center'
  }
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/rkvisasolutions', icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700 text-white' },
  { name: 'Twitter', href: 'https://twitter.com/rkvisasolutions', icon: Twitter, color: 'bg-sky-500 hover:bg-sky-600 text-white' },
  { name: 'Instagram', href: 'https://instagram.com/rkvisasolutions', icon: Instagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/rkvisasolutions', icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800 text-white' },
  { name: 'YouTube', href: 'https://youtube.com/@rkvisasolutions', icon: Youtube, color: 'bg-red-600 hover:bg-red-700 text-white' },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Check device type
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentBanner = slides[currentSlide];

  // Get appropriate object position based on device and slide
  const getObjectPosition = () => {
    if (isMobile) {
      switch (currentSlide) {
        case 0: return 'center 25%'; // Banner 1 - show top portion
        case 1: return 'center 40%'; // Banner 2 - show upper-middle
        case 2: return 'center 35%'; // Banner 3 - show middle-upper
        case 3: return 'center 75%'; // Banner 4 - show bottom portion
        default: return 'center center';
      }
    } else if (isTablet) {
      switch (currentSlide) {
        case 0: return 'center 30%';
        case 1: return 'center 45%';
        case 2: return 'center 40%';
        case 3: return 'center 70%';
        default: return 'center center';
      }
    }
    return 'center center'; // Desktop
  };

  return (
    <section className="relative w-full h-[300px] xs:h-[350px] sm:h-[420px] md:h-[520px] lg:h-[620px] xl:h-[720px] overflow-hidden bg-slate-900 mt-20">
      {/* Left Side Social Media Icons */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col space-y-2">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.name}
              href={social.href}
              className={`p-3 backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:scale-110 ${social.color} shadow-lg hover:shadow-xl border border-white/20`}
              aria-label={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>

      {/* WhatsApp Float Button */}
      <Link
        href="https://wa.me/1234567890"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 animate-pulse"
        aria-label="Contact us on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>

      {/* Slides Container */}
      <div className="relative w-full h-full">
        {/* Current Slide */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={currentBanner.image}
            alt={currentBanner.alt}
            fill
            className={`object-cover transition-all duration-500 ${
              isMobile ? currentBanner.mobilePosition + ' sm:' + currentBanner.desktopPosition :
              isTablet ? 'object-center' :
              currentBanner.desktopPosition
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
            quality={95}
            onLoad={() => setIsLoaded(true)}
            style={{
              objectPosition: getObjectPosition(),
              imageRendering: 'crisp-edges'
            }}
          />
          {/* Mobile overlay for better contrast on all banners */}
          {isMobile && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15" />
          )}
        </div>
      </div>

      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center z-20">
          <div className="animate-spin rounded-full h-6 w-6 xs:h-8 xs:w-8 sm:h-12 sm:w-12 border-b-2 border-red-500"></div>
        </div>
      )}

      {/* Navigation Arrows - Enhanced for mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-1 xs:left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-1.5 xs:p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-1 xs:right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-1.5 xs:p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>

      {/* Slide Indicators - Enhanced visibility */}
      <div className="absolute bottom-14 xs:bottom-16 sm:bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center space-x-1.5 xs:space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-2 xs:px-3 py-1.5 xs:py-2 border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-red-500 w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 shadow-lg' 
                : 'bg-white/60 hover:bg-white/80 w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar - Enhanced visibility */}
      <div className="absolute bottom-10 xs:bottom-12 sm:bottom-16 md:bottom-4 left-0 right-0 z-10 px-4">
        <div className="h-0.5 xs:h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-red-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentSlide}
          />
        </div>
      </div>

      {/* Latest News Ticker - Responsive */}
      <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-1.5 xs:py-2 sm:py-3 z-10">
        <div className="container mx-auto px-2 xs:px-3 sm:px-4">
          <div className="flex items-center w-full">
            <span className="bg-yellow-500 text-black px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-xs sm:text-sm font-bold flex-shrink-0">
              Latest News
            </span>
            <div className="overflow-hidden flex-1 ml-1.5 xs:ml-2 sm:ml-4">
              <motion.div
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="whitespace-nowrap"
              >
                <span className="text-xs sm:text-sm font-medium">
                  🎉 Latest Canada PNP Draw Welcome Record 3,000+ Invitations | 
                  ✅ New Express Entry Draw Results Available | 
                  📢 Updated Immigration Policies for 2024 | 
                  🌟 New Student Visa Programs Available
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile touch indicator */}
      {isMobile && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-xs text-center bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20"
          >
            Swipe or tap to navigate
          </motion.div>
        </div>
      )}
    </section>
  );
}