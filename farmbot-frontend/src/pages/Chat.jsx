import React from 'react';
import ChatBox from '../components/ChatBox';

const Chat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chat with FarmBot
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ask me anything about farming, crop selection, planting schedules, pest management, 
            soil health, or any other agricultural topics.
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="h-[600px] md:h-[700px] flex flex-col">
            <ChatBox />
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">🌱 Crop Selection</h3>
            <p className="text-sm text-gray-600">
              Ask about the best crops for your climate, soil type, and growing season.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">📅 Planting Schedule</h3>
            <p className="text-sm text-gray-600">
              Get advice on when to plant specific crops and optimal timing for your region.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">🛡️ Pest Management</h3>
            <p className="text-sm text-gray-600">
              Learn about sustainable pest control methods and disease prevention strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat; 