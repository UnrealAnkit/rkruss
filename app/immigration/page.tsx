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
 Plane,
 Info,
 Facebook,
 Twitter,
 Instagram,
 Linkedin,
 Youtube,
 MessageCircle
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CountryInfo {
 name: string;
 flag: string;
 processingTime: string;
 successRate: string;
 requirements?: string[];
 documents?: string[];
 benefits?: string[];
 features?: string[];
 validity?: string;
 salary?: string;
 specialNotes?: string[];
}

interface VisaCategory {
 title: string;
 description: string;
 icon: LucideIcon;
 countries: {
 [key: string]: CountryInfo;
 }
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

const visaCategories: VisaCategory[] = [
 {
 title: "Work Visa Solutions",
 description: "Comprehensive work permit and employment visa solutions for professionals seeking international career opportunities",
 icon: Briefcase,
 countries: {
 "Russia": {
 name: "Russia",
 flag: "🇷🇺",
 processingTime: "2-4 weeks",
 successRate: "98%",
 requirements: [
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
 validity: "Up to 3 years (extendable)",
 specialNotes: [
 "HQS visa available for high-salary positions (2M+ RUB annually)",
 "Fast-track processing available for priority sectors"
 ]
 },
 "Singapore": {
 name: "Singapore",
 flag: "🇸🇬",
 processingTime: "2-3 weeks",
 successRate: "95%",
 requirements: [
 "Job offer from Singapore-registered company",
 "Relevant qualifications and experience",
 "Meet minimum salary requirements",
 "Company must justify hiring foreign talent"
 ],
 documents: [
 "Employment Pass application through EPOL",
 "Educational certificates",
 "Passport copy",
 "Professional certificates",
 "Detailed resume"
 ],
 benefits: [
 "Dependent Pass eligibility",
 "Path to Permanent Residency",
 "Access to healthcare system",
 "Professional mobility"
 ],
 validity: "Up to 2 years (renewable)",
 salary: "Minimum SGD 5,000 (EP) / SGD 3,150 (S Pass)"
 },
 "UAE": {
 name: "UAE",
 flag: "🇦🇪",
 processingTime: "3-6 weeks",
 successRate: "97%",
 requirements: [
 "Employer sponsorship required",
 "Medical Exam (blood test, X-ray)",
 "E-Channel Registration mandatory for employer"
 ],
 documents: [
 "Employment contract",
 "Educational certificates",
 "Passport copy",
 "Medical fitness certificate"
 ],
 benefits: [
 "Tax-free income",
 "Family visa eligibility",
 "Healthcare coverage",
 "Multiple entry visa"
 ],
 validity: "2 years (renewable)"
 },
 "Armenia": {
 name: "Armenia",
 flag: "🇦🇲",
 processingTime: "1-3 weeks",
 successRate: "99%",
 requirements: [
 "No Job Offer Required in Some Cases",
 "Valid passport",
 "Clean criminal record",
 "Proof of accommodation"
 ],
 benefits: [
 "Flexible work opportunities",
 "Low cost of living",
 "Simple application process",
 "Digital nomad friendly"
 ],
 validity: "1 year (renewable)"
 },
 "Mauritius": {
 name: "Mauritius",
 flag: "🇲🇺",
 processingTime: "2-4 weeks",
 successRate: "96%",
 requirements: [
 "Skilled professionals with local employer sponsorship",
 "Relevant qualifications",
 "Clean criminal record"
 ],
 benefits: [
 "Tax advantages",
 "Quality of life",
 "Family inclusion",
 "Path to residency"
 ],
 validity: "3 years (Young Professional) / 2 years (Work Permit)"
 }
 }
 },
 {
 title: "Student Visa Solutions",
 description: "Educational visa options for international students pursuing academic opportunities abroad",
 icon: GraduationCap,
 countries: {
 "Russia": {
 name: "Russia",
 flag: "🇷🇺",
 processingTime: "2-4 weeks",
 successRate: "98%",
 requirements: [
 "Acceptance to Russian educational institution",
 "Proof of financial support (minimum $2,000/year)",
 "Medical fitness clearance",
 "Academic prerequisites met"
 ],
 documents: [
 "Official admission letter",
 "Academic transcripts (apostilled)",
 "High school/university diploma",
 "Proof of funds",
 "Medical clearance certificate",
 "HIV test results"
 ],
 benefits: [
 "Post-Study Work Option",
 "Part-time work permission",
 "Cultural exchange opportunities",
 "Language immersion"
 ],
 validity: "Duration of study program (1-6 years)"
 },
 "Singapore": {
 name: "Singapore",
 flag: "🇸🇬",
 processingTime: "2-3 weeks",
 successRate: "95%",
 requirements: [
 "Acceptance to MOE-registered institution",
 "Sufficient funds for tuition and living",
 "Good academic record",
 "Health insurance coverage"
 ],
 documents: [
 "Acceptance letter",
 "Academic records",
 "Financial statements",
 "Health declaration"
 ],
 benefits: [
 "World-class education",
 "Part-time work options",
 "Post-study opportunities",
 "Safe environment"
 ],
 validity: "Duration of course"
 },
 "UAE": {
 name: "UAE",
 flag: "🇦🇪",
 processingTime: "3-6 weeks",
 successRate: "97%",
 requirements: [
 "University offer",
 "Emirates ID",
 "Proof of accommodation",
 "Financial guarantee"
 ],
 benefits: [
 "Quality education",
 "Modern facilities",
 "Cultural exposure",
 "Safe environment"
 ],
 validity: "1 year (renewable)"
 },
 "Armenia": {
 name: "Armenia",
 flag: "🇦🇲",
 processingTime: "1-3 weeks",
 successRate: "99%",
 requirements: [
 "University acceptance",
 "Proof of funds",
 "Valid passport",
 "Health insurance"
 ],
 benefits: [
 "Affordable tuition",
 "English-taught programs",
 "PR pathways available",
 "Rich cultural experience"
 ],
 validity: "1 year (renewable)"
 },
 "Mauritius": {
 name: "Mauritius",
 flag: "🇲🇺",
 processingTime: "2-4 weeks",
 successRate: "96%",
 requirements: [
 "Enrolled in tertiary institutions",
 "Financial proof",
 "Health insurance",
 "Clean record"
 ],
 benefits: [
 "Work while studying",
 "Post-study options",
 "Quality education",
 "Beautiful environment"
 ],
 validity: "Duration of study"
 }
 }
 },
 {
 title: "Business & Investor Visa Solutions",
 description: "Strategic visa options for entrepreneurs and investors looking to expand their business globally",
 icon: Building,
 countries: {
 "Russia": {
 name: "Russia",
 flag: "🇷🇺",
 processingTime: "2-4 weeks",
 successRate: "98%",
 requirements: [
 "Business registration documents",
 "Investment proof",
 "Business plan",
 "Financial statements"
 ],
 documents: [
 "Letter of invitation from Russian entity",
 "Bank statements",
 "Business registration",
 "Travel insurance"
 ],
 benefits: [
 "Multiple entries",
 "Business networking",
 "Market exploration",
 "Investment opportunities"
 ],
 validity: "30 days to 1 year"
 },
 "UAE": {
 name: "UAE",
 flag: "🇦🇪",
 processingTime: "3-6 weeks",
 successRate: "97%",
 requirements: [
 "Minimum investment: Varies by zone",
 "Business plan",
 "Financial capability proof",
 "Company registration"
 ],
 benefits: [
 "100% ownership",
 "Tax benefits",
 "Repatriation rights",
 "Family visas"
 ],
 validity: "3 years (renewable)"
 },
 "Armenia": {
 name: "Armenia",
 flag: "🇦🇲",
 processingTime: "1-3 weeks",
 successRate: "99%",
 requirements: [
 "Business registration",
 "Investment proof",
 "Business plan",
 "Local employee hiring plan"
 ],
 benefits: [
 "Fast company setup",
 "Low taxes",
 "Simple process",
 "Strategic location"
 ],
 validity: "1 year (renewable)"
 },
 "Mauritius": {
 name: "Mauritius",
 flag: "🇲🇺",
 processingTime: "2-4 weeks",
 successRate: "96%",
 requirements: [
 "Minimum Investment: USD 50,000",
 "Business plan",
 "Financial proof",
 "Company registration"
 ],
 benefits: [
 "Tax holidays",
 "SEZ access",
 "Easy banking",
 "Strategic location"
 ],
 validity: "10 years (Premium)"
 }
 }
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

const socialLinks = [
 { name: 'Facebook', href: 'https://facebook.com/rkvisasolutions', icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700 text-white' },
 { name: 'Twitter', href: 'https://twitter.com/rkvisasolutions', icon: Twitter, color: 'bg-sky-500 hover:bg-sky-600 text-white' },
 { name: 'Instagram', href: 'https://instagram.com/rkvisasolutions', icon: Instagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' },
 { name: 'LinkedIn', href: 'https://linkedin.com/company/rkvisasolutions', icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800 text-white' },
 { name: 'YouTube', href: 'https://youtube.com/@rkvisasolutions', icon: Youtube, color: 'bg-red-600 hover:bg-red-700 text-white' },
];

export default function ImmigrationPage() {
 const [selectedVisaType, setSelectedVisaType] = useState(visaCategories[0]);
 const [selectedCountry, setSelectedCountry] = useState(Object.keys(visaCategories[0].countries)[0]);
 const [showDownloadMessage, setShowDownloadMessage] = useState(false);
 const [showContactMessage, setShowContactMessage] = useState(false);
 const [messageType, setMessageType] = useState('');

 const handleDownloadGuide = (visaType: string) => {
 setMessageType(`${visaType} Guide`);
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
 <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 mt-20">
 {/* Left Side Social Media Icons */}
 <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col space-y-2">
 {socialLinks.map((social) => {
 const Icon = social.icon;
 return (
 <Link
 key={social.name}
 href={social.href}
 className={`p-3 backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:scale-110 ${social.color} shadow-lg hover:shadow-xl border border-white/20`}
 aria-label={social.name}
 target="_blank"
 rel="noopener noreferrer"
 >
 <Icon className="h-5 w-5" />
 </Link>
 );
 })}
 </div>

 {/* WhatsApp Float Button */}
 <Link
 href="https://wa.me/1234567890"
 className="fixed bottom-20 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
 aria-label="Contact us on WhatsApp"
 target="_blank"
 rel="noopener noreferrer"
 >
 <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
 </svg>
 </Link>

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
 <p className="text-lg text-white/80 leading-relaxed mb-8">
 Explore our comprehensive visa solutions across multiple countries, tailored to your specific needs and goals.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-8 lg:mb-10 justify-center lg:justify-start">
 <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl px-8 py-4 sm:px-10 sm:py-5 shadow-2xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg">
 <Link href="/assessment">
 <span className="font-semibold">Free Assessment</span>
 </Link>
 </Button>
 <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20 rounded-2xl px-8 py-4 sm:px-10 sm:py-5 backdrop-blur-sm text-base sm:text-lg" onClick={() => handleDownloadGuide('General Immigration')}>
                   <Download className="mr-2 h-5 w-5" />
                  <span>Get Started</span>
 </Button>
 </div>
 </motion.div>
 </div>
 </section>

 {/* Visa Categories Section */}
 <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
 <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
 <div className="text-center mb-12">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 >
 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
 Global Visa Solutions
 </h2>
 <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
 Choose your visa type and explore options across different countries
 </p>
 </motion.div>
 </div>

 <div className="mb-8">
 <Tabs defaultValue={selectedVisaType.title} className="w-full">
 <TabsList className="grid grid-cols-3 max-w-3xl mx-auto mb-8">
 {visaCategories.map((category) => (
 <TabsTrigger
 key={category.title}
 value={category.title}
 onClick={() => {
 setSelectedVisaType(category);
 setSelectedCountry(Object.keys(category.countries)[0]);
 }}
 className="text-base sm:text-lg py-3"
 >
 <category.icon className="w-5 h-5 mr-2" />
 {category.title.split(' ')[0]}
 </TabsTrigger>
 ))}
 </TabsList>

 {visaCategories.map((category) => (
 <TabsContent key={category.title} value={category.title}>
 <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white mb-8">
 <div className="text-center mb-6">
 <h3 className="text-3xl font-bold mb-3">{category.title}</h3>
 <p className="text-blue-100 text-lg">{category.description}</p>
 </div>

 <div className="max-w-md mx-auto">
 <Select
 value={selectedCountry}
 onValueChange={setSelectedCountry}
 >
 <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
 <SelectValue>
 <div className="flex items-center gap-2">
 <span className="text-2xl">
 {category.countries[selectedCountry].flag}
 </span>
 <span>{category.countries[selectedCountry].name}</span>
 </div>
 </SelectValue>
 </SelectTrigger>
 <SelectContent>
 {Object.entries(category.countries).map(([key, country]) => (
 <SelectItem key={key} value={key}>
 <div className="flex items-center gap-2">
 <span className="text-xl">{country.flag}</span>
 <span>{country.name}</span>
 </div>
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>
 </div>

 <div className="grid gap-6">
 <Card className="rounded-2xl border-0 shadow-lg">
 <CardHeader>
 <CardTitle className="flex items-center gap-3">
 <span className="text-2xl">{category.countries[selectedCountry].flag}</span>
 <span>{category.countries[selectedCountry].name} - {category.title}</span>
 </CardTitle>
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
 <div className="bg-blue-50 p-4 rounded-xl">
 <div className="text-sm text-blue-600">Processing Time</div>
 <div className="font-bold">{category.countries[selectedCountry].processingTime}</div>
 </div>
 <div className="bg-green-50 p-4 rounded-xl">
 <div className="text-sm text-green-600">Success Rate</div>
 <div className="font-bold">{category.countries[selectedCountry].successRate}</div>
 </div>
 {category.countries[selectedCountry].validity && (
 <div className="bg-purple-50 p-4 rounded-xl">
 <div className="text-sm text-purple-600">Validity</div>
 <div className="font-bold">{category.countries[selectedCountry].validity}</div>
 </div>
 )}
 {category.countries[selectedCountry].salary && (
 <div className="bg-amber-50 p-4 rounded-xl">
 <div className="text-sm text-amber-600">Minimum Salary</div>
 <div className="font-bold">{category.countries[selectedCountry].salary}</div>
 </div>
 )}
 </div>
 </CardHeader>
 <CardContent>
 <Accordion type="single" collapsible>
 {category.countries[selectedCountry].requirements && (
 <AccordionItem value="requirements">
 <AccordionTrigger>Requirements</AccordionTrigger>
 <AccordionContent>
 <ul className="space-y-2">
 {category.countries[selectedCountry].requirements?.map((req, index) => (
 <li key={index} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg">
 <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
 <span>{req}</span>
 </li>
 ))}
 </ul>
 </AccordionContent>
 </AccordionItem>
 )}
 {category.countries[selectedCountry].documents && (
 <AccordionItem value="documents">
 <AccordionTrigger>Required Documents</AccordionTrigger>
 <AccordionContent>
 <ul className="space-y-2">
 {category.countries[selectedCountry].documents?.map((doc, index) => (
 <li key={index} className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg">
 <FileText className="h-5 w-5 text-blue-500 mt-0.5" />
 <span>{doc}</span>
 </li>
 ))}
 </ul>
 </AccordionContent>
 </AccordionItem>
 )}
 {category.countries[selectedCountry].benefits && (
 <AccordionItem value="benefits">
 <AccordionTrigger>Benefits</AccordionTrigger>
 <AccordionContent>
 <ul className="space-y-2">
 {category.countries[selectedCountry].benefits?.map((benefit, index) => (
 <li key={index} className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
 <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
 <span>{benefit}</span>
 </li>
 ))}
 </ul>
 </AccordionContent>
 </AccordionItem>
 )}
 {category.countries[selectedCountry].specialNotes && (
 <AccordionItem value="special-notes">
 <AccordionTrigger>Special Notes</AccordionTrigger>
 <AccordionContent>
 <ul className="space-y-2">
 {category.countries[selectedCountry].specialNotes?.map((note, index) => (
 <li key={index} className="flex items-start gap-2 bg-purple-50 p-3 rounded-lg">
 <Info className="h-5 w-5 text-purple-500 mt-0.5" />
 <span>{note}</span>
 </li>
 ))}
 </ul>
 </AccordionContent>
 </AccordionItem>
 )}
 </Accordion>
 </CardContent>
 </Card>
 </div>
 </TabsContent>
 ))}
 </Tabs>
 </div>
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
 {step.steps.slice(0, 3).map((stepItem: string, stepIndex: number) => (
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
