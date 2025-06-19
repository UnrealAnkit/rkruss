'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
 full_name: z.string().min(2, 'Name must be at least 2 characters'),
 email: z.string().email('Please enter a valid email address'),
 phone: z.string().min(10, 'Please enter a valid phone number'),
 service_interest: z.string().min(1, 'Please select a service'),
 message: z.string().min(10, 'Message must be at least 10 characters'),
});

const services = [
 'Immigration Consulting',
 'Study Abroad Programs',
 'Visa Solutions',
 'Document Processing',
 'University Application',
 'Scholarship Assistance',
 'Other',
];

const contactInfo = [
 {
 icon: Mail,
 title: 'Email Us',
 value: 'info@rkruss.com',
 href: 'mailto:info@rkruss.com',
 },
 {
 icon: Phone,
 title: 'Call Us',
 value: '+7 (495) 123-4567',
 href: 'tel:+74951234567',
 },
 {
 icon: MapPin,
 title: 'Visit Us',
 value: 'RK Russ Office, Moscow, Russia',
 href: '#',
 },
 {
 icon: Clock,
 title: 'Working Hours',
 value: 'Mon - Fri: 9:00 AM - 6:00 PM',
 href: '#',
 },
];

export default function ContactPage() {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-100px" });
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSubmitted, setIsSubmitted] = useState(false);

 const form = useForm<z.infer<typeof formSchema>>({
 resolver: zodResolver(formSchema),
 defaultValues: {
 full_name: '',
 email: '',
 phone: '',
 service_interest: '',
 message: '',
 },
 });

 const onSubmit = async (values: z.infer<typeof formSchema>) => {
 setIsSubmitting(true);

 try {
 // Simulate form submission
 await new Promise(resolve => setTimeout(resolve, 2000));

 console.log('Form submitted:', values);
 toast.success('Message sent successfully! We will contact you within 24 hours.');
 setIsSubmitted(true);
 form.reset();

 // Reset success message after 5 seconds
 setTimeout(() => setIsSubmitted(false), 5000);
 } catch (error) {
 toast.error('Failed to send message. Please try again.');
 } finally {
 setIsSubmitting(false);
 }
 };

 return (
 <div className="min-h-screen">
 <Header />

 <main>
 {/* Hero Section */}
 <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
 <div className="container">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="text-center text-white"
 >
 <h1 className="text-4xl lg:text-5xl font-bold mb-4">
 Contact Us
 </h1>
 <p className="text-xl text-slate-300 max-w-3xl mx-auto">
 Ready to take the first step toward your new future today. Our immigration and education experts are ready to guide you through every step of the process.
 </p>
 </motion.div>
 </div>
 </section>

 {/* Contact Section */}
 <section ref={ref} className="section-padding">
 <div className="container">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {/* Contact Form */}
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 >
 <Card className="shadow-xl">
 <CardHeader>
 <CardTitle className="text-2xl font-bold text-slate-900">
 Send us a Message
 </CardTitle>
 <p className="text-slate-600">
 Fill out this form and we'll get back to you as soon as possible.
 </p>
 </CardHeader>
 <CardContent>
 {isSubmitted ? (
 <motion.div
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 className="text-center py-8"
 >
 <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
 <h3 className="text-xl font-bold text-slate-900 mb-2">
 Thank You!
 </h3>
 <p className="text-slate-600">
 Your message has been sent successfully. Our team will contact you within 24 hours.
 </p>
 </motion.div>
 ) : (
 <Form {...form}>
 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
 <FormField
 control={form.control}
 name="full_name"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Full Name *</FormLabel>
 <FormControl>
 <Input placeholder="Enter your full name" {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <FormField
 control={form.control}
 name="email"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Email *</FormLabel>
 <FormControl>
 <Input type="email" placeholder="Enter your email" {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />

 <FormField
 control={form.control}
 name="phone"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Phone Number *</FormLabel>
 <FormControl>
 <Input placeholder="Enter your phone number" {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 </div>

 <FormField
 control={form.control}
 name="service_interest"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Service of Interest *</FormLabel>
 <Select onValueChange={field.onChange} defaultValue={field.value}>
 <FormControl>
 <SelectTrigger>
 <SelectValue placeholder="Select a service" />
 </SelectTrigger>
 </FormControl>
 <SelectContent>
 {services.map((service) => (
 <SelectItem key={service} value={service}>
 {service}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 <FormMessage />
 </FormItem>
 )}
 />

 <FormField
 control={form.control}
 name="message"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Message *</FormLabel>
 <FormControl>
 <Textarea
 placeholder="Tell us about your requirements or any questions you have"
 className="min-h-[120px]"
 {...field}
 />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />

 <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
 {isSubmitting ? (
 <>
 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
 Sending Message...
 </>
 ) : (
 <>
 Send Message
 <Send className="ml-2 h-4 w-4" />
 </>
 )}
 </Button>
 </form>
 </Form>
 )}
 </CardContent>
 </Card>
 </motion.div>

 {/* Contact Information */}
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
 transition={{ duration: 0.8, delay: 0.4 }}
 className="space-y-8"
 >
 <div>
 <h3 className="text-2xl font-bold text-slate-900 mb-6">
 Get in Touch
 </h3>
 <p className="text-slate-600 leading-relaxed mb-8">
 We're here to help you every step of the way. Reach out to us through any of these channels, and our expert team will be happy to assist you.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 {contactInfo.map((info, index) => {
 const Icon = info.icon;
 return (
 <motion.div
 key={info.title}
 initial={{ opacity: 0, y: 20 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
 transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
 >
 <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
 <div className="flex items-start space-x-4">
 <div className="flex-shrink-0">
 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
 <Icon className="h-6 w-6 text-primary" />
 </div>
 </div>
 <div>
 <h4 className="font-semibold text-slate-900 mb-1">
 {info.title}
 </h4>
 {info.href !== '#' ? (
 <a
 href={info.href}
 className="text-slate-600 hover:text-primary transition-colors"
 >
 {info.value}
 </a>
 ) : (
 <p className="text-slate-600">{info.value}</p>
 )}
 </div>
 </div>
 </Card>
 </motion.div>
 );
 })}
 </div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
 transition={{ duration: 0.8, delay: 1 }}
 className="bg-primary/5 rounded-2xl p-8"
 >
 <h4 className="text-xl font-bold text-slate-900 mb-4">
 Why Choose RK Visa Solutions?
 </h4>
 <ul className="space-y-3 text-slate-700">
 <li className="flex items-start">
 <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
 <span>Free initial consultation and assessment</span>
 </li>
 <li className="flex items-start">
 <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
 <span>Customized immigration strategy</span>
 </li>
 <li className="flex items-start">
 <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
 <span>Expert document preparation and review</span>
 </li>
 <li className="flex items-start">
 <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
 <span>Regular application status updates</span>
 </li>
 <li className="flex items-start">
 <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
 <span>Post-approval settlement guidance</span>
 </li>
 </ul>
 </motion.div>
 </motion.div>
 </div>
 </div>
 </section>
 </main>

 <Footer />
 </div>
 );
}
