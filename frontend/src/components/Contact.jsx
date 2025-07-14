import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Swal from 'sweetalert2'

const ContactSection = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "65738e45-3e15-4e0e-8dab-e6709066c6ca");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
      
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     Swal.fire({
     title: "Good job!",
     text: "Thank you for Contact with Us.",
      icon: "success"
      });
    }
  };
  

  

  const contactMethods = [
    { icon: Mail, title: 'Email Us', info: 'hello@company.com', color: 'bg-blue-500' },
    { icon: Phone, title: 'Call Us', info: '+91 (555) 123-4567', color: 'bg-green-500' },
    { icon: MapPin, title: 'Visit Us', info: 'Gorakhpur,UP,India', color: 'bg-purple-500' },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Get in touch with our team - we'd love to hear from you
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div 
                key={method.title}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in text-center border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{method.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{method.info}</p>
              </div>
            );
          })}
        </div>
        
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in animation-delay-500 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">Send us a message</h3>
          
          <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 transition-colors duration-300" >Name</label>
                <input
                  type="text"
                  className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your name" name="name" required
                />
              
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 transition-colors duration-300">Email</label>
              <input
                type="email"
                className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your@email.com" name="email" required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 transition-colors duration-300">Message</label>
              <textarea
                rows={5}
                className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Tell us how we can help you..."  name="message" required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;