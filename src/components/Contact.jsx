// Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Contact Me</span>
        </h2>
        
        <div className="max-w-xl mx-auto">
          <div className="gradient-border p-8 bg-black/50 card-hover">
            <div className="space-y-6">
              <div className="flex items-center group">
                <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:pateldeep62157@gmail.com" className="ml-4 text-gray-300 group-hover:text-white transition-colors duration-200">
                  deepkumarparejiya@gmail.com
                </a>
              </div>
              
              <div className="flex items-center group">
                <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+14377799391" className="ml-4 text-gray-300 group-hover:text-white transition-colors duration-200">
                  +1 (437) 779-9391
                </a>
              </div>

              <div className="flex items-center group">
                <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="ml-4 text-gray-300">
                  Toronto, ON | M1G 2M5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;