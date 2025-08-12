import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        
        {/* Top Section - Final CTA */}
        <div className="text-center pb-12 border-b border-gray-700 mb-8">
          <h3 className="text-3xl font-bold text-white mb-3">Join Our Growing Network</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Stay connected, find new opportunities, and make a difference.
          </p>
          <Link to="/auth" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Get Started Today
          </Link>
        </div>

        {/* Middle Section - Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl">AA</div>
              <span className="font-bold text-xl text-white">Alumni Association</span>
            </div>
            <p className="text-sm">
              Connecting generations of excellence. Our mission is to foster lifelong relationships and support the success of our alumni community.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/directory" className="hover:text-white transition-colors">Directory</Link></li>
              <li><Link to="/jobs" className="hover:text-white transition-colors">Jobs Board</Link></li>
              <li><Link to="/donate" className="hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/mentorship" className="hover:text-white transition-colors">Mentorship Program</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal & Credits */}
        <div className="text-center border-t border-gray-700 pt-8">
          <p className="text-sm">
            © {new Date().getFullYear()} Alumni Association. All rights reserved. | <Link to="/privacy" className="hover:text-white">Privacy Policy</Link> | <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </p>
          <p className="mt-2 text-xs">
            Designed and Developed by <a href="#" className="hover:text-white font-semibold">Your Name or Company</a>
          </p>
        </div>

      </div>
    </footer>
  )
}