import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline'; // Placeholder for Heroicons

export default function JobCard({ job, onOpen }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between h-full cursor-pointer
                 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      whileHover={{ y: -5 }} // Subtle upward lift on hover
      onClick={() => onOpen(job)}
    >
      {/* Job Image or Icon Placeholder */}
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
        <BriefcaseIcon className="h-8 w-8 text-blue-600" />
      </div>

      {/* Job Details */}
      <div className="flex-grow">
        <h3 className="font-bold text-xl text-gray-800 leading-tight mb-1">
          {job.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{job.company || 'Company Name'} • {job.location}</p>
        
        {/* Job tags or quick info */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags && job.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-auto">
        <motion.button
          onClick={(e) => {
            e.stopPropagation(); // Prevents the card's onClick from firing
            onOpen(job);
          }}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg 
                     hover:bg-blue-700 transition-colors duration-200"
          whileTap={{ scale: 0.95 }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}