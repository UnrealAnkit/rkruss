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
  Globe, 
  Hospital, 
  GraduationCap, 
  DollarSign, 
  BookOpen, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const russiaFeatures = [
  {
    icon: Globe,
    title: 'Globally Recognized Degrees',
    description: 'WHO/MCI approved medical degrees accepted worldwide',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Hospital,
    title: 'Top Medical Universities',
    description: 'MCI/WHO approved institutions with modern facilities',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: GraduationCap,
    title: '20+ Government Universities',
    description: 'Choose from prestigious state-funded institutions',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: DollarSign,
    title: 'Low Tuition & Living Costs',
    description: 'Quality education at affordable prices',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: BookOpen,
    title: 'English-Taught Programs',
    description: 'No language barrier for international students',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    icon: TrendingUp,
    title: 'High Visa Approval Rates',
    description: '95%+ success rate with our expert guidance',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  }
];

const popularCourses = [
  {
    course: 'MBBS (General Medicine)',
    duration: '6 Years',
    description: 'Most popular choice for medical aspirants',
    badge: 'Popular'
  },
  {
    course: 'Engineering (Various Fields)',
    duration: '4 Years', 
    description: 'Mechanical, IT, Civil, and more specializations',
    badge: 'In-Demand'
  },
  {
    course: 'Pharmacy & Dentistry',
    duration: '5 Years',
    description: 'Comprehensive healthcare programs',
    badge: 'Growing'
  },
  {
    course: 'Aviation & Aeronautics',
    duration: '4-5 Years',
    description: 'Leading aerospace technology programs',
    badge: 'Specialized'
  },
  {
    course: 'Business & Management',
    duration: '2-4 Years',
    description: 'MBA and business administration programs',
    badge: 'Flexible'
  }
];

export function RussiaHighlightSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative bg-gradient-to-br from-slate-50 via-red-50 to-blue-50 overflow-hidden">
      {/* Russian Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1920&q=80"
          alt="Red Square Moscow Background"
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
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-2">
              <span className="text-5xl">🇷🇺</span>
              <span className="text-5xl">🇷🇺</span>
              <span className="text-5xl">🇷🇺</span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Study in Russia?
            </h2>
            <p className="text-xl text-slate-600">
              <strong>Affordable. Prestigious. Globally Recognized.</strong>
            </p>
          </div>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Russia offers one of the best combinations of quality and affordability for international students. 
            Whether you're pursuing MBBS, Engineering, or Business, Russian universities provide world-class 
            programs at lower costs than Western counterparts.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {russiaFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Popular Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Hospital className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-slate-900">
                Popular Courses in Russia
              </h3>
            </div>
            <p className="text-lg text-slate-600">
              Top fields of study among international students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course, index) => (
              <motion.div
                key={course.course}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {course.badge}
                  </Badge>
                  <span className="text-sm font-semibold text-primary">
                    {course.duration}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {course.course}
                </h4>
                <p className="text-sm text-slate-600">
                  {course.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-slate-500 mb-4">
              *Special scholarships and discounts available for early applicants.
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/colleges#russia">
                <Star className="mr-2 h-5 w-5" />
                Explore Russian Universities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Russian Education Journey?
          </h3>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have chosen Russia for their higher education. 
            Get expert guidance from application to graduation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/assessment">
                <CheckCircle className="mr-2 h-5 w-5" />
                Free Assessment
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 font-semibold border-2 border-white">
              <Link href="/contact">
                <Globe className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 