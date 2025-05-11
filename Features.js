// components/Features.js
'use client';

import { FiHeadphones, FiDownload, FiAward } from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      title: "Audio Learning Modules",
      description: "Immerse yourself in high-quality audio lessons from master musicians",
      icon: <FiHeadphones className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Downloadable Study Packs", 
      description: "Comprehensive PDF guides with notation, theory and practice exercises",
      icon: <FiDownload className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Interactive Quizzes",
      description: "Test your knowledge with our music theory assessment system",
      icon: <FiAward className="w-8 h-8 text-yellow-500" />,
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-devanagari text-4xl font-bold mb-4">
          Discover Our <span className="text-yellow-500">Features</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to master Hindustani classical music in one place
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-yellow-300 group"
          >
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-yellow-50 group-hover:bg-yellow-100 transition-all duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}