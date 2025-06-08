import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#040714] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">

        {/* Logo & Newsletter */}
        <div className="md:col-span-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
            alt="Disney+ Logo"
            className="w-36 mb-6"
          />
          <p className="text-[#b0b8d4] text-sm mb-3">Subscribe for updates</p>
          <form className="flex items-center bg-[#0c1735] rounded-lg overflow-hidden border border-[#2e3a5e]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-transparent text-white placeholder:text-[#8b95b2] outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-semibold">
              Subscribe
            </button>
          </form>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-sm font-bold text-[#b0b8d4] uppercase mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-[#8891af] hover:text-white transition">About Disney+</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Careers</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">News</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-sm font-bold text-[#b0b8d4] uppercase mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Terms of Use</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-sm font-bold text-[#b0b8d4] uppercase mb-4">Connect</h4>
          <div className="flex space-x-4 text-[#8891af] text-lg">
            <a href="https://facebook.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h4 className="text-sm font-bold text-[#b0b8d4] uppercase mb-4">Preferences</h4>
          <div className="space-y-4 text-sm">
            <div>
              <label className="block mb-1 text-[#8891af]">Language</label>
              <select className="w-full bg-[#0c1735] text-white px-3 py-2 rounded-lg border border-[#2e3a5e]">
                <option>English</option>
                <option>हिन्दी</option>
                <option>Español</option>
                <option>Français</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-[#8891af]">Region</label>
              <select className="w-full bg-[#0c1735] text-white px-3 py-2 rounded-lg border border-[#2e3a5e]">
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>UK</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-[#5c677d] mt-12">
        © {new Date().getFullYear()} Disney and its related entities. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;


