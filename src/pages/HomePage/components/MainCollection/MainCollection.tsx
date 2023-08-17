import React from 'react'
import "./MainCollection.scss"
import main from "./assets/main.png"
import flower1 from "./assets/flower1.png";
import flower2 from "./assets/flower2.png";
import flower3 from "./assets/flower3.png";
import flower4 from "./assets/flower4.png";
import flower5 from "./assets/flower5.png";
import flower6 from "./assets/flower6.png";
import flower7 from "./assets/flower7.png";

export const MainCollection = () => {
  return (

    <section className="main-collection">
        <img className="img desktop-only" src={main} alt='main'/>
        <div className="base">
            <p id="p1">Plant Collection</p>
            <p id="p2">Smoothlu And healthy plant fore you and all people</p>
        </div>

        <div className="table">
            <div className="grid-blocks">
                <div className="block a">
                    <img src={flower1} alt='flower1'/>
                    <div className="base-cat">
                        <span id="main">Pet Friendly</span>
                        <span id="additional">16 Items</span>
                    </div>
                </div>

                <div className="block b">
                    <img src={flower2} alt="flower2"/>
                    <div className="base-cat">
                        <span id="main">Outdoor</span>
                        <span id="additional">30 Items</span>
                    </div>
                </div>

                <div className="block c">
                <img src={flower3} alt='flower3'/>
                    <div className="base-cat">
                        <span id="main">Outdoor</span>
                        <span id="additional">18 Items</span>
                    </div>
                </div>

                <div className="block d">
                <img src={flower4} alt='flower4'/>
                    <div className="base-cat">
                        <span id="main">Pet Friendly</span>
                        <span id="additional">29 Items</span>
                    </div>
                </div>

                <div className="block e">
                <img src={flower5} alt='flower5'/>
                    <div className="base-cat">
                        <span id="main">Indoor</span>
                        <span id="additional">25 Items</span>
                    </div>
                </div>

                <div className="block f">
                <img src={flower6} alt='flower6'/>
                    <div className="base-cat">
                        <span id="main">Indoor</span>
                        <span id="additional">17 Items</span>
                    </div>
                </div>

                <div className="block g">
                <img src={flower7} alt='flower7'/>
                    <div className="base-cat">
                        <span id="main">Office Collection</span>
                        <span id="additional">28 Items</span>
                    </div>
                </div>
            </div>
            <button className="view-all-button">View All</button>
        </div>
    </section>

  )
}
