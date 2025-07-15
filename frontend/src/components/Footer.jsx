import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const handleNavClick=useNavigate();
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://www.instagram.com/riteshpandey9450/', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: 'https://www.linkedin.com/feed/', color: 'hover:text-blue-700' },
    { icon: Mail, href: 'riteshnauli@gmail.com', color: 'hover:text-green-500' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              FoodWise
            </h3>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
              Streamline your food inventory management with our innovative platform designed for modern businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links - Centered */}
          <div className="animate-fade-in animation-delay-200 flex flex-col items-center">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-center">
              <li>
                <button 
                  onClick={() => handleNavClick('/home')}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/features')}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2"
                >
                  Feature
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/pricing')}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/contact')}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2"
                >
                  Contact 
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="animate-fade-in animation-delay-600">
            <h4 className="text-xl font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 dark:text-gray-400 mb-4 transition-colors duration-300">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 dark:bg-gray-700 rounded-lg border border-gray-700 dark:border-gray-600 focus:border-blue-500 focus:ring-0 transition-colors duration-300 text-white"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
          <p className="text-gray-400 dark:text-gray-500 mb-4 md:mb-0 transition-colors duration-300">
            ©️ 2024 FoodWise. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;