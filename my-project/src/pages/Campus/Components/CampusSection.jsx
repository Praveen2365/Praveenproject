import React from "react";
import { motion } from "framer-motion";
import campus from "../../../assets/campus.jpg";

const reasons = [
  {
    icon: "🎓",
    title: "Expert-Led Training",
    description: "Learn from experienced trainers with real-world industry expertise.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "🏢",
    title: "Advanced Infrastructure & Tools",
    description: "Get hands-on experience with modern labs and the latest technologies.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: "🚀",
    title: "Career Support & Global Certifications",
    description: "Access top internship opportunities and earn globally recognized certifications.",
    color: "from-green-500 to-teal-500"
  },
];

const services = [
  { 
    name: "Programming Languages: ", 
    icon: "💻 ", 
    desc: "Java, Python, C, C++, and DSA",
    color: "bg-blue-100 text-blue-600"
  },
  { 
    name: "Web and Mobile App Development: ", 
    icon: "🌐 ", 
    desc: "Building scalable, user-friendly applications.",
    color: "bg-purple-100 text-purple-600"
  },
  { 
    name: "Database Management and Big Data: ", 
    icon: "🗄️", 
    desc: "Mastering data storage and analytics.",
    color: "bg-green-100 text-green-600"
  },
  { 
    name: "Artificial Intelligence and Machine Learning", 
    icon: "🤖", 
    desc: "Exploring the frontiers of AI.",
    color: "bg-orange-100 text-orange-600"
  },
  { 
    name: "Soft Skills and Career Development Workshops: ", 
    icon: "🗣️", 
    desc: "Enhancing communication, teamwork, and interview readiness.",
    color: "bg-indigo-100 text-indigo-600"
  },
];

const ReasonCard = ({ icon, title, description, color }) => (
  <motion.div 
    className={`p-8 rounded-2xl bg-gradient-to-r ${color} text-white shadow-lg hover:shadow-xl transition-all`}
    whileHover={{ y: -10 }}
  >
    <div className="text-5xl mb-6">{icon}</div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-white/90">{description}</p>
  </motion.div>
);

const Corporate = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={campus}
            alt="Corporate background"
            className=" object-cover pt-12"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </motion.div>
        
        <motion.div 
          className="relative z-10 max-w-4xl px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Empowering Students with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Industry-Ready Skills
            </span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
          We understand the importance of practical, hands-on learning in shaping successful tech careers. Our Campus Training programs are designed to complement academic education with real-world IT skills, preparing students to excel in the competitive job market.          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              REGISTER TODAY
            </motion.button>
            {/* <motion.button 
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button> */}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section with Floating Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-100 opacity-20 blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Campus Training</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to build a skilled, agile, and future-ready workforce.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ReasonCard {...reason} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Glass Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Offerings</span> Include
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all border border-gray-100"></div>
                <div className="relative z-10 p-8 h-full">
                  <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center text-3xl mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                  <div className="mt-6">
                    {/* <span className="inline-flex items-center text-blue-600 font-medium group-hover:underline">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Your Workforce?</span>
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact us today to discuss customized training solutions for your organization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;