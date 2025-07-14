import React from 'react';
import { Heart, Globe, Lightbulb } from 'lucide-react';


const Home = () => {
  return (
    <div className='flex flex-col'> 
    <section
      id="home"
      className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-6 min-h-screen flex items-center pt-32 transition-all duration-300"
      >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
            Reduce Food Waste with{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              FoodWise
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Smart food management platform that helps businesses track inventory, monitor expiry
            dates, and connect with NGOs to donate food before it goes to waste.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:text-green-400 dark:border-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <section 
          className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-6 min-h-screen flex items-center pt-32 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in empowering businesses with the tools they need to succeed in today's competitive marketplace.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center animate-fade-in">
            <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
            <p className="text-gray-600 leading-relaxed">
              We're passionate about creating solutions that make a real difference in how businesses operate and grow.
            </p>
          </div>
          
          <div className="text-center animate-fade-in animation-delay-300">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
              <Globe className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Our platform serves businesses worldwide, helping them reach new heights and expand their horizons.
            </p>
          </div>
          
          <div className="text-center animate-fade-in animation-delay-500">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              We continuously innovate and evolve our platform to stay ahead of industry trends and user needs.
            </p>
          </div>
        </div>
      </div>
    </section>

      </div>
  );
};

export default Home;
