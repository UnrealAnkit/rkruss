import Link from 'next/link';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Immigration', href: '/visa-solutions' },
  { name: 'Visa Solutions', href: '/immigration' },
  { name: 'Colleges', href: '/colleges' },
  { name: 'Contact Us', href: '/contact' },
];

const services = [
  { name: 'Student Visas', href: '/immigration' },
  { name: 'Work Visas', href: '/immigration' },
  { name: 'Business Immigration', href: '/visa-solutions' },
  { name: 'Education Services', href: '/colleges' },
  { name: 'Document Attestation', href: '/services/documents' },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export function Footer() {
  return (
    <>
      {/* Floating Social Bar for Mobile */}
      <div className="fixed right-2 top-1/3 z-50 flex flex-col items-center space-y-3 bg-white/80 rounded-full p-2 shadow-lg border border-slate-200 md:hidden">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.name}
              href={social.href}
              className="text-slate-600 hover:text-accent transition-colors"
              aria-label={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-6 w-6" />
            </Link>
          );
        })}
      </div>
      {/* Main Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/rkrusslogo.jpg"
                  alt="RK Visa Solutions Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold">RK Visa Solutions</span>
              </Link>
              <p className="text-slate-300 text-sm leading-6">
                Your trusted partner for immigration and education services. We help students and professionals achieve their global aspirations.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="text-slate-400 hover:text-accent transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-slate-300 hover:text-accent transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-slate-300">
                    <p className="font-medium">RK Visa Solutions Office</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      123 Business Center<br />
                      Moscow, Russia
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                  <Link
                    href="tel:+74951234567"
                    className="text-sm text-slate-300 hover:text-accent transition-colors"
                  >
                    +7 (495) 123-4567
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <Link
                    href="mailto:info@rkruss.com"
                    className="text-sm text-slate-300 hover:text-accent transition-colors"
                  >
                    info@rkruss.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © 2025 RK Visa Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-slate-400 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-400 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        {/* Designer Credit */}
        <div className="w-full text-center border-t border-slate-800 mt-2 pt-2">
          <span className="text-base font-thin text-slate-400">
            designed and developed by 
            <a href="mailto:work.ankit2@gmail.com" className="underline hover:text-accent mx-1">work.ankit2@gmail.com</a>,
            <a href="mailto:xshankarmishra@gmail.com" className="underline hover:text-accent mx-1">xshankarmishra@gmail.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}