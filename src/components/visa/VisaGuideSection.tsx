import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Download, Clock, AlertCircle, Briefcase, GraduationCap } from 'lucide-react';

const VisaGuideSection: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<string>('russia');
  const [expandedSections, setExpandedSections] = useState<string[]>(['standard']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const visaData = {
    russia: {
      name: 'Russia',
      flag: '🇷🇺',
      title: 'Russia – Work Visa (Виза для работы)',
      types: [
        {
          id: 'standard',
          name: 'Standard Work Visa',
          eligibility: [
            'Must have a confirmed job offer',
            'Employer must obtain a Work Permit from Ministry of Internal Affairs'
          ],
          requirements: [
            'Valid passport (6+ months)',
            'Employment contract',
            'Medical certificate (HIV, TB, drug test)',
            'Migration card (after arrival)'
          ],
          process: [
            'Employer applies for Work Permit',
            'Employer obtains Invitation Letter',
            'Apply at Russian Consulate with required documents',
            'Visa Issued (single-entry, 90 days)',
            'On Arrival: Register with migration authorities & convert to multi-entry visa'
          ],
          duration: '1 year (renewable)'
        },
        {
          id: 'hqs',
          name: 'Highly Qualified Specialist (HQS) Visa',
          eligibility: [
            'Monthly salary ≥ RUB 167,000 (~USD 1,800)',
            'Must be hired by a Russian company'
          ],
          benefits: [
            '3-year multi-entry visa',
            'Fast processing (14–20 days)',
            'Dependents (spouse/kids) can join with full residency rights'
          ],
          documents: [
            'Degree certificate (not always mandatory)',
            'Work contract',
            'Health insurance',
            'HIV-negative certificate'
          ]
        },
        {
          id: 'intra-company',
          name: 'Intra-Company Transfer Visa',
          eligibility: [
            'Must be a current employee of a multinational company',
            'Transfer to Russian branch/office'
          ],
          requirements: [
            'Valid passport',
            'Company transfer documentation',
            'Proof of employment history'
          ]
        },
        {
          id: 'patent',
          name: 'Patent (Патент)',
          eligibility: [
            'For CIS country citizens',
            'For low-skilled jobs'
          ],
          requirements: [
            'Valid passport',
            'Migration card',
            'Medical tests'
          ]
        }
      ]
    },
    singapore: {
      name: 'Singapore',
      flag: '🇸🇬',
      title: 'Singapore – Work Pass System',
      description: 'Singapore has a tiered work visa structure, based on skill, salary, and education.',
      types: [
        {
          id: 'ep',
          name: 'Employment Pass (EP)',
          eligibility: [
            'Monthly salary ≥ SGD 5,000 (higher for financial services & older applicants)',
            'Recognized university degree or equivalent'
          ],
          keyChanges: [
            'COMPASS framework (2023 onward): Points-based evaluation system',
            'Criteria: Salary, qualifications, diversity, firm support for local workforce'
          ],
          process: [
            'Job Offer from employer',
            'Employer applies on MOM Portal',
            'Submit required documents',
            'Approval in Principle (AIP) issued',
            'Undergo medical exam on arrival',
            'Receive EP Card'
          ],
          duration: '1–2 years (renewable)'
        },
        {
          id: 'spass',
          name: 'S Pass',
          eligibility: [
            'For mid-level skilled workers',
            'Minimum salary: SGD 3,150',
            'Diploma-level education'
          ],
          quotaAndLevy: [
            'Employer quotas apply (based on company size)',
            'Foreign Worker Levy applicable'
          ]
        },
        {
          id: 'workpermit',
          name: 'Work Permit',
          eligibility: [
            'For semi-skilled workers in construction, manufacturing, etc.',
            'Employer must apply',
            'Subject to quota and levy'
          ]
        }
      ]
    },
    dubai: {
      name: 'Dubai/UAE',
      flag: '🇦🇪',
      title: 'Dubai / UAE – Employment Visa',
      description: 'The UAE requires both a work permit and a residence visa for all foreign employees.',
      types: [
        {
          id: 'standard',
          name: 'Standard Work Visa (2 years)',
          eligibility: [
            'Job offer from UAE-based company',
            'Minimum salary varies by profession (AED 3,000–AED 15,000+)'
          ],
          process: [
            'Job Offer from licensed UAE employer',
            'Employer applies for Entry Permit',
            'On Arrival: Medical test, Emirates ID, Biometric capture',
            'Work Permit + Visa Stamped on passport'
          ],
          documents: [
            'Passport',
            'Job offer/contract',
            'Passport photos',
            'Attested academic certificates',
            'Medical fitness report'
          ]
        },
        {
          id: 'green',
          name: 'Green Visa (5 years)',
          eligibility: [
            'Skilled workers, freelancers, and investors',
            'Degree or diploma',
            'Salary ≥ AED 15,000/month'
          ],
          benefits: [
            'No sponsor needed',
            'Long-term residency'
          ]
        },
        {
          id: 'golden',
          name: 'Golden Visa (10 years)',
          eligibility: [
            'Outstanding professionals',
            'Entrepreneurs',
            'Investors',
            'PhDs/Scientists',
            'Salary ≥ AED 30,000/month'
          ],
          benefits: [
            'No employer sponsorship required',
            'Family can join',
            'Long-term residency'
          ]
        }
      ]
    },
    armenia: {
      name: 'Armenia',
      flag: '🇦🇲',
      title: 'Armenia – Temporary Work Residence Permit',
      description: 'Armenia provides simplified work permit processes compared to many countries.',
      types: [
        {
          id: 'work',
          name: 'Residence Permit for Work',
          eligibility: [
            'Valid job offer from an Armenian-registered company'
          ],
          documents: [
            'Passport',
            'Employment contract',
            "Employer's business license",
            'Police clearance certificate',
            'Health certificate (TB, HIV test)'
          ],
          process: [
            'Employer applies to the Migration and Citizenship Service (Armenian Police)',
            'Obtain Work Authorization',
            'Applicant applies for Temporary Residence Card (valid for 1 year)'
          ],
          duration: '1 year, renewable',
          processingTime: '30–45 days',
          notes: ['No exams or degree equivalency is usually required']
        }
      ]
    },
    mauritius: {
      name: 'Mauritius',
      flag: '🇲🇺',
      title: 'Mauritius – Work Permits and Occupation Permits',
      description: 'Mauritius offers a simple, business-friendly work visa process.',
      types: [
        {
          id: 'occupation',
          name: 'Occupation Permit (OP)',
          eligibility: [
            'Professional with job offer',
            'Monthly salary ≥ MUR 30,000 (~USD 675)',
            'Valid passport and degree'
          ],
          process: [
            'Job offer secured',
            'Apply online via Economic Development Board (EDB) Mauritius',
            'Submit required documents',
            'Attend appointment in Mauritius for biometric capture'
          ],
          validity: 'Up to 3 years (renewable)'
        },
        {
          id: 'young',
          name: 'Young Professional Occupation Permit',
          eligibility: [
            'Foreign students who completed studies in Mauritius',
            'Graduation from a recognized local institution',
            'Job offer in relevant field'
          ],
          duration: '3 years',
          notes: ['No labor market test required']
        },
        {
          id: 'workpermit',
          name: 'Work Permit (Low/Medium Skilled)',
          issuedBy: 'Ministry of Labour',
          eligibility: [
            'Job offer for positions like cook, technician, etc.',
            'Quota applies for employers'
          ],
          documents: [
            'Passport',
            'Educational qualifications',
            'Health clearance',
            'Employment contract'
          ]
        }
      ]
    }
  };

  return (
    <div className="space-y-8">
      {/* Country Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(visaData).map(([id, country]) => (
          <button
            key={id}
            onClick={() => setActiveCountry(id)}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
              activeCountry === id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="text-xl">{country.flag}</span>
            <span>{country.name}</span>
          </button>
        ))}
      </div>

      {/* Country Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <span>{visaData[activeCountry as keyof typeof visaData].flag}</span>
            <span>{visaData[activeCountry as keyof typeof visaData].title}</span>
          </h2>
          {visaData[activeCountry as keyof typeof visaData].description && (
            <p className="text-gray-600 text-lg mb-8">
              {visaData[activeCountry as keyof typeof visaData].description}
            </p>
          )}

          {/* Visa Types */}
          <div className="space-y-6">
            {visaData[activeCountry as keyof typeof visaData].types.map((type) => (
              <div key={type.id} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(type.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold">{type.name}</span>
                  </div>
                  {expandedSections.includes(type.id) ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>

                {expandedSections.includes(type.id) && (
                  <div className="p-6 space-y-6">
                    {type.eligibility && (
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-primary-600" />
                          Eligibility
                        </h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {type.eligibility.map((item, index) => (
                            <li key={index} className="text-gray-600">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {type.requirements && (
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-primary-600" />
                          Requirements
                        </h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {type.requirements.map((item, index) => (
                            <li key={index} className="text-gray-600">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {type.process && (
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-primary-600" />
                          Process
                        </h4>
                        <ol className="list-decimal pl-5 space-y-2">
                          {type.process.map((item, index) => (
                            <li key={index} className="text-gray-600">{item}</li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {type.benefits && (
                      <div>
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary-600" />
                          Benefits
                        </h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {type.benefits.map((item, index) => (
                            <li key={index} className="text-gray-600">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(type.duration || type.validity) && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-primary-600" />
                          <span>Duration: {type.duration || type.validity}</span>
                        </p>
                      </div>
                    )}

                    {type.notes && (
                      <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                        <ul className="space-y-2">
                          {type.notes.map((note, index) => (
                            <li key={index} className="text-primary-700 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4 flex-shrink-0" />
                              {note}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaGuideSection; 