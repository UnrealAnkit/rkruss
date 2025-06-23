'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
 Users,
 Globe,
 Award,
 Clock,
 CheckCircle,
 Target,
 Heart,
 Shield
} from 'lucide-react';

const stats = [
 { icon: Clock, value: '10+', label: 'Years Experience', color: 'text-primary' },
 { icon: Users, value: '5,000+', label: 'Successful Clients', color: 'text-accent' },
 { icon: Globe, value: '20+', label: 'Countries Covered', color: 'text-success' },
 { icon: Award, value: '98%', label: 'Success Rate', color: 'text-warning' },
];

const values = [
 {
 icon: Target,
 title: 'Excellence',
 description: 'We strive for excellence in every aspect of our service delivery.',
 color: 'text-primary',
 bgColor: 'bg-primary/10'
 },
 {
 icon: Heart,
 title: 'Integrity',
 description: 'We maintain the highest standards of honesty and transparency.',
 color: 'text-accent',
 bgColor: 'bg-accent/10'
 },
 {
 icon: Shield,
 title: 'Trust',
 description: 'We build lasting relationships based on trust and reliability.',
 color: 'text-success',
 bgColor: 'bg-success/10'
 }
];



export default function AboutPage() {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-100px" });

 return (
 <div className="min-h-screen">
 <Header />
 
 {/* WhatsApp Float Button */}
 <Link
 href="https://wa.me/79966651652"
 className="fixed bottom-20 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
 aria-label="Contact us on WhatsApp"
 target="_blank"
 rel="noopener noreferrer"
 >
 <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
 </svg>
 </Link>

 <main>
 {/* Hero Section */}
 <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 mt-20">
 <div className="absolute inset-0 bg-black/20" />
 <div className="container relative z-10 text-white">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="max-w-4xl"
 >
 <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
 About RK Visa Solutions
 </h1>
 <p className="text-lg text-white/90 leading-relaxed mb-8">
 Founded in 2014, RK Visa Solutions began with a simple mission: to make international education and immigration accessible to everyone. What started as a small consulting firm has grown into a trusted partner for thousands of students and professionals seeking opportunities abroad.
 </p>

 <div className="flex flex-col sm:flex-row gap-4">
 <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
 Our Services
 </Button>
 <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
 Contact Us
 </Button>
 </div>
 </motion.div>
 </div>
 </section>

 {/* Stats Section */}
 <section className="section-padding bg-gradient-to-r from-slate-50 to-blue-50">
 <div className="container">
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
 {stats.map((stat, index) => {
 const Icon = stat.icon;
 return (
 <motion.div
 key={stat.label}
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: index * 0.1 }}
 className="text-center"
 >
 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-6 ${stat.color}`}>
 <Icon className="h-8 w-8" />
 </div>
 <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
 {stat.value}
 </div>
 <h3 className="text-xl font-semibold text-slate-900">
 {stat.label}
 </h3>
 </div>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* Our Story Section */}
 <section ref={ref} className="section-padding">
 <div className="container">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
 transition={{ duration: 0.8 }}
 >
 <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
 Our Story
 </h2>
 <div className="space-y-4 text-slate-600 leading-relaxed">
 <p>
 Founded in 2014, RK Visa Solutions began with a simple mission: to make international education and immigration accessible to everyone. What started as a small consulting firm has grown into a trusted partner for thousands of students and professionals worldwide.
 </p>
 <p>
 Our founder, Rahul experienced firsthand the challenges of navigating complex immigration processes. This personal experience drove him to create a company that would simplify these processes and provide expert guidance every step of the way.
 </p>
 <p>
 Today, we're proud to have helped over 5,000 clients achieve their dreams of studying and working abroad. Our success is measured not just in numbers, but in the lives we've transformed and the dreams we've helped realize.
 </p>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 30 }}
 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 >
 <img
 src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800"
 alt="Our team at work"
 className="rounded-2xl shadow-xl"
 />
 </motion.div>
 </div>
 </div>
 </section>

 {/* Values Section */}
 <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
 <div className="container">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
 transition={{ duration: 0.8 }}
 className="text-center mb-16"
 >
 <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
 Our Values
 </h2>
 <p className="text-xl text-slate-600 max-w-3xl mx-auto">
 The principles that guide everything we do and shape our commitment to your success.
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {values.map((value, index) => {
 const Icon = value.icon;
 return (
 <motion.div
 key={value.title}
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
 transition={{ duration: 0.8, delay: index * 0.2 }}
 >
 <Card className="h-full text-center p-8 hover:shadow-xl transition-all duration-300">
 <CardContent className="space-y-4">
 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${value.bgColor} mb-4`}>
 <Icon className={`h-8 w-8 ${value.color}`} />
 </div>
 <h3 className="text-2xl font-bold text-slate-900">
 {value.title}
 </h3>
 <p className="text-slate-600 leading-relaxed">
 {value.description}
 </p>
 </CardContent>
 </Card>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>



 {/* CTA Section */}
 <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
 <div className="container">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
 transition={{ duration: 0.8 }}
 className="text-center"
 >
 <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
 Ready to Start Your Journey?
 </h3>
 <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
 Join thousands of successful students and professionals who trusted us with their international dreams.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button size="lg" asChild>
 <Link href="/contact">
 Get Free Consultation
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="/services">
 View Our Services
 </Link>
 </Button>
 </div>
 </motion.div>
 </div>
 </section>
 </main>

 <Footer />
 </div>
 );
}
