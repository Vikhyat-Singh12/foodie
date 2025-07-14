import React, { useState, useEffect } from 'react';
import { Package, ShoppingCart, Heart, Calendar } from 'lucide-react';

const ProductReport = () => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Check for dark mode on component mount and listen for changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Listen for dark mode changes
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      label: 'Total Available Products', 
      value: '1,245', 
      icon: Package, 
      color: isDarkMode ? 'bg-blue-600' : 'bg-blue-500',
      bgColor: isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50',
      textColor: isDarkMode ? 'text-blue-400' : 'text-blue-600'
    },
    { 
      label: 'Total Sold Products', 
      value: '892', 
      icon: ShoppingCart, 
      color: isDarkMode ? 'bg-green-600' : 'bg-green-500',
      bgColor: isDarkMode ? 'bg-green-900/20' : 'bg-green-50',
      textColor: isDarkMode ? 'text-green-400' : 'text-green-600'
    },
    { 
      label: 'Total Donated Products', 
      value: '156', 
      icon: Heart, 
      color: isDarkMode ? 'bg-pink-600' : 'bg-pink-500',
      bgColor: isDarkMode ? 'bg-pink-900/20' : 'bg-pink-50',
      textColor: isDarkMode ? 'text-pink-400' : 'text-pink-600'
    },
  ];

  return (
    <section className={`py-20 px-6 transition-all duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Product Dashboard
          </h2>
          <p className={`text-xl transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Track your inventory and sales performance
          </p>
        </div>

        {/* Month Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Calendar className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Filter by Month
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  selectedMonth === month
                    ? isDarkMode
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className={`p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer animate-fade-in ${
                  isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className={`text-4xl font-bold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </h3>
                
                <p className={`text-lg font-medium mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.label}
                </p>
                
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${stat.bgColor} ${stat.textColor}`}>
                  For {selectedMonth}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductReport;