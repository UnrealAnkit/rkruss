import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CountryCardProps {
  name: string;
  image: string;
  programs: string[];
  link: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, image, programs, link }) => {
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
        <ul className="mb-4 space-y-1">
          {programs.slice(0, 3).map((program, index) => (
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
          Explore Options
        </Link>
      </div>
    </div>
  );
};

const CountriesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'immigration' | 'study'>('all');
  
  const countries = [
    {
      name: 'Canada',
      image: 'https://images.pexels.com/photos/2773578/pexels-photo-2773578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      programs: ['Express Entry', 'Provincial Nominee Program', 'Student Visa', 'Work Permit'],
      types: ['immigration', 'study'],
      link: '/immigration'
    },
    {
      name: 'Australia',
      image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      programs: ['Skilled Migration', 'Student Visa', 'Partner Visa', 'Business Visa'],
      types: ['immigration', 'study'],
      link: '/immigration'
    },
    {
      name: 'United States',
      image: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      programs: ['H-1B Visa', 'F-1 Student Visa', 'Green Card', 'Investment Visa'],
      types: ['immigration', 'study'],
      link: '/immigration'
    },
    {
      name: 'United Kingdom',
      image: 'https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      programs: ['Skilled Worker Visa', 'Student Visa', 'Family Visa', 'Innovator Visa'],
      types: ['immigration', 'study'],
      link: '/immigration'
    },
    {
      name: 'Germany',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      programs: ['EU Blue Card', 'Study Visa', 'Job Seeker Visa', 'Family Reunion Visa'],
      types: ['immigration', 'study'],
      link: '/immigration'
    },
    {
      name: 'New Zealand',
      image: 'https://images.pexels.com/photos/724949/pexels-photo-724949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      programs: ['Skilled Migrant Category', 'Student Visa', 'Work Visa', 'Investor Visa'],
      types: ['immigration', 'study'],
      link: '/immigration'
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
              link={country.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/immigration" className="btn-secondary btn-lg">
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;