import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // State to track if the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className=" relative w-full bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand Name */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Sun<span className="text-blue-500">Gam</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
          onClick={toggleMenu} // Toggle menu on click
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/gallery" className="hover:text-blue-500">
            Gallery
          </Link>
          <Link to="/rooms" className="hover:text-blue-500">
            Our Rooms
          </Link>
          <Link to="/services" className="hover:text-blue-500">
            Services
          </Link>
          <Link to="/events" className="hover:text-blue-500">
            Events
          </Link>
          <Link to="/menu" className="hover:text-blue-500">
            Menu
          </Link>
          <Link to="/aboutus" className="hover:text-blue-500">
            About Us
          </Link>
          <Link to="/contactus" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 items-center py-4">
          <Link to="/" className="hover:text-blue-500" onClick={handleLinkClick}>
            Home
          </Link>
          <Link
            to="/gallery"
            className="hover:text-blue-500"
            onClick={handleLinkClick}
          >
            Gallery
          </Link>
          <Link
            to="/rooms"
            className="hover:text-blue-500"
            onClick={handleLinkClick}
          >
            Our Rooms
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-500"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="/events"
            className="hover:text-blue-500"
            onClick={handleLinkClick}
          >
            Events
          </Link>
          <Link
            to="/menu"
            className="hover:text-blue-500"
            onClick={handleLinkClick}
          >
            Menu
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-blue-500"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            className="hover:text-blue-500"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
