import React from 'react';
import { motion } from 'framer-motion'; // Assuming framer-motion is already installed
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center p-8 md:p-12 text-white overflow-hidden rounded-xl">
      
      {/* Background Element */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-900 opacity-90 animate-subtle-gradient-shift"></div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="container mx-auto relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Connecting Generations of Excellence
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Connect with a global community of leaders, mentors, and innovators. Access exclusive career opportunities, industry insights, and lifelong learning, all while giving back to the community that shaped you.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/auth">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              Join the Network
            </button>
          </Link>
          <Link to="/events">
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold transform transition-all duration-300 hover:bg-white hover:text-blue-700">
              View Events
            </button>
          </Link>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-sm md:text-base text-gray-200"
        >
          Proudly connecting **20,000+ alumni** across 50 countries.
        </motion.p>
      </div>
    </section>
  );
}