import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CountryCardProps {
  name: string;
  image: string;
  programs: string[];
  focus: string;
  link: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, image, programs, focus, link }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white group hover:shadow-xl transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${name} landscape`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <MapPin className="w-5 h-5 text-primary-500 mr-2" />
          <h3 className="font-bold text-lg">{name}</h3>
        </div>
        <p className="text-sm text-gray-500 mb-3">{focus}</p>
        <ul className="mb-4 space-y-1">
          {programs.slice(0, 2).map((program, index) => (
            <li key={index} className="text-gray-600 text-sm flex items-center">
              <ChevronRight className="w-4 h-4 text-primary-400 mr-1 flex-shrink-0" />
              {program}
            </li>
          ))}
        </ul>
        <Link 
          to={link} 
          className="btn-primary btn-sm w-full justify-center"
        >
          Explore Programs
        </Link>
      </div>
    </div>
  );
};

const CountriesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'immigration' | 'study'>('all');
  
  const countries = [
    {
      name: 'Russia',
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1600&h=900&fit=crop',
      programs: ['MBBS (6 yrs, MD)', 'MBBS (5 yrs + intern)'],
      focus: 'Medical Colleges',
      link: '/study-abroad/russia',
      types: ['study']
    },
    {
      name: 'Singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&h=900&fit=crop',
      programs: ['Diploma in Hospitality & Tourism', 'Diploma in Hotel Management'],
      focus: 'Hotel Management',
      link: '/study-abroad/singapore',
      types: ['study']
    },
    {
      name: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&h=900&fit=crop',
      programs: ['MBBS (6 yrs)', 'Medical Sciences'],
      focus: 'Medical Colleges',
      link: '/study-abroad/dubai',
      types: ['study']
    },
    {
      name: 'Armenia',
      image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1600&h=900&fit=crop',
      programs: ['Medicine MD (6 yrs)', 'MBBS (6 yrs)'],
      focus: 'Medical Colleges',
      link: '/study-abroad/armenia',
      types: ['study']
    },
    {
      name: 'Mauritius',
      image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1600&h=900&fit=crop',
      programs: ['MBBS (5 yrs + intern)', 'Medical Sciences'],
      focus: 'Medical Colleges',
      link: '/study-abroad/mauritius',
      types: ['study']
    },
    {
      name: 'Kazakhstan',
      image: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=1600&h=900&fit=crop',
      programs: ['MD (6 yrs)', 'Medical Sciences'],
      focus: 'Medical Colleges',
      link: '/study-abroad/kazakhstan',
      types: ['study']
    }
  ];

  const filteredCountries = activeTab === 'all' 
    ? countries 
    : countries.filter(country => country.types.includes(activeTab));

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600">
            Explore immigration and study opportunities in these top destinations worldwide.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              {[
                { id: 'all', label: 'All Destinations' },
                { id: 'immigration', label: 'Immigration' },
                { id: 'study', label: 'Study Abroad' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    activeTab === tab.id 
                      ? 'bg-white shadow-sm text-primary-700' 
                      : 'text-gray-600 hover:text-primary-600'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCountries.map((country, index) => (
            <CountryCard 
              key={index}
              name={country.name}
              image={country.image}
              programs={country.programs}
              focus={country.focus}
              link={country.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/study-abroad" className="btn-secondary btn-lg">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;