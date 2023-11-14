
import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavLogo from "../assets/nav-logo.png";

const NavBar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img
            src={NavLogo}
            width={150}
            height={500}
            alt="uptick logo"
          />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </div>
        <Button title="Explore Our Programs" />
        {showDropdown ? (
          <FaTimes className="menu-icon" onClick={toggleDropdown} />
        ) : (
          <FaBars className="menu-icon" onClick={toggleDropdown} />
        )}
      </nav>

      {showDropdown && (
        <div className="dropdown-menu">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
          <div className="nav-btn">
            <Link to="/programs">
              <button>Explore Our Programs</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
