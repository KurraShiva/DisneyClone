import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1120] to-[#040714] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Experience the Magic of Disney+
          </h2>
          <p className="text-[#b0b8d4] text-lg max-w-2xl mx-auto mb-6">
            Subscribe for updates, offers, and the latest releases right in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-[#a3aed1] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 border-t border-[#1f2a48] pt-12 px-4">
          {/* Logo */}
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
              alt="Disney+ Logo"
              className="w-36 mb-6"
            />
          </div>

          {/* Navigation Sections */}
          <div>
            <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#8891af] hover:text-white transition">About Disney+</a></li>
              <li><a href="#" className="text-[#8891af] hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-[#8891af] hover:text-white transition">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#8891af] hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-[#8891af] hover:text-white transition">Terms of Use</a></li>
              <li><a href="#" className="text-[#8891af] hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-[#8891af]">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" /> support@disneyplus.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-400" /> +1 800 123 4567
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-400" /> Burbank, California
              </li>
            </ul>
          </div>

          {/* Language / Region */}
          <div>
            <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Preferences</h4>
            <select className="w-full bg-white/10 text-white px-3 py-2 rounded-md mb-4 border border-[#2e3a5e] text-sm">
              <option>English</option>
              <option>हिन्दी</option>
              <option>Español</option>
            </select>
            <select className="w-full bg-white/10 text-white px-3 py-2 rounded-md border border-[#2e3a5e] text-sm">
              <option>India</option>
              <option class bg-white/10 text-white>United States</option>
              <option>UK</option>
            </select>
          </div>
        </div>

        {/* Social Section */}
        <div className="border-t border-[#1f2a48] mt-12 pt-6 px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-[#5c677d] mb-4 md:mb-0">
            © {new Date().getFullYear()} Disney and its related entities. All rights reserved.
          </p>
          <div className="flex space-x-4 text-white text-xl">
            <a href="https://facebook.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="https://twitter.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition"><FaTwitter /></a>
            <a href="https://instagram.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
