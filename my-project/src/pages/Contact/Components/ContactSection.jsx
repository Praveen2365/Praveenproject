import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f5ff] to-[#e6e9ff] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-[#2f1c6a] mb-4">
            Get In Touch
          </motion.h2>
          <motion.div variants={fadeIn} className="w-20 h-1 bg-blue-500 mx-auto mb-6"></motion.div>
          <motion.p variants={fadeIn} className="text-lg text-[#4a3b76] max-w-2xl mx-auto">
            Have questions or want to learn more about our programs? Reach out to us - we'd love to hear from you!
          </motion.p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="bg-[#2f1c6a] text-white p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <FaMapMarkerAlt className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200">Our Location</h4>
                    <p className="text-white/90">Aaron Technologies, 36,
Mariamman Koil Street, Hasthampatty,
Salem – 636 007, Tamil Nadu, INDIA</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <FaPhone className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200">Phone Number</h4>
                    <p className="text-white/90">+91 99431 15155</p>
                    <p className="text-white/90">+91 99435 43515</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <FaEnvelope className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200">Email Address</h4>
                    <p className="text-white/90">info@aarontech.com</p>
                    {/* <p className="text-white/90">support@aarontech.com</p> */}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <FaClock className="text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200">Working Hours</h4>
                    <p className="text-white/90">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-white/90">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-blue-200 mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-blue-300 transition-colors duration-200">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="#" className="text-white hover:text-pink-400 transition-colors duration-200">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="text-white hover:text-green-400 transition-colors duration-200">
                    <FaWhatsapp className="text-xl" />
                  </a>
                  <a href="#" className="text-white hover:text-red-500 transition-colors duration-200">
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 p-4 flex items-center justify-center">
              <iframe
                className="w-full h-64 lg:h-full rounded-lg shadow-sm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.5006175168829!2d78.14416693603695!3d11.62299803418556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1b2c2999fe7%3A0xb628d99e3894b83e!2sAaron%20Technologies!5e0!3m2!1sen!2sin!4v1741362432301!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                title="Aaron Technologies Location"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#2f1c6a] mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your message"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#2f1c6a] hover:bg-[#3d2796] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-blue-600 text-2xl" />
            </div>
            <h4 className="text-xl font-semibold text-[#2f1c6a] mb-2">Call Us</h4>
            <p className="text-gray-600">+91 99431 15155,+91 99435 43515</p>
            <p className="text-gray-600">Available 24/7 for emergencies</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-purple-600 text-2xl" />
            </div>
            <h4 className="text-xl font-semibold text-[#2f1c6a] mb-2">Email Us</h4>
            <p className="text-gray-600">info@aarontech.com</p>
            <p className="text-gray-600">Typically reply within 24 hours</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="text-green-600 text-2xl" />
            </div>
            <h4 className="text-xl font-semibold text-[#2f1c6a] mb-2">WhatsApp</h4>
            <p className="text-gray-600">+91 99431 15155,+91 99435 43515</p>
            <p className="text-gray-600">Quick responses during business hours</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;