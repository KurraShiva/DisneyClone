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
    <footer className="bg-[#040714] text-white pt-20 px-6">
      {/* 🌟 Subscription Section */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Unlimited Fun. One Subscription.</h2>
        <p className="text-[#b0b8d4] mb-6">Get latest shows, updates, and offers from Disney+.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-md bg-white/10 text-white placeholder-[#8b95b2] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">
            Subscribe
          </button>
        </form>
      </div>

      {/* 🧭 Footer Sections */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 border-t border-[#1f2a48] pt-10">
        {/* 📺 Disney+ Logo & Socials */}
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
            alt="Disney+"
            className="w-36 mb-6"
          />
          <div className="flex gap-4 text-xl text-[#8891af]">
            <a href="https://facebook.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="https://twitter.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaTwitter /></a>
            <a href="https://instagram.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>

        {/* 📌 Company Info */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-[#8891af] hover:text-white transition">About Disney+</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Careers</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Press</a></li>
          </ul>
        </div>

        {/* 🧰 Support */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Terms of Use</a></li>
            <li><a href="#" className="text-[#8891af] hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* 🌍 Language/Region */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Language</h4>
          <select className="w-full bg-white/10 text-white px-3 py-2 rounded-md border border-[#2e3a5e] text-sm mb-4">
            <option>English</option>
            <option>हिन्दी</option>
            <option>Español</option>
          </select>

          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-2">Region</h4>
          <select className="w-full bg-white/10 text-white px-3 py-2 rounded-md border border-[#2e3a5e] text-sm">
            <option>India</option>
            <option>US</option>
            <option>UK</option>
          </select>
        </div>

        {/* 📞 Contact Info */}
        <div>
          <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-[#8891af]">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white" /> support@disneyplus.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" /> +1 800 123 4567
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white" /> Burbank, California
            </li>
          </ul>
        </div>
      </div>

      {/* 🧾 Bottom Note */}
      <div className="text-center text-xs text-[#5c677d] mt-14 pb-6">
        © {new Date().getFullYear()} Disney and its related entities. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

