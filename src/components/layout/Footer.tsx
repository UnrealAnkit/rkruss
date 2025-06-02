import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <Logo variant="light" />
            </Link>
            <p className="mb-4 text-gray-400">
              Your trusted partner for immigration and education consulting services worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/immigration" className="text-gray-400 hover:text-white transition-colors">Immigration Services</Link>
              </li>
              <li>
                <Link to="/study-abroad" className="text-gray-400 hover:text-white transition-colors">Study Abroad</Link>
              </li>
              <li>
                <Link to="/visa-solutions" className="text-gray-400 hover:text-white transition-colors">Visa Solutions</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/immigration" className="text-gray-400 hover:text-white transition-colors">Skilled Migration</Link>
              </li>
              <li>
                <Link to="/immigration" className="text-gray-400 hover:text-white transition-colors">Family Sponsorship</Link>
              </li>
              <li>
                <Link to="/study-abroad" className="text-gray-400 hover:text-white transition-colors">University Admissions</Link>
              </li>
              <li>
                <Link to="/study-abroad" className="text-gray-400 hover:text-white transition-colors">Scholarship Guidance</Link>
              </li>
              <li>
                <Link to="/visa-solutions" className="text-gray-400 hover:text-white transition-colors">Tourist Visas</Link>
              </li>
              <li>
                <Link to="/visa-solutions" className="text-gray-400 hover:text-white transition-colors">Business Visas</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0" />
                <span>123 Migration Street, Suite 101<br />New York, NY 10001, USA</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0" />
                <a href="tel:+12345678900" className="hover:text-white transition-colors">+1 (234) 567-8900</a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@globalmigrationexperts.com" className="hover:text-white transition-colors">info@globalmigrationexperts.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Global Migration Experts. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap space-x-4 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;