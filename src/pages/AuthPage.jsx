import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaMobileAlt, FaLock, FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ Toast library
import "react-toastify/dist/ReactToastify.css";

export default function AuthPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="text-center text-gray-700">
        <h1 className="text-4xl font-bold">Alumni Network</h1>
        <p className="mt-2 text-lg">Your portal to connect and grow.</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open Authentication
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && <AuthModalContent onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

function AuthModalContent({ onClose }) {
  const navigate = useNavigate();
  const [view, setView] = useState("login"); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, [view]);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaText(`${num1} + ${num2}`);
    setCaptcha((num1 + num2).toString());
    setCaptchaInput("");
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (captchaInput !== captcha) {
      toast.error("Incorrect CAPTCHA. Please try again.");
      generateCaptcha();
      return;
    }
    toast.info(`OTP sent to ${mobile}`);
    setView("otp");
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    if (!otp || otp.length < 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    const userData = { name, email, mobile };
    localStorage.setItem("alumniUser", JSON.stringify(userData));
    console.log("User Data Saved:", userData);

    toast.success("✅ You are verified!");

    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
  const formVariants = {
    hidden: { opacity: 0, x: view === "login" ? -20 : 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: view === "login" ? 20 : -20, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative z-10 w-full max-w-lg bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700 text-white"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Toggle Buttons */}
        <div className="flex text-white font-bold text-center mb-8 bg-gray-700 rounded-full overflow-hidden">
          <button
            className={`flex-1 py-3 transition-colors ${view === "login" ? "bg-blue-600" : "hover:bg-gray-600"}`}
            onClick={() => { setView("login"); generateCaptcha(); }}
          >
            Login
          </button>
          <button
            className={`flex-1 py-3 transition-colors ${view === "register" ? "bg-blue-600" : "hover:bg-gray-600"}`}
            onClick={() => { setView("register"); generateCaptcha(); }}
          >
            Create Account
          </button>
        </div>

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          {view === "login" ? "Welcome Back!" : "Join the Network"}
        </h1>

        <AnimatePresence mode="wait">
          {(view === "login" || view === "register") && (
            <motion.form
              key={view}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleAuth}
              className="space-y-6"
            >
              {view === "register" && (
                <div>
                  <label className="text-gray-400 mb-2 block">Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="bg-gray-700 text-white p-3 pl-10 rounded-lg w-full"
                      required
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="text-gray-400 mb-2 block">Mobile Number</label>
                <div className="relative">
                  <FaMobileAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="e.g., 9876543210"
                    className="bg-gray-700 text-white p-3 pl-10 rounded-lg w-full"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-400 mb-2 block">Email</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="bg-gray-700 text-white p-3 pl-10 rounded-lg w-full"
                    required
                  />
                </div>
              </div>

              {/* CAPTCHA */}
              <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg">
                <div className="text-xl font-bold text-white bg-blue-600 px-4 py-2 rounded">
                  {captchaText}
                </div>
                <div className="relative flex-1">
                  <FaKey className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    placeholder="Enter the result"
                    className="bg-gray-800 text-white p-3 pl-10 rounded-lg w-full"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg">
                {view === "login" ? "Login" : "Create Account"}
              </button>
            </motion.form>
          )}

          {view === "otp" && (
            <motion.form
              key="otp-form"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleOtpVerify}
              className="space-y-6"
            >
              <div className="text-center text-gray-300">
                <p className="mb-2">We have sent a verification code to</p>
                <p className="font-bold text-lg text-white">+{mobile}</p>
              </div>
              <div>
                <label className="text-gray-400 mb-2 block">Enter 6-digit OTP</label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength="6"
                    placeholder="e.g., 123456"
                    className="bg-gray-700 text-white p-3 pl-10 rounded-lg w-full"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg">
                Verify
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
