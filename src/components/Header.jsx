import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const navLinks = [
          
    { name: "Home", href: "/" },    
    { name: "Contact Us", href: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar1 ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-flex-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo text-decoration-none">
            <img className="logo-main" src="/images/logo.png" alt="" />
            
          </Link>

          {/* Desktop Navbar */}
          <div className="navbar-links-desktop">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div key={index} className="dropdown">
                  <button className="nav-link dropdown-toggle">
                    {link.name}
                  </button>
                  <div className="dropdown-menu">
                    {link.dropdown.map((sublink, i) => (
                      <Link
                        key={i}
                        to={sublink.href}
                        className={`dropdown-item ${
                          location.pathname === sublink.href ? "active" : ""
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  className={`nav-link ${
                    location.pathname === link.href ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>


          {/* Mobile Hamburger */}
          <div className="mobile-menu-wrapper">
            <button onClick={toggleMenu} className="hamburger-button">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-links-mobile ${isMenuOpen ? "is-open" : ""}`}>
        {navLinks.map((link, index) =>
          link.dropdown ? (
            <div key={index} className="mobile-dropdown">
              <div
                className="mobile-dropdown-toggle"
                onClick={() => toggleDropdown(index)}
              >
                {link.name}
              </div>
              {openDropdown === index && (
                <div className="mobile-dropdown-menu">
                  {link.dropdown.map((sublink, i) => (
                    <Link
                      key={i}
                      to={sublink.href}
                      className={`mobile-dropdown-item ${
                        location.pathname === sublink.href ? "active" : ""
                      }`}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={index}
              to={link.href}
              className={`mobile-nav-link ${
                location.pathname === link.href ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Header;
