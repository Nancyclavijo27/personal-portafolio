import React from 'react'
import portada from "../../Imagenes/programando.gif"
import "./Intro.css"

export const Intro = () => {
  return (
    <div className="contIntro">
        <img className="imgIntro" src={portada} alt="imgIntro" />
    </div>
   
  )
}
