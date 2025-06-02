import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '../../utils/cn';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  image: string;
  stars: number;
  active: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  name, 
  position, 
  image, 
  stars,
  active
}) => {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-lg p-8 transition-all duration-500",
      active ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"
    )}>
      <div className="flex items-center mb-6">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-5 h-5 mr-1",
              i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )} 
          />
        ))}
      </div>
      <p className="text-gray-700 text-lg italic mb-6">{quote}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-100" 
        />
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Global Migration Experts turned our dream of studying abroad into reality. Their step-by-step guidance made the complex application process simple and stress-free.",
      name: "Michael Chen",
      position: "International Student, Oxford University",
      image: "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 5
    },
    {
      quote: "The team's expertise in immigration law and their attention to detail were invaluable. They helped our family navigate the complicated visa process with confidence.",
      name: "Sophia Rodriguez",
      position: "Permanent Resident, Canada",
      image: "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 5
    },
    {
      quote: "I tried handling my work visa application on my own but kept facing rejections. Global Migration Experts identified the issues and helped me secure approval within months.",
      name: "James Wilson",
      position: "Tech Professional, United States",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stars: 4
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Client Success Stories
          </span>
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Read about the experiences of people we've helped achieve their immigration and education goals.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                image={testimonial.image}
                stars={testimonial.stars}
                active={index === currentIndex}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === currentIndex ? "bg-primary-500" : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;