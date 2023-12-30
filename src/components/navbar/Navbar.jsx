import React from "react";
import { motion } from "framer-motion";
import "./navbar.css"
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          className="developer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          DEVELOPER
        </motion.span>
        <div className="social">
        <a href="https://github.com/vikramsingh9219251196" target="_blank">
            <img style={{backgroundColor:"white"}}src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/vikram-singh-508b08250/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064707842264" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/bvikram_03/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
       
        </div>
      </div>
    </div>
  );
};

export default Navbar;
