import { useState } from "react";
import { Link } from "react-router-dom";
import aaron from "../../assets/aaron.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsMenuOpen(false);  // Close mobile menu
    setIsDropdownOpen(false); // Close dropdown
  };

  return (
    <nav 
      className=" bg-white border-gray-200 fixed w-full top-0 left-0 z-50"
      style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)" }} // Custom shadow
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-1">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse md:mr-auto md:ml-0 mx-auto">
          <img src={aaron} className="h-16 w-36" alt="Logo" />
        </Link>

        {/* Menu Items */}
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link to="/" onClick={handleNavItemClick} className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavItemClick} className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                About Us
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-black rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
              >
                Services
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
            <li>
              <Link to="/careers" onClick={handleNavItemClick} className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleNavItemClick} className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavItemClick} className="block py-2 px-3 text-black rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="mt-1 border-gray-200 shadow-xs bg-white border-y">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-black sm:grid-cols-2 md:grid-cols-2 md:px-6">
            {/* Left Side */}
            <ul>
              <li>
                <Link
                  to="/corporate"
                  className="block p-3 rounded-lg hover:bg-gray-100"
                  onClick={handleNavItemClick}
                >
                  <div className="font-semibold">Corporate Training</div>
                  <span className="text-sm text-gray-500">Enhance professional skills.</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/campus"
                  className="block p-3 rounded-lg hover:bg-gray-100"
                  onClick={handleNavItemClick}
                >
                  <div className="font-semibold">Campus Training</div>
                  <span className="text-sm text-gray-500">Learn from experts.</span>
                </Link>
              </li>
            </ul>
            {/* Right Side */}
            <ul>
              <li>
                <Link
                  to="/internship"
                  className="block p-3 rounded-lg hover:bg-gray-100"
                  onClick={handleNavItemClick}
                >
                  <div className="font-semibold">Internship Programs</div>
                  <span className="text-sm text-gray-500">Hands-on experience.</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/certification"
                  className="block p-3 rounded-lg hover:bg-gray-100"
                  onClick={handleNavItemClick}
                >
                  <div className="font-semibold">Certificate Courses</div>
                  <span className="text-sm text-gray-500">Get certified in various domains.</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Gradient Border Line */}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500" />
    </nav>
  );
};

export default Navbar;
