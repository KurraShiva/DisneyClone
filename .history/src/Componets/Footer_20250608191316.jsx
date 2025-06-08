import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#040714] text-white px-6 pt-16 pb-8">
      {/* Subscription Section */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Unlimited Entertainment Awaits</h2>
        <p className="text-[#b0b8d4] mb-6 text-sm md:text-base">
          Subscribe for updates, news, and special Disney+ offers.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-md bg-white/10 text-white placeholder-[#8b95b2] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-5 border-t border-[#1f2a48] pt-10">

        {/* Logo & Social */}
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
            alt="Disney+ Logo"
            className="w-32 mb-6"
          />
          <div className="flex space-x-4 text-white text-xl">
            <a href="https://facebook.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="https://twitter.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition"><FaTwitter /></a>
            <a href="https://instagram.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-[#8891af] hover:text-white transition">About Disney+</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Careers</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Press</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Terms of Use</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-[#8891af]">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span>support@disneyplus.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-green-400" />
              <span>+1 800 123 4567</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-400" />
              <span>Burbank, California</span>
            </li>
          </ul>
        </div>

        {/* Language & Region */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Preferences</h4>
          <select className="w-full bg-white/10 text-white px-3 py-2 rounded-md mb-4 border border-[#2e3a5e] text-sm">
            <option>English</option>
            <option>हिन्दी</option>
            <option>Español</option>
          </select>
          <select className="w-full bg-white/10 text-white px-3 py-2 rounded-md border border-[#2e3a5e] text-sm">
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-[#5c677d] mt-12">
        © {new Date().getFullYear()} Disney and its related entities. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

