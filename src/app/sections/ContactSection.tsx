'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setIsSubmitting(true);
      setError('');
      
      // You'll need to sign up for EmailJS and replace with your own service ID, template ID, and public key
      // This is just a placeholder for now
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      
      setIsSubmitted(true);
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" ref={formRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--foreground)] opacity-80">
            Have a question or want to work together? Feel free to reach out to me using the form below or through my social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] mr-4">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:dannynguyen032@gmail.com" 
                      className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                    >
                      dannynguyen032@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] mr-4">
                    <FiGithub size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/DaNnY-0324" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                    >
                      github.com/DaNnY-0324
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] mr-4">
                    <FiLinkedin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/dannyswe/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                    >
                      linkedin.com/in/dannyswe
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Or connect with me directly:</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/DaNnY-0324" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[var(--card)] text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/dannyswe/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[var(--card)] text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a 
                    href="mailto:dannynguyen032@gmail.com" 
                    className="p-3 rounded-full bg-[var(--card)] text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                  >
                    <FiMail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900 dark:bg-opacity-20 p-4 rounded-lg flex items-center text-green-600 dark:text-green-400">
                  <FiCheck size={24} className="mr-3" />
                  <p>Your message has been sent successfully! I'll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {error && (
                    <div className="bg-red-100 dark:bg-red-900 dark:bg-opacity-20 p-4 rounded-lg flex items-center text-red-600 dark:text-red-400">
                      <FiAlertCircle size={24} className="mr-3" />
                      <p>{error}</p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
