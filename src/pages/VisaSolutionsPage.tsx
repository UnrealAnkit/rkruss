import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Download, FileText, Search, Filter, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import VisaGuideSection from '../components/visa/VisaGuideSection';

const VisaSolutionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'student' | 'business'>('work');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleAssessmentClick = () => {
    // Navigate to home page if not already there
    navigate('/');
    
    // Wait for navigation to complete
    setTimeout(() => {
      const form = document.getElementById('quick-assessment-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add temporary highlight class
        form.classList.add('highlight-form');
        // Remove highlight class after animation
        setTimeout(() => {
          form.classList.remove('highlight-form');
        }, 2000);
      }
    }, 100);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Global Visa Solutions
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Comprehensive guide to work, study, and business visas for Russia, Singapore, Dubai (UAE), Armenia, and Mauritius
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search visa requirements, processes, or countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/60" />
            </div>

            {/* Quick Assessment Button */}
            <button
              onClick={handleAssessmentClick}
              className="btn-accent btn-lg transform hover:scale-105 transition-transform"
            >
              Start Quick Assessment
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600">Visa Types</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* Visa Type Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('work')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === 'work'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Work Visas
          </button>
          <button
            onClick={() => setActiveTab('student')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === 'student'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Student Visas
          </button>
          <button
            onClick={() => setActiveTab('business')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === 'business'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Business Visas
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filters:</span>
          </div>
          <select className="px-4 py-2 rounded-md border border-gray-300 bg-white">
            <option>Processing Time</option>
            <option>Fast Track (1 month or less)</option>
            <option>Standard (1-3 months)</option>
            <option>Long Term (3+ months)</option>
          </select>
          <select className="px-4 py-2 rounded-md border border-gray-300 bg-white">
            <option>Salary Requirement</option>
            <option>No Minimum</option>
            <option>Up to $3,000</option>
            <option>$3,000 - $5,000</option>
            <option>$5,000+</option>
          </select>
          <select className="px-4 py-2 rounded-md border border-gray-300 bg-white">
            <option>Duration</option>
            <option>1 Year</option>
            <option>2-3 Years</option>
            <option>5+ Years</option>
          </select>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#russia" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                    <Globe className="w-4 h-4" />
                    Russia
                  </a>
                </li>
                <li>
                  <a href="#singapore" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                    <Globe className="w-4 h-4" />
                    Singapore
                  </a>
                </li>
                <li>
                  <a href="#dubai" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                    <Globe className="w-4 h-4" />
                    Dubai/UAE
                  </a>
                </li>
                <li>
                  <a href="#armenia" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                    <Globe className="w-4 h-4" />
                    Armenia
                  </a>
                </li>
                <li>
                  <a href="#mauritius" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                    <Globe className="w-4 h-4" />
                    Mauritius
                  </a>
                </li>
              </ul>

              <hr className="my-6" />

              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                    <Download className="w-4 h-4" />
                    Download Guide PDF
                  </button>
                </li>
                <li>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                    <FileText className="w-4 h-4" />
                    Visa Checklist
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <VisaGuideSection />

            {/* Call to Action */}
            <div className="mt-12 bg-primary-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help With Your Visa Application?
              </h3>
              <p className="text-primary-100 mb-6">
                Our expert team is ready to assist you through every step of the process
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleAssessmentClick}
                  className="btn-accent btn-lg transform hover:scale-105 transition-transform"
                >
                  Start Quick Assessment
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="btn-secondary btn-lg text-white border-white/20 hover:bg-white/10"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSolutionsPage;