import React from 'react'
import "./Enlaces.css"
import lin from "../../../Imagenes/linken.jpg"
import git from "../../../Imagenes/github.png"
import mail from "../../../Imagenes/Gmail.png"
import wa from "../../../Imagenes/wasap.jpg"

export const Enlaces = () => {
  return (
    <div className="contEnl">
      <a href="https://www.linkedin.com/in/nancy-clavijo-varela-29353117a/" target="_blank">
        <button class="enl-btn btn-12"><span>Linkedin</span><span><img className="enlace" src={lin} alt={lin} /></span></button>
      </a>
      <a href="https://github.com/Nancyclavijo27" target="_blank">  
        <button class="enl-btn btn-12"><span>Github</span><span><img className="enlace" src={git} alt={git} /></span></button>
      </a>
      <a href="mailto:nancyClavijo@gmail.com?Subject=From%20your%20page" target="_blank">
        <button class="enl-btn btn-12"><span>Email me</span><span><img className="enlace" src={mail} alt={mail} /></span></button>
      </a>
      <a href="https://wa.me/3222039361/?text=Hi,%20I%20am%20contacting%20you%20from%20your%20page" target="_blank">  
        <button class="enl-btn btn-12"><span>Text me</span><span><img className="enlace" src={wa} alt={wa} /></span></button>
      </a>  
    </div>
  )
}