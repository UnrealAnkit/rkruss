import React from 'react';
import { Link } from 'react-router-dom';

const DestinationsSection: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('expert-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const destinations = [
    // ... other destinations ...
    {
      id: 'armenia',
      name: 'Armenia',
      image: '/images/destinations/armenia.jpg',
      description: 'Study in Armenia's historic universities with modern facilities. Enjoy affordable education in a country with rich cultural heritage and simplified visa processes.',
      programs: [
        { name: 'Medicine MD', duration: '6 years' },
        { name: 'MBBS', duration: '6 years' },
        { name: 'Engineering', duration: '4 years' },
        { name: 'Business Studies', duration: '4 years' }
      ]
    },
    {
      id: 'mauritius',
      name: 'Mauritius',
      image: '/images/destinations/mauritius.jpg',
      description: 'Experience world-class education in Mauritius with its multicultural environment and internationally recognized programs. Benefit from modern infrastructure and English-based education.',
      programs: [
        { name: 'MBBS', duration: '5 years + internship' },
        { name: 'Medical Sciences', duration: '3-4 years' },
        { name: 'Business Management', duration: '3 years' },
        { name: 'Information Technology', duration: '4 years' }
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Study Destinations</h2>
          <p className="section-subtitle">
            Choose from our wide range of study destinations, each offering unique opportunities and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={destination.image}
                  alt={`${destination.name} Education`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="space-y-2 mb-6">
                  {destination.programs.map((program, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      <span>{program.name}</span>
                      <span className="ml-auto text-gray-500">{program.duration}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={scrollToServices}
                  className="w-full btn-primary"
                >
                  Explore Programs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection; 