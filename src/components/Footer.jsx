import React from "react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Specifications", "What's in the Box"],
    Support: ["FAQ", "Warranty", "Contact Us"],
    Company: ["About", "Press Kit", "Careers"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className=" pt-16 md:pt-24 lg:pt-32 pb-8">
      {/* CTA SECTION */}
      <div className="px-4 md:px-6 lg:px-8 mb-16 md:mb-20 lg:mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to experience
            <br className="hidden sm:block" /> the darkness?
          </h2>

          <button className="bg-sky-500 hover:bg-sky-600 transition text-white font-semibold py-3 md:py-4 px-8 md:px-12 rounded-full text-base md:text-lg mb-4 md:mb-6">
            Pre-Order - $399
          </button>

          <p className="text-gray-400 text-sm md:text-base">
            Ships Q2 2026 • Free shipping worldwide
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-zinc-800 mb-12 md:mb-16"></div>

      {/* LINKS SECTION */}
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto mb-12 md:mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm md:text-base mb-4 md:mb-6">
                {category}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-sky-400 transition text-sm md:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-zinc-800 mb-8"></div>

      {/* COPYRIGHT */}
      <div className="px-4 md:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-xs md:text-sm">
          © 2026 Midnight Stealth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
