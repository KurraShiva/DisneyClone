// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#07122a] text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between">
        <div className="flex-1 min-w-[200px] mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
            alt="Disney+ Logo"
            className="w-32"
          />
        </div>

        <div className="flex-3 min-w-[600px] flex flex-wrap justify-between space-x-8">
          <div className="min-w-[150px] mb-8">
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <a href="/about" className="block text-[#b0b8d4] hover:text-white mb-2">About Disney+</a>
            <a href="/careers" className="block text-[#b0b8d4] hover:text-white mb-2">Careers</a>
            <a href="/news" className="block text-[#b0b8d4] hover:text-white mb-2">News</a>
          </div>

          <div className="min-w-[150px] mb-8">
            <h4 className="text-lg font-semibold mb-3">Support</h4>
            <a href="/help" className="block text-[#b0b8d4] hover:text-white mb-2">Help Center</a>
            <a href="/contact" className="block text-[#b0b8d4] hover:text-white mb-2">Contact Us</a>
            <a href="/terms" className="block text-[#b0b8d4] hover:text-white mb-2">Terms of Use</a>
            <a href="/privacy" className="block text-[#b0b8d4] hover:text-white mb-2">Privacy Policy</a>
          </div>

          <div className="min-w-[150px] mb-8">
            <h4 className="text-lg font-semibold mb-3">Connect</h4>
            <a href="https://www.facebook.com/disneyplus" target="_blank" rel="noreferrer" className="block text-[#b0b8d4] hover:text-white mb-2">Facebook</a>
            <a href="https://twitter.com/DisneyPlus" target="_blank" rel="noreferrer" className="block text-[#b0b8d4] hover:text-white mb-2">Twitter</a>
            <a href="https://www.instagram.com/disneyplus" target="_blank" rel="noreferrer" className="block text-[#b0b8d4] hover:text-white mb-2">Instagram</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-[#5c677d] mt-6">
        © 2025 Disney and its related entities. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
