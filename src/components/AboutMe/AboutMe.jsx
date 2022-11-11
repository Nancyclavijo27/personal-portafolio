import React from 'react'
import fotoport from "../../Imagenes/FotoPersonal.jpeg"
import cvE from "../../Imagenes/cv.png"
import "./AboutMe.css"
import { Enlaces } from './Enlaces/Enlaces'
import { Icons } from './Icons'


export const AboutMe = () => {
  return (
    <div className="contabt">
      <div className="conRow">
          <div className="coninf">
            <img className="fot" alt="fotoperfil" src={fotoport}/>
              <div className="contlet">
                <h2 className="tit">Nancy Clavijo</h2>
                <h4 className="subtit">Fullstack developer</h4>
                <p className="par">Con formación  en programación  e ingeniería industrial.
                   Experiencia en proyectos trabajando con React, Redux, Js, HTML, CSS, NodeJS, SQL entre otras tecnologías.
                   Con pensamiento creativo, gran curiosidad que me impulsa a encontrar y entender cómo funcionan las cosas.
                   Conocimientos en análisis y resolución de problemas, pensamiento analítico, colaboración, autonomía. 
                   Alto enfoque al cumplimiento de resultados.<br/>
                   <br/>
                   
                   ¡Los programadores son los encargados de crear lo que las personas sueñan!</p>
              </div>
                <div className="conbotEnl">
                  <Enlaces/>
                </div>
          </div>
                  
                <div className="contDes">
                   
                   <a className="descargas" href={cvE} target="_blank" rel="noopener noreferrer" download={"Nancy Clavijo CVe"} > 
                   <button className="btnDes"><span>Descargue CV</span></button>
                   </a>
                 </div>
        </div>      
              <Icons/>
              <div>
      
</div>
    </div>
  )
}