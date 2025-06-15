'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    full_name: 'Rahul Sharma',
    country: 'Russia',
    program: 'MBBS',
    rating: 5,
    comment: 'RK Visa Solutions made my dream of studying medicine in Russia a reality. Their guidance throughout the admission process was invaluable. Now I\'m successfully pursuing my MBBS at a top medical university.',
    created_at: '2024-03-15',
    initials: 'RS',
    location: 'India'
  },
  {
    id: '2',
    full_name: 'Sarah Chen',
    country: 'Singapore',
    program: 'Business Administration',
    rating: 5,
    comment: 'The team at RK Visa Solutions provided exceptional support for my Singapore university application. Their knowledge of the admission requirements and visa process made everything smooth.',
    created_at: '2024-02-20',
    initials: 'SC',
    location: 'Malaysia'
  },
  {
    id: '3',
    full_name: 'Mohammed Al-Rashid',
    country: 'Dubai',
    program: 'MBA',
    rating: 5,
    comment: 'Choosing RK Visa Solutions for my studies in Dubai was the best decision. They helped me select the right university and program, and their visa assistance was outstanding.',
    created_at: '2024-01-25',
    initials: 'MA',
    location: 'UAE'
  },
  {
    id: '4',
    full_name: 'Anna Petrova',
    country: 'Russia',
    program: 'Medicine',
    rating: 5,
    comment: 'I\'m grateful to RK Visa Solutions for their professional guidance in helping me pursue my medical degree in Russia. Their team was supportive throughout the entire process.',
    created_at: '2023-12-10',
    initials: 'AP',
    location: 'Kazakhstan'
  },
  {
    id: '5',
    full_name: 'Michael Chen',
    country: 'Singapore',
    program: 'Computer Science',
    rating: 5,
    comment: 'RK Visa Solutions turned our dream of studying abroad into reality. Their step-by-step guidance made the complex application process simple and stress-free.',
    created_at: '2023-11-15',
    initials: 'MC',
    location: 'Singapore'
  },
  {
    id: '6',
    full_name: 'Sophia Rodriguez',
    country: 'Dubai',
    program: 'Masters in Business',
    rating: 5,
    comment: 'The team\'s expertise in immigration law and their attention to detail were invaluable. They helped our family navigate the complicated visa process with confidence.',
    created_at: '2023-10-20',
    initials: 'SR',
    location: 'Spain'
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const itemsPerSlide = 3;
    const start = currentIndex * itemsPerSlide;
    const end = start + itemsPerSlide;
    return testimonials.slice(start, end);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            What Our Students Say. Read about the experiences of students we've helped achieve their educational and immigration goals worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <Quote className="h-8 w-8 text-primary/30" />
                    </div>

                    <p className="text-slate-700 leading-relaxed italic">
                      "{testimonial.comment}"
                    </p>

                    <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {testimonial.full_name}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {testimonial.program} • {testimonial.country}
                        </p>
                        <p className="text-xs text-slate-500">
                          {new Date(testimonial.created_at).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long' 
                          })}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Ready to start your educational journey abroad?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who trusted us with their education dreams. Your success story could be next.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
              onClick={() => window.location.href = '/contact'}
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}