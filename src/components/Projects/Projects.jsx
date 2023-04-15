import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import "./Projects.css"
import pf2 from "../../Imagenes/pf2.png"
import pokemon from "../../Imagenes/Pokemon.png"
import linki from "../../Imagenes/logo.png"
import rick from "../../Imagenes/rick.png"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const Projects = () => {
  return (
    <div className="contProj">
     <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide>
          <img className="imgScreen" src={pf2} alt="coinp" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
            Gamer-commerce+
            <a href="https://gamer-commerce.vercel.app/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Proyecto final desarrollado como parte del bootcamp de SoyHenry junto con
            con otras seis personas. 
            Es una aplicación web que ofrece venta de juegos en formato digital, ésta idea
            viene de facilitarle al usuario la compra de juegos sin necesidad de moverse de
            su casa y ademas de comprarlo en formato fisico, que es incluso, mas caro.
            🚀 Tecnologías: HTML | CSS | SASS | Javascript | React | Redux | Bootstrap | NodeJS |
            Express | Sequelize | PostgreSQL | JSON Web Token | Cloudinary | Nodemailer |
            Stripe API | SCRUM
            </p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="imgScreen" src={pokemon} alt="travel" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
          Popkemons  App
            <a href="https://pi-pokemon-two.vercel.app/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Diseñar y desarrollar una App de pokemon que incluía: búsquedas,
            filtrados, ordenamientos y creación
            Desarrollar la app usando para el Front React, Redux, CSS puro y Back
            desarrollado en Node.js con Express. Base de datos en PostgreSQL y
            Sequelize.
            </p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="imgScreen" src={rick} alt="trave" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
          Popkemons  App
            <a href="https://https-github-com-nancyclavijo27-ricky-and-morty.vercel.app/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Diseñar y desarrollar una App de Ricky and Morty que pagina y numera todas las vistas, que incluía: búsquedas,
            filtrados, ordenamientos y creación
            Desarrollar la app usando para el Front React, Redux, Bootstrap y Última versión de react,
            React hooks, Log in and Log out, State Manager. Base de datos en PostgreSQL y
            Sequelize.
            </p>
          </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
    </div>
  )
}