'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Eye } from 'lucide-react';

const videoGuides = [
  {
    id: '1',
    title: 'Complete Guide to Study in Russia',
    description: 'Everything you need to know about studying in Russia - from application to arrival',
    videoId: 'ylXcCbyC54U',
    thumbnail: 'https://img.youtube.com/vi/ylXcCbyC54U/maxresdefault.jpg',
    duration: '15:30',
    views: '25K',
    category: 'Russia',
    url: 'https://youtu.be/ylXcCbyC54U?si=tR4u3lO9U63Ifx6X'
  },
  {
    id: '2',
    title: 'Singapore Student Visa Process',
    description: 'Step-by-step guide to getting your Singapore student visa approved',
    videoId: 'q1sZi3-QpdY',
    thumbnail: 'https://img.youtube.com/vi/q1sZi3-QpdY/maxresdefault.jpg',
    duration: '12:45',
    views: '18K',
    category: 'Singapore',
    url: 'https://youtu.be/q1sZi3-QpdY?si=BJ82cMf1aFLoBdkT'
  },
  {
    id: '3',
    title: 'Dubai University Applications',
    description: 'How to apply to top universities in Dubai and UAE',
    videoId: 'PxOt1aTZwpg',
    thumbnail: 'https://img.youtube.com/vi/PxOt1aTZwpg/maxresdefault.jpg',
    duration: '18:20',
    views: '22K',
    category: 'Dubai',
    url: 'https://youtu.be/PxOt1aTZwpg?si=KieOp3SzJ8sN-Fk-'
  },
  {
    id: '4',
    title: 'Armenia Study Guide',
    description: 'Complete guide to studying in Armenia - affordable European education',
    videoId: 'r6AwGX0VBE8',
    thumbnail: 'https://img.youtube.com/vi/r6AwGX0VBE8/maxresdefault.jpg',
    duration: '14:15',
    views: '12K',
    category: 'Armenia',
    url: 'https://youtu.be/r6AwGX0VBE8?si=lOiP0HIFvPan4sNE'
  },
  {
    id: '5',
    title: 'Mauritius Education System',
    description: 'Study in paradise - Mauritius education opportunities and visa process',
    videoId: 'QEzo_6whVcg',
    thumbnail: 'https://img.youtube.com/vi/QEzo_6whVcg/maxresdefault.jpg',
    duration: '16:40',
    views: '8K',
    category: 'Mauritius',
    url: 'https://youtu.be/QEzo_6whVcg?si=SC1cX6HcqPkwdSAJ'
  },
  {
    id: '6',
    title: 'Document Preparation Guide',
    description: 'Essential documents needed for international study applications',
    videoId: 'DuRFsSy36Hc',
    thumbnail: 'https://img.youtube.com/vi/DuRFsSy36Hc/maxresdefault.jpg',
    duration: '20:30',
    views: '35K',
    category: 'General',
    url: 'https://youtu.be/DuRFsSy36Hc?si=WWquDz7BTSdOK9CR'
  },
];

export function VideoGuidesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoGuides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentVideo = videoGuides[currentVideoIndex];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Quick Video Guides
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Watch our comprehensive video guides to understand the study abroad process for each destination. Get expert insights and step-by-step instructions.
          </p>
        </motion.div>

        <motion.div
          key={currentVideo.id}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <Card 
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200/50 dark:border-white/10 hover:bg-white/90 dark:hover:bg-slate-900/90 transition-all duration-300 cursor-pointer group overflow-hidden shadow-lg dark:shadow-slate-900/50"
            onClick={() => window.open(currentVideo.url, '_blank')}
          >
            <div className="relative">
              <img
                src={currentVideo.thumbnail}
                alt={currentVideo.title}
                className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 dark:bg-black/50 group-hover:bg-black/20 dark:group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-600 dark:bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Duration Badge */}
              <Badge className="absolute bottom-2 right-2 bg-black/70 dark:bg-black/80 text-white border-0 text-xs">
                <Clock className="h-2.5 w-2.5 mr-1" />
                {currentVideo.duration}
              </Badge>

              {/* Category Badge */}
              <Badge className="absolute top-2 left-2 bg-accent/90 dark:bg-accent/80 text-white dark:text-white border-0 text-xs">
                {currentVideo.category}
              </Badge>
            </div>

            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-accent dark:group-hover:text-accent transition-colors line-clamp-1">
                  {currentVideo.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2">
                  {currentVideo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  <span>{currentVideo.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Play className="h-3 w-3" />
                  <span>Watch Now</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dot Navigation */}
          <div className="flex justify-center items-center gap-1.5 mt-4">
            {videoGuides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex 
                    ? 'bg-accent scale-110' 
                    : 'bg-slate-400/30 dark:bg-white/20 hover:bg-slate-400/50 dark:hover:bg-white/30'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 lg:p-12 bg-white/10 dark:bg-slate-900/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
              Need Personalized Guidance?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              While our video guides provide comprehensive information, every student's situation is unique. Book a free consultation for personalized advice.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-accent text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full"
              onClick={() => window.location.href = '/contact'}
            >
              Book Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}