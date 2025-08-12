// src/components/AlumniDetailModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AlumniDetailModal({ alumnus, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col items-center text-center">
            <img
              src={alumnus.profileImage || 'https://via.placeholder.com/200'}
              alt={alumnus.name}
              className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-blue-500"
            />
            <h2 className="text-3xl font-extrabold text-gray-800 mb-1">{alumnus.name}</h2>
            <p className="text-lg text-blue-600 font-medium">{alumnus.profession} at {alumnus.company}</p>
            <p className="text-gray-500 mt-1">{alumnus.city}</p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-700 mb-2">About</h3>
            <p className="text-gray-600 leading-relaxed">{alumnus.bio}</p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-700 mb-2">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {alumnus.interests.map((interest, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}