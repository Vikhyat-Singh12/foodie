import React,{useState,useEffect} from 'react';
import { Check, Gift, Star, Crown } from 'lucide-react';

const PricingPlans = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);
    const isDarkMode = true;


    useEffect(() => {
    const checkDarkMode = () => {
        // setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(() => {
        checkDarkMode();
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
    });

    return () => observer.disconnect();
    }, []);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      icon: Gift,
      popular: false,
      color: 'from-gray-500 to-gray-600',
      features: [
        'Up to 50 products',
        'Basic analytics',
        'Email support',
        '1GB storage',
        'Mobile app access'
      ]
    },
    {
      name: 'Basic',
      price: '$19',
      period: '/month',
      icon: Star,
      popular: true,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Up to 500 products',
        'Advanced analytics',
        'Priority support',
        '10GB storage',
        'API access',
        'Basic integrations'
      ]
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      icon: Crown,
      popular: false,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Unlimited products',
        'Real-time analytics',
        '24/7 phone support',
        'Unlimited storage',
        'Custom integrations',
        'White-label solution',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <section className={`py-20 px-6 transition-all duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-green-50 to-blue-50'
    }`}>
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in border border-gray-200 dark:border-gray-700 ${
                  plan.popular ? 'ring-4 ring-blue-200 dark:ring-blue-500/30 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  
                  <div className="text-center mb-8">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;