'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  FileText,
  CheckCircle,
  Plane,
  Shield,
  Home,
  Coffee,
  Wifi,
  Users,
  Play,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Heart,
  DollarSign
} from 'lucide-react';

const visaSteps = [
  {
    step: 1,
    title: 'University Admission Letter',
    description: 'Get accepted to your chosen Russian university',
    details: ['Submit academic documents', 'Pass entrance requirements', 'Receive admission letter'],
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    step: 2,
    title: 'Invitation from Russian Ministry',
    description: 'University applies for your invitation letter',
    details: ['University submits to Ministry of Education', 'Official invitation issued', 'Process takes 20-45 days'],
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    step: 3,
    title: 'Visa Documentation & Filing',
    description: 'Prepare and submit visa application',
    details: ['Complete visa application form', 'Medical certificates & HIV test', 'Submit to Russian consulate'],
    icon: CheckCircle,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    step: 4,
    title: 'Medical & Travel Insurance',
    description: 'Get required medical examinations and insurance',
    details: ['Complete medical examination', 'Purchase travel insurance', 'Prepare vaccination certificates'],
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    step: 5,
    title: 'Arrival & Registration in Russia',
    description: 'Complete formalities upon arrival',
    details: ['Airport pickup service', 'Registration with authorities', 'University enrollment completion'],
    icon: Plane,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  }
];

const lifestyleFeatures = [
  {
    icon: Home,
    title: 'Affordable Student Housing',
    description: 'University hostels starting from $30-80/month',
    color: 'text-blue-600'
  },
  {
    icon: MapPin,
    title: 'Excellent Public Transport',
    description: 'Metro, buses, and trams with student discounts',
    color: 'text-green-600'
  },
  {
    icon: Coffee,
    title: 'Student-Friendly Environment',
    description: 'Cafés, libraries, and study spaces everywhere',
    color: 'text-amber-600'
  },
  {
    icon: Wifi,
    title: 'Digital Infrastructure',
    description: 'Free WiFi and high-speed internet access',
    color: 'text-purple-600'
  },
  {
    icon: Users,
    title: 'Multicultural Community',
    description: 'Students from 150+ countries studying together',
    color: 'text-teal-600'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Low crime rates and excellent safety records',
    color: 'text-indigo-600'
  }
];

const supportServices = [
  {
    icon: Plane,
    title: 'Airport Pickup & Travel',
    description: 'Welcome service from arrival to accommodation'
  },
  {
    icon: Home,
    title: 'Accommodation Assistance',
    description: 'Help with hostel booking and private apartments'
  },
  {
    icon: FileText,
    title: 'Registration Support',
    description: 'Complete assistance with Russian authority registration'
  },
  {
    icon: Phone,
    title: 'Local Setup Help',
    description: 'SIM cards, bank accounts, and local services'
  }
];

const faqs = [
  {
    question: 'Is NEET required for MBBS in Russia?',
    answer: 'Yes, NEET qualification is mandatory for Indian students seeking MBBS admission in Russia. You need to clear NEET to be eligible for admission to Russian medical universities.'
  },
  {
    question: 'Are programs in English available?',
    answer: 'Yes, most MBBS and engineering programs in Russia are available in English medium. This makes it easier for international students to pursue their studies without language barriers.'
  },
  {
    question: 'What is the average cost of studying MBBS in Russia?',
    answer: 'The total cost for MBBS in Russia ranges from ₹2.5-5 Lakh per year, including tuition fees and living expenses. This makes it one of the most affordable destinations for medical education.'
  },
  {
    question: 'How long does the visa processing take?',
    answer: 'Russian student visa processing typically takes 15-30 working days after submission of complete documents. We recommend applying at least 2 months before your intended travel date.'
  },
  {
    question: 'Is the degree valid in India and other countries?',
    answer: 'Yes, degrees from WHO/MCI approved Russian universities are globally recognized and valid in India and other countries. Graduates can practice medicine after clearing respective licensing exams.'
  }
];

export function RussiaVisaProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-slate-50 via-white to-red-50">
      <div className="container">
        {/* Visa Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-red-600" />
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Russian Visa Process
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple 5-step process with full support from RK Visa Solutions team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Steps List */}
            <div className="space-y-4">
              {visaSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeStep === step.step 
                        ? 'bg-white shadow-lg border-2 border-primary' 
                        : 'bg-slate-50 hover:bg-white hover:shadow-md border-2 border-transparent'
                    }`}
                    onClick={() => setActiveStep(step.step)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center`}>
                        <Icon className={`h-6 w-6 ${step.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-primary">
                            {step.step}
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 mb-3">
                          {step.description}
                        </p>
                        {activeStep === step.step && (
                          <motion.ul 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="space-y-2"
                          >
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center text-sm text-slate-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Support Notice */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-red-600 to-blue-600 rounded-3xl p-8 text-white h-fit"
            >
              <div className="text-center mb-8">
                <CheckCircle className="h-16 w-16 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">
                  Full Support Provided
                </h3>
                <p className="text-red-100 leading-relaxed">
                  RK Visa Solutions provides complete assistance throughout the entire visa process, 
                  from documentation to airport pickup in Russia.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {supportServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.title} className="flex items-start gap-3">
                      <Icon className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">{service.title}</h4>
                        <p className="text-red-100 text-sm">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button asChild variant="secondary" className="w-full" size="lg">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Visa Support
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Student Life Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="h-8 w-8 text-blue-600" />
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Life in Russia as a Student
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience rich culture, modern facilities, and a vibrant international community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {lifestyleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/student-life" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Student Life in Russia
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about studying in Russia
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-slate-200 rounded-xl px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Have more questions? Our experts are here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to Expert
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/assessment">
                  <FileText className="mr-2 h-5 w-5" />
                  Free Assessment
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 