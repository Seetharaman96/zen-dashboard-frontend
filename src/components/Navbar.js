import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
          <div className="header">
      <Link to="/">
        <h1>Zen Dashboard</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/studentDatas">Student</Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{color: "rebeccapurple"}} />
        ) : (
          <FaBars size={20} style={{color: "rebeccapurple"}} />
        )}
      </div>
    </div>

  );
};

export default Navbar;
