import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#040714] text-white py-12 px-6 backdrop-blur-md shadow-inner">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">

        {/* Logo & Newsletter */}
        <div className="md:col-span-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
            alt="Disney+ Logo"
            className="w-36 mb-6"
          />
          <p className="text-[#b0b8d4] text-sm mb-4">Subscribe to get the latest updates</p>
          <form className="flex items-center bg-[#0c1735] rounded-lg overflow-hidden border border-[#2e3a5e]">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 bg-transparent text-white placeholder:text-[#8b95b2] outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 transition text-sm font-semibold">
              Subscribe
            </button>
          </form>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-base font-bold tracking-wide mb-4 uppercase text-[#b0b8d4]">Company</h4>
          <ul className="space-y-2 text-sm">
            {["About Disney+", "Careers", "News"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-[#8891af] hover:text-white transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-base font-bold tracking-wide mb-4 uppercase text-[#b0b8d4]">Support</h4>
          <ul className="space-y-2 text-sm">
            {["Help Center", "Contact Us", "Terms of Use", "Privacy Policy"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-[#8891af] hover:text-white transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-base font-bold tracking-wide mb-4 uppercase text-[#b0b8d4]">Connect</h4>
          <div className="flex gap-4 text-[#8891af]">
            {[
              { href: "https://facebook.com/disneyplus", label: "Facebook", icon: "🔵" },
              { href: "https://twitter.com/disneyplus", label: "Twitter", icon: "🐦" },
              { href: "https://instagram.com/disneyplus", label: "Instagram", icon: "📸" },
            ].map(({ href, label, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition text-lg"
                title={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h4 className="text-base font-bold tracking-wide mb-4 uppercase text-[#b0b8d4]">Preferences</h4>
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

      <div className="text-center text-xs text-[#5c677d] mt-12 tracking-wide">
        © {new Date().getFullYear()} Disney and its related entities. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

