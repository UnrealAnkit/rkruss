'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  GraduationCap, 
  Plane, 
  Users, 
  Clock, 
  Shield,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Immigration Consulting',
    description: 'Expert guidance through complex immigration processes with personalized strategies for your unique situation.',
    features: ['Document Preparation', 'Legal Compliance', 'Application Review', 'Status Tracking'],
    href: '/immigration',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: GraduationCap,
    title: 'Study Abroad Programs',
    description: 'Comprehensive support for your educational journey, from university selection to enrollment completion.',
    features: ['University Selection', 'Course Guidance', 'Scholarship Assistance', 'Pre-departure Support'],
    href: '/colleges',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Plane,
    title: 'Visa Solutions',
    description: 'Complete visa processing services with high success rates and transparent timelines for all visa types.',
    features: ['Multiple Visa Types', 'Fast Processing', 'Document Support', 'Interview Preparation'],
    href: '/visa-solutions',
    color: 'text-success',
    bgColor: 'bg-success/10',
  },
];

const benefits = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified immigration consultants with years of experience',
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Streamlined processes to minimize waiting times',
  },
  {
    icon: Shield,
    title: 'Guaranteed Support',
    description: 'Complete assistance until your application succeeds',
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive immigration and education services designed to make your international journey smooth and successful.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-slate-700">
                          <div className={`w-2 h-2 rounded-full ${service.bgColor} mr-3 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full group/btn">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-slate-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose RK Visa Solutions?
            </h3>
            <p className="text-lg text-slate-600">
              Experience the difference of working with dedicated professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}