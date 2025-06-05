import React, { useState } from 'react';
import { University, CountryUniversities, universitiesByCountry } from '../../data/universities';
import { Building2, GraduationCap, Home, Book, Globe2, DollarSign } from 'lucide-react';

const UniversityList: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>(universitiesByCountry[0].country);

  const selectedCountryData = universitiesByCountry.find(c => c.country === selectedCountry);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Study Abroad Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore top universities across different countries offering quality education in medical and hospitality fields.
          </p>
        </div>

        {/* Country Selection Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {universitiesByCountry.map((country) => (
            <button
              key={country.country}
              onClick={() => setSelectedCountry(country.country)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all
                ${selectedCountry === country.country
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {country.country}
            </button>
          ))}
        </div>

        {selectedCountryData && (
          <div>
            {/* Country Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedCountryData.country} - {selectedCountryData.focus}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Eligibility</h4>
                      <p className="text-gray-600">{selectedCountryData.eligibility}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Book className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Admission Process</h4>
                      <p className="text-gray-600">{selectedCountryData.admissions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Universities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCountryData.universities.map((university, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-primary-600 p-4 text-white">
                    <h4 className="text-lg font-semibold">{university.name}</h4>
                    {university.city && (
                      <p className="text-primary-100 text-sm">{university.city}</p>
                    )}
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="w-4 h-4" />
                      <span>{university.type}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Book className="w-4 h-4" />
                        <div>
                          {university.programs.map((program, i) => (
                            <div key={i} className="text-sm">{program}</div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      <span>Tuition: {university.tuitionPerYear}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <Home className="w-4 h-4" />
                      <span>Hostel: {university.hostelPerYear}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe2 className="w-4 h-4" />
                      <span>Medium: {university.medium}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityList; 