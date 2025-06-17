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

interface VisaType {
  title: string;
  categories?: string[];
  validity?: string;
  eligibility?: string | string[];
  documents?: string[];
  requirements?: string[];
  benefits?: string[];
  purpose?: string;
  duration?: string;
  features?: string[];
  advantages?: string[];
  types?: string[];
  target?: string;
  focus?: string;
  options?: string[];
}

interface Country {
  name: string;
  flag: string;
  image: string;
  description: string;
  processingTime: string;
  successRate: string;
  visaTypes: VisaType[];
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

const countries: Country[] = [
  {
    name: "Russia",
    flag: "🇷🇺",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2070&auto=format&fit=crop",
    description: "Russia is rapidly emerging as a hub for international education, engineering, and IT professionals. With simplified pathways and HQS incentives, it's the perfect destination for skilled talent seeking global opportunities in a dynamic, growing economy.",
    processingTime: "2–4 weeks",
    successRate: "98%",
    visaTypes: [
      {
        title: "Work Visa",
        purpose: "For foreign nationals seeking employment opportunities in Russia's growing tech, engineering, and business sectors",
        categories: ["Single-entry", "Multiple-entry", "Temporary Work Permit"],
        validity: "Up to 3 years (extendable)",
        eligibility: [
          "Foreign nationals with confirmed job offer from Russian employer",
          "Professional qualifications matching job requirements",
          "Clean criminal background",
          "Medical fitness certificate"
        ],
        documents: [
          "Invitation from Russian employer (approved by Ministry of Internal Affairs)",
          "Signed employment contract with salary details",
          "Passport with minimum 6 months validity",
          "Medical tests (HIV, TB screening)",
          "Education/qualification certificates (apostilled)",
          "Police clearance certificate from home country",
          "Proof of professional experience (3+ years preferred)"
        ],
        benefits: [
          "Legal work authorization in Russia",
          "Pathway to permanent residency",
          "Family sponsorship available",
          "Access to Russian healthcare system",
          "Tax benefits for certain sectors"
        ],
        requirements: [
          "Valid job offer from registered Russian company",
          "Minimum qualification: Bachelor's degree or equivalent",
          "Language proficiency (Russian/English preferred)",
          "Clean medical and criminal record"
        ]
      },
      {
        title: 'HQS (Highly Qualified Specialist) Visa',
        purpose: 'Fast-track visa for highly skilled professionals in IT, engineering, finance, and research sectors',
        validity: '3 years with fast-track permanent residency pathway',
        requirements: [
          'Minimum annual salary: 2,000,000 RUB (167,000 RUB/month)',
          'Advanced degree or exceptional professional experience',
          'Employment in strategic sectors (IT, biotech, engineering)',
          'Employer must be registered for HQS sponsorship'
        ],
        benefits: [
          'Spouse and unmarried children receive dependent visas',
          'No labor market testing required',
          'Expedited processing (10–15 working days)',
          'Fast-track to permanent residency (1 year vs 5 years)',
          'Simplified renewal process',
          'Right to change employers within HQS category'
        ],
        documents: [
          'HQS invitation from certified Russian employer',
          'Employment contract with salary ≥2M RUB annually',
          'Educational credentials (Masters/PhD preferred)',
          'Professional experience certificates',
          'Medical examination results',
          'Criminal background check (apostilled)'
        ],
        features: [
          'Priority processing at all stages',
          'Reduced documentation requirements',
          'Family inclusion without additional fees',
          'Professional mobility within Russia'
        ]
      },
      {
        title: 'Student Visa',
        purpose: 'For enrollment in Russian universities, language institutes, and educational programs',
        validity: 'Duration of study program (typically 1-6 years)',
        eligibility: [
          'Acceptance to Russian educational institution',
          'Proof of financial support (minimum $2,000/year)',
          'Medical fitness clearance',
          'Academic prerequisites met'
        ],
        documents: [
          'Official admission letter from Russian university',
          'Academic transcripts (apostilled)',
          'High school/university diploma',
          'Proof of funds (bank statements/scholarship letter)',
          'Medical clearance certificate',
          'HIV test results (mandatory)',
          'Travel insurance (minimum $30,000 coverage)'
        ],
        benefits: [
          'Post-Study Work Option under government internship schemes',
          'Part-time work permission (up to 20 hours/week)',
          'Access to Russian education system',
          'Cultural exchange opportunities',
          'Language immersion environment',
          'Pathway to skilled worker visa post-graduation'
        ],
        features: [
          'Multiple entry visa available',
          'Family visit visas facilitated',
          'Extension possible for extended programs',
          'Integration support services available'
        ]
      },
      {
        title: 'Business Visa',
        purpose: 'For attending conferences, setting up businesses, meeting partners, and exploring investment opportunities',
        duration: '30 days to 1 year, multiple entry options available',
        validity: 'Flexible based on business needs',
        documents: [
          'Letter of invitation from Russian business entity',
          'Hotel reservation and flight booking confirmation',
          'Business registration documents (if applicable)',
          'Bank statements showing financial stability',
          'Travel insurance coverage',
          'Detailed business itinerary'
        ],
        benefits: [
          'Multiple entries within validity period',
          'Flexible stay duration',
          'Business networking opportunities',
          'Market exploration facilitated',
          'Investment pathway available'
        ],
        types: [
          'Conference/Trade Show visa',
          'Investment exploration visa',
          'Business setup visa',
          'Partnership meeting visa'
        ]
      }
    ]
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2070&auto=format&fit=crop",
    description: "Singapore's immigration system is structured, transparent, and highly professional, offering long-term opportunities for top talent in finance, IT, healthcare, and emerging tech sectors. As Asia's financial hub, Singapore provides unmatched career growth and quality of life.",
    processingTime: "2–3 weeks",
    successRate: "95%",
    visaTypes: [
      {
        title: "Employment Pass (EP)",
        purpose: "For foreign professionals, managers, and executives seeking employment in Singapore's strategic sectors",
        validity: "Up to 2 years (renewable for up to 5 years initially)",
        eligibility: [
          "Monthly salary ≥ SGD 5,000 (SGD 6,200+ for candidates above 40)",
          "Recognized university degree or professional qualifications",
          "Employment in strategic sectors (IT, biotech, finance, engineering)",
          "Relevant work experience in specialized field"
        ],
        documents: [
          "Passport biographical page and recent photo",
          "Signed job offer letter with salary details",
          "University degree and academic transcripts",
          "Professional certifications and licenses",
          "Company profile and business registration",
          "CV highlighting relevant experience",
          "Medical examination (if required)"
        ],
        benefits: [
          "Eligible to apply for Dependent Pass for spouse/children",
          "Path to Permanent Residency after 2+ years",
          "No restrictions on job changes (with new EP application)",
          "Access to Singapore's healthcare and education systems",
          "Tax residency benefits for certain income levels"
        ],
        requirements: [
          "Job offer from Singapore-registered company",
          "Company must justify hiring foreign talent",
          "Salary must meet prevailing market rates",
          "Position must require specialized skills/expertise"
        ],
        features: [
          "Online application system (EPOL)",
          "Fast-track processing for certain sectors",
          "Renewable based on employment performance",
          "Multiple re-entry visa included"
        ]
      },
      {
        title: 'S Pass',
        purpose: 'For mid-level skilled workers in sectors requiring technical expertise',
        validity: 'Up to 2 years (renewable)',
        requirements: [
          'Monthly salary ≥ SGD 3,150 (higher for older candidates)',
          'Diploma, technical certification, or equivalent experience',
          'Employment in approved sectors (manufacturing, construction, services)',
          'Company must meet Dependency Ratio Ceiling (DRC) requirements'
        ],
        eligibility: [
          'Mid-skilled workers with relevant qualifications',
          'Technical specialists and supervisors',
          'Candidates with skills in demand sectors',
          'Clean employment and criminal record'
        ],
        documents: [
          'Passport and recent photograph',
          'Job offer letter with salary breakdown',
          'Educational certificates and professional qualifications',
          'Work experience certificates',
          'Company supporting documents',
          'Medical examination results'
        ],
        benefits: [
          'Dependent Pass eligibility for spouse/children (salary ≥ SGD 6,000)',
          'Renewable work authorization',
          'Access to CPF (Central Provident Fund) contributions',
          'Professional development opportunities'
        ],
        features: [
          'Sector-specific quotas apply',
          'Skills assessment may be required',
          'Integration programs available',
          'Career progression pathway to EP'
        ]
      },
      {
        title: 'Student Pass',
        purpose: 'For full-time students enrolled in Ministry of Education (MOE) registered institutions',
        validity: 'Duration of study program',
        eligibility: [
          'Acceptance to MOE-registered educational institution',
          'Sufficient funds for tuition and living expenses',
          'Academic qualifications meeting program requirements',
          'Good character and no criminal record'
        ],
        documents: [
          'Official acceptance letter from Singapore institution',
          'Academic transcripts and certificates',
          'Passport with minimum 6 months validity',
          'Proof of financial support (bank statements/sponsorship)',
          'Medical examination report',
          'ICA (Immigration Checkpoints Authority) forms',
          'Passport-size photographs'
        ],
        benefits: [
          'Full-time study rights in Singapore',
          'Part-time work opportunities (subject to conditions)',
          'Access to world-class education system',
          'Multicultural learning environment',
          'Post-study work opportunities',
          'Pathway to skilled worker visas upon graduation'
        ],
        requirements: [
          'Enrollment in approved full-time program',
          'Maintain satisfactory academic progress',
          'Comply with work restrictions',
          'Valid health insurance coverage'
        ],
        features: [
          'Multiple entry facility',
          'Extension possible for extended programs',
          'Family visit pass facilitation',
          'Student support services access'
        ]
      },
      {
        title: 'Dependent Pass',
        purpose: 'For spouses and unmarried children of EP and S Pass holders',
        validity: 'Tied to main pass holder visa validity',
        eligibility: [
          'Spouse of EP holder (any salary) or S Pass holder (≥SGD 6,000)',
          'Unmarried children under 21 years',
          'Legal marriage/parent-child relationship proof required'
        ],
        documents: [
          'Marriage certificate (for spouse)',
          'Birth certificate (for children)',
          'Passport and photographs',
          'Main pass holder\'s employment documents',
          'Medical examination (if required)',
          'Relationship proof documents'
        ],
        benefits: [
          'Right to live in Singapore with family',
          'Eligible to apply for Letter of Consent to work',
          'Access to healthcare and education systems',
          'Multiple re-entry facility',
          'Path to PR application as family unit'
        ]
      }
    ]
  },
  {
    name: 'Dubai / UAE',
    flag: '🇦🇪',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2160&auto=format&fit=crop',
    description: 'Dubai is one of the most attractive global cities for professionals, entrepreneurs, and investors thanks to its tax-free income, business environment, and top-tier infrastructure.',
    processingTime: '3–6 weeks',
    successRate: '97%',
    visaTypes: [
      {
        title: 'Golden Visa',
        eligibility: [
          'Investors (real estate ≥ AED 2M)',
          'Entrepreneurs',
          'Researchers and PhDs',
          'Outstanding students'
        ],
        validity: '5 or 10 years',
        benefits: [
          'No sponsor required',
          'Family sponsorship allowed',
          'Pathway to long-term residency'
        ]
      },
      {
        title: 'Work Permit',
        requirements: [
          'Employer sponsorship required',
          'Medical Exam (blood test, X-ray)',
          'E-Channel Registration mandatory for employer'
        ]
      },
      {
        title: 'Investor Visa',
        purpose: 'Business setup or investments',
        options: ['Free Zone', 'Mainland'],
        documents: [
          'Trade license',
          'Bank statements',
          'Property deeds or MoU'
        ]
      },
      {
        title: 'Student Visa',
        duration: '1 year (renewable)',
        documents: [
          'University offer',
          'Emirates ID',
          'Proof of accommodation'
        ]
      }
    ]
  },
  {
    name: 'Armenia',
    flag: '🇦🇲',
    image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop',
    description: 'Armenia is known for its welcoming visa policies, low cost of living, and flexible work opportunities. Ideal for digital nomads and young professionals.',
    processingTime: '1–3 weeks',
    successRate: '99%',
    visaTypes: [
      {
        title: 'Work Permit',
        features: [
          'No Job Offer Required in Some Cases',
          'Eligible for Freelancers, remote workers, and company employees',
          'Low application fees'
        ],
        documents: [
          'Passport',
          'CV',
          'Proof of income or job'
        ]
      },
      {
        title: 'Student Visa',
        purpose: 'Public/private university education',
        advantages: [
          'Affordable tuition',
          'English-taught programs',
          'PR pathways available after graduation'
        ]
      },
      {
        title: 'Residence Permit',
        types: [
          'Temporary (1 year)',
          'Permanent (5 years)',
          'Special (10 years)'
        ],
        features: ['Family Sponsorship Available']
      },
      {
        title: 'Business Visa',
        purpose: 'For entrepreneurs setting up companies or start-ups',
        features: ['Company Registration takes less than 5 days']
      }
    ]
  },
  {
    name: 'Mauritius',
    flag: '🇲🇺',
    image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop',
    description: 'Mauritius offers a balance of natural beauty and career opportunities. Perfect for young graduates, remote workers, and students from Asia and Africa.',
    processingTime: '2–4 weeks',
    successRate: '96%',
    visaTypes: [
      {
        title: 'Young Professional Visa',
        target: 'International graduates from Mauritian institutions',
        validity: '3 years, renewable to Work Permit',
        focus: 'Finance, tech, hospitality'
      },
      {
        title: 'Student Visa',
        eligibility: 'Enrolled in tertiary institutions',
        benefits: [
          'Work up to 20 hours/week while studying',
          'Transition to Work Permit or Investor Visa post-study'
        ]
      },
      {
        title: 'Work Permit',
        requirements: [
          'Skilled professionals with local employer sponsorship',
          'Sectors in Demand: ICT, Finance, Health, Tourism'
        ]
      },
      {
        title: 'Investor Visa',
        requirements: [
          'Minimum Investment: USD 50,000 or more',
          'Benefits: Access to SEZs and tax holidays'
        ]
      }
    ]
  }
];

const stats: Stat[] = [
  { icon: Globe, value: '10+', label: 'Years Experience', color: 'text-primary' },
  { icon: TrendingUp, value: '98%', label: 'Success Rate', color: 'text-success' },
  { icon: Users, value: '5000+', label: 'Clients Served', color: 'text-warning' },
  { icon: Clock, value: '24/7', label: 'Support', color: 'text-accent' },
];

const process: ProcessStep[] = [
  {
    title: 'Document Preparation',
    description: 'Personalized checklist, translations, legalization',
    steps: [
      'Document translations (certified)',
      'Legalization and notarization',
      'Police clearance certificate',
      'Medical fitness report',
      'Proof of financial sufficiency'
    ],
    icon: FileText
  },
  {
    title: 'Application Filing',
    description: 'Professional handling of your application',
    steps: [
      'Submission to embassy/immigration authority',
      'Handling embassy queries and interviews',
      'Tracking progress in real time',
      'Coordination with institutions/employers'
    ],
    icon: CheckCircle
  },
  {
    title: 'Visa Issuance',
    description: 'Final steps and documentation',
    steps: [
      'Visa stamping and passport return',
      'Pre-departure orientation',
      'Documentation verification',
      'Final approval process'
    ],
    icon: Award
  },
  {
    title: 'Relocation Support',
    description: 'Comprehensive settlement assistance',
    steps: [
      'Airport pickup (on request)',
      'Accommodation assistance',
      'Local SIM, bank account setup',
      'Registration support'
    ],
    icon: Plane
  }
];

const whyChooseUs: Feature[] = [
  {
    title: 'Expert Consultants',
    description: 'Licensed immigration consultants with regional expertise',
    icon: Users
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear fee structure with no hidden charges',
    icon: DollarSign
  },
  {
    title: 'Multilingual Support',
    description: 'Assistance in English, Russian, French, Arabic',
    icon: Globe
  },
  {
    title: 'Fast Processing',
    description: 'Expedited processing with real-time updates',
    icon: Clock
  }
];

export default function ImmigrationPage() {
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
    setMessageType('Consultation Scheduled');
    setShowContactMessage(true);
    setTimeout(() => setShowContactMessage(false), 3000);
  };

  const handleSendMessage = () => {
    setMessageType('Message Sent');
    setShowContactMessage(true);
    setTimeout(() => setShowContactMessage(false), 3000);
  };

  const handleLearnMore = () => {
    setMessageType('More Information');
    setShowContactMessage(true);
    setTimeout(() => setShowContactMessage(false), 3000);
  };
  
  const renderRequirements = (requirements: string[] | undefined) => {
    if (!requirements) return null;
    return requirements.map((req: string, index: number) => (
      <li key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-0.5" />
        <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{req}</span>
      </li>
    ));
  };

  const renderDocuments = (documents: string[] | undefined) => {
    if (!documents) return null;
    return documents.map((doc: string, index: number) => (
      <li key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
        <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0 mt-0.5" />
        <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{doc}</span>
      </li>
    ));
  };

  const renderSteps = (steps: string[] | undefined) => {
    if (!steps) return null;
    return steps.map((step: string, index: number) => (
      <li key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 flex-shrink-0 mt-0.5" />
        <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{step}</span>
      </li>
    ));
  };

  const renderBenefits = (benefits: string[] | undefined) => {
    if (!benefits) return null;
    return benefits.map((benefit: string, index: number) => (
      <li key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors">
        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
        <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{benefit}</span>
      </li>
    ));
  };

  return (
    <div className="min-h-screen">
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

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
              alt="Immigration background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
          <div className="container relative z-10 text-white px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto text-center lg:text-left"
            >
              <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 lg:mb-8 border border-white/20">
                <span className="text-sm sm:text-base font-medium">🌍 Trusted by 5000+ clients worldwide</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                Your Gateway to Global Opportunities
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                At RK Visa Solutions, we provide personalized, legally compliant, and results-driven visa solutions for individuals and organizations across five major countries. With a 98% success rate and over a decade of immigration expertise, we ensure a smooth and successful immigration journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-8 lg:mb-10 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl px-8 py-4 sm:px-10 sm:py-5 shadow-2xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg">
                  <Link href="/assessment">
                    <span className="font-semibold">Free Assessment</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-2xl px-8 py-4 sm:px-10 sm:py-5 backdrop-blur-sm text-base sm:text-lg" onClick={() => handleDownloadGuide('General Immigration')}>
                  <Download className="mr-2 h-5 w-5" />
                  <span>Download Guide</span>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>98% Success Rate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="text-center"
                    >
                  <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 h-full">
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100">
                        <stat.icon className={`h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg">{stat.label}</div>
                  </div>
                    </motion.div>
              ))}
              </div>
          </div>
        </section>

        {/* Countries Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
                  Visa Solutions by Country
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4">
                Explore our comprehensive visa and immigration services across five major countries, each offering unique opportunities for work, study, business, and residency.
              </p>
              </motion.div>
            </div>

            <div className="mb-8 sm:mb-12 lg:mb-16 flex justify-center px-4">
              <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-slate-200 w-full max-w-md">
                <Select 
                  value={selectedCountry.name.toLowerCase()} 
                  onValueChange={(value) => {
                    const country = countries.find(c => c.name.toLowerCase() === value);
                    if (country) setSelectedCountry(country);
                  }}
                >
                  <SelectTrigger className="w-full rounded-xl border-0 bg-transparent text-base sm:text-lg font-medium py-3 sm:py-4">
                    <SelectValue>
                      <div className="flex items-center gap-3">
                        <span className="text-xl sm:text-2xl">{selectedCountry.flag}</span>
                        <span className="text-base sm:text-lg">{selectedCountry.name}</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl w-full">
                {countries.map((country) => (
                      <SelectItem 
                    key={country.name}
                    value={country.name.toLowerCase()}
                        className="rounded-xl text-base sm:text-lg py-3 sm:py-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg sm:text-xl">{country.flag}</span>
                          <span className="text-base sm:text-lg">{country.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <motion.div
              key={selectedCountry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 text-white shadow-2xl">
                <div className="absolute inset-0">
                  <Image
                    src={selectedCountry.image}
                    alt={selectedCountry.name}
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                      <span className="text-sm font-medium">{selectedCountry.flag} Country Guide</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      {selectedCountry.name} Immigration Services
                    </h3>
                    <p className="text-blue-100 mb-8 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                      {selectedCountry.description}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                      <Clock className="h-8 w-8 mb-3 text-blue-200 mx-auto" />
                      <div className="text-sm text-blue-200 mb-1">Processing Time</div>
                      <div className="font-bold text-lg">{selectedCountry.processingTime}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                      <TrendingUp className="h-8 w-8 mb-3 text-green-200 mx-auto" />
                      <div className="text-sm text-green-200 mb-1">Success Rate</div>
                      <div className="font-bold text-lg">{selectedCountry.successRate}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                      <FileText className="h-8 w-8 mb-3 text-purple-200 mx-auto" />
                      <div className="text-sm text-purple-200 mb-1">Visa Types</div>
                      <div className="font-bold text-lg">{selectedCountry.visaTypes.length}+</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                      <Users className="h-8 w-8 mb-3 text-yellow-200 mx-auto" />
                      <div className="text-sm text-yellow-200 mb-1">Expert Support</div>
                      <div className="font-bold text-lg">24/7</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-gradient-to-r from-white to-blue-100 text-blue-600 hover:from-blue-50 hover:to-white rounded-2xl px-8 py-4 font-semibold shadow-xl" onClick={() => handleDownloadGuide(selectedCountry.name)}>
                        <Download className="mr-2 h-5 w-5" />
                        Download {selectedCountry.name} Guide
                      </Button>
                      <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-2xl px-8 py-4 backdrop-blur-sm" onClick={handleScheduleConsultation}>
                        <Phone className="mr-2 h-5 w-5" />
                        Schedule Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:gap-6">
              {selectedCountry.visaTypes.map((visa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50">
                    <CardHeader className="pb-4 sm:pb-5 px-4 sm:px-6 pt-4 sm:pt-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <CardTitle className="text-xl sm:text-2xl text-slate-800 leading-tight">{visa.title}</CardTitle>
                        <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                          {visa.validity || visa.duration || 'Available'}
                        </div>
                      </div>
                      {visa.purpose && (
                        <CardDescription className="text-slate-600 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
                          {visa.purpose}
                        </CardDescription>
                      )}
                        </CardHeader>
                    <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <Accordion type="single" collapsible className="w-full">
                            {visa.requirements && (
                          <AccordionItem value="requirements" className="border-slate-200">
                            <AccordionTrigger className="text-base sm:text-lg font-semibold text-slate-700 hover:text-blue-600 py-3 sm:py-4">
                              📋 Requirements & Eligibility
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-5 mt-3 sm:mt-4">
                                <ul className="space-y-2 sm:space-y-3">
                                  {renderRequirements(visa.requirements)}
                                </ul>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                        {visa.eligibility && (
                          <AccordionItem value="eligibility" className="border-slate-200">
                            <AccordionTrigger className="text-base sm:text-lg font-semibold text-slate-700 hover:text-blue-600 py-3 sm:py-4">
                              ✅ Eligibility Criteria
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 mt-3 sm:mt-4">
                                <ul className="space-y-2 sm:space-y-3">
                                  {Array.isArray(visa.eligibility) ? renderRequirements(visa.eligibility) : 
                                   <li className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
                                     <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                     <span className="text-gray-700 text-sm sm:text-base">{visa.eligibility}</span>
                                   </li>
                                  }
                                </ul>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                            )}
                            {visa.documents && (
                          <AccordionItem value="documents" className="border-slate-200">
                            <AccordionTrigger className="text-base sm:text-lg font-semibold text-slate-700 hover:text-blue-600 py-3 sm:py-4">
                              📄 Required Documents
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 sm:p-5 mt-3 sm:mt-4">
                                <ul className="space-y-2 sm:space-y-3">
                                  {renderDocuments(visa.documents)}
                                </ul>
                                <div className="mt-4 p-3 sm:p-4 bg-blue-100 rounded-lg">
                                  <p className="text-xs sm:text-sm text-blue-800 font-medium">
                                    💡 <strong>Pro Tip:</strong> We provide complete document preparation and verification services to ensure your application is perfect.
                                  </p>
                        </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                            )}
                            {visa.benefits && (
                          <AccordionItem value="benefits" className="border-slate-200">
                            <AccordionTrigger className="text-base sm:text-lg font-semibold text-slate-700 hover:text-blue-600 py-3 sm:py-4">
                              🎯 Benefits & Advantages
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 sm:p-5 mt-3 sm:mt-4">
                                <ul className="space-y-2 sm:space-y-3">
                                  {renderBenefits(visa.benefits)}
                          </ul>
                        </div>
                            </AccordionContent>
                          </AccordionItem>
                            )}
                            {visa.features && (
                          <AccordionItem value="features" className="border-slate-200">
                            <AccordionTrigger className="text-base sm:text-lg font-semibold text-slate-700 hover:text-blue-600 py-3 sm:py-4">
                              ⭐ Key Features
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 sm:p-5 mt-3 sm:mt-4">
                                <ul className="space-y-2 sm:space-y-3">
                                  {renderSteps(visa.features)}
                                </ul>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        )}
                        <AccordionItem value="contact" className="border-slate-200">
                          <AccordionTrigger className="text-base sm:text-lg font-semibold text-slate-700 hover:text-blue-600 py-3 sm:py-4">
                            📞 Get Expert Guidance
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 sm:p-5 mt-3 sm:mt-4 text-white">
                              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Ready to Apply for {visa.title}?</h4>
                              <p className="text-blue-100 mb-4 sm:mb-5 text-sm sm:text-base">
                                Our immigration experts are ready to guide you through every step of the {visa.title} application process. 
                                Get personalized consultation and ensure your success.
                              </p>
                              <div className="grid sm:grid-cols-2 gap-3 mb-4 sm:mb-5">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                  <h5 className="font-semibold mb-1 text-sm sm:text-base">📞 Free Consultation</h5>
                                  <p className="text-xs sm:text-sm text-blue-100">30-minute strategy session</p>
                          </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                  <h5 className="font-semibold mb-1 text-sm sm:text-base">📝 Document Review</h5>
                                  <p className="text-xs sm:text-sm text-blue-100">Complete application check</p>
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 rounded-lg flex-1 text-sm" onClick={handleScheduleConsultation}>
                                  <Phone className="mr-2 h-4 w-4" />
                                  Schedule Call
                                </Button>
                                <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-lg flex-1 text-sm" onClick={handleSendMessage}>
                                  <Mail className="mr-2 h-4 w-4" />
                                  Send Message
                                </Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                        </CardContent>
                      </Card>
                </motion.div>
                    ))}
                  </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Immigration Process
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
                  We follow a streamlined process to ensure your visa application is handled efficiently and professionally with personalized attention at every step.
                </p>
              </motion.div>
                        </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex"
                >
                  <Card className="relative w-full flex flex-col bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl border-0 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon Section */}
                    <div className="relative z-10 pt-4 sm:pt-5 px-4 sm:px-6">
                      <div className="flex justify-center">
                        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                          <step.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                          <div className="absolute -bottom-1 -right-1 bg-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold text-blue-600 shadow-md">
                            {index + 1}
                      </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="flex-1 flex flex-col pt-3 sm:pt-4 pb-5 sm:pb-6 px-4 sm:px-6 relative z-10">
                      <div className="text-center mb-4">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-800 leading-tight">{step.title}</h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
                      </div>
                      
                      {/* Steps List */}
                      <div className="bg-slate-50 rounded-xl p-3 sm:p-4 flex-1">
                        <ul className="space-y-2 h-full flex flex-col justify-center">
                          {step.steps.slice(0, 3).map((stepItem, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2 p-2 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                              <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{stepItem}</span>
                            </li>
                          ))}
                          {step.steps.length > 3 && (
                            <li className="text-center">
                              <span className="text-xs text-slate-500">+{step.steps.length - 3} more steps</span>
                            </li>
                          )}
                        </ul>
                        </div>
                      </CardContent>
                    </Card>
                  
                  {/* Connecting line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 z-0"></div>
                  )}
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-slate-100">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
                  Why Choose RK Visa Solutions
                </h2>
                <p className="text-slate-600 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4">
                  With over a decade of experience in global immigration services, we provide comprehensive support tailored to your needs with unmatched expertise and dedication.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex"
                >
                  <Card className="text-center w-full flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl border-0 bg-gradient-to-br from-white to-slate-50/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="flex-1 flex flex-col pt-10 sm:pt-12 lg:pt-16 pb-8 sm:pb-10 lg:pb-12 px-6 sm:px-8 lg:px-10 relative z-10">
                      <div className="flex flex-col items-center flex-1">
                        <div className="inline-flex items-center justify-center w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 sm:mb-8 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                          <feature.icon className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
                      </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 text-slate-800 group-hover:text-blue-700 transition-colors leading-tight">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8 flex-1">{feature.description}</p>
                      </div>
                      
                      <div className="mt-auto p-4 sm:p-5 lg:p-6 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                        <div className="text-sm sm:text-base font-medium text-blue-700">Available 24/7</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Additional features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Join thousands of satisfied clients who have successfully achieved their immigration goals with our expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-2xl px-8 py-4 font-semibold" onClick={handleScheduleConsultation}>
                    Start Your Journey
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-2xl px-8 py-4" onClick={handleLearnMore}>
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Contact background"
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
          
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <span className="text-sm font-medium">📞 Ready to start your journey?</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Let's Make Your Dreams Reality
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Contact us today for a free consultation and let us help you achieve your global aspirations with personalized guidance every step of the way.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  <Phone className="h-8 w-8 text-blue-300 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Phone Consultation</h3>
                  <p className="text-blue-100 text-sm">Schedule a free 30-minute call</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  <Mail className="h-8 w-8 text-green-300 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Email Support</h3>
                  <p className="text-green-100 text-sm">Get detailed written guidance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  <Calendar className="h-8 w-8 text-purple-300 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">In-Person Meeting</h3>
                  <p className="text-purple-100 text-sm">Meet our experts personally</p>
                </div>
              </div>
              
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl px-8 py-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    <span className="text-lg font-semibold">Schedule a Call</span>
                  </Link>
                  </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-2xl px-8 py-4 backdrop-blur-sm" onClick={handleSendMessage}>
                  <Mail className="mr-2 h-5 w-5" />
                  <span className="text-lg">Send Message</span>
                  </Button>
                </div>
              
              <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Free Consultation</span>
              </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Personalized Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}