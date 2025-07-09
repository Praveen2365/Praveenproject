import { motion } from "framer-motion";
import React from "react";
import group from "../../../assets/home-4.png";

const features = [
  {
    icon: '👔',
    title: 'Corporate Training',
    description: 'Empower your team with tailored programs in tech and leadership.Close skill gaps and boost productivity with industry-relevant training.Stay ahead in the digital era with a future-ready workforce.',
  },
  {
    icon: '🎓',
    title: 'Campus Training',
    description: 'Bridge the gap between academics and industry needs.Equip students with hands-on experience in trending technologies.Prepare for placements with real-world skills and career workshops.',
  },
  
  {
    icon: '🧑‍💼',
    title: 'Internship Programs',
    description: 'Gain practical experience through live projects and expert mentorship.Explore diverse IT domains with stipend-based opportunities.Build a strong portfolio and kickstart your professional journey.',
  },
  {
    icon: '📜',
    title: 'Certificate Courses',
    description: 'Upskill with in-demand certifications in tech and digital fields.Flexible learning modes, hands-on projects, and expert-led sessions.Advance your career with recognized credentials and job support.',
  },
];

const stats = [
  { value: "27+", label: "Years Training Experience", color: "from-purple-500 to-indigo-600" },
  { value: "500K+", label: "Student Careers", color: "from-cyan-500 to-blue-600" },
  { value: "10K+", label: "Online Batches", color: "from-emerald-500 to-teal-600" },
  { value: "500+", label: "Corporate Trainings", color: "from-amber-500 to-orange-600" },
  { value: "10+", label: "Expert Faculty", color: "from-rose-500 to-pink-600" },
];

const technologies = [
  {
    title: ".NET PROGRAMMING",
    desc: "Our trained candidates in the corporate sector have developed success.",
    gradient: "bg-gradient-to-br from-purple-600 to-blue-500"
  },
  {
    title: "LINUX OPERATION",
    desc: "The main reason for the predominance of Linux is its open-source concept.",
    gradient: "bg-gradient-to-br from-amber-500 to-orange-500"
  },
  {
    title: "LAMP TECHNOLOGIES",
    desc: "Our students have exhibited their talents by developing web applications.",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600"
  },
  {
    title: "ANDROID",
    desc: "The talk of the industry in today's technical sector is about Android development.",
    gradient: "bg-gradient-to-br from-green-500 to-cyan-500"
  },
  {
    title: "PYTHON",
    desc: "The latest programming language in the IT industry. Backed with a team of professionals.",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
];

const HomeSection = () => {
  return (
    <>
      {/* Hero Section with Glass Morphism Effect */}
      <section className="relative flex items-center justify-between bg-[#12005e] text-white px-4 md:px-16 py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
        </div>
        
        {/* Left Content */}
        <div className="relative max-w-lg z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-cyan-300 mb-2"
          >
            Be in trend
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Welcome to Aaron Technologies <br />
            Shaping Futures Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Innovation
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-gray-300 mb-8"
          >
            Explore our Services to take the next step in your journey.
            Together, let's build a brighter, tech-driven future.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Get Started
          </motion.button>
        </div>

        {/* Right Image with Floating Animation */}
        <motion.div 
          className="hidden lg:block relative w-1/2 h-full z-10 "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.img
            src={group}
            alt="Group Learning"
            className=" right-0 top-1/2 transform -translate-y-1/2 w-full max-w-2xl h-auto object-contain"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>

      {/* Mission Section with Diagonal Cut */}
      <div className="relative py-20 bg-white text-black">
        {/* Diagonal Background */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#12005e] to-transparent -skew-y-2 origin-top-left"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            Transforming Lives Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              World-Class IT Education
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg"
          >
            <p>
              Whether you are a student eager to embark on your professional
              journey, a working professional aiming to upskill, or an
              organization striving to enhance your workforce's capabilities, we
              offer bespoke training programs tailored to meet your unique needs.
            </p>
            <p>
              From foundational courses to advanced certifications, we equip you
              with the tools and expertise required to thrive in the ever-evolving
              technological landscape.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section with Animated Counters */}
      <div className="bg-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-5 -skew-y-3"></div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center relative z-10 px-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl backdrop-blur-sm bg-white/70 shadow-md"
            >
              <motion.h2 
                className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}
              >
                {stat.value}
              </motion.h2>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section with 3D Card Effect */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4"
          >
            Transform Your Future with Our 
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
          >
            Comprehensive {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Tech
            </span>
            , Learning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Solutions
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"
          ></motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center group transition-all duration-300 shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-100"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500 blur-md"></div>
                <div className="relative bg-gradient-to-br from-blue-100 to-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-inner">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
              <button className="mt-auto px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies Section with Floating Cards */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        
        <motion.div 
          className="max-w-6xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shaping Futures Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Innovation
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Excellence
            </span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Aaron is a pioneer in providing quality training in the IT sector.
            With a team of professionals, our vision is to provide the finest
            blend of technology in the IT sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={{ y: -10 }}
              className={`${tech.gradient} p-0.5 rounded-xl shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="bg-white h-full rounded-lg p-6 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{tech.desc}</p>
                <button className="mt-auto px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-white/20 hover:to-white/10 transition-all">
                  Explore →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeSection;