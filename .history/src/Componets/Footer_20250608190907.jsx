import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#050c23] to-[#040714] text-white pt-20 px-6">
      
      {/* 🔔 Subscription Section */}
      <div className="max-w-2xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">Unlimited Entertainment. One Subscription.</h2>
        <p className="text-[#b0b8d4] mb-6">Enter your email to receive the latest updates, news & offers from Disney+.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-2/3 px-4 py-3 rounded-md bg-white/10 text-white placeholder:text-[#8b95b2] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md backdrop-blur-md transition-all duration-300"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition-all duration-300">
            Subscribe
          </button>
        </form>
      </div>

      {/* 🌐 Footer Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 border-t border-[#1f2a48] pt-12">

        {/* Logo & Socials */}
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
            alt="Disney+ Logo"
            className="w-36 mb-6"
          />
          <div className="flex space-x-4 text-[#8891af] text-xl">
            <a href="https://facebook.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300"><FaFacebookF /></a>
            <a href="https://twitter.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300"><FaTwitter /></a>
            <a href="https://instagram.com/disneyplus" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300"><FaInstagram /></a>
          </div>
        </div>

        {/* Links */}
        {[
          { title: 'Company', links: ['About Disney+', 'Careers', 'News'] },
          { title: 'Support', links: ['Help Center', 'Contact Us', 'Terms of Use', 'Privacy Policy'] },
        ].map((section, idx) => (
          <div key={idx}>
            <h4 className="text-sm font-semibold text-[#b0b8d4] uppercase mb-4 tracking-wide">{section.title}</h4>
            <ul className="space-y-3 text-sm">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-[#8891af] hover:text-white transition duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Language & Region */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-[#b0b8d4] mb-2">Language</label>
            <select className="w-full bg-white/10 backdrop-blur-md text-white px-3 py-2 rounded-md border border-[#2e3a5e] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
              <option>English</option>
              <option>हिन्दी</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#b0b8d4] mb-2">Region</label>
            <select className="w-full bg-white/10 backdrop-blur-md text-white px-3 py-2 rounded-md border border-[#2e3a5e] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
              <option>India</option>
              <option>United States</option>
              <option>Canada</option>
              <option>UK</option>
            </select>
          </div>
        </div>
      </div>

      {/* 👣 Bottom Note */}
      <div className="text-center text-xs text-[#5c677d] mt-16 pb-6">
        © {new Date().getFullYear()} Disney and its related entities. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;



