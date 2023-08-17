import React from 'react'
import logo from "./assets/Снимок экрана 2022-04-20 011305.png";
import group1 from "./assets/Group4_1.png";
import group2 from "./assets/Group4_2.png";
import group3 from "./assets/Group4_3.png";
import "./Header.scss";
import { NavigationLink, NavigationLinkFirst, NavigationLinkLast } from '../NavigationLink/NavigationLink';


export const Header = () => {
  return (
    <header>
        <img className="logo" src={logo} alt="Logo" />
        <nav>
          <NavigationLinkFirst url={'Home'} name={'Home'} />
          <NavigationLink url={'About Us'} name={'About Us'} />
          <NavigationLink url={'Products'} name={'Products'} />
          <NavigationLink url={'News'} name={'News'} />
          <NavigationLinkLast url={'Contact Us'} name={'Contact Us'} />
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
