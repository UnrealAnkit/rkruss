import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UserCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import LoginPopup from '../auth/LoginPopup';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Visa Solutions', path: '/visa-solutions' },
    { name: 'Immigration', path: '/immigration' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/src/components/ui/rk russ logo.png" 
                alt="RK Russ Logo" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-gray-700 hover:text-primary-600 font-medium transition-colors ${
                    location.pathname === link.path ? 'text-primary-600' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn-secondary flex items-center gap-2"
                >
                  <UserCircle className="w-5 h-5" />
                  Sign Out
                </button>
              ) : (
                <button 
                  onClick={() => setIsLoginPopupOpen(true)}
                  className="btn-primary flex items-center gap-2"
                >
                  <UserCircle className="w-5 h-5" />
                  Login
                </button>
              )}
              
              <Link 
                to="/contact" 
                className="btn-primary"
              >
                Free Assessment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-primary-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-gray-700 hover:text-primary-600 font-medium transition-colors ${
                      location.pathname === link.path ? 'text-primary-600' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {user ? (
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="btn-secondary text-center flex items-center justify-center gap-2"
                  >
                    <UserCircle className="w-5 h-5" />
                    Sign Out
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      setIsLoginPopupOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="btn-primary text-center flex items-center justify-center gap-2"
                  >
                    <UserCircle className="w-5 h-5" />
                    Login
                  </button>
                )}
                
                <Link 
                  to="/contact" 
                  className="btn-primary text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Assessment
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <LoginPopup 
        isOpen={isLoginPopupOpen} 
        onClose={() => setIsLoginPopupOpen(false)} 
      />
    </>
  );
};

export default Header;