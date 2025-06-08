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
    <footer className="bg-gradient-to-b from-[#0b1120] to-[#040714] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Subscription */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Step Into the Magic of Disney+
          </h2>
          <p className="text-[#b0b8d4] text-lg max-w-xl mx-auto">
            Subscribe for updates, offers & latest content straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-1 px-4 py-3 bg-white/10 backdrop-blur-md rounded-lg text-white placeholder-[#a3aed1] border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
            <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 border-t border-[#1f2a48] pt-12">
          {/* Logo */}
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
              alt="Disney+ Logo"
              className="w-36 mb-4"
            />
            <p className="text-[#8891af] text-sm leading-relaxed">
              Your gateway to timeless adventures, magical tales, and endless entertainment.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[#b0b8d4] font-semibold uppercase text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#8891af] hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-[#8891af] hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-[#8891af] hover:text-white transition">Newsroom</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-[#b0b8d4] font-semibold uppercase text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#8891af] hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-[#8891af] hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-[#8891af] hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#b0b8d4] font-semibold uppercase text-sm mb-4">Contact</h4>
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

          {/* Preferences */}
          <div>
            <h4 className="text-[#b0b8d4] font-semibold uppercase text-sm mb-4">Preferences</h4>
            <select className="w-full mb-4 px-3 py-2 bg-white/10 backdrop-blur-md text-white border border-[#2e3a5e] rounded-md text-sm">
              <option>English</option>
              <option>हिन्दी</option>
              <option>Español</option>
            </select>
            <select className="w-full px-3 py-2 bg-white/10 backdrop-blur-md text-white border border-[#2e3a5e] rounded-md text-sm">
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#1f2a48] pt-6 mt-10 flex flex-col md:flex-row items-center justify-between text-sm text-[#5c677d]">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Disney. All rights reserved.
          </p>
          <div className="flex gap-4 text-xl">
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
