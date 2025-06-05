import React, { useState } from 'react';
import { University, CountryUniversities, universitiesByCountry } from '../../data/universities';
import { Building2, GraduationCap, Home, Book, Globe2, DollarSign, MapPin, School, ChevronRight, Users, Clock } from 'lucide-react';

const UniversityList: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>(universitiesByCountry[0].country);
  const selectedCountryData = universitiesByCountry.find(c => c.country === selectedCountry);

  return (
    <div className="relative">
      {/* Hero Section with Dynamic Background */}
      <div 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
            url(${selectedCountryData?.coverImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-primary-900/90" />
        
        <div className="container-custom relative text-center text-white z-10">
          <div className="inline-block p-2 px-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 animate-fadeIn">
            Discover Your Future
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
            Study Abroad Programs
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
            Begin your international education journey in prestigious universities worldwide
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 shadow-lg relative z-10 -mt-16 mx-4 rounded-xl">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-4">
              <div className="p-3 bg-primary-100 rounded-xl">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-gray-600">International Students</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="p-3 bg-primary-100 rounded-xl">
                <School className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Partner Universities</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="p-3 bg-primary-100 rounded-xl">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">15+ Years</div>
                <div className="text-gray-600">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          {/* Country Selection */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {universitiesByCountry.map((country) => (
              <button
                key={country.country}
                onClick={() => setSelectedCountry(country.country)}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300
                  ${selectedCountry === country.country
                    ? 'ring-2 ring-primary-500 ring-offset-2'
                    : 'hover:ring-2 hover:ring-primary-300 hover:ring-offset-2'
                  }`}
              >
                <div className="relative h-32 w-48 overflow-hidden">
                  <img 
                    src={country.coverImage} 
                    alt={country.country}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="font-semibold">{country.country}</div>
                    <div className="text-sm text-gray-300">{country.focus}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {selectedCountryData && (
            <div className="space-y-12 animate-fadeIn">
              {/* Country Overview */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={selectedCountryData.coverImage}
                    alt={selectedCountryData.country}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedCountryData.country} - {selectedCountryData.focus}
                    </h2>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary-100 rounded-xl">
                          <GraduationCap className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg mb-2">Eligibility</h4>
                          <p className="text-gray-600 leading-relaxed">{selectedCountryData.eligibility}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary-100 rounded-xl">
                          <Book className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg mb-2">Admission Process</h4>
                          <p className="text-gray-600 leading-relaxed">{selectedCountryData.admissions}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Universities Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCountryData.universities.map((university, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={university.imageUrl}
                        alt={university.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-semibold mb-1">{university.name}</h3>
                        {university.city && (
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-4 h-4" />
                            <p>{university.city}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                          <Building2 className="w-5 h-5 text-primary-600" />
                        </div>
                        <span className="font-medium">{university.type}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start gap-3 text-gray-700">
                          <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                            <Book className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            {university.programs.map((program, i) => (
                              <div key={i} className="font-medium">{program}</div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                          <DollarSign className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Tuition per year</span>
                          <div className="font-medium">{university.tuitionPerYear}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                          <Home className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Accommodation</span>
                          <div className="font-medium">{university.hostelPerYear}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                          <Globe2 className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Medium of Instruction</span>
                          <div className="font-medium">{university.medium}</div>
                        </div>
                      </div>

                      <button className="w-full mt-4 bg-primary-50 text-primary-600 py-2 rounded-lg font-medium 
                        group-hover:bg-primary-100 transition-colors flex items-center justify-center gap-2">
                        Learn More <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityList; 