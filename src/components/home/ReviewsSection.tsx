import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  program: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "India",
    rating: 5,
    text: "RK Russ made my dream of studying medicine in Russia a reality. Their guidance throughout the admission process was invaluable. Now I'm successfully pursuing my MBBS at a top medical university.",
    image: "/images/testimonials/student1.jpg",
    program: "MBBS - Russia",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Sarah Chen",
    location: "Malaysia",
    rating: 5,
    text: "The team at RK Russ provided exceptional support for my Singapore university application. Their knowledge of the admission requirements and visa process made everything smooth.",
    image: "/images/testimonials/student2.jpg",
    program: "Business Administration - Singapore",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Mohammed Al-Rashid",
    location: "UAE",
    rating: 5,
    text: "Choosing RK Russ for my studies in Dubai was the best decision. They helped me select the right university and program, and their visa assistance was outstanding.",
    image: "/images/testimonials/student3.jpg",
    program: "MBA - Dubai",
    date: "January 2024"
  },
  {
    id: 4,
    name: "Anna Petrova",
    location: "Kazakhstan",
    rating: 5,
    text: "I'm grateful to RK Russ for their professional guidance in helping me pursue my medical degree in Russia. Their team was supportive throughout the entire process.",
    image: "/images/testimonials/student4.jpg",
    program: "Medicine - Russia",
    date: "December 2023"
  }
];

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Student Success Stories</h2>
          <p className="section-subtitle">
            Hear from our students about their experience with RK Russ
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={showPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={showNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-10"
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
                  <div className="bg-white rounded-2xl shadow-lg p-8 relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-100" />
                    
                    <div className="flex items-center mb-6">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{review.name}</h4>
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

                    <blockquote className="text-gray-700 mb-6">
                      "{review.text}"
                    </blockquote>

                    <div className="flex items-center justify-between text-sm text-gray-500 mt-6 pt-6 border-t">
                      <span>{review.program}</span>
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
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-primary-600 w-4'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your educational journey abroad?
          </p>
          <button className="btn-primary btn-lg">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection; 