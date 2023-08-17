import React from 'react'
import "./FutureGoods.scss"
import star from "./assets/Star12.png"
import fl1 from "./assets/fl1.png"
import fl2 from "./assets/fl2.png"
import fl3 from "./assets/fl3.png"
import fl4 from "./assets/fl4.png"
import fl5 from "./assets/fl5.png"
import fl6 from "./assets/fl6.png"
import fl7 from "./assets/fl7.png"
import fl8 from "./assets/fl8.png"
import dots from "./assets/dots.png"

export const FutureGoods = () => {
  return (
    <section className="future-goods">
    <div className="base">
        <p id="p1">Featured Products</p>
        <p id="p2">Smoothlu And healthy plant fore you and all people</p>
    </div>
    <div id="container-with-future-goods">

            <div className="fut-plant-in-line">
                <img id="plants"
                    src={fl1} alt="fl1" />
                <div className="nested-field picked">
                    <span className="flower-name picked">Combo Nisi</span>
                    <span className="price">$79.99</span>
                    <button className="button-cart">Add To Cart</button>
                    <div className="stars"> 
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                </div>
            </div>

            <div className="fut-plant-in-line">
                <img id="plants"
                    src={fl2} alt="fl2" />
                    <div className="nested-field">
                    <span className="flower-name">Combo Nisi</span>
                    <span className="price">$69.99</span>
                    <button className="button-cart">Add To Cart</button>
                    <div className="stars"> 
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                </div>
            </div>

            <div className="fut-plant-in-line">
                <img id="plants" src={fl3} alt="fl3" /> 
                <div className="nested-field">
                    <span className="flower-name">Combo Nisi</span>
                    <span className="price">$79.99</span>
                    <button className="button-cart">Add To Cart</button>
                    <div className="stars"> 
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                </div>
            </div>

            <div className="fut-plant-in-line">
            <img id="plants" src={fl4} alt="fl4" /> 
                <div className="nested-field">
                    <span className="flower-name">Combo Nisi</span>
                    <span className="price">$79.99</span>
                    <button className="button-cart">Add To Cart</button>
                    <div className="stars"> 
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                </div>
            </div>

            <div className="fut-plant-in-line">
                <img id="plants" src={fl5} alt="fl5" /> 
                <div className="nested-field">
                    <span className="flower-name">Combo Nisi</span>
                    <span className="price">$79.99</span>
                    <button className="button-cart">Add To Cart</button>
                    <div className="stars"> 
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                </div>
            </div>

            <div className="fut-plant-in-line">
            <img id="plants" src={fl6} alt="fl6" /> 
                <div className="nested-field">
                    <span className="flower-name">Combo Nisi</span>
                    <span className="price">$79.99</span>
                    <button className="button-cart">Add To Cart</button>
                    <div className="stars"> 
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                </div>
            </div>

            <div className="fut-plant-in-line">
            <img id="plants" src={fl7} alt="fl7" /> 
                <div className="nested-field">
                    <span className="flower-name">Combo Nisi</span>
                    <span className="price">$79.99</span>
                    <button className="button-cart">Add To Cart</button>
                    <div className="stars"> 
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                </div>
            </div>

            <div className="fut-plant-in-line">
            <img id="plants" src={fl8} alt="fl8" /> 
                <div className="nested-field">
                    <span className="flower-name">Combo Nisi</span>
                    <span className="price">$79.99</span>
                    <button className="button-cart">Add To Cart</button>
                    <div className="stars"> 
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                </div>
            </div>

    </div>
    <img id="dots" src={dots} alt='dots'/>
</section>
    
  )
}
