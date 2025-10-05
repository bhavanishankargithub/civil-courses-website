import React, { useState } from "react";
import classNames from "classnames";
import "./Navbar.css";
import Logo from "../assets/logo.jpg";

const navItems = [
  "About Us",
  "All Courses",
  "Instructors",
  "Certifications",
  "Contact Us",
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("About Us");

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span className="logo-text-nav logo-text-with-blue-gradient">ReviNxt Academy</span>
      </div>

      <ul className={classNames("nav-links", { open: isOpen })}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className={classNames({ active: active === item })}
              onClick={() => setActive(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={classNames("menu-toggle", { open: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
