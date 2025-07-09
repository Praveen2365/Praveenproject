import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import person from "../../../assets/person.png";
import icon from "../../../assets/icon.png";
import line from "../../../assets/line.png";
import group from "../../../assets/group.png";
import gril from "../../../assets/gril.png";

const programs = [
  {
    title: "Software Development",
    duration: "2 to 6 months",
    benefits: "Guidance from seasoned industry professionals",
    image: group,
    category: "Development",
    color: "bg-blue-100",
  },
  {
    title: "Data Science",
    duration: "2 to 6 months",
    benefits: "Guidance from seasoned industry professionals",
    image: group,
    category: "Data",
    color: "bg-purple-100",
  },
  {
    title: "Cybersecurity",
    duration: "2 to 6 months",
    benefits: "Guidance from seasoned industry professionals",
    image: group,
    category: "Security",
    color: "bg-red-100",
  },
  {
    title: "Cloud Computing",
    duration: "2 to 6 months",
    benefits: "Guidance from seasoned industry professionals",
    image: group,
    category: "Cloud",
    color: "bg-green-100",
  },
  {
    title: "Data Analysis",
    duration: "2 to 6 months",
    benefits: "Guidance from seasoned industry professionals",
    image: group,
    category: "Data",
    color: "bg-indigo-100",
  },
];

const ProgramsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const [isHovering, setIsHovering] = useState(null);

  const filteredPrograms = programs.filter(
    (program) =>
      (categoryFilter === "All" || program.category === categoryFilter) &&
      program.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ["All", ...new Set(programs.map((p) => p.category))];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const serviceItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f0f4f2] to-[#e1e9f5] md:px-20 flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between pt-24 overflow-hidden">
        <motion.div 
          className="md:w-1/2 text-center md:text-left space-y-6 flex flex-col justify-center px-4 md:px-8 lg:px-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            <motion.span 
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Gain Real-World Experience 
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
with Our Internship Programs
            </motion.span>
          </h1>
          <motion.p 
            className="text-lg text-gray-700 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
Kickstart your career with hands-on experience through our Internship Programs. Designed for students and fresh graduates, our internships provide an opportunity to work on live projects, learn from industry experts, and build a strong professional portfolio.           </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {/* <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-6 rounded-md shadow-lg transition-all"
            >
              GET STARTED
            </motion.button>
            <motion.button 
              whileHover={{ x: 5 }}
              className="text-black font-medium underline underline-offset-4 flex items-center"
            >
              BROWSE COURSE <span className="ml-1">&gt;</span>
            </motion.button> */}
          </motion.div>
          <motion.div 
            className="flex items-center gap-4 pt-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="relative">
              <img 
                src={person} 
                alt="Happy member" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-md" 
              />
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-gray-800 font-medium">
              Join <span className="font-bold">150+ members</span> and enjoy the benefits.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 flex items-stretch justify-center md:justify-end mb-10 md:mb-0 px-4 md:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-full w-full flex items-center justify-center">
            <motion.img
              src={gril}
              alt="Student learning"
              className="h-full md:h-[600px] w-auto rounded-lg object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute top-5 right-5 bg-white shadow-lg px-4 py-2 rounded-md text-center"
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-2xl font-bold text-black">4.8</p>
              <p className="text-sm font-semibold text-gray-600">USER RATING</p>
            </motion.div>
            <motion.div 
              className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm font-medium text-gray-800">"This program transformed my career!"</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-[#EAF4FF] to-[#D6E9FF]">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Top Programs</span>
          </motion.h1>

          {/* Filter Section */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <select
              className="p-3 border rounded-lg bg-white shadow-sm focus:shadow-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all flex-1"
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setVisibleCount(3);
              }}
              aria-label="Filter by category"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              type="search"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-3 border rounded-lg bg-white shadow-sm focus:shadow-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all flex-1"
              aria-label="Search programs"
            />
          </motion.div>

          {/* Results Info */}
          <AnimatePresence>
            {filteredPrograms.length === 0 ? (
              <motion.p 
                className="text-center text-lg py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No programs match your search criteria.
              </motion.p>
            ) : (
              <>
                <motion.p 
                  className="text-center mb-6 text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Showing {Math.min(visibleCount, filteredPrograms.length)} of {filteredPrograms.length} programs
                </motion.p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {filteredPrograms.slice(0, visibleCount).map((program, index) => (
                      <motion.div
                        key={program.title}
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover="hover"
                        whileTap="tap"
                        custom={index}
                        className={`${program.color} rounded-2xl shadow-lg overflow-hidden`}
                        onMouseEnter={() => setIsHovering(index)}
                        onMouseLeave={() => setIsHovering(null)}
                      >
                        <div className="relative overflow-hidden h-48">
                          <motion.img 
                            src={program.image} 
                            alt={program.title} 
                            className="w-full h-full object-cover"
                            animate={{
                              scale: isHovering === index ? 1.1 : 1
                            }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h2 className="text-xl font-bold text-gray-800">{program.title}</h2>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              program.category === "Development" ? "bg-blue-100 text-blue-800" :
                              program.category === "Data" ? "bg-purple-100 text-purple-800" :
                              program.category === "Security" ? "bg-red-100 text-red-800" :
                              "bg-green-100 text-green-800"
                            }`}>
                              {program.category}
                            </span>
                          </div>
                          <div className="space-y-3 mb-4">
                            <div className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              <p className="text-gray-700">{program.duration}</p>
                            </div>
                            <div className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                              </svg>
                              <p className="text-gray-700">{program.benefits}</p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all font-semibold"
                            aria-label={`Apply for ${program.title}`}
                          >
                            Apply Now
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </>
            )}
          </AnimatePresence>

          {/* Pagination Controls */}
          {filteredPrograms.length > 3 && (
            <motion.div 
              className="flex justify-center mt-12 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {visibleCount < filteredPrograms.length && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 3, filteredPrograms.length))}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center"
                >
                  Load More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              )}
              {visibleCount > 3 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setVisibleCount(3)}
                  className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 flex items-center"
                >
                  Show Less
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              )}
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-[#f0f4f2] to-[#e0e8e5]">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Training Benefits</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Practical exposure to industry tools and technologies",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Enhanced employability and career prospects",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Networking opportunities with professionals and peers",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={serviceItemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-blue-50 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-r from-blue-600 to-cyan-500">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our community of learners and take the first step towards your dream career today.
          </p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
          >
            Enroll Now
          </motion.button> */}
        </motion.div>
      </section>
    </div>
  );
};

export default ProgramsPage;