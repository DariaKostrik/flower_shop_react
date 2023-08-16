import React from 'react'
import logo from "./assets/Снимок экрана 2022-04-20 011305.png";
import group1 from "./assets/Group4_1.png";
import group2 from "./assets/Group4_2.png";
import group3 from "./assets/Group4_3.png";
import "./Header.scss";


export const Header = () => {
  return (
    <header>
        <img className="logo" src={logo} alt="Logo" />
        <nav>
            <a className="nav-link" id="nav-home" href="index.html">Home</a>
            <a className="nav-link" href="#">About Us</a>
            <a className="nav-link" href="#">Products</a>
            <a className="nav-link" href="#">News</a>
            <a className="nav-link gap" href="#">Contact Us</a>
            <div className="top-buttons">
                <a href="#"> <img className="register" src={group1} alt="" /></a>
                <a href="#"> <img className="register" src={group2}  alt="" /></a>
                <a href="#"> <img className="register" src={group3}  alt="" /></a>
            </div>
        </nav>
        <button className="mobile-only mob-icon"><img className="mob-pic" src="./assets/nav-mob.png" /> </button>
    </header>
  )
}
