'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Globe, 
  Clock, 
  Users, 
  TrendingUp, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  GraduationCap,
  Briefcase,
  Building,
  MapPin,
  Phone,
  Mail,
  Download,
  Calendar,
  DollarSign,
  Award,
  Plane
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ImmigrationPathway {
  title: string;
  description: string;
  steps?: string[];
  eligibility?: string[];
  benefits?: string[];
  requirements?: string[];
  pathways?: string[];
  note?: string;
}

interface Country {
  name: string;
  flag: string;
  image: string;
  description: string;
  processingTime: string;
  successRate: string;
  immigrationPathways: ImmigrationPathway[];
}

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

interface ProcessStep {
  title: string;
  description: string;
  steps: string[];
  icon: LucideIcon;
}

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const stats = [
  { icon: Globe, value: '5+', label: 'Countries', color: 'text-primary' },
  { icon: FileText, value: '15+', label: 'Visa Types', color: 'text-accent' },
  { icon: TrendingUp, value: '98%', label: 'Success Rate', color: 'text-success' },
  { icon: Users, value: '24/7', label: 'Support', color: 'text-warning' },
];

const countries: Country[] = [
  {
    name: "Russia",
    flag: "🇷🇺",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2070&auto=format&fit=crop",
    description: "Russia offers diverse immigration pathways for work, business, family, and study. With streamlined processes and HQS incentives, it's an attractive destination for skilled professionals and entrepreneurs.",
    processingTime: "2-4 weeks",
    successRate: "98%",
    immigrationPathways: [
      {
        title: "Work Immigration",
        description: "Work immigration to Russia requires a sponsored employment offer. For long-term employment, applicants typically begin on a temporary visa and transition to residency.",
        steps: [
          "Secure a valid work contract",
          "Apply for Work Visa or HQS Visa",
          "Reside in Russia legally for 1 year (minimum)",
          "Apply for Temporary Residence Permit (TRP)",
          "After 3 years: Apply for Permanent Residency (PR)",
          "After 5 years (with PR): Apply for Citizenship"
        ]
      },
      {
        title: "Business Immigration",
        description: "Entrepreneurs can enter via business visas or investor routes.",
        pathways: [
          "Register a business in Russia",
          "Apply for Business Visa (convertible to TRP)",
          "Maintain consistent business operations",
          "Become eligible for residency in 3 years"
        ]
      },
      {
        title: "Family Reunification",
        description: "Spouses and children of Russian citizens or PR holders can apply for residency.",
        steps: [
          "Family Visa",
          "TRP based on family ties",
          "PR after 3 years of continuous residency"
        ]
      },
      {
        title: "Study to PR Track",
        description: "Educational pathway leading to permanent residency.",
        steps: [
          "Enter with Student Visa",
          "On graduation, apply for job (HQS or Work Visa)",
          "Begin residency process post 1-year employment"
        ],
        note: "Russian TRP/PR requires language test, income proof, and legal residency record."
      }
    ]
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2070&auto=format&fit=crop",
    description: "Singapore offers world-class opportunities through talent and investment-based immigration programs.",
    processingTime: "2-3 weeks",
    successRate: "95%",
    immigrationPathways: [
      {
        title: "Employment-Based Immigration",
        description: "Professional pathway to permanent residency through employment.",
        steps: [
          "Start with Employment Pass (EP) or S Pass",
          "Apply for PR via PTS Scheme"
        ],
        eligibility: [
          "6+ months of work in Singapore",
          "Stable income and good tax record"
        ],
        benefits: [
          "Freedom to switch employers",
          "Long-term stay without renewals",
          "Eligibility to apply for citizenship after 2–5 years"
        ]
      },
      {
        title: "Global Investor Program (GIP)",
        description: "For high-net-worth individuals seeking permanent residency through investment.",
        requirements: [
          "Minimum investment SGD 2.5 million in business or GIP fund",
          "PR for applicant and family within 6–12 months"
        ]
      },
      {
        title: "Family Immigration",
        description: "Immigration pathways for family members.",
        pathways: [
          "Dependent Pass holders can apply for PR under Family Ties Scheme",
          "Spouses of citizens/PRs can apply directly for PR"
        ]
      },
      {
        title: "Student to PR Track",
        description: "Educational pathway to permanent residency.",
        steps: [
          "Complete higher education in Singapore",
          "Gain Employment Pass",
          "Apply for PR after 1–2 years of working"
        ]
      }
    ]
  },
  {
    name: "Dubai/UAE",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    description: "UAE offers diverse long-term residency options and exclusive citizenship opportunities.",
    processingTime: "3-6 weeks",
    successRate: "97%",
    immigrationPathways: [
      {
        title: "Employment-Based Residency",
        description: "Standard pathway through employment.",
        steps: [
          "Initial entry with Work Permit",
          "Issuance of Residency Visa (1–3 years)",
          "Renewed based on continued employment"
        ]
      },
      {
        title: "Golden Visa Program",
        description: "Long-term residence visa for qualified individuals.",
        eligibility: [
          "Investors (property or business)",
          "Skilled professionals",
          "Scientists, artists, and students with exceptional achievements"
        ],
        benefits: [
          "5 or 10-year renewable residency",
          "No local sponsor needed",
          "Family included"
        ]
      },
      {
        title: "Retirement Visa",
        description: "Special visa category for retirees.",
        requirements: [
          "Age over 55",
          "AED 1M+ savings or property",
          "AED 20,000+ monthly income"
        ]
      },
      {
        title: "Family Sponsorship",
        description: "Family-based immigration options.",
        pathways: [
          "Residents can sponsor spouses, children, and parents",
          "Family members receive renewable residence visas"
        ]
      }
    ]
  },
  {
    name: "Armenia",
    flag: "🇦🇲",
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop",
    description: "Armenia provides liberal immigration policies with multiple pathways to residency.",
    processingTime: "1-3 weeks",
    successRate: "99%",
    immigrationPathways: [
      {
        title: "Employment-Based Residency",
        description: "Work-based pathway to residency.",
        steps: [
          "Obtain work or freelance permit",
          "Apply for Temporary Residence Permit (TRP – 1 year)",
          "PR available after 3 years of TRP"
        ]
      },
      {
        title: "Business Immigration",
        description: "Entrepreneurial pathway to residency.",
        steps: [
          "Set up LLC or private enterprise",
          "Apply for residence permit based on economic activity"
        ]
      },
      {
        title: "Real Estate Investment Route",
        description: "Property-based residency pathway.",
        steps: [
          "Buy property in Armenia (no minimum value)",
          "Use ownership as basis for TRP",
          "PR after 3 years"
        ]
      },
      {
        title: "Special Residency",
        description: "10-year residency for special cases.",
        benefits: [
          "Awarded for special contributions or diaspora connections",
          "Includes family"
        ]
      }
    ]
  },
  {
    name: "Mauritius",
    flag: "🇲🇺",
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop",
    description: "Mauritius offers attractive immigration options for professionals, investors, and students.",
    processingTime: "2-4 weeks",
    successRate: "96%",
    immigrationPathways: [
      {
        title: "Young Professional and Graduate Track",
        description: "Career pathway for young professionals.",
        steps: [
          "Graduate from a Mauritian institution",
          "Apply for Young Professional Permit (YPP)",
          "Secure job offer to convert to Occupation Permit",
          "Leads to residency and eventual PR"
        ]
      },
      {
        title: "Occupation Permit",
        description: "Multiple categories for professionals and investors.",
        pathways: [
          "Professional: Minimum monthly salary MUR 30,000, 3-year permit",
          "Investor: USD 50,000 capital, 10-year permit",
          "Self-Employed: USD 35,000 investment, 10-year permit"
        ]
      },
      {
        title: "Permanent Residency",
        description: "Long-term residency option.",
        eligibility: [
          "3 years of valid Occupation Permit",
          "Income and tax compliance"
        ],
        benefits: [
          "Valid for 20 years (renewable)",
          "Includes spouse and dependents"
        ]
      },
      {
        title: "Retirement Residency",
        description: "Residency option for retirees.",
        requirements: [
          "Age 50+",
          "Minimum monthly income of USD 1,500",
          "10-year residence permit (renewable)"
        ]
      }
    ]
  }
];

const processSteps: ProcessStep[] = [
  {
    title: "Profile Evaluation",
    description: "Initial assessment of your immigration eligibility",
    steps: [
      "Check eligibility for chosen immigration track",
      "Personalized consultation with legal and visa experts"
    ],
    icon: FileText
  },
  {
    title: "Documentation",
    description: "Preparation and verification of required documents",
    steps: [
      "Verify and prepare all necessary papers",
      "Translate, notarize, and legalize where necessary"
    ],
    icon: Clock
  },
  {
    title: "Application Filing",
    description: "Submission and tracking of your application",
    steps: [
      "Submission to relevant authority",
      "Biometric appointments and interviews",
      "Ongoing tracking and updates"
    ],
    icon: CheckCircle
  },
  {
    title: "Residency Approval",
    description: "Final steps to secure your residency",
    steps: [
      "Receive residence permit or visa",
      "Post-arrival services (registration, ID card, etc.)"
    ],
    icon: Award
  },
  {
    title: "Citizenship",
    description: "Optional pathway to citizenship",
    steps: [
      "Fulfill residency and language requirements",
      "Submit for naturalization or fast-track (if available)"
    ],
    icon: Globe
  }
];

const features: Feature[] = [
  {
    title: "Country-specific Expertise",
    description: "Our experts have deep knowledge of local immigration policies and requirements for each destination country.",
    icon: Globe
  },
  {
    title: "Proven Track Record",
    description: "Over 10 years of immigration experience with a 98% success rate across all visa categories.",
    icon: Award
  },
  {
    title: "Legal Support",
    description: "Full documentation accuracy and legal backing throughout your immigration journey.",
    icon: FileText
  },
  {
    title: "End-to-End Service",
    description: "Comprehensive support from initial visa application to permanent residency and citizenship.",
    icon: CheckCircle
  }
];

export default function VisaSolutionsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
  const [showContactMessage, setShowContactMessage] = useState(false);
  const [messageType, setMessageType] = useState('');

  const handleDownloadGuide = (countryName: string) => {
    setMessageType(`${countryName} Guide`);
    setShowDownloadMessage(true);
    setTimeout(() => setShowDownloadMessage(false), 3000);
  };

  const handleScheduleConsultation = () => {
    window.location.href = '/contact';
  };

  const handleSendMessage = () => {
    window.location.href = '/contact';
  };

  const handleLearnMore = () => {
    window.location.href = '/contact';
  };

  const renderPathways = (pathways: string[] | undefined) => {
    if (!pathways?.length) return null;
    return (
      <ul className="space-y-2">
        {pathways.map((pathway, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span>{pathway}</span>
          </li>
        ))}
      </ul>
    );
  };

  const renderSteps = (steps: string[] | undefined) => {
    if (!steps?.length) return null;
    return (
      <ul className="space-y-2">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white flex-shrink-0 mt-1">
              {index + 1}
            </div>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    );
  };

  const renderBenefits = (benefits: string[] | undefined) => {
    if (!benefits?.length) return null;
    return (
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    );
  };

  const renderRequirements = (requirements: string[] | undefined) => {
    if (!requirements?.length) return null;
    return (
      <ul className="space-y-2">
        {requirements.map((requirement, index) => (
          <li key={index} className="flex items-start gap-2">
            <FileText className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
            <span>{requirement}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Success Messages */}
        {showDownloadMessage && (
          <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-right">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Downloading {messageType}...</span>
            </div>
          </div>
        )}
        
        {showContactMessage && (
          <div className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-right">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>{messageType} - We'll contact you soon!</span>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
          </div>
          <div className="container relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <Globe className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium">Global Immigration Experts</span>
                </motion.div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  RK Visa Solutions – Comprehensive Immigration Services
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl">
                  Your one-stop destination for end-to-end immigration, visa, and educational consultancy services. Expert guidance for work, study, business, investor, and residency pathways.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 h-14 px-8 text-lg"
                >
                  <Link href="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/20 h-14 px-8 text-lg backdrop-blur-sm" 
                  onClick={() => handleDownloadGuide('Immigration')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Guide
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-white/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                      <div className="relative p-6 text-center">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-slate-300">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Countries Section */}
        <section ref={ref} className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 mb-6">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">Choose Your Destination</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Immigration Solutions by Country
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Explore comprehensive immigration pathways tailored to your destination of choice.
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Country Selection */}
              <div className="max-w-xl mx-auto">
                <Select
                  value={selectedCountry.name}
                  onValueChange={(value) => setSelectedCountry(countries.find(c => c.name === value) || countries[0])}
                >
                  <SelectTrigger className="w-full h-16 text-lg">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.name} value={country.name} className="py-3">
                        <span className="flex items-center gap-3">
                          <span className="text-2xl">{country.flag}</span>
                          <span className="font-medium">{country.name}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Selected Country Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Country Overview */}
                <Card className="lg:sticky lg:top-8 h-fit overflow-hidden border-0 shadow-2xl">
                  <CardHeader className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={selectedCountry.image}
                        alt={selectedCountry.name}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="flex items-center gap-4">
                          <span className="text-5xl">{selectedCountry.flag}</span>
                        <div>
                            <h3 className="text-3xl font-bold">{selectedCountry.name}</h3>
                            <p className="text-slate-200 mt-1">Immigration Guide</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <CardDescription className="text-lg leading-relaxed">
                        {selectedCountry.description}
                      </CardDescription>
                      </div>
                    </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-slate-50 rounded-2xl p-4 space-y-1">
                        <div className="text-sm text-slate-600">Processing Time</div>
                        <div className="font-semibold text-lg flex items-center gap-2">
                          <Clock className="h-5 w-5 text-blue-500" />
                          {selectedCountry.processingTime}
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-2xl p-4 space-y-1">
                        <div className="text-sm text-slate-600">Success Rate</div>
                        <div className="font-semibold text-lg text-green-600 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5" />
                          {selectedCountry.successRate}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white h-12" 
                        onClick={() => handleDownloadGuide(selectedCountry.name)}
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Country Guide
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full h-12 hover:bg-slate-50" 
                        onClick={handleScheduleConsultation}
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Schedule Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Immigration Pathways */}
                <div className="space-y-8">
                  {selectedCountry.immigrationPathways.map((pathway, index) => (
                    <motion.div
                      key={pathway.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="border-b bg-slate-50">
                          <CardTitle className="text-2xl flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-blue-700 font-bold">{index + 1}</span>
                            </div>
                            {pathway.title}
                          </CardTitle>
                          <CardDescription className="text-base mt-2">
                            {pathway.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 space-y-8">
                          {pathway.steps && (
                            <div>
                              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <Clock className="h-5 w-5 text-blue-500" />
                                Process Steps
                              </h4>
                              {renderSteps(pathway.steps)}
                            </div>
                          )}
                          {pathway.pathways && (
                            <div>
                              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <ArrowRight className="h-5 w-5 text-green-500" />
                                Available Pathways
                              </h4>
                              {renderPathways(pathway.pathways)}
                            </div>
                          )}
                          {pathway.benefits && (
                            <div>
                              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <Award className="h-5 w-5 text-indigo-500" />
                                Benefits
                              </h4>
                              {renderBenefits(pathway.benefits)}
                            </div>
                          )}
                          {pathway.requirements && (
                            <div>
                              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-orange-500" />
                                Requirements
                              </h4>
                              {renderRequirements(pathway.requirements)}
                            </div>
                          )}
                          {pathway.note && (
                            <div className="bg-blue-50 p-5 rounded-xl">
                              <p className="text-blue-900 flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                                {pathway.note}
                              </p>
                            </div>
                          )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">Step-by-Step Guide</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Immigration Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our streamlined process ensures your immigration journey is smooth and successful.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-primary/30" />
                      )}
                      <CardHeader>
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                            <span className="text-blue-600 font-bold">{index + 1}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {step.steps.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 group/item">
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors duration-300">
                                <span className="text-xs font-medium text-blue-700 group-hover/item:text-white">{idx + 1}</span>
                              </div>
                              <span className="text-slate-700 group-hover/item:text-slate-900">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24">
          <div className="container">
            <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 mb-6">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose RK Visa Solutions
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Experience excellence in immigration services with our expert team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-white">
                      <CardHeader>
                        <div className="mb-6 relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-8 w-8 text-white" />
                      </div>
                          <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-blue-600 font-bold">{index + 1}</span>
                      </div>
                    </div>
                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Get in Touch</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Contact RK Visa Solutions Today
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Get expert guidance for your immigration journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/10 border-0 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">Visit Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-lg">Moscow, Russia</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-white/10 border-0 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                      <Mail className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">Email Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="mailto:info@rkruss.com" 
                      className="text-slate-300 text-lg hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      info@rkruss.com
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white/10 border-0 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                      <Phone className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="tel:+74951234567" 
                      className="text-slate-300 text-lg hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      +7 (495) 123-4567
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 h-14 px-8 text-lg"
                onClick={handleSendMessage}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
                  </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}