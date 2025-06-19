'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Building,
  CheckCircle,
  FileText,
  Phone,
  Download,
  Clock,
  TrendingUp,
  DollarSign,
  Info,
  Briefcase
} from 'lucide-react';

interface BusinessVisaCountry {
  name: string;
  flag: string;
  image: string;
  processingTime: string;
  successRate: string;
  validity: string;
  minInvestment?: string;
  requirements: string[];
  documents: string[];
  benefits: string[];
  specialNotes?: string[];
}

const businessVisaCountries: BusinessVisaCountry[] = [
  {
    name: "Russia",
    flag: "🇷🇺",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    processingTime: "2-4 weeks",
    successRate: "98%",
    validity: "30 days to 1 year",
    requirements: [
      "Business registration documents",
      "Investment proof or business plan",
      "Financial statements showing stability",
      "Clean criminal background",
      "Valid passport with 6 months validity"
    ],
    documents: [
      "Letter of invitation from Russian business entity",
      "Hotel reservation and flight booking confirmation",
      "Business registration documents (if applicable)",
      "Bank statements showing financial stability",
      "Travel insurance coverage",
      "Detailed business itinerary"
    ],
    benefits: [
      "Multiple entries within validity period",
      "Flexible stay duration",
      "Business networking opportunities",
      "Market exploration facilitated",
      "Investment pathway available",
      "Access to Russian business ecosystem"
    ],
    specialNotes: [
      "Conference/Trade Show visa available",
      "Investment exploration visa",
      "Business setup visa options",
      "Partnership meeting facilitation"
    ]
  },
  {
    name: "UAE",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    processingTime: "3-6 weeks",
    successRate: "97%",
    validity: "3 years (renewable)",
    minInvestment: "Varies by zone",
    requirements: [
      "Minimum investment (varies by zone)",
      "Comprehensive business plan",
      "Financial capability proof",
      "Company registration documents",
      "Local sponsor (in some cases)"
    ],
    documents: [
      "Business plan and feasibility study",
      "Company incorporation documents",
      "Bank statements and financial proof",
      "Passport copy with 6 months validity",
      "Educational certificates (attested)",
      "Medical fitness certificate",
      "Local sponsor documents (if required)"
    ],
    benefits: [
      "100% business ownership in free zones",
      "Significant tax benefits and exemptions",
      "Full repatriation rights",
      "Family visa eligibility",
      "Access to golden visa pathways",
      "Strategic location for global business"
    ],
    specialNotes: [
      "Different zones have different requirements",
      "Mainland vs Free Zone options",
      "Golden Visa for qualifying investors",
      "Renewable every 2-3 years"
    ]
  },
  {
    name: "Armenia",
    flag: "🇦🇲",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    processingTime: "1-3 weeks",
    successRate: "99%",
    validity: "1 year (renewable)",
    minInvestment: "No minimum specified",
    requirements: [
      "Business registration in Armenia",
      "Investment proof or business plan",
      "Clean criminal record",
      "Local employee hiring plan (preferred)",
      "Valid passport and health insurance"
    ],
    documents: [
      "Business registration certificate",
      "Investment documentation",
      "Business plan with market analysis",
      "Passport and passport photos",
      "Bank statements",
      "Health insurance policy",
      "Police clearance certificate"
    ],
    benefits: [
      "Fast company setup (less than 5 days)",
      "Low corporate tax rates",
      "Simple business registration process",
      "Strategic location between Europe and Asia",
      "EU proximity advantages",
      "Growing startup ecosystem"
    ],
    specialNotes: [
      "Ideal for tech startups",
      "Growing fintech sector",
      "Government support for entrepreneurs",
      "Low operational costs"
    ]
  },
  {
    name: "Mauritius",
    flag: "🇲🇺",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    processingTime: "2-4 weeks",
    successRate: "96%",
    validity: "10 years (Premium)",
    minInvestment: "USD 50,000+",
    requirements: [
      "Minimum Investment: USD 50,000 or more",
      "Comprehensive business plan",
      "Financial capability proof",
      "Company registration in Mauritius",
      "Clean criminal and financial record"
    ],
    documents: [
      "Business plan and financial projections",
      "Investment proof and bank statements",
      "Company incorporation documents",
      "Passport with 6 months validity",
      "Educational and professional certificates",
      "Medical certificate",
      "Police clearance certificate"
    ],
    benefits: [
      "Tax holidays and incentives",
      "Access to Special Economic Zones (SEZs)",
      "Easy banking and financial services",
      "Strategic location for Africa-Asia business",
      "Political stability and rule of law",
      "Gateway to African markets"
    ],
    specialNotes: [
      "Premium visa for high-value investors",
      "Different investment thresholds available",
      "Strong offshore financial services",
      "Double taxation treaties"
    ]
  }
];

export default function BusinessVisaPage() {
  const [selectedCountry, setSelectedCountry] = useState(businessVisaCountries[0]);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
  const [showContactMessage, setShowContactMessage] = useState(false);

  const handleDownloadGuide = (countryName: string) => {
    setShowDownloadMessage(true);
    setTimeout(() => setShowDownloadMessage(false), 3000);
  };

  const handleScheduleConsultation = () => {
    setShowContactMessage(true);
    setTimeout(() => setShowContactMessage(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
            >
              <Building className="w-4 h-4 mr-2" />
              Business & Investment Visas
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Expand Your Business
              <span className="block text-green-600">Globally</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Strategic business and investor visa solutions to help you establish and grow your business internationally with comprehensive support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                Schedule Consultation
                <Phone className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Download Business Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries Tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue={businessVisaCountries[0].name.toLowerCase()} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {businessVisaCountries.map((country) => (
                <TabsTrigger 
                  key={country.name} 
                  value={country.name.toLowerCase()}
                  className="flex items-center gap-2"
                  onClick={() => setSelectedCountry(country)}
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className="hidden sm:inline">{country.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {businessVisaCountries.map((country) => (
              <TabsContent key={country.name} value={country.name.toLowerCase()}>
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Country Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-64 lg:h-80 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={country.image}
                      alt={`Business opportunities in ${country.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        <span className="text-3xl">{country.flag}</span>
                        {country.name}
                      </h3>
                      <p className="text-green-200">Business Investment Hub</p>
                    </div>
                  </motion.div>

                  {/* Quick Stats */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">Processing Time</div>
                        <div className="text-xl font-bold text-gray-900">{country.processingTime}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">Success Rate</div>
                        <div className="text-xl font-bold text-gray-900">{country.successRate}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 text-center">
                        <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">Validity</div>
                        <div className="text-xl font-bold text-gray-900">{country.validity}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 text-center">
                        <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">Min Investment</div>
                        <div className="text-lg font-bold text-gray-900">
                          {country.minInvestment || "Varies"}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Detailed Information */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="requirements">
                      <AccordionTrigger className="text-lg font-semibold">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-green-600" />
                          Business Requirements
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Basic Requirements</h4>
                            <ul className="space-y-2">
                              {country.requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="documents">
                      <AccordionTrigger className="text-lg font-semibold">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-green-600" />
                          Required Documents
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <ul className="space-y-2">
                              {country.documents.map((doc, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{doc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefits">
                      <AccordionTrigger className="text-lg font-semibold">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                          Business Benefits
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <ul className="space-y-2">
                              {country.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {country.specialNotes && (
                      <AccordionItem value="special">
                        <AccordionTrigger className="text-lg font-semibold">
                          <div className="flex items-center gap-2">
                            <Info className="h-5 w-5 text-green-600" />
                            Special Programs & Notes
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <ul className="space-y-2">
                              {country.specialNotes.map((note, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Info className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{note}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </Accordion>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                  <Button 
                    onClick={() => handleDownloadGuide(country.name)}
                    className="bg-green-600 hover:bg-green-700 text-white flex-1"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download {country.name} Business Guide
                  </Button>
                  <Button 
                    onClick={handleScheduleConsultation}
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:bg-green-50 flex-1"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </Button>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Success Messages */}
      {showDownloadMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          <p className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Guide download started! Check your downloads folder.
          </p>
        </motion.div>
      )}

      {showContactMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          <p className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Redirecting to consultation booking...
          </p>
        </motion.div>
      )}

      <Footer />
    </div>
  );
} 