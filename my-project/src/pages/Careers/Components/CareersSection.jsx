import React from "react";
import { motion } from "framer-motion";

const jobs = [
  { 
    title: "IT Trainers", 
    cont: "Programming, Data Science, Cybersecurity, and more", 
    type: "FULL TIME",
    icon: "💻",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Content Developers", 
    cont: "Create engaging learning materials", 
    type: "FULL TIME",
    icon: "✍️",
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "Interns and Freshers", 
    cont: "Start your career with us", 
    type: "FULL TIME",
    icon: "👨‍🎓",
    color: "from-green-500 to-teal-500"
  },
  { 
    title: "Marketing Executives", 
    cont: "Drive our growth and outreach", 
    type: "FULL TIME",
    icon: "📈",
    color: "from-orange-500 to-amber-500"
  },
  { 
    title: "Sales Executives", 
    cont: "Expand our market presence", 
    type: "FULL TIME",
    icon: "🤝",
    color: "from-indigo-500 to-blue-500"
  },
  { 
    title: "Curriculum Designers", 
    cont: "Shape the future of tech education", 
    type: "FULL TIME",
    icon: "📚",
    color: "from-red-500 to-pink-500"
  },
];

const benefits = [
  {
    title: " Collaborative & Inclusive Environment",
    description: "We foster a team culture where everyone’s voice is heard, respected, and valued—encouraging innovation through diversity and mutual support.",
    icon: "🤝",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Professional Growth & Development",
    description: "Enjoy continuous learning opportunities, skill-building workshops, and career advancement paths tailored to help you thrive.",
    icon: "📈 ",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Competitive Compensation & Benefits",
    description: "We offer attractive salary packages, performance bonuses, and comprehensive benefits to support your well-being and financial security.",
    icon: "💰",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Make a Meaningful Impact in IT Education",
    description: "Be part of a mission-driven team that’s shaping the future of tech education—empowering learners and driving digital transformation.",
    icon: "🌍",
    color: "bg-amber-100 text-amber-600"
  },
];

const CareerPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-32 px-4 text-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Join Our Team and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Make a Difference</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            At Aaron Technologies, we're looking for passionate individuals who share our vision of transforming lives through education.
          </p>
          <motion.button
            className="mt-8 px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Opportunities
          </motion.button>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">With Us?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 rounded-full ${benefit.color} flex items-center justify-center text-3xl mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Openings</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to join our growing team of tech educators and professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-10`}></div>
                <div className="relative z-10 p-8 h-full bg-white/80 backdrop-blur-sm group-hover:bg-white transition-all">
                  <div className="text-4xl mb-4">{job.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.cont}</p>
                  <span className="inline-block bg-gradient-to-r ${job.color} text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {job.type}
                  </span>
                  <div className="mt-6">
                    {/* <a 
                      href="#" 
                      className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 group"
                    >
                      View & Apply
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Join Our Team?</span>
          </motion.h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always interested in meeting passionate individuals.
          </p>
          <motion.button
            className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Your Resume
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;