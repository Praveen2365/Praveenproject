import React from "react";
import { motion } from "framer-motion";
import team from "../../../assets/team.png";
import group from "../../../assets/group.png";
import ex from "../../../assets/ex.png";
import logo1 from "../../../assets/logo/audisankara.png";
import logo2 from "../../../assets/logo/capgemini.png";
import logo3 from "../../../assets/logo/dj.png";
import logo4 from "../../../assets/logo/ksrce.png";
import logo5 from "../../../assets/logo/ksrct.png";
import logo6 from "../../../assets/logo/ksriet.png";
import logo7 from "../../../assets/logo/mahidhra.png";
import logo8 from "../../../assets/logo/nbkr.png";
import logo9 from "../../../assets/logo/sono.png";
import logo10 from "../../../assets/logo/vit.png";

const AboutUs = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-12 py-8 pt-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-96 h-96 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
        
        {/* Left Side - Image */}
        <motion.div 
          className="md:w-1/3 w-full flex justify-center relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-blue-500 rounded-2xl opacity-10 blur-xl"></div>
            <img
              src={group}
              alt="Team working together"
              className="w-full max-w-sm rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="md:w-1/2 w-full md:pl-12 mt-12 md:mt-0 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Are We?</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We help people build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.
          </p>
          <p className="text-gray-600 mb-8">
            Nulla gravida orci ac luctus molestie. Fusce finibus congue erat, non aliquam magna tincidunt at. Aenean lacinia arcu ex, sed pharetra nibh porta a.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "⚙️",
                title: "Versatile Brand",
                description: "We craft digital methods that subsist life across all mediums.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "🔥",
                title: "Digital Agency",
                description: "We believe in innovation by integrating primary with elaborate ideas.",
                color: "from-purple-500 to-indigo-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-r ${feature.color} text-white shadow-lg hover:shadow-xl transition-all`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {/* Comprehensive Training Card */}
            <motion.div 
              className="flex-1 bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l-2-2m0 0l-2-2m2 2h8m-6 8a9 9 0 100-18 9 9 0 000 18z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  At Aaron Technologies, we provide comprehensive training that blends technical expertise with essential soft skills to prepare individuals for global career opportunities.
                </p>
                <div className="mt-6">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Learn More →</span>
                </div>
              </div>
            </motion.div>

            {/* Global Opportunities Card */}
            <motion.div 
              className="flex-1 bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21V3m5 18h5a2 2 0 002-2V6a2 2 0 00-2-2h-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Opportunities</h3>
                <p className="text-gray-600 leading-relaxed">
                  At Aaron Technologies, we open doors to global career opportunities by equipping candidates with industry-relevant skills and international certifications.
                </p>
                <div className="mt-6">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">Explore →</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Excellence</span> in IT Training
          </motion.h2>
          
          <motion.div
            className="space-y-6 text-lg opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>
              Aaron Technologies stands as a beacon of quality in IT education, offering industry-aligned training programs tailored to market needs. Our experienced team brings a wealth of knowledge.
            </p>
            <p>
              From academic institutions to corporate clients, our growth across diverse sectors reflects our commitment to excellence.
            </p>
            <p>
              Our success lies in the fusion of technical expertise and a deep understanding of market dynamics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
          {/* Mission Card */}
          <motion.div 
            className="relative p-8 rounded-3xl overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 opacity-80 backdrop-blur-lg rounded-3xl"></div>
            <div className="absolute inset-0 border-2 border-white border-opacity-20 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl mr-4">M</div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700">
                To provide accessible, industry-aligned IT education that equips learners with the skills, confidence, and certifications needed to excel in today's dynamic tech world.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <img src={team} alt="Team working" className="w-full h-64 object-cover" />
            <div className="p-8 bg-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl mr-4">V</div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700">
                To be a global leader in IT training, fostering innovation, creativity, and lifelong learning opportunities for all.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

     {/* Fourth Section - Why Choose Us */}
<section className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-16 bg-white lg:px-20 mx-auto">
  {/* Left Side - Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative w-72 h-[450px] shadow-xl rounded-2xl overflow-hidden lg:w-75 lg:h-[400px]"
  >
    <div className="absolute top-0 left-0 w-3/4 h-4/5 bg-purple-300 rounded-lg"></div>
    <img
      src={ex}
      alt="teaching"
      className="absolute bottom-0 w-full object-cover pl-4"
    />
  </motion.div>

  {/* Right Side - Content */}
  <div className="w-full md:w-1/2 mt-10 md:mt-0 lg:pl-16">
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center md:text-left">
      Why Choose Aaron Technologies?
    </h2>
    <ul className="mt-6 space-y-4 text-lg text-gray-600 lg:text-xl">
      {[
        "🎓 Expert-Led Training: Learn from industry professionals.",
        "🚀 Career-Focused Courses: Stay ahead in the evolving IT landscape.",
        "🔥 Hands-On Learning: Gain real-world experience with practical training.",
        "🤝 Tailored Solutions: Customized programs for students, professionals, and organizations.",
      ].map((text, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="transition-all duration-300"
        >
          {text}
        </motion.li>
      ))}
    </ul>
  </div>
</section>

{/* Fifth Section - Partners */}
<section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12 bg-gray-50">
  {/* Left Section - Text Content */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-4xl font-bold text-blue-900">Few distinguished clients</h2>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold transition duration-300"
    >
      Contact Us
    </motion.button>
  </div>

  {/* Right Section - Logos */}
  <div className="md:w-full flex flex-col space-y-12 overflow-hidden mt-8 md:mt-0">
    {/* Top Logos - Scroll Left */}
    <motion.div
      className="flex w-max space-x-12"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
      <div className="flex space-x-12">
        {[logo1, logo2, logo3, logo4, logo5].map((logo, i) => (
          <motion.img 
            key={i} 
            src={logo} 
            alt={`Partner ${i + 1}`} 
            className="h-32 opacity-90"
            whileHover={{ scale: 1.1, opacity: 1 }}
          />
        ))}
      </div>
      {/* Duplicate for seamless scroll */}
      <div className="flex space-x-12">
        {[logo1, logo2, logo3, logo4, logo5].map((logo, i) => (
          <motion.img 
            key={i + 5} 
            src={logo} 
            alt={`Partner ${i + 1}`} 
            className="h-32 opacity-90"
            whileHover={{ scale: 1.1, opacity: 1 }}
          />
        ))}
      </div>
    </motion.div>

    {/* Bottom Logos - Scroll Right */}
    <motion.div
      className="flex w-max space-x-12"
      animate={{ x: ["-50%", "0%"] }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
      <div className="flex space-x-12">
        {[logo6, logo7, logo8, logo9, logo10].map((logo, i) => (
          <motion.img 
            key={i} 
            src={logo} 
            alt={`Partner ${i + 6}`} 
            className="h-32 opacity-90"
            whileHover={{ scale: 1.1, opacity: 1 }}
          />
        ))}
      </div>
      {/* Duplicate for seamless scroll */}
      <div className="flex space-x-12">
        {[logo6, logo7, logo8, logo9, logo10].map((logo, i) => (
          <motion.img 
            key={i + 5} 
            src={logo} 
            alt={`Partner ${i + 6}`} 
            className="h-32 opacity-90"
            whileHover={{ scale: 1.1, opacity: 1 }}
          />
        ))}
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default AboutUs;