'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

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
 case 2: return 'center 20%'; // Banner 3 - show top portion (fixed)
 case 3: return 'center 75%'; // Banner 4 - show bottom portion
 default: return 'center center';
 }
 } else if (isTablet) {
 switch (currentSlide) {
 case 0: return 'center 30%';
 case 1: return 'center 45%';
 case 2: return 'center 25%'; // Banner 3 - show top portion (fixed)
 case 3: return 'center 70%';
 default: return 'center center';
 }
 }
 // Desktop/Laptop positioning - fixed to center for all banners
 return 'center center';
 };

 return (
 <section className="relative w-full h-[240px] xs:h-[280px] sm:h-[320px] md:h-[360px] lg:h-screen xl:h-screen overflow-hidden bg-slate-900 mt-20 md:mt-0 lg:mt-20 xl:mt-20">
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

       {/* WhatsApp Float Button - Mobile Only */}
      <Link
        href="https://wa.me/1234567890"
        className="fixed bottom-20 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 md:hidden"
        aria-label="Contact us on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
 <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
 </svg>
 </Link>

 {/* Slides Container */}
 <div className="relative w-full h-full lg:pt-0 lg:h-[calc(100vh-5rem)] xl:h-[calc(100vh-5rem)]">
 {/* Current Slide */}
 <div className="absolute inset-0 w-full h-full lg:top-0 lg:h-[calc(100vh-5rem)] xl:h-[calc(100vh-5rem)]">
 <Image
 src={currentBanner.image}
 alt={currentBanner.alt}
 fill
 className={`object-cover transition-all duration-500 ${
 isMobile ? currentBanner.mobilePosition + ' sm:' + currentBanner.desktopPosition :
 isTablet ? 'object-center' :
 'object-cover'
 }`}
 sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
 priority
 quality={95}
 onLoad={() => setIsLoaded(true)}
 style={{
 objectPosition: isMobile || isTablet ? getObjectPosition() : 'center center',
 imageRendering: 'crisp-edges',
 transform: 'scale(1.0)',
 objectFit: 'cover'
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
 <div className="animate-spin rounded-full h-6 w-6 xs:h-8 xs:w-8 sm:h-12 sm:w-12 border-b-2 border-teal-500"></div>
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



 {/* Progress bar - Enhanced visibility */}
 <div className="absolute bottom-10 xs:bottom-12 sm:bottom-16 md:bottom-4 left-0 right-0 z-10 px-4">
 <div className="h-0.5 xs:h-1 bg-white/20 rounded-full overflow-hidden">
 <motion.div
 className="h-full bg-teal-500 rounded-full"
 initial={{ width: "0%" }}
 animate={{ width: "100%" }}
 transition={{ duration: 5, ease: "linear" }}
 key={currentSlide}
 />
 </div>
 </div>

 {/* Latest News Ticker - Responsive */}
 <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white py-1 xs:py-1.5 sm:py-2 z-10">
 <div className="container mx-auto px-2 xs:px-3 sm:px-4">
 <div className="flex items-center w-full">
 <span className="bg-white text-teal-600 px-1.5 xs:px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-bold flex-shrink-0">
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
