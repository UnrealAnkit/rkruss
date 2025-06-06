import React, { useState } from 'react';
import { Globe, GraduationCap, Briefcase, ChevronRight, Clock, FileCheck, AlertCircle } from 'lucide-react';

const ImmigrationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'russia' | 'singapore' | 'dubai' | 'armenia' | 'mauritius'>('russia');

  const countryTabs = [
    { 
      id: 'russia', 
      name: 'Russia', 
      flag: '🇷🇺',
      image: '/images/countries/russia.jpg',
      description: "Study in Russia's top universities with world-class education and rich cultural heritage. Benefit from affordable education, with options for both standard student visas and HQS work visas for professionals."
    },
    { 
      id: 'singapore', 
      name: 'Singapore', 
      flag: '🇸🇬',
      image: '/images/countries/singapore.jpg',
      description: "Experience world-class education at prestigious institutions like NUS, NTU, and SMU. Singapore offers a streamlined visa process through ICA's SOLAR system and flexible work rights for students."
    },
    { 
      id: 'dubai', 
      name: 'Dubai/UAE', 
      flag: '🇦🇪',
      image: '/images/countries/dubai.jpg',
      description: "Study and work in the UAE's dynamic environment with options for Standard, Green (5 years), and Golden (10 years) visas. Benefit from world-class facilities and tax-free income opportunities."
    },
    { 
      id: 'armenia', 
      name: 'Armenia', 
      flag: '🇦🇲',
      image: '/images/countries/armenia.jpg',
      description: "Study in Armenia with its liberal immigration policies and rich cultural heritage. Temporary Residence Permits available for both students and workers, with a straightforward application process."
    },
    { 
      id: 'mauritius', 
      name: 'Mauritius', 
      flag: '🇲🇺',
      image: '/images/countries/mauritius.jpg',
      description: "Pursue education in Mauritius with flexible student visas and work opportunities. Special provisions for young professionals and multiple work permit options through the Economic Development Board."
    },
  ] as const;

  const currentCountry = countryTabs.find(tab => tab.id === activeTab);

  return (
    <div className="pt-20">
      {/* Hero Section with Dynamic Background */}
      <div 
        className="relative bg-primary-900 py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${currentCountry?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6 animate-fade-in">
            Immigration Services
          </h1>
          <p className="text-center text-gray-200 max-w-3xl mx-auto mb-12">
            A comprehensive guide to immigration processes for study and work in Russia, Singapore, UAE (Dubai), Armenia, and Mauritius, including visa types, application procedures, eligibility, and special rules.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center text-white">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-sm">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center text-white">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center text-white">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm">Students Placed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Country Tabs - Mobile Dropdown */}
        <div className="md:hidden mb-8">
          <select 
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as typeof activeTab)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm"
          >
            {countryTabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.flag} {tab.name}
              </option>
            ))}
          </select>
        </div>

        {/* Country Tabs - Desktop */}
        <div className="hidden md:flex flex-wrap gap-2 mb-8 justify-center">
          {countryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{tab.flag}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Country Description */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {currentCountry?.description}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Immigration Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Document Preparation</h3>
                </div>
                <p className="text-gray-600">Gather and authenticate all required documents for your application.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Application Processing</h3>
                </div>
                <p className="text-gray-600">Submit application and track progress through our expert team.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Visa Approval</h3>
                </div>
                <p className="text-gray-600">Receive your visa and prepare for your journey abroad.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visa Information Cards */}
        {activeTab === 'russia' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Visa */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Student Visa</h2>
                    <p className="text-gray-600">Обучающая виза</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                      Eligibility
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Admission to a Russian university or institution</li>
                      <li className="text-gray-600">Valid passport (at least 6 months beyond visa expiry)</li>
                      <li className="text-gray-600">Medical insurance and HIV-negative certificate</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      Process
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Get Admission: Apply to a Russian university</li>
                      <li className="text-gray-600">Receive Invitation Letter through Ministry of Internal Affairs</li>
                      <li className="text-gray-600">Submit Application at Russian Embassy/Consulate</li>
                      <li className="text-gray-600">Visa Issuance (90 days validity)</li>
                      <li className="text-gray-600">Visa Extension to 1-year multi-entry visa</li>
                    </ol>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Briefcase className="w-5 h-5 text-primary-600 mr-2" />
                      Work Rights
                    </h3>
                    <p className="text-gray-600 mt-2">Up to 20 hours/week with a separate work permit</p>
                  </div>
                </div>
              </div>

              {/* Work Visa */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Work Visa</h2>
                    <p className="text-gray-600">Standard & HQS Visas</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                      Types
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Standard Work Visa</li>
                      <li className="text-gray-600">Highly Qualified Specialist (HQS) Visa</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <FileCheck className="w-5 h-5 text-primary-600 mr-2" />
                      HQS Requirements
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Minimum salary of RUB 167,000/month</li>
                      <li className="text-gray-600">Valid degree recognized by Russian authorities</li>
                      <li className="text-gray-600">No criminal record</li>
                      <li className="text-gray-600">HIV test certificate</li>
                    </ul>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      Duration
                    </h3>
                    <p className="text-gray-600 mt-2">Standard: 1 year (renewable) | HQS: Up to 3 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'singapore' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Visa */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Student Visa</h2>
                    <p className="text-gray-600">Student's Pass</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                      Eligibility
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Acceptance from ICA-approved institution</li>
                      <li className="text-gray-600">Valid passport (at least 6 months validity)</li>
                      <li className="text-gray-600">Financial proof of sufficient funds</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      Process
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">University applies through SOLAR system</li>
                      <li className="text-gray-600">ICA processes application (2-4 weeks)</li>
                      <li className="text-gray-600">In-Principal Approval issued</li>
                      <li className="text-gray-600">Collect Student's Pass upon arrival</li>
                    </ol>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Briefcase className="w-5 h-5 text-primary-600 mr-2" />
                      Work Rights
                    </h3>
                    <p className="text-gray-600 mt-2">Up to 16 hours/week during term, full-time during holidays</p>
                  </div>
                </div>
              </div>

              {/* Work Visa */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Work Visa</h2>
                    <p className="text-gray-600">Employment Pass & S Pass</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                      Types
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Employment Pass (EP)</li>
                      <li className="text-gray-600">S Pass</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <FileCheck className="w-5 h-5 text-primary-600 mr-2" />
                      EP Requirements
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Minimum salary of SGD 5,000/month</li>
                      <li className="text-gray-600">Relevant qualifications and experience</li>
                      <li className="text-gray-600">Job offer from Singapore employer</li>
                    </ul>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      Duration
                    </h3>
                    <p className="text-gray-600 mt-2">EP: Up to 2 years | S Pass: Up to 2 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dubai/UAE Section */}
        {activeTab === 'dubai' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Visa */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Student Visa</h2>
                    <p className="text-gray-600">UAE Student Residence Visa</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                      Eligibility
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Acceptance from UAE-licensed institution</li>
                      <li className="text-gray-600">Valid passport with 6 months validity</li>
                      <li className="text-gray-600">Medical fitness certificate</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      Process
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">University applies for entry permit</li>
                      <li className="text-gray-600">Enter UAE on student entry permit</li>
                      <li className="text-gray-600">Complete medical test</li>
                      <li className="text-gray-600">Receive student residence visa</li>
                    </ol>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Briefcase className="w-5 h-5 text-primary-600 mr-2" />
                      Work Rights
                    </h3>
                    <p className="text-gray-600 mt-2">Part-time work allowed with NOC from university</p>
                  </div>
                </div>
              </div>

              {/* Work Visa */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Work Visa</h2>
                    <p className="text-gray-600">UAE Work Permits</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                      Types
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Standard Work Permit</li>
                      <li className="text-gray-600">Golden Visa (10 years)</li>
                      <li className="text-gray-600">Green Visa (5 years)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <FileCheck className="w-5 h-5 text-primary-600 mr-2" />
                      Requirements
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Job offer from UAE employer</li>
                      <li className="text-gray-600">Valid passport</li>
                      <li className="text-gray-600">Medical fitness certificate</li>
                    </ul>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      Duration
                    </h3>
                    <p className="text-gray-600 mt-2">Standard: 2 years | Golden: 10 years | Green: 5 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Armenia Section */}
        {activeTab === 'armenia' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Visa */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Student Visa</h2>
                    <p className="text-gray-600">Student Residence Permit</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                      Eligibility
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Acceptance from Armenian institution</li>
                      <li className="text-gray-600">Valid passport</li>
                      <li className="text-gray-600">Proof of accommodation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      Process
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Enter Armenia on visitor visa</li>
                      <li className="text-gray-600">Apply for residence permit</li>
                      <li className="text-gray-600">Receive temporary residence card</li>
                    </ol>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Briefcase className="w-5 h-5 text-primary-600 mr-2" />
                      Work Rights
                    </h3>
                    <p className="text-gray-600 mt-2">Part-time work allowed with residence permit</p>
                  </div>
                </div>
              </div>

              {/* Work Visa */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Work Visa</h2>
                    <p className="text-gray-600">Work Residence Permit</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                      Types
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Temporary Residence Permit</li>
                      <li className="text-gray-600">Permanent Residence Permit</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <FileCheck className="w-5 h-5 text-primary-600 mr-2" />
                      Requirements
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Employment contract</li>
                      <li className="text-gray-600">Valid passport</li>
                      <li className="text-gray-600">Clean criminal record</li>
                    </ul>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      Duration
                    </h3>
                    <p className="text-gray-600 mt-2">Temporary: 1 year (renewable) | Permanent: 5 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mauritius Section */}
        {activeTab === 'mauritius' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Visa */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Student Visa</h2>
                    <p className="text-gray-600">Student Residence Permit</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                      Eligibility
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Acceptance from recognized institution</li>
                      <li className="text-gray-600">Valid passport</li>
                      <li className="text-gray-600">Proof of financial capacity</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      Process
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Apply through institution</li>
                      <li className="text-gray-600">Obtain entry visa</li>
                      <li className="text-gray-600">Convert to residence permit</li>
                    </ol>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Briefcase className="w-5 h-5 text-primary-600 mr-2" />
                      Work Rights
                    </h3>
                    <p className="text-gray-600 mt-2">20 hours/week during term, full-time during holidays</p>
                  </div>
                </div>
              </div>

              {/* Work Visa */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-8 h-8 text-primary-600 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Work Visa</h2>
                    <p className="text-gray-600">Occupation Permit</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                      Types
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Professional Occupation Permit</li>
                      <li className="text-gray-600">Young Professional Permit</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <FileCheck className="w-5 h-5 text-primary-600 mr-2" />
                      Requirements
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 mt-3">
                      <li className="text-gray-600">Job contract</li>
                      <li className="text-gray-600">Minimum salary requirements</li>
                      <li className="text-gray-600">Relevant qualifications</li>
                    </ul>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      Duration
                    </h3>
                    <p className="text-gray-600 mt-2">3 years (renewable)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Table with Enhanced Styling */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Visa Comparison Chart</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Country</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Study Visa Duration</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Work Visa Duration</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">IELTS/GRE Needed?</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Student Work Allowed</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Key Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🇷🇺</span>
                      <span className="font-medium">Russia</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">1 yr (renewable)</td>
                  <td className="px-6 py-4">1-3 yrs</td>
                  <td className="px-6 py-4">No (varies)</td>
                  <td className="px-6 py-4">Yes, with permit</td>
                  <td className="px-6 py-4">HQS route popular</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🇸🇬</span>
                      <span className="font-medium">Singapore</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Course duration</td>
                  <td className="px-6 py-4">2-3 yrs</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Yes, limited hours</td>
                  <td className="px-6 py-4">SOLAR system</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🇦🇪</span>
                      <span className="font-medium">Dubai/UAE</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">1 yr (renewable)</td>
                  <td className="px-6 py-4">2-10 yrs</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Yes, with NOC</td>
                  <td className="px-6 py-4">Golden Visa option</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🇦🇲</span>
                      <span className="font-medium">Armenia</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">1 yr (renewable)</td>
                  <td className="px-6 py-4">1-5 yrs</td>
                  <td className="px-6 py-4">No</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Liberal policy</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🇲🇺</span>
                      <span className="font-medium">Mauritius</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Course duration</td>
                  <td className="px-6 py-4">3 yrs</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">Yes, 20hrs/week</td>
                  <td className="px-6 py-4">Young Professional route</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-primary-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Our expert team is here to guide you through every step of your immigration process. Get personalized assistance today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent btn-lg">
              Contact an Expert
            </button>
            <button className="btn-secondary btn-lg text-white border-white/20 hover:bg-white/10">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationPage;