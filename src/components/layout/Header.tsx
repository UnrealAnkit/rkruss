import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Immigration Services', path: '/immigration' },
    { title: 'Study Abroad', path: '/study-abroad' },
    { title: 'Visa Solutions', path: '/visa-solutions' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'zh', name: '中文' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'text-primary-700'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  )
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* CTA and Language Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span>EN</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-20 animate-fade-in">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setLanguageMenuOpen(false)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link to="/contact" className="btn-primary btn-md">
              Free Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-slide-down">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'px-3 py-2 rounded-md text-base font-medium',
                      isActive
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    )
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>
            
            <div className="mt-6 flex flex-col space-y-4">
              {/* Language Options */}
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="btn-primary btn-md w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;