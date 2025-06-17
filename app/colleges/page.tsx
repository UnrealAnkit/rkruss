'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/Container';
import { GraduationCap, Building, Globe, DollarSign, FileText, Users, BookOpen, Home } from 'lucide-react';
import { allUniversities } from './data';

const countryCards = [
  {
    title: 'Russia',
    subtitle: 'Medical & Technical Universities',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800',
    href: '#russia',
    flag: '🇷🇺'
  },
  {
    title: 'Armenia',
    subtitle: 'Medical & Technical Universities',
    image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=800',
    href: '#armenia',
    flag: '🇦🇲'
  },
  {
    title: 'Singapore',
    subtitle: 'Technical & Business Education',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800',
    href: '#singapore',
    flag: '🇸🇬'
  },
  {
    title: 'UAE (Dubai)',
    subtitle: 'International Branch Campuses',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800',
    href: '#uae',
    flag: '🇦🇪'
  },
  {
    title: 'Kazakhstan',
    subtitle: 'Technical & Medical Education',
    image: 'https://images.unsplash.com/photo-1559888867-a4f9b9b0c563?auto=format&fit=crop&w=800',
    href: '#kazakhstan',
    flag: '🇰🇿'
  },
  {
    title: 'Mauritius',
    subtitle: 'British & French Education',
    image: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&w=800',
    href: '#mauritius',
    flag: '🇲🇺'
  }
];

const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function CollegesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/10" />
        <Container>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Badge className="inline-flex mb-4 px-4 py-1.5 text-base bg-primary text-primary-foreground">
                Educational Excellence
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Your Gateway to Global Education
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Explore prestigious universities across our service regions. Get comprehensive information about admission requirements, language prerequisites, and program offerings.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Country Cards Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {countryCards.map((country, index) => (
              <motion.div
                key={country.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="transform transition-all duration-300"
              >
                <Link href={country.href}>
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-lg">
                    <div className="relative h-40">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
                      <Image
                        src={country.image}
                        alt={country.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 z-20 text-white">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{country.flag}</span>
                          <h3 className="text-xl font-bold">{country.title}</h3>
                        </div>
                        <p className="text-sm text-slate-300">{country.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Universities Sections */}
      {allUniversities.map((countryData, countryIndex) => (
        <React.Fragment key={countryData.country}>
          <section className="py-16 bg-white" id={countryData.country.toLowerCase().replace(/[()]/g, '')}>
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl">{countryData.flag}</span>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Universities in {countryData.country}
                  </h2>
                </div>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  {countryData.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countryData.universities.map((university, index) => (
                  <motion.div
                    key={university.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-40">
                        <Image
                          src={university.image.startsWith('http') 
                            ? university.image 
                            : `https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800`}
                          alt={university.name}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{university.name}</h3>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-3">{university.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary" />
                            <span>{university.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-primary" />
                            <span>{university.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-primary" />
                            <span>{university.tuition}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Home className="h-4 w-4 text-primary" />
                            <span>{university.accommodation}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-primary" />
                            <span>{university.language}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <span className="text-xs">{university.tests}</span>
                          </div>
                        </div>
                        {university.features && (
                          <div className="mt-4 pt-4 border-t border-slate-200">
                            <div className="flex items-center gap-2 mb-2">
                              <BookOpen className="h-4 w-4 text-primary" />
                              <span className="font-medium text-sm">Key Features:</span>
                            </div>
                            <ul className="grid grid-cols-2 gap-2">
                              {university.features.map((feature, idx) => (
                                <li key={idx} className="text-xs text-slate-600 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
          {countryIndex < allUniversities.length - 1 && (
            <div className="w-full h-px bg-slate-200" />
          )}
        </React.Fragment>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Get expert guidance on university selection, application process, and visa requirements.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Book Free Consultation
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
