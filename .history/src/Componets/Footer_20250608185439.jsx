import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#040714] text-[#f9f9f9] px-6 py-10 text-sm">
      <div className="max-w-6xl mx-auto">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies Policy</a>
          <a href="#" className="hover:underline">About Disney+</a>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Device Compatibility</a>
          <a href="#" className="hover:underline">Careers</a>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-600"></div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Disney and its related entities. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
