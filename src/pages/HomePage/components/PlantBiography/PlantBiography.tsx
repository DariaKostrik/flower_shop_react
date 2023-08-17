import React from 'react'
import "./PlantBiography.scss"
import fl1 from "./assets/fl1 (1).png"
import fl2 from "./assets/fl2.png"
import fl3 from "./assets/fl1 (3).png"

export const PlantBiography = () => {
  return (
    <section className="plant-biography">
        <div className="base">
            <p id="p1">Plant Biography</p>
            <p id="p2">Smoothlu And healthy plant fore you and all people</p>
            <div id="content-block">
                <p className="form-block left">
                    <img src={fl1} alt='fl1'/>
                </p>
                <p className="form-block center">
                <img src={fl2} alt='fl2'/>
                    <button className="button-bio">Biography</button>
                </p>
                <p className="form-block right">
                <img src={fl3} alt='fl3'/>
                </p>
            </div>
        </div>
    </section>
  )
}
