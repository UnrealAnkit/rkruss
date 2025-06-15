'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Clock, Globe, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: '10+',
    label: 'Years Experience',
    description: 'Decade of expertise in immigration consulting',
    color: 'text-primary',
  },
  {
    icon: Users,
    value: '5,000+',
    label: 'Successful Clients',
    description: 'Students and families we\'ve helped succeed',
    color: 'text-accent',
  },
  {
    icon: Globe,
    value: '20+',
    label: 'Countries Covered',
    description: 'Global destinations for your education journey',
    color: 'text-success',
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Success Rate',
    description: 'Proven track record of successful applications',
    color: 'text-warning',
  },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our numbers speak for themselves. Join thousands of successful students who trusted us with their education journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-6 ${stat.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
                    className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}