import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">MyApp</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search">
            <CiSearch />
          </button>
        </div>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Contact
            </a>
          </li>
          <li>
            <a href="#">
              <div style={{ position: "relative", display: "inline-block" }}>
                {/* Display the shopping cart icon */}
                <FaShoppingCart size={30} />

                {/* Display the cart count */}
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 5px",
                    fontSize: "12px",
                  }}
                >
                  {cartCount}
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                <RiAccountCircleLine size={32} />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
