'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, GraduationCap, BookOpen, Users } from 'lucide-react';

const destinations = [
  {
    id: '1',
    name: 'Russia',
    slug: 'russia',
    flag: '🇷🇺',
    universities: '20+',
    programs: '100+',
    students: '5000+',
    image_url: 'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'World-class education at affordable costs',
    featured: true,
    highlights: ['MBBS Programs', 'Engineering', 'Low Cost'],
  },
  {
    id: '2',
    name: 'Singapore',
    slug: 'singapore',
    flag: '🇸🇬',
    universities: '15+',
    programs: '80+',
    students: '3000+',
    image_url: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Asia\'s leading education hub',
    featured: true,
    highlights: ['Business Studies', 'Technology', 'Scholarships'],
  },
  {
    id: '3',
    name: 'Dubai',
    slug: 'dubai',
    flag: '🇦🇪',
    universities: '12+',
    programs: '60+',
    students: '2000+',
    image_url: 'https://images.pexels.com/photos/1467300/pexels-photo-1467300.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience world-class facilities',
    featured: true,
    highlights: ['MBA Programs', 'International Business', 'Multi-cultural'],
  },
  {
    id: '4',
    name: 'Armenia',
    slug: 'armenia',
    flag: '🇦🇲',
    universities: '10+',
    programs: '50+',
    students: '1500+',
    image_url: 'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Rich culture & quality education',
    featured: false,
    highlights: ['Medical Programs', 'European Standards', 'Affordable'],
  },
  {
    id: '5',
    name: 'Mauritius',
    slug: 'mauritius',
    flag: '🇲🇺',
    universities: '8+',
    programs: '40+',
    students: '1000+',
    image_url: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tropical paradise with quality education',
    featured: false,
    highlights: ['Tourism & Hospitality', 'Marine Studies', 'English Speaking'],
  },
];

export function DestinationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Study Destinations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our wide range of study destinations, each offering unique opportunities and world-class education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 h-full">
                <div className="relative">
                  <img
                    src={destination.image_url}
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {destination.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
                      <span className="text-3xl">{destination.flag}</span>
                      {destination.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>Study Destination</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-primary mr-1" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">{destination.universities}</div>
                      <div className="text-xs text-slate-500">Universities</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-accent mr-1" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">{destination.programs}</div>
                      <div className="text-xs text-slate-500">Programs</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center">
                        <Users className="h-4 w-4 text-success mr-1" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">{destination.students}</div>
                      <div className="text-xs text-slate-500">Students</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full group/btn">
                    <Link href={`/colleges#${destination.slug}`}>
                      Explore Programs
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/colleges">
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}