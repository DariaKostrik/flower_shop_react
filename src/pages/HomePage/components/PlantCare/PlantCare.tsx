import React from 'react'
import "./PlantCare.scss"
import text from "./assets/Group26118.png";
import transp from "./assets/trasp.png";
import fonGreen from "./assets/fonGreen.png";

export const PlantCare = () => {
  return (
    <body>
    <section className="plant-care desktop-only">
        <img id="fon" src={fonGreen} alt='fonGreen'/> 
        <img id="text-on-fon" src={text} alt='text'/>
        <img id="bl" src={transp} alt='transp'/>
    </section>
    </body>
  )
}
