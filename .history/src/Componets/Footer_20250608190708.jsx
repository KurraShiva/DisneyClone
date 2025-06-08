import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#040714] text-white pt-16 px-6">
      {/* Subscription Block */}
      <div className="max-w-2xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the latest from Disney+</h2>
        <p className="text-[#b0b8d4] text-base mb-6">Enter your email to stay updated with news, offers, and more.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-2/3 px-4 py-3 rounded-md text-black placeholder-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 border-t border-[#1f2a48] pt-10">

        {/* Logo */}
        <div className="md:col-span-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
            alt="Disney+ Logo"
            className="w-32 mb-4"
          />
          <div className="flex gap-4 mt-4 text-[#8891af] text-lg">
            <a href="https://facebook.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white"><FaFacebookF /></a>
            <a href="https://twitter.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white"><FaTwitter /></a>
            <a href="https://instagram.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-[#8891af] hover:text-white">About Disney+</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white">Careers</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white">News</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-[#8891af] hover:text-white">Help Center</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Language Selector */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Language</h4>
          <select className="w-full bg-[#0c1735] text-white px-3 py-2 rounded-md border border-[#2e3a5e] text-sm">
            <option>English</option>
            <option>हिन्दी</option>
            <option>Español</option>
            <option>Français</option>
          </select>
        </div>

        {/* Region Selector */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Region</h4>
          <select className="w-full bg-[#0c1735] text-white px-3 py-2 rounded-md border border-[#2e3a5e] text-sm">
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>UK</option>
          </select>
        </div>
      </div>

      <div className="text-center text-xs text-[#5c677d] mt-12 pb-6">
        © {new Date().getFullYear()} Disney and its related entities. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;



