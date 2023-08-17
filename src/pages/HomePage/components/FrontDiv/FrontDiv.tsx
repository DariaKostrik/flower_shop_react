import React from 'react'
import "./FrontDiv.scss";
import backgroundFlower from "./assets/Group_26118.png";

export const FrontDiv = () => {
  return (
<section id="front-div">
        <div className="head-text">
            <p className="head-ornamental">#ORNAMENTAL PLANT</p>
            <p className="head-shop-main">Various Indoor Plant Shop</p>
            <p className="head-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been.</p>
            <div id="top-buttons">
                <a className="button" href="#">Add To Cart</a>
                <a className="button white" href="#">Learn More</a>
            </div>
        </div>
        <img className="background-flower desktop-only" src={backgroundFlower} alt="background-flower" />
    </section>
  )
}
