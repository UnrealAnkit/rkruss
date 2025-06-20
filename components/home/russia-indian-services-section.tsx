'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText,
  Users,
  Phone,
  BookOpen,
  Heart,
  Globe,
  ArrowRight,
  Video,
  CheckCircle,
  Star,
  Clock,
  AlertCircle
} from 'lucide-react';

const indianServices = [
  {
    icon: FileText,
    title: 'NEET Eligibility Assistance',
    description: 'Complete guidance for NEET qualified students seeking MBBS admission',
    features: ['NEET Score Analysis', 'University Matching', 'Admission Strategy', 'Document Verification'],
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Heart,
    title: 'MCI Screening & Registration',
    description: 'Support for MCI screening test and medical council registration',
    features: ['MCI Exam Preparation', 'FMGE Guidance', 'Registration Process', 'License Support'],
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Users,
    title: 'Parent Counseling Program',
    description: 'Regular updates and counseling sessions for parents',
    features: ['Monthly Updates', 'Progress Reports', 'Parent Meetings', 'Emergency Support'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Video,
    title: 'Pre-departure Orientation',
    description: 'Free comprehensive webinars before departure to Russia',
    features: ['Cultural Orientation', 'Travel Guidelines', 'University Briefing', 'Q&A Sessions'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
];

const newsUpdates = [
  {
    icon: BookOpen,
    title: 'Russian Universities Open Admissions for Sept 2025 Intake',
    description: 'New batch admissions started with early bird discounts',
    type: 'Admission',
    urgent: false
  },
  {
    icon: AlertCircle,
    title: 'Visa Processing Timelines Updated – Apply Early!',
    description: 'Russian consulates have updated processing times',
    type: 'Visa Alert',
    urgent: true
  },
  {
    icon: Star,
    title: 'New Scholarship Announced for Indian Students in Moscow',
    description: 'Merit-based scholarships up to 50% tuition fee waiver',
    type: 'Scholarship',
    urgent: false
  },
  {
    icon: Video,
    title: 'Online Interviews Introduced for Medical Programs',
    description: 'Virtual admission interviews now available',
    type: 'Update',
    urgent: false
  }
];

const supportStats = [
  {
    icon: Users,
    value: '5000+',
    label: 'Indian Students Placed',
    color: 'text-green-600'
  },
  {
    icon: Phone,
    value: '24/7',
    label: 'Support Available',
    color: 'text-blue-600'
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Russian Cities',
    color: 'text-purple-600'
  },
  {
    icon: Clock,
    value: '10+',
    label: 'Years Experience',
    color: 'text-amber-600'
  }
];

export function RussiaIndianServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative bg-gradient-to-br from-orange-50 via-white to-green-50 overflow-hidden">
      {/* Indian Flag & Russian Elements */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://images.unsplash.com/photo-1519680772-8b3b2e7f1d26?auto=format&fit=crop&w=1920&q=80"
          alt="Russia India Partnership"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl">🇮🇳</span>
            <span className="text-2xl">🤝</span>
            <span className="text-4xl">🇷🇺</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Special Services for Indian Students
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tailored support for Indian applicants with NEET assistance, 
            parent counseling, and comprehensive pre-departure guidance
          </p>
        </motion.div>

        {/* Support Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {supportStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4 ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {indianServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div>
                      <div className="text-sm text-slate-500 mb-3">Key Features:</div>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-slate-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* News & Updates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              📣 Russia-Specific News & Alerts
            </h3>
            <p className="text-slate-300 text-lg">
              Stay updated with latest developments and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsUpdates.map((news, index) => {
              const Icon = news.icon;
              return (
                <motion.div
                  key={news.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          variant={news.urgent ? "destructive" : "secondary"} 
                          className="text-xs"
                        >
                          {news.type}
                        </Badge>
                        {news.urgent && (
                          <Badge variant="outline" className="text-xs border-red-400 text-red-400">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {news.title}
                      </h4>
                      <p className="text-slate-300 text-sm">
                        {news.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/news">
                <Globe className="mr-2 h-5 w-5" />
                View All Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-gradient-to-r from-orange-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your MBBS Journey in Russia?
          </h3>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful Indian students who have chosen Russia for their medical education. 
            Get expert guidance tailored specifically for Indian students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/assessment">
                <FileText className="mr-2 h-5 w-5" />
                Free NEET Assessment
              </Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 font-semibold transition-all duration-300">
              <Link href="tel:+919999999999">
                <Phone className="mr-2 h-5 w-5" />
                Call India Helpline
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <p className="text-orange-200 text-sm">
              📞 India Helpline: <strong>+91 99999 99999</strong> • Available 24/7
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 