import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaClock, FaRocket, FaCode, FaRobot } from 'react-icons/fa';
import JobCard from '../components/JobCard';
import jobs from '../data/jobs';

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  const detailsVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: '0%', transition: { duration: 0.4 } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Left Column: Job Listing */}
        <div className="flex-1 md:w-1/2 lg:w-2/5 p-4 bg-gray-50 rounded-lg shadow-inner overflow-y-auto custom-scrollbar h-[calc(100vh-160px)]">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Available Jobs</h1>
          <div className="space-y-4">
            {jobs.map(job => (
              <JobCard 
                key={job.id} 
                job={job} 
                onOpen={() => setSelectedJob(job)} 
                isSelected={selectedJob?.id === job.id}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Job Details (Desktop) */}
        <div className="hidden md:block flex-1 md:w-1/2 lg:w-3/5 relative p-4">
          <AnimatePresence mode="wait">
            {selectedJob ? (
              <motion.div
                key={selectedJob.id}
                variants={detailsVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-lg shadow-xl p-8 sticky top-4"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedJob.title}</h2>
                    <p className="text-lg text-gray-600 mt-1">{selectedJob.company}</p>
                  </div>
                  <button onClick={() => setSelectedJob(null)} className="text-gray-400 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
                  <span className="flex items-center gap-2"><FaMapMarkerAlt />{selectedJob.location}</span>
                  <span className="flex items-center gap-2"><FaBriefcase />{selectedJob.type}</span>
                  <span className="flex items-center gap-2"><FaMoneyBillWave />{selectedJob.salary}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Job Description</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{selectedJob.description}</p>
                
                <button className="mt-8 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                  Apply Now
                </button>
              </motion.div>
            ) : (
              <div className="flex items-center justify-center h-full text-center text-gray-400">
                <p>Select a job from the list to view details</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Modal for Job Details */}
        {selectedJob && (
          <div className="fixed inset-0 md:hidden bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-lg p-6 max-w-lg w-full shadow-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                  <p className="text-md text-gray-600 mt-1">{selectedJob.company}</p>
                </div>
                <button onClick={() => setSelectedJob(null)} className="text-gray-400 hover:text-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-6">
                <span className="flex items-center gap-2"><FaMapMarkerAlt />{selectedJob.location}</span>
                <span className="flex items-center gap-2"><FaBriefcase />{selectedJob.type}</span>
                <span className="flex items-center gap-2"><FaMoneyBillWave />{selectedJob.salary}</span>
              </div>
              <p className="text-gray-700 leading-relaxed overflow-y-auto max-h-48 whitespace-pre-wrap">{selectedJob.description}</p>
              <button className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                Apply Now
              </button>
            </motion.div>
          </div>
        )}
      </div>

      {/* Explore More & AI Sections */}
      <div className="container mx-auto mt-12 p-4">
        
        {/* Explore More Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Explore More Career Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 text-blue-600 mb-2">
                <FaRocket size={24} />
                <h3 className="text-xl font-bold text-gray-800">Find a Mentor</h3>
              </div>
              <p className="text-gray-600">Connect with experienced alumni who can guide your career path.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 text-blue-600 mb-2">
                <FaCode size={24} />
                <h3 className="text-xl font-bold text-gray-800">Upskill with Courses</h3>
              </div>
              <p className="text-gray-600">Access exclusive discounts on courses to enhance your technical skills.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 text-blue-600 mb-2">
                <FaBriefcase size={24} />
                <h3 className="text-xl font-bold text-gray-800">Alumni Directory</h3>
              </div>
              <p className="text-gray-600">Discover and network with alumni working in your target industry.</p>
            </div>
          </div>
        </div>

        {/* Use AI for Your Career Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 text-white p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background animation */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect width="100" height="100" fill="url(#grid)" />
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 L 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
            </svg>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="text-blue-400 mb-4 flex justify-center">
              <FaRobot size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Leverage AI for Your Career</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Unlock your full potential with our cutting-edge AI tools. Enhance your resume, discover personalized career paths, and prepare for interviews with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
                Build My Resume
              </button>
              <button className="bg-gray-700 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-600 transition-colors shadow-lg">
                Explore AI Tools
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </>
  );
}