import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#07122a] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">

        {/* Logo + Newsletter */}
        <div className="lg:col-span-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
            alt="Disney+ Logo"
            className="w-32 mb-4"
          />
          <p className="text-[#b0b8d4] text-sm mb-3">Subscribe to our newsletter</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded text-black w-full sm:w-auto"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">Subscribe</button>
          </form>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-[#b0b8d4]">
            <li><a href="/about" className="hover:text-white transition">About Disney+</a></li>
            <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
            <li><a href="/news" className="hover:text-white transition">News</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-[#b0b8d4]">
            <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms of Use</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Connect + Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex gap-4 mb-3">
            <a href="https://facebook.com/disneyplus" target="_blank" rel="noreferrer">
              <svg className="w-5 h-5 fill-[#b0b8d4] hover:fill-white transition" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.4c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.5.7-1.5 1.4V12H17l-.4 3h-2.2v7A10 10 0 0 0 22 12" />
              </svg>
            </a>
            <a href="https://twitter.com/disneyplus" target="_blank" rel="noreferrer">
              <svg className="w-5 h-5 fill-[#b0b8d4] hover:fill-white transition" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.72 9.72 0 0 1-2.86 1.1A4.92 4.92 0 0 0 16.5 0C13.87 0 12 2.2 12 4.88c0 .38.04.75.12 1.1C8.09 5.79 4.3 3.8 1.67.86a4.88 4.88 0 0 0-.66 2.46c0 1.7.87 3.2 2.2 4.1A4.7 4.7 0 0 1 .96 6v.06c0 2.3 1.7 4.3 3.95 4.8a4.9 4.9 0 0 1-2.2.08 4.91 4.91 0 0 0 4.6 3.4A9.86 9.86 0 0 1 0 20.3 13.92 13.92 0 0 0 7.55 22c9.05 0 14-7.5 14-14v-.63A9.8 9.8 0 0 0 23 3" />
              </svg>
            </a>
            <a href="https://instagram.com/disneyplus" target="_blank" rel="noreferrer">
              <svg className="w-5 h-5 fill-[#b0b8d4] hover:fill-white transition" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Language & Region */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Preferences</h4>
          <div className="mb-3">
            <label className="block text-sm text-[#b0b8d4] mb-1">Language</label>
            <select className="bg-[#0b1c3a] text-white px-3 py-2 rounded w-full">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>हिन्दी</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#b0b8d4] mb-1">Region</label>
            <select className="bg-[#0b1c3a] text-white px-3 py-2 rounded w-full">
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
            </select>
          </div>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="text-center text-sm text-[#5c677d] mt-10">
        © {new Date().getFullYear()} Disney and its related entities. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

