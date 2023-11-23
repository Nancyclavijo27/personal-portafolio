import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import "./Projects.css"
import pf2 from "../../Imagenes/pf2.png"
import pokemon from "../../Imagenes/Pokemon.png"
import linki from "../../Imagenes/logo.png"
import rick from "../../Imagenes/rick.png"
import enlazar from "../../Imagenes/enlazar.webp"
import Detail from "../../Imagenes/Detail.png"
import Micro from "../../Imagenes/Micro.png"
import Donar from "../../Imagenes/Home.png"
import pelicula from "../../Imagenes/peliculas.jpg"
import versus from "../../Imagenes/versus.webp"
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
          <img className="imgScreen" src={Micro} alt="coinp" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
          start_wars_api_microservices+
            <a href="http://34.125.129.109:8000/charact" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Proyecto de microservicios backend con Docker y MongoDB

            Es un proyecto donde utilizamos Docker y una máquina virtual  google cloud  de despliegue para crear un entorno de desarrollo y producción escalable y seguro para nuestros microservicios.

            Utilizamos MongoDB como nuestra base de datos backend y construimos cada microservicio para que fuera independiente y escalable.

            Si estás interesado en saber más sobre este emocionante proyecto o ver cómo funciona, por favor visita el siguiente enlace: https://github.com/Nancyclavijo27/microservices.
            </p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="imgScreen" src={pelicula} alt="coinp" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
          Peliculas+
            <a href="https://peliculas-livid.vercel.app/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Diseñar y desarrollar una aplicación de películas que incluya búsquedas, visualización y votación por cada película. Para el front-end, usar React, Redux y CSS puro. No se necesita back-end, sino hacer diferentes llamados a la API de películas. Las tecnologías utilizadas son HTML, CSS, Javascript, React, Redux y NodeJS. 
            </p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="imgScreen" src={Detail} alt="coinp" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
          Bypass+
            <a href="https://bypass-alpha.vercel.app/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Junto con otros 6  desarrolladores construimos Bypass  que es una página web de venta de entradas digitales que permite a los usuarios adquirir boletos para diversos eventos de manera segura y cómoda. La plataforma cuenta con un sistema de pago seguro y una interfaz intuitiva que facilita la compra de entradas para conciertos, festivales, eventos deportivos y culturales, entre otros. En resumen, Bypass es una plataforma que permite a los usuarios adquirir entradas digitales de manera rápida y sencilla para una gran variedad de eventos.
            🚀 Tecnologías: HTML | CSS | FireBase | Javascript |  Bootstrap | NodeJS |
            Express | React Redux Toolkit | PostgreSQL | JSON Web Token |  SCRUM |
            </p>
          </div>
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <img className="imgScreen" src={enlazar} alt="enlazar" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
            Enlazar+
            <a href="https://www.consultoraenlazar.xyz/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            	Actualización de página web, modificando distintas secciones y migrando a mejores tecnologías para que el proyecto sea más escalables en el tiempo.
              Diseño de Frontend e interfaz.
              Desarrollo de Back-end.
              
            🚀 Tecnologías: HTML | CSS | NEXT.JS | Javascript | React | Sanity | Tailwind CSS | NodeJS |
                DataBase | SCRUM
            </p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="imgScreen" src={rick} alt="trave" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
          Ricky and Morty  App
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
            Sequelize.  🚀 Tecnologías: HTML | CSS | SASS | Javascript | React | Redux | Bootstrap | NodeJS |
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
          <img className="imgScreen" src={versus} alt="coinp" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
          Versus+
            <a href="https://versus-three.vercel.app/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            La Star Wars App es una aplicación de desarrollo que cuenta con un componente Home que incluye un NavBar, un Cards y un List. El componente Cards está dividido en dos y contiene el componente Card, que es un slide que muestra y oculta una card con al menos 6 atributos del character, como su imagen, nombre e id. Además, el componente List se encuentra por debajo del componente Cards.
            </p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="imgScreen" src={Donar} alt="coinp" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
          Donare+
            <a href="https://s8-20-m-react.vercel.app/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Junto con otros 4 desarrolladores construimos  esta página que permite a sus usuarios una plataforma para realizar donaciones de bienes tales como juguetes, indumentaria o incluso alimentos no perecederos de manera sencilla. El usuario solo tiene que registrarse para poder solicitar una donación y contactarse con el donante.  Tecnologias utilizadas | NodeJS | MongoDB | Typescript | TailwindCSS
            </p>
          </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
    </div>
  )
}