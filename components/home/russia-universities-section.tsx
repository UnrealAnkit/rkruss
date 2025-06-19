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
  MapPin, 
  Star, 
  Users, 
  BookOpen, 
  Award,
  ArrowRight,
  Heart,
  Globe
} from 'lucide-react';

const featuredUniversities = [

  {
    id: 2,
    name: 'Kazan Federal University',
    location: 'Kazan',
    established: '1804',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    logo: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&w=100&q=80',
    ranking: '#2 Federal University',
    students: '50,000+',
    programs: ['Engineering', 'Medicine', 'Business', 'IT'],
    highlights: ['Federal Status', 'Research Excellence', 'Modern Campus'],
    description: 'Leading federal university with comprehensive programs',
    featured: true
  },
  {
    id: 3,
    name: 'RUDN University',
    location: 'Moscow',
    established: '1960',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80',
    logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=100&q=80',
    ranking: '#1 International University',
    students: '37,000+',
    programs: ['Medicine', 'Engineering', 'Law', 'Economics'],
    highlights: ['156 Countries', 'Multilingual', 'UN Partnership'],
    description: 'Most international university with students from 156 countries',
    featured: false
  },
  {
    id: 4,
    name: 'Moscow State University',
    location: 'Moscow',
    established: '1755',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    ranking: '#1 Classical University',
    students: '40,000+',
    programs: ['Sciences', 'Mathematics', 'Physics', 'Biology'],
    highlights: ['Nobel Laureates', 'Research Leader', 'World Famous'],
    description: 'Oldest and most prestigious university in Russia',
    featured: false
  },

];

const universityStats = [
  {
    icon: Award,
    value: '20+',
    label: 'WHO/MCI Approved Universities',
    color: 'text-red-600'
  },
  {
    icon: Users,
    value: '100K+',
    label: 'International Students',
    color: 'text-blue-600'
  },
  {
    icon: Globe,
    value: '150+',
    label: 'Countries Represented',
    color: 'text-green-600'
  },
  {
    icon: BookOpen,
    value: '500+',
    label: 'Programs Available',
    color: 'text-purple-600'
  }
];

export function RussiaUniversitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
      {/* Russian University Background */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80"
          alt="Russian University Architecture"
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🇷🇺</span>
            <Star className="h-8 w-8 text-amber-500" />
            <span className="text-4xl">🇷🇺</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Russian Universities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Study at world-renowned institutions that have educated Nobel laureates, 
            world leaders, and industry pioneers for centuries.
          </p>
        </motion.div>

        {/* University Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {universityStats.map((stat, index) => {
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

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredUniversities.map((university, index) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 h-full">
                <div className="relative">
                  <Image
                    src={university.image}
                    alt={university.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {university.featured && (
                    <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                      <Heart className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}

                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src={university.logo}
                        alt={`${university.name} logo`}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full bg-white p-1"
                      />
                      <div>
                        <h3 className="text-lg font-bold">{university.name}</h3>
                        <div className="flex items-center text-sm opacity-90">
                          <MapPin className="h-3 w-3 mr-1" />
                          {university.location} • Est. {university.established}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <Badge variant="outline" className="text-xs mb-2">
                      {university.ranking}
                    </Badge>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {university.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-slate-900">{university.students}</div>
                      <div className="text-xs text-slate-500">Students</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-slate-900">{university.programs.length}+</div>
                      <div className="text-xs text-slate-500">Programs</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500 mb-2">Popular Programs:</div>
                    <div className="flex flex-wrap gap-1">
                      {university.programs.slice(0, 3).map((program) => (
                        <Badge key={program} variant="secondary" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500 mb-2">Key Highlights:</div>
                    <ul className="space-y-1">
                      {university.highlights.slice(0, 2).map((highlight) => (
                        <li key={highlight} className="flex items-center text-xs text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full group/btn">
                    <Link href={`/colleges#${university.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Can't Decide Which University is Right for You?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Our education counselors will help you choose the perfect university based on your 
              academic background, career goals, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/assessment">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Take Free Assessment
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 font-semibold border-2 border-white">
                <Link href="/colleges">
                  <Globe className="mr-2 h-5 w-5" />
                  View All Universities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 