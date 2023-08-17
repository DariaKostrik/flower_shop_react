import React from 'react'
import "./ContainerWithGoods.scss"
import arrowl from "./assets/arrowl.png";
import arrowr from "./assets/arrowr.png";
import fl1 from "./assets/fl1.png";
import fl2 from "./assets/fl2.png";
import fl3 from "./assets/fl3.png";
import fl4 from "./assets/fl4.png";
import heartGrey from "./assets/heart.png";
import heartWhite from "./assets/heart-white.png";
import heartGreen from "./assets/heart-green.png";
const leafSlide = ()=>{};


export const ContainerWithGoods = () => {
  return (
    <section id="container-with-goods">
        <button  className="left arrow" onClick={leafSlide}><img src={arrowl} alt='arrowl' /></button>
        <button className="right arrow" onClick={leafSlide}> <img src={arrowr} alt='arrowr'/></button>
        <br />
        <section className="container-for-plant-in-line">

            <div className="plant-in-line">
                <div className="image-inline-box">
                    <img className="plant-photo" src={fl1} alt="fl1" />
                </div>
                <div className="basic-inf">
                    <div className="like">
                        <img className="heart" src={heartGrey} alt="heartGrey"/>
                        <img className="heart-white" src={heartWhite} alt="heartWhite" />
                        <img className="heart-green" src={heartGreen} alt="heartGreen"/>
                    </div>
                    <p id="name-of-flo">Severin Candrian</p>
                    <span className="inf-about-flo">Lorem Ipsum is simply dummy text.</span><br />
                    <span className="price">$59.99</span><br/>
                    <button id="button">Add To Cart</button>
                </div>
            </div>

            <div className="plant-in-line">
                <div className="image-inline-box">
                    <img className="plant-photo" src={fl2} alt="fl2" />
                </div>
                <div className="basic-inf">
                    <div className="like">
                        <img className="heart" src={heartGrey} alt="heartGrey"/>
                        <img className="heart-white" src={heartWhite} alt="heartWhite" />
                        <img className="heart-green" src={heartGreen} alt="heartGreen"/>
                    </div>
                    <p id="name-of-flo">Bonsai Bot</p>
                    <span className="inf-about-flo">Lorem Ipsum is simply dummy text.</span><br/>
                    <span className="price">$59.99</span>
                    <button id="button">Add To Cart</button>
                </div>
            </div>

            <div className="plant-in-line">
                <div className="image-inline-box">
                    <img className="plant-photo" src={fl3} alt='fl3'/>
                </div>
                <div className="basic-inf">
                    <div className="like">
                        <img className="heart" src={heartGrey} alt="heartGrey"/>
                        <img className="heart-white" src={heartWhite} alt="heartWhite" />
                        <img className="heart-green" src={heartGreen} alt="heartGreen"/>
                    </div>
                    <p id="name-of-flo">Severin Candrian</p>
                    <span className="inf-about-flo">Lorem Ipsum is simply dummy text.</span><br />
                    <span className="price">$59.99</span>
                    <button id="button">Add To Cart</button>
                </div>
            </div>

            <div className="plant-in-line">
                <div className="image-inline-box">
                    <img className="plant-photo" src={fl4} alt='fl4' />
                </div>
                <div className="basic-inf">
                <div className="like">
                        <img className="heart" src={heartGrey} alt="heartGrey"/>
                        <img className="heart-white" src={heartWhite} alt="heartWhite" />
                        <img className="heart-green" src={heartGreen} alt="heartGreen"/>
                    </div>
                    <p id="name-of-flo">Hybrid Caktus</p>
                    <span className="inf-about-flo">Lorem Ipsum is simply dummy text.</span><br/>
                    <span className="price">$59.99</span>
                    <button id="button">Add To Cart</button>
                </div>
            </div>

            <div className="plant-in-line">
                <div className="image-inline-box">
                    <img className="plant-photo" src={fl1} alt='fl1'/>
                </div>
                <div className="basic-inf">
                    <div className="like">
                        <img className="heart" src={heartGrey} alt="heartGrey"/>
                        <img className="heart-white" src={heartWhite} alt="heartWhite" />
                        <img className="heart-green" src={heartGreen} alt="heartGreen"/>
                    </div>
                    <p id="name-of-flo">Severin Candrian</p>
                    <span className="inf-about-flo">Lorem Ipsum is simply dummy text.</span><br/>
                    <span className="price">$59.99</span><br/>
                    <button id="button">Add To Cart</button>
                </div>
            </div>
        </section>
    </section>
  )
}
