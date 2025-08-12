import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define a sample alumni data structure for initial state and demonstration
const sampleAlumniData = {
  username: "jdoe2015",
  name: "Jane Doe",
  bio: "A passionate Software Engineer with a focus on full-stack development and cloud technologies. Eager to mentor and connect with fellow alumni.",
  education: "University of Technology, Class of 2015",
  skills: "JavaScript,React,Node.js,Python,AWS,Tailwind CSS",
  profilePic: null,
  resume: null,
  stats: {
    weekly: 45,
    monthly: 180,
    yearly: 1200
  },
};

// Main App component to encapsulate the ProfilePage logic and state
const App = () => {
  const [profile, setProfile] = useState(sampleAlumniData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("https://placehold.co/150x150/e2e8f0/cbd5e0?text=Profile");

  // Log profile data whenever it changes for development purposes
  useEffect(() => {
    console.log("User Profile Data:", profile);
  }, [profile]);

  // Handle input changes, including file uploads
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setProfile({ ...profile, [name]: files[0] });
      // For the profile picture, create a temporary URL to display the image
      if (name === "profilePic") {
        setProfilePicUrl(URL.createObjectURL(files[0]));
      }
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Submitted Profile:", profile);
    // In a real application, you would make an API call here to save the data.
    // For now, we'll just show a success message in a modal.
    setModalTitle("Profile Saved!");
    setModalMessage("Your profile has been successfully updated. The new data has been logged to the console.");
    setIsModalOpen(true);
  };

  // Chart data configuration
  const chartData = {
    labels: ["Weekly", "Monthly", "Yearly"],
    datasets: [
      {
        label: "Alumni Interactions",
        data: [profile.stats.weekly, profile.stats.monthly, profile.stats.yearly],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
        borderRadius: 8,
      }
    ]
  };

  // Chart options for responsiveness and styling
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { 
        position: "top", 
        labels: {
          color: '#4b5563' // Tailwind gray-600
        }
      },
      title: { 
        display: true, 
        text: "Alumni Network Interactions",
        color: '#1f2937', // Tailwind gray-900
        font: {
          size: 16
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#4b5563'
        }
      },
      x: {
        ticks: {
          color: '#4b5563'
        }
      }
    }
  };

  // Skill badge component
  const SkillBadge = ({ skill }) => (
    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full transition-transform transform hover:scale-110">
      {skill}
    </span>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased text-gray-800 p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section with Animated Background */}
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl overflow-hidden animate-fade-in">
          <div className="absolute inset-0 z-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="currentColor" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,197.3C672,224,768,256,864,250.7C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <img
                src={profilePicUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 md:mt-0 transition-opacity duration-700">{profile.name || "Alumni Name"}</h1>
              <p className="text-xl md:text-2xl font-light text-blue-100 transition-opacity duration-700">{profile.education || "Alumni Education"}</p>
              <p className="mt-4 text-sm md:text-base max-w-2xl">{profile.bio || "Bio..."}</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Profile Form Card */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-lg border border-gray-200 transform transition-transform duration-500 hover:-translate-y-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={profile.username}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  name="bio"
                  placeholder="Bio"
                  value={profile.bio}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                <input
                  type="text"
                  name="education"
                  placeholder="Education"
                  value={profile.education}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skills (comma separated)</label>
                <input
                  type="text"
                  name="skills"
                  placeholder="e.g., JavaScript, React, Node.js"
                  value={profile.skills}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* File Uploads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
                  <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                  {profile.resume && (
                    <p className="mt-2 text-sm text-gray-500">File: {profile.resume.name}</p>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
              >
                Save Profile
              </button>
            </form>
          </div>
          
          {/* Dashboard & Skills Card */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Dashboard Card */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 transform transition-transform duration-500 hover:-translate-y-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Dashboard</h2>
              <div className="h-64">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
            
            {/* Skills Card */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 transform transition-transform duration-500 hover:-translate-y-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Skills</h2>
              <div className="flex flex-wrap -mx-1">
                {profile.skills.split(',').map((skill, index) => (
                  <SkillBadge key={index} skill={skill.trim()} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Modal for Alerts */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    {modalTitle}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {modalMessage}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Got it!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

// Export the main component
export default App;
