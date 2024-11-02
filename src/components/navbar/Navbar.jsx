import React from "react";
import "./navbar.css";
import { nav } from "framer-motion/client";

const Navbar = () => {
  return (
    <nav>
      <div className="containerNav">
        <div className="navName">
          <span>Hi, Nama Saya</span>
          <span> Hafis Al Kadri</span>
        </div>
        <div className="navMenuRight">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Project</a>
        </div>
        <div className="navMenuBott">
          <a href="#service">Service</a>
          <a href="#footer">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
