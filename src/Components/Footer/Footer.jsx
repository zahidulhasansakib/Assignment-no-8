import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              AppVibe
            </h3>
            <p className="text-sm sm:text-base leading-relaxed max-w-md">
              Discover the best mobile apps for productivity, entertainment, and
              more. AppVibe is your go-to platform for finding apps that spark
              your vibe.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition duration-200 text-sm sm:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="hover:text-blue-400 transition duration-200 text-sm sm:text-base"
                >
                  All Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-blue-400 transition duration-200 text-sm sm:text-base"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-sm sm:text-base mb-3">
              Subscribe to our newsletter for app recommendations and updates.
            </p>
            <div className="flex flex-col  gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base w-full"
              />
              <button className="btn cursor-pointer px-4 py-2 text-lg font-normal md:font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-none border-none w-full md:w-auto">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Note: Do no't send your email for demo purposes.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-sm sm:text-base">
              Email:{" "}
              <a
                href="mailto:support@appvibe.com"
                className="hover:text-blue-400 transition duration-200"
              >
                support@appvibe.com
              </a>
            </p>
            <p className="text-sm sm:text-base mt-2">
              Address: 123 Tech Lane, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-700 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a
              href="https://x.com/rashedulraha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              <Twitter size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.facebook.com/rashedulraha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              <Facebook size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.instagram.com/rashedulraha/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              <Instagram size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
          <p className="text-sm sm:text-base text-gray-500">
            &copy; {currentYear} AppVibe Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
