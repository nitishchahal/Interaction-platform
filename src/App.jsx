import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import DirectoryPage from "./pages/DirectoryPage";
import JobsPage from "./pages/JobsPage";
import DonatePage from "./pages/DonatePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage"; // ✅ New profile page
import ScrollToTop from "./ScrollTotop"; // Smooth scroll

// Example auth state simulation (Replace with actual auth logic)
const isAuthenticated = () => {
  return localStorage.getItem("user") !== null; // or check auth context
};

// Protected Route Wrapper
function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/auth" replace />;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 container mx-auto px-4 py-8">
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/auth" element={<AuthPage />} />

            {/* ✅ Protected Profile Route */}
            <Route
              path="/profile"
              element={
                
                  <ProfilePage />
                
              }
            />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
      <p className="mt-4">The page you are looking for does not exist.</p>
    </div>
  );
}
