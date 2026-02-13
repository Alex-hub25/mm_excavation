'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      setSubmitError('Please complete the reCAPTCHA verification');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit form with reCAPTCHA token
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setSubmitError(data.message || 'Failed to send message. Please try again.');
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
        setIsSubmitting(false);
        return;
      }

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      });
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
      
      alert('Thank you for your message! We will contact you soon.');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('An error occurred. Please try again later.');
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get Your Free Quote Today!</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Reach out to M & M Excavation and Dirtwork for expert 
            advice and a no-obligation quote. Our team is eager to assist you with all your earthwork needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#e67e22]"
                    placeholder="Your Name"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#e67e22]"
                    placeholder="your.email@example.com"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#e67e22]"
                    placeholder="(636) 123-4567"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#e67e22]"
                    suppressHydrationWarning
                  > {/*Review with Luke */}
                    <option value="">Select Project Type</option>
                    <option value="excavation">Excavation</option>
                    <option value="site-development">Site Development</option>
                    <option value="grading">Grading & Leveling</option>
                    <option value="site-clearing">Site Clearing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#e67e22] resize-none"
                  placeholder="Tell us about your project..."
                  suppressHydrationWarning
                ></textarea>
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                  onChange={onRecaptchaChange}
                  theme="dark"
                />
              </div>

              {/* Error message */}
              {submitError && (
                <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-sm">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !recaptchaToken}
                className="w-full bg-[#e67e22] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#d35400] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                suppressHydrationWarning
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact information */}
          <div>
            {/* Equipment placeholder image */}
            <div className="relative rounded-lg p-8 h-64 flex flex-col items-center justify-center mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e67e22]/60 to-[#d35400]/60 pointer-events-none" style={{ zIndex: 0 }} />
              <div className="flex items-center justify-center gap-8 mb-4 z-10 relative">
                <Image src="/kubota_logo.png" alt="Kubota Logo" className="h-24 w-auto object-contain drop-shadow-lg" width={96} height={96} />
                <Image src="/Cummins_logo.png" alt="Cummins Logo" className="h-24 w-auto object-contain drop-shadow-lg" width={96} height={96} />
              </div>
              <div className="text-center text-white z-10 relative">
                <h3 className="text-2xl font-bold mb-2">Professional Equipment</h3>
                <p className="text-lg opacity-90">Ready for Your Next Project</p>
              </div>
            </div>

            {/* Contact details */}
            <div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#e67e22] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">Call Us</div>
                  <a href="tel:+16365849335" className="text-[#e67e22] text-xl font-bold hover:underline">(636) 584-9335</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#e67e22] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">Email Us</div>
                  <a href="mailto:lucasclavenna5@gmail.com" className="text-gray-300 hover:underline">lucasclavenna5@gmail.com</a>
                </div>
              </div>

              {/* Business hours */}
              <div className="bg-gray-800 rounded-lg p-6 mt-8">
                <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-[#e67e22] rounded text-sm">
                  <strong>24/7 Emergency Service Available</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}