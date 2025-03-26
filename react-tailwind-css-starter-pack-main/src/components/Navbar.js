import React, { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import logo from "../assests/logofront.png"; // Make sure the path is correct
import Login from "./Login"; // import your Login component
import ApplyNow from "./ApplyNow";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Track modal state
  const [isApplyNowOpen, setIsApplyNowOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Impact", href: "#impact" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto transform group-hover:scale-110 transition duration-300"
          />
          <span className="ml-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">
            Ishanya India Foundation
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition duration-300 transform hover:scale-105"
              style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
        <Link
  to="/login" // Navigate to Login Page
  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition duration-300 transform hover:scale-105"
>
  
  Login
</Link>
          <button
        onClick={() => setIsApplyNowOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Apply Now
      </button>
      {isApplyNowOpen && <ApplyNow onClose={() => setIsApplyNowOpen(false)} />}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 transition duration-300 transform hover:scale-110"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 max-h-screen py-6" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 py-2 transition duration-300 transform hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col space-y-3 mt-2">
            <Link
  to="/login" // Navigate to Login Page
  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition duration-300 transform hover:scale-105"
>
 
  Login
</Link>
            <button
        onClick={() => setIsApplyNowOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Apply Now
      </button>
          </div>
        </nav>
      </div>

      {/* Login Modal */}
      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
      {isApplyNowOpen && <ApplyNow onClose={() => setIsApplyNowOpen(false)} />}

    </header>
  );
};

export default Navbar;
