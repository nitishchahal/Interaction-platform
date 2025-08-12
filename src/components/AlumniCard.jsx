// src/components/AlumniCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function AlumniCard({ alumnus, onClick }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer p-6 flex flex-col items-center text-center
                 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <img
        src={alumnus.profileImage || 'https://via.placeholder.com/150'}
        alt={alumnus.name}
        className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-blue-500 ring-offset-2"
      />
      <h3 className="font-bold text-xl text-gray-800">{alumnus.name}</h3>
      <p className="text-sm text-blue-600 font-medium">{alumnus.profession}</p>
      <p className="text-sm text-gray-500 mt-1">{alumnus.company}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
          {alumnus.department}
        </span>
        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
          Batch {alumnus.batch}
        </span>
      </div>
    </motion.div>
  );
}