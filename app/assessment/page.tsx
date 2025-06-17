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
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, Globe } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  nationality: z.string().min(2, 'Please enter your nationality'),
  preferred_destination: z.string().min(1, 'Please select a destination'),
  program_level: z.string().min(1, 'Please select program level'),
  field_of_study: z.string().min(2, 'Please enter your field of study'),
  english_level: z.string().min(1, 'Please select English proficiency level'),
  budget_range: z.string().min(1, 'Please select budget range'),
  additional_info: z.string().optional(),
});

const destinations = [
  'Russia',
  'Singapore',
  'Dubai/UAE',
  'Armenia',
  'Mauritius',
  'Other'
];

const programLevels = [
  'High School',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'PhD/Doctorate',
  'Certificate/Diploma',
  'Language Course'
];

const englishLevels = [
  'Beginner',
  'Elementary',
  'Intermediate',
  'Upper Intermediate',
  'Advanced',
  'Native/Fluent'
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $20,000',
  '$20,000 - $30,000',
  '$30,000 - $50,000',
  'Above $50,000'
];

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    value: 'RK Visa Solutions Office\n123 Business Center\nMoscow, Russia',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+7 (495) 123-4567',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@rkruss.com',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    value: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed',
  },
];

export default function AssessmentPage() {
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
      nationality: '',
      preferred_destination: '',
      program_level: '',
      field_of_study: '',
      english_level: '',
      budget_range: '',
      additional_info: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Assessment submitted:', values);
      toast.success('Assessment submitted successfully! We will contact you within 24 hours.');
      setIsSubmitted(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error('Failed to submit assessment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Quick Assessment Form
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Fill out this form to receive a personalized consultation about your study abroad opportunities. Our experts will analyze your profile and contact you with the best options.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Assessment Form Section */}
        <section ref={ref} className="section-padding">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Assessment Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                      <User className="h-6 w-6 text-primary" />
                      Personal Assessment
                    </CardTitle>
                    <p className="text-slate-600">
                      Please provide accurate information to help us give you the best recommendations.
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
                          Assessment Submitted!
                        </h3>
                        <p className="text-slate-600">
                          Thank you for your submission. Our expert team will review your profile and contact you within 24 hours with personalized recommendations.
                        </p>
                      </motion.div>
                    ) : (
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          {/* Personal Information */}
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">
                              Personal Information
                            </h3>
                            
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
                              name="nationality"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nationality *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter your nationality" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          {/* Study Preferences */}
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">
                              Study Preferences
                            </h3>

                            <FormField
                              control={form.control}
                              name="preferred_destination"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Preferred Study Destination *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select a country" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {destinations.map((destination) => (
                                        <SelectItem key={destination} value={destination}>
                                          {destination}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="program_level"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Program Level *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select program level" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {programLevels.map((level) => (
                                          <SelectItem key={level} value={level}>
                                            {level}
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
                                name="field_of_study"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Field of Study *</FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g., Medicine, Business, Engineering" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="english_level"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>English Proficiency Level *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select English level" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {englishLevels.map((level) => (
                                          <SelectItem key={level} value={level}>
                                            {level}
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
                                name="budget_range"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Budget Range (USD) *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select budget range" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {budgetRanges.map((range) => (
                                          <SelectItem key={range} value={range}>
                                            {range}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>

                          {/* Additional Information */}
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">
                              Additional Information
                            </h3>

                            <FormField
                              control={form.control}
                              name="additional_info"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Additional Information</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="Tell us about your academic background, specific requirements, or any questions you have"
                                      className="min-h-[120px]"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                Submitting Assessment...
                              </>
                            ) : (
                              <>
                                Submit Assessment
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
                className="space-y-6"
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div key={info.title} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">
                              {info.title}
                            </h4>
                            <p className="text-sm text-slate-600 whitespace-pre-line">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-primary/5">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-slate-900 mb-3">
                      What Happens Next?
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Our experts review your profile within 24 hours</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Receive personalized university recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Get detailed information about visa requirements</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Schedule a free consultation call</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}