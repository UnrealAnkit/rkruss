import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X } from 'lucide-react';

const SuccessModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Submission Successful!
          </h3>
          <p className="text-gray-500 mb-6">
            Thank you for your interest. Our team will review your information and get back to you shortly.
          </p>
          <button
            onClick={onClose}
            className="btn-primary w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const CtaSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const response = await fetch("https://formspree.io/f/xwpbvpky", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setSubmitted(true);
        setShowModal(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="cta-section" className="section-padding bg-primary-800">
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
              
              <form 
                id="quick-assessment-form"
                className="space-y-4 animate-highlight" 
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
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
                    name="email"
                    required
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
                    name="phone"
                    required
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
                    name="service"
                    required
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
                    name="message"
                    rows={3}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us briefly about your goals"
                  ></textarea>
                </div>

                {submitted && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-md">
                    Thank you for your submission! We'll get back to you soon.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary btn-lg disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Assessment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default CtaSection;