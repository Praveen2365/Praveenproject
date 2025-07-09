import React, { useRef, useState } from "react";
import corporate from "../../../assets/corporate.jpg";
import { FiArrowRight, FiArrowLeft, FiCheckCircle, FiExternalLink } from "react-icons/fi";
import { FaChalkboardTeacher, FaLaptopCode, FaUserTie, FaCertificate } from "react-icons/fa";

// Data arrays for reusability
const services = [
  {
    title: "IT Skill Development",
    description: "Programming, Cloud Computing, Cybersecurity, and more.",
    icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Leadership and Management Training",
    description: "Building the next generation of tech leaders.",
    icon: <FaUserTie className="text-blue-600 text-2xl" />,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Data Science and Analytics",
    description: "Harnessing the power of data for strategic decision-making.",
    icon: <FaCertificate className="text-blue-600 text-2xl" />,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
  },
  
  {
    title: "Customized Training Modules",
    description: "Tailored programs to address your organization’s specific needs.",
    icon: <FaUserTie className="text-blue-600 text-2xl" />,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    title: "Agile and DevOps Methodologies",
    description: "Streamlining workflows for efficiency and innovation.",
    icon: <FaChalkboardTeacher className="text-blue-600 text-2xl" />,
    image: "https://images.unsplash.com/photo-1524179091875-b494986b3394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
  },
];

const newsItems = [
  {
    id: 1,
    title: "Industry-Relevant Skills",
    description: "Gain hands-on experience in the latest technologies and tools used by professionals in the tech world.",
    date: "2025-04-01",
    icon: <FaLaptopCode className="text-blue-500" />,
  },
  {
    id: 2,
    title: "Expert-Led Training",
    description: "Learn from experienced mentors who bring real-world insights into every session.",
    date: "2025-03-15",
    icon: <FaChalkboardTeacher className="text-blue-500" />,
  },
  {
    id: 3,
    title: "Career-Focused Learning",
    description: "Our curriculum is designed to prepare you for real job roles, not just exams.",
    date: "2025-02-20",
    icon: <FaUserTie className="text-blue-500" />,
  },
  {
    id: 4,
    title: "Pathway to Opportunities",
    description: "Get access to internships, placement assistance, and globally recognized certifications.",
    date: "2025-01-10",
    icon: <FaCertificate className="text-blue-500" />,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechSolutions Inc.",
    quote: "Our team's productivity increased by 40% after completing the advanced cloud computing training.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "HR Director, GlobalSoft",
    quote: "The leadership program transformed our management team's approach to problem-solving and decision-making.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Engineering Manager, DataSystems",
    quote: "Hands-down the best technical training our engineers have ever received. Worth every penny.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Campus = () => {
  const scrollRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container?.querySelector("div")?.offsetWidth || 320;
    const scrollAmount = direction === "right" ? cardWidth : -cardWidth;

    if (container) {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") scroll("left");
    if (e.key === "ArrowRight") scroll("right");
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="font-sans text-gray-800 bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[85vh] flex items-center text-white overflow-hidden">
        <img
          src={corporate}
          alt="Corporate team in a meeting"
          className="absolute inset-0 object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative z-10 px-6 md:ml-36 max-w-2xl">
          <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-blue-100 bg-blue-600/80 rounded-full">
            Corporate Training Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Upskill Your Workforce with <span className="text-blue-300">Cutting-Edge</span> Training
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
          In today’s fast-paced digital era, staying ahead of technological advancements is critical for business success. We offer customized corporate training programs designed to enhance the technical and soft skills of your employees, ensuring your organization remains competitive and future-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <button
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all hover:shadow-xl"
              aria-label="Register for corporate training"
            >
              Get Started
              <FiExternalLink />
            </button>
            <button
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all hover:shadow-xl backdrop-blur-sm"
              aria-label="Learn more about our training programs"
            >
              Explore Programs
              <FiArrowRight />
            </button> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Companies Trained</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Professionals Certified</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Learning Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and News Section */}
      <div className="max-w-7xl mx-auto p-6 pt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Training Benefits */}
          <div className="lg:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Why Choose Our Corporate Training?</h2>
            <ul className="space-y-5">
              {[
                "Customized programs aligned with your business objectives",
                "Industry-expert trainers with real-world experience",
                "Hands-on, practical learning approach",
                "Flexible delivery options (onsite, virtual, hybrid)",
                "Measurable ROI and performance impact",
                "Ongoing support and resources",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Download Brochure
            </button>
          </div>

          {/* Recent Programs News */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Recent Training Programs</h2>
              {/* <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                View All Programs
                <FiArrowRight />
              </button> */}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {newsItems.map((news) => (
                <article
                  key={news.id}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      {news.icon}
                    </div>
                    <div>
                      {/* <div className="text-sm text-blue-600 mb-1">
                        {new Date(news.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </div> */}
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h3>
                      <p className="text-gray-600">{news.description}</p>
                      {/* <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1">
                        Learn More
                        <FiArrowRight className="text-sm" />
                      </button> */}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Offerings Include:</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a full spectrum of corporate training programs designed to address your specific business challenges.
            </p>
          </div>

          <div className="relative mt-10">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-6 scroll-smooth pb-6 -mx-6 px-6"
              role="region"
              aria-label="Services carousel"
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-blue-600">{service.icon}</div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1">
                      Explore Service
                      <FiArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => scroll("left")}
                className="p-3 bg-white text-gray-700 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Scroll services left"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 bg-white text-gray-700 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Scroll services right"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-100 bg-blue-700/50 rounded-full">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'}`}
              >
                <div className="mb-8">
                  <p className="text-xl md:text-2xl leading-relaxed mb-8">"{testimonial.quote}"</p>
                  {/* <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-blue-200 text-sm">{testimonial.role}</div>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
            
            <div className="flex justify-center gap-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-white' : 'bg-blue-300'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Campus;