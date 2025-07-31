import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SparklesIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: 'AI-Powered Advice',
      description: 'Get intelligent recommendations for crop selection, planting schedules, and farming practices.'
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: 'Local Expertise',
      description: 'Receive advice tailored to your climate, soil conditions, and growing season.'
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Smart Solutions',
      description: 'Learn about pest management, soil health, and sustainable farming techniques.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <span className="text-4xl">🌱</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to{' '}
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  FarmBot
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Your AI-powered farming assistant that helps you make informed decisions about what to plant, 
                when to plant, and how to optimize your agricultural practices for better yields.
              </p>
              <Link
                to="/chat"
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Start Chat</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FarmBot?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI assistant combines agricultural expertise with cutting-edge technology 
              to provide you with the best farming advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of farmers who are already using FarmBot to improve their yields and make better decisions.
          </p>
          <Link
            to="/chat"
            className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Started Now</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 