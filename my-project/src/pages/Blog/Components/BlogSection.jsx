import React from "react";
import { motion } from "framer-motion";
import group from "../../../assets/group.png";

const blogTopics = [
  {
    icon: "💻",
    title: "Top IT Skills in Demand for 2023",
    description: "Discover the most sought-after tech skills shaping the job market. Stay competitive by aligning your learning with industry needs.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "🎓",
    title: "Choosing the Right IT Certification",
    description: "Navigate the certification landscape with clarity. Find the credentials that align best with your goals and job prospects.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "🤖",
    title: "The Future of AI and Machine Learning",
    description: "Uncover the latest developments in AI and ML. Learn how these technologies are revolutionizing industries worldwide.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: "🧠",
    title: "Tips for Acing Tech Interviews",
    description: "Master technical interviews with confidence. Use expert strategies to showcase your skills and impress hiring managers.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: "🚀",
    title: "Upskilling Your Workforce",
    description: "Empower your employees with essential skills for tomorrow. Learn how to implement effective upskilling programs.",
    color: "from-indigo-500 to-blue-500"
  },
  
];

const Blog = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12 relative">
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
        
        {/* Image with floating animation */}
        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-6 bg-blue-500 rounded-3xl opacity-10 blur-xl"></div>
          <motion.img
            src={group}
            alt="Student with laptop"
            className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0 relative z-10"
            whileHover={{ y: -10 }}
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

        {/* Content */}
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Stay Updated with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Latest in IT</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Welcome to our blog, your go-to resource for insights, tips, and trends in the world of IT and education. Get informed and inspired.
          </p>
          {/* <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe to Newsletter
          </motion.button> */}
        </motion.div>
      </section>

      {/* Blog Topics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Popular Topics</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive into our curated collection of insightful articles and resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogTopics.map((topic, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-10 group-hover:opacity-20 transition-all`}></div>
                <div className="relative z-10 p-8 bg-white/90 backdrop-blur-sm h-full">
                  <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center text-3xl bg-gradient-to-br ${topic.color} text-white`}>
                    {topic.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h4>
                  <p className="text-gray-600 mb-6">{topic.description}</p>
                  {/* <a 
                    href="#" 
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 group"
                  >
                    Read Article
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Never Miss an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Update</span>
          </motion.h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, tips, and course offerings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            {/* <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300"
            /> */}
            {/* <motion.button
              className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;