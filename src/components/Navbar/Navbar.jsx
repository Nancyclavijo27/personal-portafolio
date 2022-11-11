import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./Navbar.css"
import Nan from "../../Imagenes/Nan.gif"

export const Navbar = ({refAbout, refProj}) => {

    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
        top: elementRef.current.offsetTop - 140,
        behavior: "smooth",
      });
    };

  return (
    <>
      <Nav className="fixed-top justify-content-end" activeKey="/home">
        <div className="bar">
          <div className="contimgLogo">
            <img className="imgLogo" src={Nan} alt="Nan"/>
          </div>
          <div className="botonera">
            <button className="but" onClick={() => scrollToSection(refAbout) }>
            <span>Sobre mi</span>
            </button>
            <button className="but" onClick={() => scrollToSection(refProj) }>
            <span>Proyectos</span>
            </button>
          </div>
        </div>    
          
      </Nav>
    </>
  )
}