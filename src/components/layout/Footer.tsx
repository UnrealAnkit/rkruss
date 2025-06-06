import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="block mb-6">
              <img 
                src="/src/components/ui/rk russ logo.png" 
                alt="RK Russ Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted partner for immigration and education services. We help students and professionals achieve their global aspirations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/visa-solutions" className="text-gray-400 hover:text-white transition-colors">
                  Visa Solutions
                </Link>
              </li>
              <li>
                <Link to="/immigration" className="text-gray-400 hover:text-white transition-colors">
                  Immigration Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/visa-solutions" className="text-gray-400 hover:text-white transition-colors">
                  Student Visas
                </Link>
              </li>
              <li>
                <Link to="/visa-solutions" className="text-gray-400 hover:text-white transition-colors">
                  Work Visas
                </Link>
              </li>
              <li>
                <Link to="/visa-solutions" className="text-gray-400 hover:text-white transition-colors">
                  Business Immigration
                </Link>
              </li>
              <li>
                <Link to="/visa-solutions" className="text-gray-400 hover:text-white transition-colors">
                  Document Attestation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  RK Russ Office<br />
                  Moscow, Russia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-3" />
                <a href="tel:+74951234567" className="text-gray-400 hover:text-white transition-colors">
                  +7 (495) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3" />
                <a href="mailto:info@rkruss.com" className="text-gray-400 hover:text-white transition-colors">
                  info@rkruss.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} RK Russ. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;