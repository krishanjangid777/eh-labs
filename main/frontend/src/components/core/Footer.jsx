import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">EH-Labs</h2>
          <p className="mt-2 text-gray-400">
            A platform where students, college societies, and companies can connect, share events, and grow together.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
            <li><Link to="/customers" className="text-gray-400 hover:text-white">Customers</Link></li>
            <li><Link to="/company" className="text-gray-400 hover:text-white">Company</Link></li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <Link className="text-gray-400 hover:text-white text-xl"><FaTwitter /></Link>
            <Link className="text-gray-400 hover:text-white text-xl"><FaInstagram /></Link>
            <Link className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></Link>
          </div>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Join Our Newsletter</h3>
          <p className="text-gray-400 mt-2">Get updates on the latest events and opportunities.</p>
          <div className="mt-4 flex rounded-lg shadow-xs shadow-amber-50 text-white">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
        
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-2 mt-8 items-center justify-center flex text-gray-500">
        <p>© {new Date().getFullYear()} EH-Labs. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer