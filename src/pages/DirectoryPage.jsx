// src/pages/DirectoryPage.jsx
import React, { useState } from 'react';
import alumni from '../data/alumni';
import AlumniCard from '../components/AlumniCard';
import AlumniDetailModal from '../components/AlumniDetailModal';
import { motion } from 'framer-motion';

export default function DirectoryPage() {
  const [query, setQuery] = useState('');
  const [selectedAlumnus, setSelectedAlumnus] = useState(null);

  const filteredAlumni = alumni.filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.profession.toLowerCase().includes(query.toLowerCase()) ||
      a.department.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Alumni Directory
        </motion.h1>
        <motion.p 
          className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Find and connect with a global network of talented graduates.
        </motion.p>
      </div>
      
      <motion.div 
        className="mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <input 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, profession, or department..."
          className="w-full px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((alumnus) => (
          <AlumniCard 
            key={alumnus.id}
            alumnus={alumnus}
            onClick={() => setSelectedAlumnus(alumnus)}
          />
        ))}
      </div>

      {selectedAlumnus && (
        <AlumniDetailModal 
          alumnus={selectedAlumnus} 
          onClose={() => setSelectedAlumnus(null)} 
        />
      )}
    </div>
  );
}