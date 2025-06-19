'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Vibrate as Strategy, FileCheck, CheckCircle } from 'lucide-react';

const steps = [
 {
 icon: MessageCircle,
 title: 'Initial Consultation',
 description: 'Free consultation to understand your goals, assess your profile, and recommend the best pathway for your journey.',
 features: ['Profile Assessment', 'Goal Setting', 'Pathway Planning', 'Free Consultation'],
 },
 {
 icon: Strategy,
 title: 'Customized Strategy',
 description: 'Develop a personalized strategy tailored to your specific needs, timeline, and destination preferences.',
 features: ['Personal Strategy', 'Timeline Planning', 'Document Checklist', 'University Selection'],
 },
 {
 icon: FileCheck,
 title: 'Documentation & Filing',
 description: 'Complete assistance with document preparation, application filing, and submission to relevant authorities.',
 features: ['Document Preparation', 'Application Filing', 'Quality Review', 'Submission Support'],
 },
 {
 icon: CheckCircle,
 title: 'Application Success',
 description: 'Celebrate your success with our continued support through visa processing, pre-departure guidance, and arrival assistance.',
 features: ['Visa Processing', 'Pre-departure Brief', 'Arrival Assistance', 'Ongoing Support'],
 },
];

export function ProcessSection() {
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
 Our Process
 </h2>
 <p className="text-xl text-slate-600 max-w-3xl mx-auto">
 A proven 4-step process that has helped thousands of students achieve their dreams of studying abroad.
 </p>
 </motion.div>

 <div className="relative">
 {/* Connection Line */}
 <div className="absolute top-16 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-accent to-success hidden lg:block" />

 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
 {steps.map((step, index) => {
 const Icon = step.icon;
 return (
 <motion.div
 key={step.title}
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
 transition={{ duration: 0.8, delay: index * 0.2 }}
 className="relative"
 >
 {/* Step Number */}
 <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-primary rounded-full mx-auto mb-6 shadow-lg">
 <span className="text-2xl font-bold text-primary">{index + 1}</span>
 </div>

 {/* Content */}
 <div className="text-center space-y-4">
 <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
 <Icon className="h-6 w-6 text-primary" />
 </div>

 <h3 className="text-xl font-bold text-slate-900">
 {step.title}
 </h3>

 <p className="text-slate-600 leading-relaxed">
 {step.description}
 </p>

 <ul className="space-y-2 text-sm">
 {step.features.map((feature) => (
 <li key={feature} className="flex items-center justify-center text-slate-700">
 <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
 {feature}
 </li>
 ))}
 </ul>
 </div>

 {/* Connector Arrow (Mobile) */}
 {index < steps.length - 1 && (
 <div className="flex justify-center mt-8 lg:hidden">
 <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-accent" />
 </div>
 )}
 </motion.div>
 );
 })}
 </div>
 </div>

 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
 transition={{ duration: 0.8, delay: 1 }}
 className="text-center mt-16"
 >
 <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
 <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
 Ready to Start Your Journey?
 </h3>
 <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
 Join thousands of successful students who trusted us with their education dreams. Book your free consultation today.
 </p>
 <motion.button
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 className="btn-primary text-lg px-8 py-4"
 onClick={() => window.location.href = '/contact'}
 >
 Start Your Free Consultation
 </motion.button>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
