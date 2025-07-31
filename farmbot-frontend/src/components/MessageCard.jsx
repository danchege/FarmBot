import React from 'react';
import { UserIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const MessageCard = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start space-x-3 max-w-xs md:max-w-md lg:max-w-lg ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-blue-500' : 'bg-gray-200'
        }`}>
          {isUser ? (
            <UserIcon className="w-5 h-5 text-white" />
          ) : (
            <CpuChipIcon className="w-5 h-5 text-gray-600" />
          )}
        </div>

        {/* Message Bubble */}
        <div className={`chat-bubble ${isUser ? 'user-message' : 'ai-message'}`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageCard; 