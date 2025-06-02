import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="section-padding bg-primary-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-primary-100 text-lg mb-8">
              Take the first step toward your new future today. Our immigration and education experts are ready to guide you through every step of the process.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Free initial consultation and assessment',
                'Customized immigration strategy',
                'Expert document preparation and review',
                'Regular application status updates',
                'Post-approval settlement guidance'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="btn-accent btn-lg"
              >
                Book Free Consultation
              </Link>
              <Link 
                to="/contact" 
                className="btn-secondary btn-lg text-white border-white/20 hover:bg-white/10 hover:border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Assessment Form</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="immigration">Immigration Consulting</option>
                    <option value="study">Study Abroad Programs</option>
                    <option value="visa">Visa Solutions</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Brief Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us briefly about your goals"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary btn-lg"
                >
                  Submit Assessment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;