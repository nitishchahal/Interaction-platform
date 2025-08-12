import React from 'react';
import { motion } from 'framer-motion';
// Correct import statement with the new icon name MapPinIcon
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function EventCard({ event, onOpen }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full h-48 mb-4">
        <img
          src={event.image || 'https://via.placeholder.com/400x200'}
          alt={event.title}
          className="rounded-lg w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Upcoming
        </span>
      </div>

      <div className="flex-grow">
        <h3 className="font-bold text-xl text-gray-800 mb-2">{event.title}</h3>
        
        <div className="flex items-center text-gray-600 text-sm mb-1">
          <CalendarIcon className="h-4 w-4 mr-2 text-blue-500" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <MapPinIcon className="h-4 w-4 mr-2 text-blue-500" />
          <span>{event.location || 'Online'}</span>
        </div>
      </div>

      <div className="mt-auto flex justify-end">
        <motion.button
          onClick={() => onOpen(event)}
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          whileTap={{ scale: 0.95 }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}