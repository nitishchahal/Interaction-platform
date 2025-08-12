import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUserFriends, FaDonate, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import alumni from '../data/alumni';
import events from '../data/events';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const QuickActionCard = ({ icon, title, link }) => (
  <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <Link to={link} className="flex flex-col items-center text-center">
      <div className="text-blue-600 mb-3">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
    </Link>
  </motion.div>
);

export default function Home() {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Hero />
      
      {/* Quick Actions Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <QuickActionCard icon={<FaCalendarAlt size={40} />} title="Explore Events" link="/events" />
          <QuickActionCard icon={<FaUserFriends size={40} />} title="Find Alumni" link="/directory" />
          <QuickActionCard icon={<FaBriefcase size={40} />} title="Find a Job" link="/jobs" />
          <QuickActionCard icon={<FaDonate size={40} />} title="Give Back" link="/donate" />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
            <Link to="/events" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2">
              View All <FaArrowRight />
            </Link>
          </div>
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.slice(0, 3).map(event => (
              <motion.div key={event.id} variants={itemVariants}>
                {/* Pass event to EventCard, which now has a built-in Link */}
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Alumni Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-extrabold text-white tracking-wide font-['Poppins']">Featured Alumni</h2>
            <Link to="/directory" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 relative group">
              <span className="relative z-10">View Directory</span>
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alumni.slice(0, 2).map(person => (
              <motion.div
                key={person.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-700 hover:border-blue-500 transition-colors duration-300 transform hover:-translate-y-1"
              >
                <div className="w-full md:w-1/3 relative h-64">
                  <img
                    src={person.profileImage}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-3xl md:rounded-r-none"
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-1 font-['Poppins']">{person.name}</h3>
                  <p className="text-md text-blue-400 mb-2 font-['Roboto']">{person.profession} at {person.company} | Batch of {person.batch}</p>
                  <p className="text-gray-300 mt-4 text-sm leading-relaxed font-['Open Sans']">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
