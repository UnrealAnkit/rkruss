import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Building } from 'lucide-react';

interface CountryCardProps {
  name: string;
  description: string;
  image: string;
  stats: {
    universities: string;
    programs: string;
    students: string;
  };
}

const CountryCard: React.FC<CountryCardProps> = ({ name, description, image, stats }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        <img 
          src={image} 
          alt={`Study in ${name}`} 
          className="w-full h-full object-cover"
        />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-20">
          Study in {name}
        </h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          {description}
        </p>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <GraduationCap className="w-6 h-6 text-primary-600 mx-auto mb-2" />
            <div className="font-bold text-primary-600">{stats.universities}</div>
            <div className="text-sm text-gray-500">Universities</div>
          </div>
          <div>
            <Building className="w-6 h-6 text-primary-600 mx-auto mb-2" />
            <div className="font-bold text-primary-600">{stats.programs}</div>
            <div className="text-sm text-gray-500">Programs</div>
          </div>
          <div>
            <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
            <div className="font-bold text-primary-600">{stats.students}</div>
            <div className="text-sm text-gray-500">Students</div>
          </div>
        </div>

        <Link 
          to="/visa-solutions" 
          className="btn-primary w-full mt-6 text-center"
        >
          Explore Programs
        </Link>
      </div>
    </div>
  );
};

const CountriesSection: React.FC = () => {
  const countries: CountryCardProps[] = [
    {
      name: "Russia",
      description: "Study in Russia's prestigious universities with world-class facilities and affordable education.",
      image: "/images/countries/russia.jpg",
      stats: {
        universities: "20+",
        programs: "100+",
        students: "5000+"
      }
    },
    {
      name: "Singapore",
      description: "Experience top-tier education in Singapore, a global hub for innovation and excellence.",
      image: "/images/countries/singapore.jpg",
      stats: {
        universities: "15+",
        programs: "80+",
        students: "3000+"
      }
    },
    {
      name: "Dubai",
      description: "Study in Dubai's modern campuses with state-of-the-art facilities and multicultural environment.",
      image: "/images/countries/dubai.jpg",
      stats: {
        universities: "12+",
        programs: "60+",
        students: "2000+"
      }
    },
    {
      name: "Armenia",
      description: "Experience quality education in Armenia with rich cultural heritage and modern facilities.",
      image: "/images/countries/armenia.jpg",
      stats: {
        universities: "10+",
        programs: "50+",
        students: "1500+"
      }
    },
    {
      name: "Mauritius",
      description: "Study in Mauritius, combining quality education with a beautiful tropical environment.",
      image: "/images/countries/mauritius.jpg",
      stats: {
        universities: "8+",
        programs: "40+",
        students: "1000+"
      }
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Study Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of study destinations, each offering unique opportunities and world-class education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;