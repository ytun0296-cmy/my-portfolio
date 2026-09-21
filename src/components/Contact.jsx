import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
console.log("Public Key:", PUBLIC_KEY);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Let's discuss how I can help you build something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-light mb-4">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to new opportunities, collaborations, or just a friendly chat. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-all duration-300">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-light hover:text-primary transition-colors duration-300"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-all duration-300">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-light hover:text-primary transition-colors duration-300"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg border border-gray-700/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-all duration-300">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <span className="text-light">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">
                Currently available for freelance work and collaborations
              </span>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="card">
            <h3 className="text-xl font-bold text-light mb-6">Send Me a Message</h3>
            
            {/* Success Message */}
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-6 rounded-lg text-center animate-fade-in">
                <CheckCircle className="mx-auto mb-3" size={40} />
                <p className="font-medium text-lg">Thank you for your message!</p>
                <p className="text-sm mt-1 text-gray-400">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center gap-3">
                    <AlertCircle size={20} />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-light placeholder-gray-500 transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-light placeholder-gray-500 transition-all duration-300"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-light placeholder-gray-500 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>

                {/* Form Footer */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  I'll get back to you within 24-48 hours. ✨
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;