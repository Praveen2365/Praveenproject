import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // Make sure Tailwind is imported

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./pages/Layout/Navbar";
import Footer from "./pages/Layout/Footer";
import Internship from "./pages/Internship/Internship";
import Contact from "./pages/Contact/Contact"; // Add your contact page here
import Careers from "./pages/Careers/Careers";
import Blog from "./pages/Blog/Blog";
import Corporate from "./pages/Corporate/Corporate";
import Certification from "./pages/Certification/Certification"; 
import Campus from "./pages/Campus/Campus";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar Always Visible */}
        <Navbar />

        {/* Main Content Wrapper */}
        <main className="flex-grow bg-gray-50 text-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/campus" element={<Campus />} />
            
            
          </Routes>
        </main>

        {/* Footer Always Visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
