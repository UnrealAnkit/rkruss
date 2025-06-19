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
 Briefcase,
 CheckCircle,
 FileText,
 Phone,
 Mail,
 Download,
 Clock,
 TrendingUp,
 Users,
 DollarSign,
 Info
} from 'lucide-react';

interface WorkVisaCountry {
 name: string;
 flag: string;
 image: string;
 processingTime: string;
 successRate: string;
 validity: string;
 minSalary?: string;
 requirements: string[];
 documents: string[];
 benefits: string[];
 specialNotes?: string[];
}

const workVisaCountries: WorkVisaCountry[] = [
 {
 name: "Russia",
 flag: "🇷🇺",
 image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2070&auto=format&fit=crop",
 processingTime: "2-4 weeks",
 successRate: "98%",
 validity: "Up to 3 years (extendable)",
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
 specialNotes: [
 "HQS visa available for high-salary positions (2M+ RUB annually)",
 "Fast-track processing available for priority sectors",
 "Spouse and children can obtain dependent visas"
 ]
 },
 {
 name: "Singapore",
 flag: "🇸🇬",
 image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2070&auto=format&fit=crop",
 processingTime: "2-3 weeks",
 successRate: "95%",
 validity: "Up to 2 years (renewable)",
 minSalary: "SGD 5,000 (EP) / SGD 3,150 (S Pass)",
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
 "Detailed resume",
 "Company supporting documents"
 ],
 benefits: [
 "Dependent Pass eligibility for family",
 "Path to Permanent Residency after 2+ years",
 "Access to world-class healthcare system",
 "Professional mobility within Singapore",
 "Tax residency benefits"
 ],
 specialNotes: [
 "Employment Pass for professionals and managers",
 "S Pass for mid-level skilled workers",
 "Fast-track processing available for certain sectors"
 ]
 },
 {
 name: "UAE",
 flag: "🇦🇪",
 image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2160&auto=format&fit=crop",
 processingTime: "3-6 weeks",
 successRate: "97%",
 validity: "2 years (renewable)",
 requirements: [
 "Employer sponsorship required",
 "Medical examination (blood test, X-ray)",
 "E-Channel Registration mandatory for employer",
 "Valid employment contract"
 ],
 documents: [
 "Employment contract",
 "Educational certificates (attested)",
 "Passport copy with 6 months validity",
 "Medical fitness certificate",
 "Passport photographs",
 "No objection certificate (if applicable)"
 ],
 benefits: [
 "Tax-free income",
 "Family visa eligibility",
 "Comprehensive healthcare coverage",
 "Multiple entry visa facility",
 "Golden Visa pathway for qualified professionals"
 ],
 specialNotes: [
 "Golden Visa available for investors and highly skilled professionals",
 "Different visa categories for different emirates",
 "Labor card required for work authorization"
 ]
 },
 {
 name: "Armenia",
 flag: "🇦🇲",
 image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop",
 processingTime: "1-3 weeks",
 successRate: "99%",
 validity: "1 year (renewable)",
 requirements: [
 "Valid passport with 6 months validity",
 "Clean criminal record",
 "Proof of accommodation in Armenia",
 "Health insurance (recommended)"
 ],
 documents: [
 "Passport and passport photos",
 "CV and professional qualifications",
 "Proof of income or job offer",
 "Accommodation proof",
 "Health insurance policy"
 ],
 benefits: [
 "Flexible work opportunities for freelancers",
 "Low cost of living",
 "Simple application process",
 "Digital nomad friendly environment",
 "EU proximity advantages"
 ],
 specialNotes: [
 "No job offer required in some cases",
 "Ideal for remote workers and digital nomads",
 "Pathway to permanent residency available"
 ]
 },
 {
 name: "Mauritius",
 flag: "🇲🇺",
 image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop",
 processingTime: "2-4 weeks",
 successRate: "96%",
 validity: "3 years (Young Professional) / 2 years (Work Permit)",
 requirements: [
 "Skilled professionals with local employer sponsorship",
 "Relevant qualifications and experience",
 "Clean criminal record",
 "Medical fitness certificate"
 ],
 documents: [
 "Employment contract with Mauritian employer",
 "Educational certificates",
 "Police clearance certificate",
 "Medical certificate",
 "Passport with 6 months validity",
 "Professional experience certificates"
 ],
 benefits: [
 "Tax advantages and incentives",
 "High quality of life",
 "Family inclusion possible",
 "Path to permanent residency",
 "Strategic location for business"
 ],
 specialNotes: [
 "Young Professional Visa for recent graduates",
 "Priority sectors: ICT, Finance, Healthcare, Tourism",
 "Transition to investor visa possible"
 ]
 }
];

export default function WorkVisaPage() {
 const [selectedCountry, setSelectedCountry] = useState(workVisaCountries[0]);
 const [showDownloadMessage, setShowDownloadMessage] = useState(false);
 const [showContactMessage, setShowContactMessage] = useState(false);
 const [messageType, setMessageType] = useState('');

 const handleDownloadGuide = (countryName: string) => {
 setMessageType(`${countryName} Work Visa Guide`);
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
 <div className="absolute inset-0">
 <Image
 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
 alt="Work visa background"
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
 className="max-w-6xl mx-auto text-center"
 >
 <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
 <span className="text-base font-medium flex items-center gap-2">
 <Briefcase className="w-5 h-5" />
 Work Visa Solutions
 </span>
 </div>
 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
 Global Work Visa Solutions
 </h1>
 <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-4xl mx-auto">
 Unlock international career opportunities with our comprehensive work visa services across multiple countries. From tech hubs to emerging markets, we'll help you navigate the path to your dream job abroad.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl px-8 py-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
 <Link href="/assessment">
 <span className="font-semibold">Free Assessment</span>
 </Link>
 </Button>
 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 rounded-2xl px-8 py-4 backdrop-blur-sm bg-white/10" onClick={() => handleDownloadGuide('Work Visa')}>
                   <Download className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Get Started</span>
 </Button>
 </div>
 </motion.div>
 </div>
 </section>

 {/* Countries Selection */}
 <section className="py-16 bg-gradient-to-b from-white to-slate-50">
 <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
 <div className="text-center mb-12">
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
 Choose Your Destination
 </h2>
 <p className="text-slate-600 max-w-3xl mx-auto text-lg">
 Explore work visa opportunities across different countries and find the perfect match for your career goals.
 </p>
 </div>

 {/* Country Tabs */}
 <Tabs defaultValue={selectedCountry.name} className="w-full">
 <TabsList className="grid grid-cols-2 md:grid-cols-5 max-w-4xl mx-auto mb-8">
 {workVisaCountries.map((country) => (
 <TabsTrigger
 key={country.name}
 value={country.name}
 onClick={() => setSelectedCountry(country)}
 className="text-base py-3"
 >
 <span className="text-xl mr-2">{country.flag}</span>
 {country.name}
 </TabsTrigger>
 ))}
 </TabsList>

 {workVisaCountries.map((country) => (
 <TabsContent key={country.name} value={country.name}>
 {/* Country Hero */}
 <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white mb-8">
 <div className="absolute inset-0">
 <Image
 src={country.image}
 alt={country.name}
 fill
 className="object-cover opacity-20"
 />
 </div>
 <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
 <div className="relative z-10 text-center">
 <h3 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
 <span className="text-5xl">{country.flag}</span>
 {country.name} Work Visa
 </h3>

 <div className="grid md:grid-cols-4 gap-6 mt-8">
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
 <Clock className="h-8 w-8 mb-3 text-blue-200 mx-auto" />
 <div className="text-sm text-blue-200 mb-1">Processing Time</div>
 <div className="font-bold text-lg">{country.processingTime}</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
 <TrendingUp className="h-8 w-8 mb-3 text-green-200 mx-auto" />
 <div className="text-sm text-green-200 mb-1">Success Rate</div>
 <div className="font-bold text-lg">{country.successRate}</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
 <FileText className="h-8 w-8 mb-3 text-purple-200 mx-auto" />
 <div className="text-sm text-purple-200 mb-1">Validity</div>
 <div className="font-bold text-lg">{country.validity}</div>
 </div>
 {country.minSalary && (
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
 <DollarSign className="h-8 w-8 mb-3 text-yellow-200 mx-auto" />
 <div className="text-sm text-yellow-200 mb-1">Min Salary</div>
 <div className="font-bold text-lg">{country.minSalary}</div>
 </div>
 )}
 </div>
 </div>
 </div>

 {/* Detailed Information */}
 <Card className="rounded-2xl border-0 shadow-lg">
 <CardHeader>
 <CardTitle className="text-2xl">Work Visa Details for {country.name}</CardTitle>
 </CardHeader>
 <CardContent>
 <Accordion type="single" collapsible>
 <AccordionItem value="requirements">
 <AccordionTrigger className="text-lg font-semibold">
 📋 Requirements & Eligibility
 </AccordionTrigger>
 <AccordionContent>
 <ul className="space-y-3">
 {country.requirements.map((req, index) => (
 <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
 <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700 leading-relaxed">{req}</span>
 </li>
 ))}
 </ul>
 </AccordionContent>
 </AccordionItem>

 <AccordionItem value="documents">
 <AccordionTrigger className="text-lg font-semibold">
 📄 Required Documents
 </AccordionTrigger>
 <AccordionContent>
 <ul className="space-y-3">
 {country.documents.map((doc, index) => (
 <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
 <FileText className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700 leading-relaxed">{doc}</span>
 </li>
 ))}
 </ul>
 </AccordionContent>
 </AccordionItem>

 <AccordionItem value="benefits">
 <AccordionTrigger className="text-lg font-semibold">
 🎯 Benefits & Advantages
 </AccordionTrigger>
 <AccordionContent>
 <ul className="space-y-3">
 {country.benefits.map((benefit, index) => (
 <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors">
 <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700 leading-relaxed">{benefit}</span>
 </li>
 ))}
 </ul>
 </AccordionContent>
 </AccordionItem>

 {country.specialNotes && (
 <AccordionItem value="special-notes">
 <AccordionTrigger className="text-lg font-semibold">
 ⭐ Special Notes & Tips
 </AccordionTrigger>
 <AccordionContent>
 <ul className="space-y-3">
 {country.specialNotes.map((note, index) => (
 <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
 <Info className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
 <span className="text-gray-700 leading-relaxed">{note}</span>
 </li>
 ))}
 </ul>
 </AccordionContent>
 </AccordionItem>
 )}

 <AccordionItem value="contact">
 <AccordionTrigger className="text-lg font-semibold">
 📞 Get Expert Guidance
 </AccordionTrigger>
 <AccordionContent>
 <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
 <h4 className="text-xl font-bold mb-3">Ready to Apply for {country.name} Work Visa?</h4>
 <p className="text-blue-100 mb-5">
 Our immigration experts are ready to guide you through every step of the work visa application process for {country.name}.
 </p>
 <div className="flex flex-col sm:flex-row gap-3">
 <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 rounded-lg" onClick={handleScheduleConsultation}>
 <Phone className="mr-2 h-4 w-4" />
 Schedule Consultation
 </Button>
 <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 rounded-lg bg-white/10" onClick={() => handleDownloadGuide(country.name)}>
                     <Download className="mr-2 h-4 w-4" />
                    <span className="font-semibold">Get Started</span>
 </Button>
 </div>
 </div>
 </AccordionContent>
 </AccordionItem>
 </Accordion>
 </CardContent>
 </Card>
 </TabsContent>
 ))}
 </Tabs>
 </div>
 </section>
 </main>

 <Footer />
 </div>
 );
}
