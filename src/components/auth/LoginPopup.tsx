import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to RK Russia
          </h2>
          <p className="text-gray-600">
            Choose how you want to continue
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/login"
            onClick={onClose}
            className="w-full btn-primary py-3 flex items-center justify-center"
          >
            Sign In
          </Link>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <Link
            to="/signup"
            onClick={onClose}
            className="w-full btn-secondary py-3 flex items-center justify-center"
          >
            Create Account
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          By continuing, you agree to our{' '}
          <Link to="/terms" className="text-primary-600 hover:text-primary-500">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-primary-600 hover:text-primary-500">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup; 