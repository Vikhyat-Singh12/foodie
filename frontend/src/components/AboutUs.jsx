import * as React from "react";
import { Target, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const features = [
    { icon: Target, title: 'Our Mission', description: 'To simplify product management for businesses of all sizes' },
    { icon: Users, title: 'Our Team', description: 'Dedicated professionals committed to your success' },
    { icon: Zap, title: 'Our Innovation', description: 'Cutting-edge technology that evolves with your needs' },
  ];

  const teamMembers = [
    { name: 'Sarah Johnson', role: 'CEO & Founder' },
    { name: 'Michael Chen', role: 'CTO' },
    { name: 'Emily Rodriguez', role: 'Head of Product' },
    { name: 'David Kim', role: 'Lead Developer' },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            We're passionate about helping businesses streamline their product management processes with innovative solutions and exceptional service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in text-center border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Team Members Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-200 dark:border-gray-700 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-12 text-center text-white animate-fade-in animation-delay-1000">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">Join thousands of businesses already using our platform</p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;