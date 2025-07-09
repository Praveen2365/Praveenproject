import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/aaron.png";

const Footer = () => {
  return (
    <footer className="bg-[#f4f5ff] text-[#2f1c6a] py-12 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <img src={logo} alt="Aaron Technologies" className="h-10" />
          <p className="text-sm text-gray-600">
            Empowering careers through technology education and training since 2010.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-500">
              <FaWhatsapp className="text-xl" />
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <FaPinterest className="text-xl" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-gray-500" />
              <div>
                <p className="text-sm">36, Mariamman Koil Street</p>
                <p className="text-sm">Hasthampatty, Salem – 636 007</p>
                <p className="text-sm">Tamil Nadu, INDIA</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-3 text-gray-500" />
              <div className="text-sm">
                <p>+91 99431 15155</p>
                <p>+91 99435 43515</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-3 text-gray-500" />
              <a href="mailto:info@aarontec.com" className="text-sm text-blue-600 hover:underline">
                info@aarontec.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
            <li><a href="/careers" className="text-gray-600 hover:text-blue-600">Careers</a></li>
            <li><a href="/blog" className="text-gray-600 hover:text-blue-600">Blog</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/corporate " className="text-gray-600 hover:text-blue-600">Corporate Training</a></li>
            <li><a href="/campus" className="text-gray-600 hover:text-blue-600">Campus Training</a></li>
            <li><a href="/internship " className="text-gray-600 hover:text-blue-600">Internship Programs</a></li>
            <li><a href="/certification" className="text-gray-600 hover:text-blue-600">Certificate Courses</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Aaron Technologies. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
          <a href="#" className="hover:text-blue-600">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;