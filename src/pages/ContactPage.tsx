import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, X } from 'lucide-react';

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
            Assessment Submitted Successfully!
          </h3>
          <p className="text-gray-500 mb-6">
            Thank you for your interest in studying abroad. Our education experts will review your profile and contact you shortly with personalized recommendations.
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

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  preferredCountry: string;
  programLevel: string;
  fieldOfStudy: string;
  englishLevel: string;
  budget: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        setShowModal(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const studyDestinations = [
    "Russia",
    "Singapore",
    "Dubai",
    "Armenia",
    "Mauritius",
    "Kazakhstan",
  ];

  const programLevels = [
    "Bachelor's Degree",
    "Master's Degree",
    "Medical Degree (MBBS)",
    "PhD",
    "Language Course",
    "Professional Certificate"
  ];

  const englishLevels = [
    "Beginner (A1)",
    "Elementary (A2)",
    "Intermediate (B1)",
    "Upper Intermediate (B2)",
    "Advanced (C1)",
    "Proficient (C2)",
    "Native Speaker",
  ];

  return (
    <div className="pt-20">
      <div className="bg-primary-50 py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary-900 mb-4">
            Quick Assessment Form
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Fill out this form to receive a personalized consultation about your study abroad opportunities. Our experts will analyze your profile and contact you with the best options.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Nationality */}
                <div>
                  <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
                    Nationality *
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your nationality"
                  />
                </div>

                {/* Preferred Country */}
                <div>
                  <label htmlFor="preferredCountry" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Study Destination *
                  </label>
                  <select
                    id="preferredCountry"
                    name="preferredCountry"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a country</option>
                    {studyDestinations.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {/* Program Level */}
                <div>
                  <label htmlFor="programLevel" className="block text-sm font-medium text-gray-700 mb-1">
                    Program Level *
                  </label>
                  <select
                    id="programLevel"
                    name="programLevel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select program level</option>
                    {programLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Field of Study */}
                <div>
                  <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700 mb-1">
                    Field of Study *
                  </label>
                  <input
                    type="text"
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g., Medicine, Business, Engineering"
                  />
                </div>

                {/* English Level */}
                <div>
                  <label htmlFor="englishLevel" className="block text-sm font-medium text-gray-700 mb-1">
                    English Proficiency Level *
                  </label>
                  <select
                    id="englishLevel"
                    name="englishLevel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select English level</option>
                    {englishLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Budget Range (USD) *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-20000">$10,000 - $20,000</option>
                    <option value="20000-30000">$20,000 - $30,000</option>
                    <option value="30000+">$30,000+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us about your academic background, specific requirements, or any questions you have"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Assessment"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Office Address</h3>
                  <p className="text-gray-600">RK Russ Office<br />Moscow, Russia</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+74951234567" className="hover:text-primary-600">
                      +7 (495) 123-4567
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@rkruss.com" className="hover:text-primary-600">
                      info@rkruss.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-gray-900 mb-2">Office Hours</h3>
              <div className="text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ContactPage;