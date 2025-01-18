import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#253068] text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Products Container */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/shop-all"
                  className="hover:underline hover:text-gray-300"
                >
                  Shop All
                </a>
              </li>
              <li>
                <a
                  href="/shop-by-category"
                  className="hover:underline hover:text-gray-300"
                >
                  Shop by Category
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="hover:underline hover:text-gray-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/ask-expert"
                  className="hover:underline hover:text-gray-300"
                >
                  Ask Expert
                </a>
              </li>
            </ul>
          </div>

          {/* Support Container */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/faq"
                  className="hover:underline hover:text-gray-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="hover:underline hover:text-gray-300"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="/returns"
                  className="hover:underline hover:text-gray-300"
                >
                  Returns Policy
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-gray-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo.jpg"
              alt="Glamify Logo"
              className="h-12 object-contain mr-4"
            />
            <span className="text-lg font-bold">Stay in Touch</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
