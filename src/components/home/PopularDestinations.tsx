import React, { useState } from 'react';
import Link from 'next/link';

const PopularDestinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Popular Destinations</h1>
        <p className="text-gray-600 text-center mb-12">
          Explore immigration and study opportunities in these top destinations worldwide.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            className={`px-8 py-2 rounded-full ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('all')}
          >
            All Destinations
          </button>
          <button 
            className={`px-8 py-2 rounded-full ${activeTab === 'immigration' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('immigration')}
          >
            Immigration
          </button>
          <button 
            className={`px-8 py-2 rounded-full ${activeTab === 'study' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('study')}
          >
            Study Abroad
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Russia */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1600&h=900&fit=crop" 
                alt="Russia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-blue-500 mr-2">📍</span>
                <h3 className="text-xl font-semibold">Russia</h3>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  MBBS (6 yrs, MD)
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  MBBS (5 yrs + intern)
                </li>
              </ul>
              <Link 
                href="/study-abroad/russia"
                className="block text-center py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Explore Options
              </Link>
            </div>
          </div>

          {/* Singapore */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&h=900&fit=crop" 
                alt="Singapore"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-blue-500 mr-2">📍</span>
                <h3 className="text-xl font-semibold">Singapore</h3>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Diploma in Hospitality & Tourism
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Diploma in Hotel Management
                </li>
              </ul>
              <Link 
                href="/study-abroad/singapore"
                className="block text-center py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Explore Options
              </Link>
            </div>
          </div>

          {/* Dubai */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&h=900&fit=crop" 
                alt="Dubai"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-blue-500 mr-2">📍</span>
                <h3 className="text-xl font-semibold">Dubai</h3>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  MBBS (6 yrs)
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Medical Sciences
                </li>
              </ul>
              <Link 
                href="/study-abroad/dubai"
                className="block text-center py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Explore Options
              </Link>
            </div>
          </div>

          {/* Armenia */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1600&h=900&fit=crop" 
                alt="Armenia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-blue-500 mr-2">📍</span>
                <h3 className="text-xl font-semibold">Armenia</h3>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Medicine MD (6 yrs)
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  MBBS (6 yrs)
                </li>
              </ul>
              <Link 
                href="/study-abroad/armenia"
                className="block text-center py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Explore Options
              </Link>
            </div>
          </div>

          {/* Mauritius */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1600&h=900&fit=crop" 
                alt="Mauritius"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-blue-500 mr-2">📍</span>
                <h3 className="text-xl font-semibold">Mauritius</h3>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  MBBS (5 yrs + intern)
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Medical Sciences
                </li>
              </ul>
              <Link 
                href="/study-abroad/mauritius"
                className="block text-center py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Explore Options
              </Link>
            </div>
          </div>

          {/* Kazakhstan */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=1600&h=900&fit=crop" 
                alt="Kazakhstan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-blue-500 mr-2">📍</span>
                <h3 className="text-xl font-semibold">Kazakhstan</h3>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  MD (6 yrs)
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Medical Sciences
                </li>
              </ul>
              <Link 
                href="/study-abroad/kazakhstan"
                className="block text-center py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Explore Options
              </Link>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/destinations"
            className="inline-block px-8 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations; 