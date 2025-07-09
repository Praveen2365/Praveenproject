import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import person1 from "../../../assets/person1.png";
import photo1 from "../../../assets/Certification/photo1.png";
import photo2 from "../../../assets/Certification/photo2.png";
import photo3 from "../../../assets/Certification/photo3.png";
import photo4 from "../../../assets/Certification/photo4.png";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const Certification = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0f4f2] to-[#e0ece7] md:px-20 flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between pt-24">
        {/* Left Section */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="md:w-1/2 text-center md:text-left space-y-6 flex flex-col justify-center px-6 md:px-0"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Boost Your Career with Our <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Industry-Recognized Certificate Courses</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-lg">
          Looking to upskill or switch careers? Our Certificate Courses are designed to help you gain expertise in high-demand IT domains and earn certifications that are valued by employers worldwide.          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
            {/* <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 px-6 rounded-md transition shadow-lg"
            >
              GET STARTED
            </motion.button>
            <motion.button 
              whileHover={{ x: 5 }}
              className="text-black font-medium hover:text-purple-700 transition"
            >
              BROWSE COURSE <span className="inline-block ml-1">→</span>
            </motion.button> */}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            className="flex items-center gap-4 pt-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <img 
                  key={item}
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`} 
                  alt="user" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                />
              ))}
            </div>
            <p className="text-gray-800 font-medium">
              Join <span className="font-bold text-purple-700">150+ members</span> and accelerate your career.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
          className="md:w-1/2 flex items-stretch justify-center md:justify-end mb-10 md:mb-0"
        >
          <div className="relative h-full w-full flex items-center justify-center">
            <motion.img
              src={person1}
              alt="hero"
              className="h-full md:h-[500px]   bottom-0 "
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            {/* Rating at top right */}
            {/* <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: 0.8 } }}
              whileHover={{ rotate: 5 }}
              className="absolute top-5 right-5 bg-white shadow-lg px-4 py-2 rounded-md text-center"
            >
              <p className="text-2xl font-bold text-black">4.8</p>
              <p className="text-sm font-semibold text-gray-600">USER RATING</p>
            </motion.div> */}
          </div>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section className="bg-gradient-to-b from-blue-50 to-indigo-50 py-24 px-4 sm:px-6 lg:px-20 text-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-indigo-900">
            Give the <span className="relative inline-block">
              <span className="relative z-10">Best Start</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-300 opacity-60 -z-0"></span>
            </span> to Your Career
          </h2>
          <p className="mt-4 text-xl text-gray-700 font-medium">Learn, practice, and get hired!</p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-8xl mx-auto"
        >
          {/* Certification Course Card */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="relative bg-white shadow-xl rounded-xl p-6 text-left overflow-hidden h-64 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
          >
            {/* Right Half Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100 rounded-l-full"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-base font-bold text-gray-800 bg-gray-100 w-fit px-4 py-1.5 rounded-full shadow-sm">
              Cloud Computing<span className="ml-2 text-sm text-gray-600 font-medium">4-8 weeks</span>
              </div>
              <p className="mt-6 text-lg text-gray-800 font-medium">Expertise in AWS, Azure, and Google Cloud.</p>
              <motion.a 
                href="#"
                whileHover={{ x: 5 }}
                className="mt-6 inline-flex items-center text-purple-700 font-bold hover:underline text-lg"
              >
                Explore now <span className="ml-1">→</span>
              </motion.a>
            </div>

            {/* Image at Bottom, Full Height */}
            <motion.img
              src={photo1}
              alt="Certificate holder"
              className="absolute bottom-0 right-0 h-full object-contain z-10 "
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

            {/* Placement Guarantee Course Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="relative bg-white shadow-xl rounded-xl p-6 text-left overflow-hidden h-64 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
            >
              {/* Right Half Background */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-100 rounded-l-full"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-base font-bold text-gray-800 bg-gray-100 w-fit px-4 py-1.5 rounded-full shadow-sm">
                Full Stack Web Development<span className="ml-2 text-sm text-gray-600 font-medium">1-3 months</span>
                </div>
                <p className="mt-6 text-lg text-gray-800 font-medium">Master front-end and back-end technologies.</p>
                <motion.a 
                  href="#"
                  whileHover={{ x: 5 }}
                  className="mt-6 inline-flex items-center text-purple-700 font-bold hover:underline text-lg"
                >
                  Explore now <span className="ml-1">→</span>
                </motion.a>
              </div>

              {/* Image at Bottom, Full Height */}
              <motion.img
                src={photo2}
                alt="Hired certificate"
                className="absolute bottom-0 right-0 h-full object-contain z-10"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>

          {/* Third Course Card */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="relative bg-white shadow-xl rounded-xl p-6 text-left overflow-hidden h-64 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
          >
            {/* Right Half Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-100 rounded-l-full"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-base font-bold text-gray-800 bg-gray-100 w-fit px-4 py-1.5 rounded-full shadow-sm">
              Data Science and Machine Learning: <span className="ml-2 text-sm text-gray-600 font-medium">3-6 months</span>
              </div>
              <p className="mt-6 text-lg text-gray-800 font-medium">Unlock the power of data-driven decision-making.</p>
              <motion.a 
                href="#"
                whileHover={{ x: 5 }}
                className="mt-6 inline-flex items-center text-purple-700 font-bold hover:underline text-lg"
              >
                Explore now <span className="ml-1">→</span>
              </motion.a>
            </div>

            {/* Image at Bottom, Full Height */}
            <motion.img
              src={photo3}
              alt="Advanced learning"
              className="absolute bottom-0 right-0 h-full object-contain z-10"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Fourth Course Card */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="relative bg-white shadow-xl rounded-xl p-6 text-left overflow-hidden h-64 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
          >
            {/* Right Half Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100 rounded-l-full"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-base font-bold text-gray-800 bg-gray-100 w-fit px-4 py-1.5 rounded-full shadow-sm">
              Cybersecurity Fundamentals<span className="ml-2 text-sm text-gray-600 font-medium">3-6 months</span>
              </div>
              <p className="mt-6 text-lg text-gray-800 font-medium">Protect systems and data from cyber threats.</p>
              <motion.a 
                href="#"
                whileHover={{ x: 5 }}
                className="mt-6 inline-flex items-center text-purple-700 font-bold hover:underline text-lg"
              >
                Explore now <span className="ml-1">→</span>
              </motion.a>
            </div>
            

            {/* Image at Bottom, Full Height */}
            <motion.img
              src={photo4}
              alt="Specialization"
              className="absolute bottom-0 right-0 h-full object-contain z-10"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="relative bg-white shadow-xl rounded-xl p-6 text-left overflow-hidden h-64 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
          >
            {/* Right Half Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100 rounded-l-full"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-base font-bold text-gray-800 bg-gray-100 w-fit px-4 py-1.5 rounded-full shadow-sm">
              Digital Marketing and SEO<span className="ml-2 text-sm text-gray-600 font-medium">4-8 weeks</span>
              </div>
              <p className="mt-6 text-lg text-gray-800 font-medium">Drive online visibility and business growth.</p>
              <motion.a 
                href="#"
                whileHover={{ x: 5 }}
                className="mt-6 inline-flex items-center text-purple-700 font-bold hover:underline text-lg"
              >
                Explore now <span className="ml-1">→</span>
              </motion.a>
            </div>

            {/* Image at Bottom, Full Height */}
            <motion.img
              src={photo1}
              alt="Certificate holder"
              className="absolute bottom-0 right-0 h-full object-contain z-10 "
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </motion.div>
        
        
        
      </section>
         
      {/* Training Info Section */}
      <div className="max-w-6xl mx-auto p-6 bg-white pt-16">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Training Benefits Section */}
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/3 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border border-green-100 shadow-md"
          >
            <h2 className="text-2xl font-bold text-green-800 mb-6">Why Enroll in Our Certificate Courses?</h2>
            <ul className="space-y-5 text-gray-700">
              {[
                "Short-term, focused learning programs.",
                "Hands-on projects and real-world case studies.",
                "Flexible online and offline learning options.",
                "Career support and placement assistance."
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start bg-white/70 p-3 rounded-lg shadow-sm"
                >
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Recent Programs News */}
          <motion.div 
            variants={fadeInUp}
            className="lg:w-2/3"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Recent Training Programs</h2>
            
            {/* News Items */}
            {[
              {
                title: "Industry-Relevant Skills",
                description: "Gain hands-on experience in the latest technologies and tools used by professionals in the tech world."
              },
              {
                title: "Expert-Led Training",
                description: "Learn from experienced mentors who bring real-world insights into every session."
              },
              {
                title: "Career-Focused Learning",
                description: "Our curriculum is designed to prepare you for real job roles, not just exams."
              },
              {
                title: "Pathway to Opportunities",
                description: "Get access to internships, placement assistance, and globally recognized certifications."
              }
            ].map((item, index) => (
              <motion.article 
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className="mb-8 pb-6 border-b border-gray-200 last:border-0"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {item.description}
                    </p>
                    {/* <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="inline-block mt-3 text-blue-600 font-medium hover:underline"
                    >
                      Learn more <span className="inline-block ml-1">→</span>
                    </motion.a> */}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certification;