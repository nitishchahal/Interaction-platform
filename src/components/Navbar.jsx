import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../assets/default-monochrome.svg';
import defaultAvatar from '../assets/ProfilePic.png'; // ✅ Add a default avatar image

const HamburgerIcon = ({ isOpen, onClick }) => (
  <button onClick={onClick} className="p-2 md:hidden z-50">
    <div className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
    <div className={`w-6 h-0.5 bg-gray-700 mt-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
    <div className={`w-6 h-0.5 bg-gray-700 mt-1.5 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
  </button>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const user = JSON.parse(localStorage.getItem('user')); // ✅ Check if logged in

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
          <img src={logoImage} alt="Logo" className="w-36 sm:w-40" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/events" className="hover:text-blue-600 transition-colors">Events</Link>
          <Link to="/directory" className="hover:text-blue-600 transition-colors">Directory</Link>
          <Link to="/jobs" className="hover:text-blue-600 transition-colors">Jobs</Link>
          <Link to="/donate" className="hover:text-blue-600 transition-colors">Donate</Link>

          {/* ✅ If logged in show avatar, else show login */}
          {user ? (
            <div className="relative">
              <img
                src={user.profilePicture || defaultAvatar}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              />
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
          )}
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-0 left-0 w-full h-screen bg-white shadow-lg p-6 flex flex-col items-start gap-6 z-30"
        >
          <Link onClick={toggleMenu} to="/" className="w-full text-xl py-2 hover:text-blue-600 border-b">Home</Link>
          <Link onClick={toggleMenu} to="/events" className="w-full text-xl py-2 hover:text-blue-600 border-b">Events</Link>
          <Link onClick={toggleMenu} to="/directory" className="w-full text-xl py-2 hover:text-blue-600 border-b">Directory</Link>
          <Link onClick={toggleMenu} to="/jobs" className="w-full text-xl py-2 hover:text-blue-600 border-b">Jobs</Link>
          <Link onClick={toggleMenu} to="/donate" className="w-full text-xl py-2 hover:text-blue-600 border-b">Donate</Link>

          {user ? (
            <>
              <Link onClick={toggleMenu} to="/profile" className="w-full text-xl py-2 hover:text-blue-600 border-b">Dashboard</Link>
              <Link onClick={toggleMenu} to="/settings" className="w-full text-xl py-2 hover:text-blue-600 border-b">Settings</Link>
              <button onClick={handleLogout} className="w-full text-left text-xl py-2 hover:text-blue-600">Logout</button>
            </>
          ) : (
            <Link
              onClick={toggleMenu}
              to="/auth"
              className="w-full text-xl text-white bg-blue-600 px-6 py-3 rounded-full mt-4 text-center font-semibold hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </motion.div>
      )}
    </nav>
  );
}




