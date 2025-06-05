import React, { useState } from 'react';
import { X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "App f44b7a4acbfbc9316582c9b437316001-51e6e184-6309-49e8-aaf2-fd8dec9f6553");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    const raw = JSON.stringify({
      "messages": [
        {
          "from": "447860099299",
          "to": "919234580238",
          "messageId": crypto.randomUUID(),
          "content": {
            "templateName": "test_whatsapp_template_en",
            "templateData": {
              "body": {
                "placeholders": [`New Contact:\nName: ${name}\nEmail: ${email}`]
              }
            },
            "language": "en"
          }
        }
      ]
    });

    try {
      const response = await fetch("https://rpzvzy.api.infobip.com/whatsapp/1/message/template", {
        method: "POST",
        headers: myHeaders,
        body: raw,
      });

      if (response.ok) {
        e.currentTarget.reset();
        setIsModalOpen(false);
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* WhatsApp Icon Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg z-50 transition-transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-6 h-6 fill-white"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Contact via WhatsApp
              </h3>
              <p className="text-gray-500 mt-2">
                Please provide your details and we'll get back to you on WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="whatsapp-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="whatsapp-name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="whatsapp-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="whatsapp-email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton; 