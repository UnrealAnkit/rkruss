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
 GraduationCap,
 CheckCircle,
 FileText,
 Phone,
 Download,
 Clock,
 TrendingUp,
 DollarSign,
 Info,
 BookOpen
} from 'lucide-react';

interface StudentVisaCountry {
 name: string;
 flag: string;
 image: string;
 processingTime: string;
 successRate: string;
 validity: string;
 tuitionRange?: string;
 requirements: string[];
 documents: string[];
 benefits: string[];
 specialNotes?: string[];
}

const studentVisaCountries: StudentVisaCountry[] = [
 {
 name: "Russia",
 flag: "🇷🇺",
 image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
 processingTime: "2-4 weeks",
 successRate: "98%",
 validity: "Duration of study program (1-6 years)",
 tuitionRange: "$2,000 - $8,000/year",
 requirements: [
 "Acceptance to Russian educational institution",
 "Proof of financial support (minimum $2,000/year)",
 "Medical fitness clearance",
 "Academic prerequisites met",
 "Clean criminal background"
 ],
 documents: [
 "Official admission letter from Russian university",
 "Academic transcripts (apostilled)",
 "High school/university diploma",
 "Proof of funds (bank statements/scholarship letter)",
 "Medical clearance certificate",
 "HIV test results (mandatory)",
 "Travel insurance (minimum $30,000 coverage)"
 ],
 benefits: [
 "Post-Study Work Option under government internship schemes",
 "Part-time work permission (up to 20 hours/week)",
 "Access to Russian education system",
 "Cultural exchange opportunities",
 "Language immersion environment",
 "Pathway to skilled worker visa post-graduation"
 ],
 specialNotes: [
 "Multiple entry visa available",
 "Family visit visas facilitated",
 "Extension possible for extended programs",
 "Integration support services available"
 ]
 },
 {
 name: "Singapore",
 flag: "🇸🇬",
 image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
 processingTime: "2-3 weeks",
 successRate: "95%",
 validity: "Duration of course",
 tuitionRange: "SGD 30,000 - 60,000/year",
 requirements: [
 "Acceptance to MOE-registered educational institution",
 "Sufficient funds for tuition and living expenses",
 "Academic qualifications meeting program requirements",
 "Good character and no criminal record",
 "Valid health insurance coverage"
 ],
 documents: [
 "Official acceptance letter from Singapore institution",
 "Academic transcripts and certificates",
 "Passport with minimum 6 months validity",
 "Proof of financial support (bank statements/sponsorship)",
 "Medical examination report",
 "ICA (Immigration Checkpoints Authority) forms",
 "Passport-size photographs"
 ],
 benefits: [
 "Full-time study rights in Singapore",
 "Part-time work opportunities (subject to conditions)",
 "Access to world-class education system",
 "Multicultural learning environment",
 "Post-study work opportunities",
 "Pathway to skilled worker visas upon graduation"
 ],
 specialNotes: [
 "Multiple entry facility",
 "Extension possible for extended programs",
 "Family visit pass facilitation",
 "Student support services access"
 ]
 },
 {
 name: "UAE",
 flag: "🇦🇪",
 image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
 processingTime: "3-6 weeks",
 successRate: "97%",
 validity: "1 year (renewable)",
 tuitionRange: "AED 20,000 - 80,000/year",
 requirements: [
 "University offer letter",
 "Emirates ID registration",
 "Proof of accommodation",
 "Financial guarantee from sponsor",
 "Medical fitness certificate"
 ],
 documents: [
 "University acceptance letter",
 "Academic certificates (attested)",
 "Passport copy with 6 months validity",
 "Sponsor financial documents",
 "Medical fitness certificate",
 "Passport photographs",
 "No objection certificate (if applicable)"
 ],
 benefits: [
 "Quality education with international standards",
 "Modern facilities and infrastructure",
 "Cultural exposure and diversity",
 "Safe and secure environment",
 "Part-time work opportunities (with permission)",
 "Post-graduation work visa options"
 ],
 specialNotes: [
 "Emirates ID required for all students",
 "Different visa rules for different emirates",
 "Sponsorship required (university or family)"
 ]
 },
 {
 name: "Armenia",
 flag: "🇦🇲",
 image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
 processingTime: "1-3 weeks",
 successRate: "99%",
 validity: "1 year (renewable)",
 tuitionRange: "$1,500 - $4,000/year",
 requirements: [
 "University acceptance letter",
 "Proof of sufficient funds",
 "Valid passport with 6 months validity",
 "Health insurance coverage",
 "Clean academic and criminal record"
 ],
 documents: [
 "University admission letter",
 "Academic transcripts and diplomas",
 "Passport and passport photos",
 "Bank statements or financial guarantee",
 "Health insurance policy",
 "Medical certificate",
 "Police clearance certificate"
 ],
 benefits: [
 "Affordable tuition fees",
 "English-taught programs available",
 "PR pathways available after graduation",
 "Rich cultural and historical experience",
 "Low cost of living",
 "Safe and welcoming environment"
 ],
 specialNotes: [
 "Many programs available in English",
 "Strong medical and engineering programs",
 "EU proximity for additional opportunities"
 ]
 },
 {
 name: "Mauritius",
 flag: "🇲🇺",
 image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
 processingTime: "2-4 weeks",
 successRate: "96%",
 validity: "Duration of study",
 tuitionRange: "$3,000 - $12,000/year",
 requirements: [
 "Enrolled in tertiary institutions",
 "Proof of financial support",
 "Health insurance coverage",
 "Clean academic and criminal record",
 "Valid passport with sufficient validity"
 ],
 documents: [
 "University acceptance letter",
 "Academic certificates and transcripts",
 "Passport with 6 months validity",
 "Financial statements or scholarship letter",
 "Medical certificate",
 "Police clearance certificate",
 "Health insurance policy"
 ],
 benefits: [
 "Work up to 20 hours/week while studying",
 "Transition to Work Permit or Investor Visa post-study",
 "Quality education with international recognition",
 "Beautiful and safe environment",
 "English as medium of instruction",
 "Gateway to African and Asian markets"
 ],
 specialNotes: [
 "Strong programs in business, hospitality, and IT",
 "Hub for international students in the region",
 "Post-study work opportunities available"
 ]
 }
];

export default function StudentVisaPage() {
 const [selectedCountry, setSelectedCountry] = useState(studentVisaCountries[0]);
 const [showDownloadMessage, setShowDownloadMessage] = useState(false);
 const [showContactMessage, setShowContactMessage] = useState(false);
 const [messageType, setMessageType] = useState('');

 const handleDownloadGuide = (countryName: string) => {
 setMessageType(`${countryName} Student Visa Guide`);
 setShowDownloadMessage(true);
 setTimeout(() => setShowDownloadMessage(false), 3000);
 };

 const handleScheduleConsultation = () => {
 setMessageType('Consultation Scheduled');
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
 <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 mt-20">
 <div className="absolute inset-0">
 <Image
 src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
 alt="Student visa background"
 fill
 className="object-cover opacity-30"
 priority
 />
 </div>
 <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/60"></div>
 <div className="container relative z-10 text-white px-4 sm:px-6 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="max-w-6xl mx-auto text-center"
 >
 <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
 <span className="text-base font-medium flex items-center gap-2">
 <GraduationCap className="w-5 h-5" />
 Student Visa Solutions
 </span>
 </div>
 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight">
 Study Abroad Dreams Made Real
 </h1>
 <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-4xl mx-auto">
 Unlock world-class education opportunities with our comprehensive student visa services. From top universities to specialized programs, we'll guide you to your perfect academic destination.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl px-8 py-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
 <Link href="/assessment">
 <span className="font-semibold">Free Assessment</span>
 </Link>
 </Button>
 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 rounded-2xl px-8 py-4 backdrop-blur-sm bg-white/10" onClick={() => handleDownloadGuide('Student Visa')}>
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
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-purple-700 bg-clip-text text-transparent">
 Choose Your Study Destination
 </h2>
 <p className="text-slate-600 max-w-3xl mx-auto text-lg">
 Explore student visa opportunities across different countries and find the perfect academic environment for your goals.
 </p>
 </div>

 {/* Country Tabs */}
 <Tabs defaultValue={selectedCountry.name} className="w-full">
 <TabsList className="grid grid-cols-2 md:grid-cols-5 max-w-4xl mx-auto mb-8">
 {studentVisaCountries.map((country) => (
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

 {studentVisaCountries.map((country) => (
 <TabsContent key={country.name} value={country.name}>
 {/* Country Hero */}
 <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white mb-8">
 <div className="absolute inset-0">
 <Image
 src={country.image}
 alt={country.name}
 fill
 className="object-cover opacity-20"
 />
 </div>
 <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/60"></div>
 <div className="relative z-10 text-center">
 <h3 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
 <span className="text-5xl">{country.flag}</span>
 Study in {country.name}
 </h3>

 <div className="grid md:grid-cols-4 gap-6 mt-8">
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
 <Clock className="h-8 w-8 mb-3 text-purple-200 mx-auto" />
 <div className="text-sm text-purple-200 mb-1">Processing Time</div>
 <div className="font-bold text-lg">{country.processingTime}</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
 <TrendingUp className="h-8 w-8 mb-3 text-green-200 mx-auto" />
 <div className="text-sm text-green-200 mb-1">Success Rate</div>
 <div className="font-bold text-lg">{country.successRate}</div>
 </div>
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
 <BookOpen className="h-8 w-8 mb-3 text-blue-200 mx-auto" />
 <div className="text-sm text-blue-200 mb-1">Validity</div>
 <div className="font-bold text-lg">{country.validity}</div>
 </div>
 {country.tuitionRange && (
 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
 <DollarSign className="h-8 w-8 mb-3 text-yellow-200 mx-auto" />
 <div className="text-sm text-yellow-200 mb-1">Tuition Range</div>
 <div className="font-bold text-lg">{country.tuitionRange}</div>
 </div>
 )}
 </div>
 </div>
 </div>

 {/* Detailed Information */}
 <Card className="rounded-2xl border-0 shadow-lg">
 <CardHeader>
 <CardTitle className="text-2xl">Student Visa Details for {country.name}</CardTitle>
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
 <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
 <h4 className="text-xl font-bold mb-3">Ready to Study in {country.name}?</h4>
 <p className="text-purple-100 mb-5">
 Our education consultants are ready to guide you through every step of the student visa application process for {country.name}.
 </p>
 <div className="flex flex-col sm:flex-row gap-3">
 <Button size="sm" className="bg-white text-purple-600 hover:bg-purple-50 rounded-lg" onClick={handleScheduleConsultation}>
 <Phone className="mr-2 h-4 w-4" />
 Schedule Consultation
 </Button>
 <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 rounded-lg bg-white/10" onClick={() => handleDownloadGuide(country.name)}>
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
