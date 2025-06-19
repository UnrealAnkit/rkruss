'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  Phone,
  Heart,
  MapPin
} from 'lucide-react';

const visaSteps = [
  {
    step: 1,
    title: 'University Admission Letter',
    description: 'Get accepted to your chosen Russian university'
  },
  {
    step: 2,
    title: 'Invitation from Russian Ministry',
    description: 'University applies for your invitation letter'
  },
  {
    step: 3,
    title: 'Visa Documentation & Filing',
    description: 'Prepare and submit visa application'
  },
  {
    step: 4,
    title: 'Medical & Travel Insurance',
    description: 'Get required medical examinations'
  },
  {
    step: 5,
    title: 'Arrival & Registration',
    description: 'Complete formalities upon arrival'
  }
];

const lifestyleFeatures = [
  {
    icon: Home,
    title: 'Affordable Housing',
    description: 'Student hostels from $30-80/month'
  },
  {
    icon: MapPin,
    title: 'Public Transport',
    description: 'Metro, buses with student discounts'
  },
  {
    icon: Coffee,
    title: 'Student Environment',
    description: 'Cafés, libraries, study spaces'
  },
  {
    icon: Wifi,
    title: 'Digital Access',
    description: 'Free WiFi and internet'
  },
  {
    icon: Users,
    title: 'Multicultural',
    description: 'Students from 150+ countries'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Low crime rates'
  }
];

const faqs = [
  {
    question: 'Is NEET required for MBBS in Russia?',
    answer: 'Yes, NEET qualification is mandatory for Indian students.'
  },
  {
    question: 'Are programs in English available?',
    answer: 'Yes, most MBBS and engineering programs are in English.'
  },
  {
    question: 'What is the cost of MBBS in Russia?',
    answer: 'Total cost ranges from ₹2.5-5 Lakh per year.'
  }
];

export function RussiaProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative bg-gradient-to-br from-slate-50 via-white to-red-50 overflow-hidden">
      {/* Russian Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1920&q=80"
          alt="Moscow Kremlin Background"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        {/* Visa Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">🇷🇺</span>
              <span className="text-3xl">🛂</span>
              <span className="text-4xl">🇷🇺</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Russian Visa Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Step-by-step guidance with full support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {visaSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              ✅ Full support provided by RK Visa Solutions team
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Visa Support
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Student Life */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">🇷🇺</span>
              <span className="text-3xl">🏙️</span>
              <span className="text-4xl">🇷🇺</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Life in Russia as a Student
            </h2>
            <p className="text-xl text-slate-600">
              Experience rich culture and modern facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifestyleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/student-life">
                <Play className="mr-2 h-5 w-5" />
                Watch Student Life in Russia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              💬 FAQs – Studying in Russia
            </h2>
            <p className="text-lg text-slate-600">
              Common questions with answers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-slate-200 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
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