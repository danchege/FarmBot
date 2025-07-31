import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SparklesIcon, 
  GlobeAltIcon, 
  LightBulbIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const capabilities = [
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: 'AI-Powered Recommendations',
      description: 'Our advanced AI analyzes your specific conditions to provide personalized farming advice.'
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: 'Climate & Location Aware',
      description: 'Get advice tailored to your local climate, soil conditions, and growing seasons.'
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Sustainable Practices',
      description: 'Learn about eco-friendly farming methods that protect the environment and improve soil health.'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Pest & Disease Management',
      description: 'Identify and manage common agricultural pests and diseases with proven solutions.'
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: 'Yield Optimization',
      description: 'Maximize your crop yields through better planning, timing, and resource management.'
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: 'Seasonal Planning',
      description: 'Plan your entire growing season with detailed planting and harvesting schedules.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About FarmBot
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              FarmBot is an AI-powered agricultural assistant designed to help farmers make informed decisions 
              about crop selection, planting schedules, and farming practices. We combine cutting-edge 
              artificial intelligence with extensive agricultural knowledge to provide personalized advice.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that every farmer deserves access to expert agricultural advice. Our mission is to 
                democratize farming knowledge by providing an intelligent, accessible, and personalized 
                farming assistant that helps farmers of all experience levels make better decisions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're a seasoned farmer or just starting out, FarmBot is here to support your 
                agricultural journey with science-based recommendations and practical advice.
              </p>
              <Link
                to="/chat"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Try FarmBot Now</span>
                <SparklesIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <span className="text-8xl">🌱</span>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌞</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-xl">💧</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What FarmBot Can Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI assistant provides comprehensive support for all aspects of farming and agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-500 mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with FarmBot is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ask a Question</h3>
              <p className="text-gray-600">
                Simply type your farming question in natural language. No technical knowledge required.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your question and provides personalized, science-based recommendations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply & Learn</h3>
              <p className="text-gray-600">
                Implement the advice and continue learning with follow-up questions and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the growing community of farmers who trust FarmBot for their agricultural decisions.
          </p>
          <Link
            to="/chat"
            className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Start Chatting Now</span>
            <SparklesIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About; 