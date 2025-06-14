import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  program: string;
  date: string;
}

// Function to get initials from name
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

// Function to generate a consistent color based on name
const getColorFromName = (name: string): string => {
  const colors = [
    'bg-primary-500',
    'bg-accent-500',
    'bg-emerald-500',
    'bg-purple-500',
    'bg-rose-500',
    'bg-amber-500',
  ];
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "India",
    rating: 5,
    text: "RK Russ made my dream of studying medicine in Russia a reality. Their guidance throughout the admission process was invaluable. Now I'm successfully pursuing my MBBS at a top medical university.",
    program: "MBBS - Russia",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Sarah Chen",
    location: "Malaysia",
    rating: 5,
    text: "The team at RK Russ provided exceptional support for my Singapore university application. Their knowledge of the admission requirements and visa process made everything smooth.",
    program: "Business Administration - Singapore",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Mohammed Al-Rashid",
    location: "UAE",
    rating: 5,
    text: "Choosing RK Russ for my studies in Dubai was the best decision. They helped me select the right university and program, and their visa assistance was outstanding.",
    program: "MBA - Dubai",
    date: "January 2024"
  },
  {
    id: 4,
    name: "Anna Petrova",
    location: "Kazakhstan",
    rating: 5,
    text: "I'm grateful to RK Russ for their professional guidance in helping me pursue my medical degree in Russia. Their team was supportive throughout the entire process.",
    program: "Medicine - Russia",
    date: "December 2023"
  },
  {
    id: 5,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Global Migration Experts turned our dream of studying abroad into reality. Their step-by-step guidance made the complex application process simple and stress-free.",
    program: "Computer Science - Singapore",
    date: "November 2023"
  },
  {
    id: 6,
    name: "Sophia Rodriguez",
    location: "Spain",
    rating: 5,
    text: "The team's expertise in immigration law and their attention to detail were invaluable. They helped our family navigate the complicated visa process with confidence.",
    program: "Masters in Business - Dubai",
    date: "October 2023"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        showNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  const showPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const showNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Student Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600">
            Read about the experiences of students we've helped achieve their educational and immigration goals worldwide.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative"
             onMouseEnter={() => setAutoplay(false)}
             onMouseLeave={() => setAutoplay(true)}>
          {/* Navigation Buttons */}
          <button
            onClick={showPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-10 transition-all hover:scale-110"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={showNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-10 transition-all hover:scale-110"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Reviews Slider */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 relative transform transition-all duration-300 hover:shadow-xl">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-100" />
                    
                    <div className="flex items-center mb-6">
                      <div 
                  className={cn(
                          "w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mr-4",
                          getColorFromName(review.name)
                        )}
                      >
                        {getInitials(review.name)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">{review.name}</h4>
                        <p className="text-gray-600">{review.location}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-gray-700 text-lg mb-6 italic">
                      "{review.text}"
                    </blockquote>

                    <div className="flex items-center justify-between text-sm text-gray-500 mt-6 pt-6 border-t">
                      <span className="font-medium">{review.program}</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
            <button 
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentIndex === index
                    ? "bg-primary-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your educational journey abroad?
          </p>
          <Link 
            to="/contact" 
            className="btn-primary btn-lg inline-flex items-center gap-2 transform hover:scale-105 transition-all"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;