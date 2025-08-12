import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTools, FaLaptopCode, FaDollarSign } from 'react-icons/fa';

// Pre-defined donation amounts
const donationAmounts = [500, 1000, 2500, 5000];

export default function DonatePage() {
  const [amount, setAmount] = useState(1000);
  const [message, setMessage] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePredefinedAmount = (predefinedAmount) => {
    setAmount(predefinedAmount);
  };

  const submitDonation = (e) => {
    e.preventDefault();
    alert(`Donation of ₹${amount} submitted. Thank you! (This is a stub. Integrate a payment gateway like Stripe or Razorpay.)`);
    // In a real application, you would handle the payment gateway logic here
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Subtle Grid Background */}
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

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400">
            Fuel the Future.
          </h1>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Your contribution empowers the next generation of innovators, leaders, and thinkers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
            <form onSubmit={submitDonation}>
              
              {/* Predefined Amounts */}
              <div className="flex flex-wrap gap-3 mb-6">
                {donationAmounts.map(a => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => handlePredefinedAmount(a)}
                    className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-200 
                      ${amount === a ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`
                    }
                  >
                    ₹{a}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="mb-6">
                <label htmlFor="customAmount" className="block text-gray-400 mb-2">Or enter a custom amount (₹)</label>
                <input
                  type="number"
                  id="customAmount"
                  value={amount}
                  onChange={handleAmountChange}
                  className="bg-gray-700 text-white border-none p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                  min="1"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message of support (optional)</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="bg-gray-700 text-white border-none p-3 rounded-lg w-full h-24 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold text-xl py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Donate Now
              </button>
            </form>
          </motion.div>

          {/* Impact and Future Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Impact Section */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-400">
                <FaDollarSign /> Where Your Donation Goes
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <FaGraduationCap size={20} className="mt-1" />
                  <span>**Scholarship Funds:** Provide financial aid for deserving students.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTools size={20} className="mt-1" />
                  <span>**Program Development:** Support new academic and career programs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaLaptopCode size={20} className="mt-1" />
                  <span>**Technology Upgrades:** Equip students with the latest resources.</span>
                </li>
              </ul>
            </div>
            
            {/* Future Upgrades Section */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-400">
                <FaLaptopCode /> Future Upgrades
              </h3>
              <p className="text-gray-300 mb-4">
                We're committed to improving your donation experience. Here are some features we plan to implement:
              </p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Recurring Donations</li>
                <li>Cryptocurrency Payments</li>
                <li>Donation Progress Bar</li>
                <li>Donation Tiers with Perks</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}