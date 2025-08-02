import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-blue-100 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌱</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FarmBot</span>
            </div>
            <p className="text-gray-600 text-sm">
              AI-powered farming assistant helping farmers make better decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Start Chat
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>🌱 FarmBot Team</p>
              <p>📧 support@farmbot.ai</p>
              <p>🌐 farmbot.ai</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              © 2025 FarmBot. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Developed by Daniel Chege
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-600 hover:text-blue-600 text-sm transition-colors bg-transparent border-none cursor-pointer">
              Privacy Policy
            </button>
            <button className="text-gray-600 hover:text-blue-600 text-sm transition-colors bg-transparent border-none cursor-pointer">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 