import React, { useState } from "react";
import "./BlogSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import vision from "../../Imagenes/visio.png";
import servicios from "../../Imagenes/difucion.png";
import portafolioServicios from "../../Imagenes/portafolio.png";

const BlogSection = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="blog">

      

      <div className="contVisionSection">
        <div className="section-title">
        <h2>Mi Visión y Emprendimiento</h2>

        <p>
          Combino organización, estructura y tecnología para ayudar a
          pequeños negocios a crecer con orden, claridad y herramientas
          digitales.
        </p>
      </div>

        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >

          <SwiperSlide>

            <img
              src={vision}
              alt="Mi Visión"
              className="visionImg"
              onClick={() => setSelectedImage(vision)}
            />

            <div className="visionText">

              <div className="visionTitle">
                Mi Ruta de Crecimiento
              </div>

              <div className="visionDescription">

                <p>
                  Estoy construyendo un emprendimiento enfocado en
                  organización, digitalización y mejora de procesos.
                </p>

                <p>
                  Mi objetivo es unir mi experiencia en ingeniería
                  industrial, organización operativa y desarrollo
                  de software para ayudar a emprendedores y
                  pequeños negocios a crecer de manera sostenible.
                </p>

              </div>

            </div>

          </SwiperSlide>

          <SwiperSlide>

            <img
              src={servicios}
              alt="Servicios"
              className="visionImg"
              onClick={() => setSelectedImage(servicios)}
            />

            <div className="visionText">

              <div className="visionTitle">
                ¿Cómo puedo ayudarte?
              </div>

              <div className="visionDescription">

                <p>
                  Apoyo negocios en inventarios, pedidos,
                  clientes, digitalización y organización
                  administrativa.
                </p>

                <p>
                  También desarrollo herramientas tecnológicas
                  para facilitar el trabajo diario y optimizar
                  procesos.
                </p>

              </div>

            </div>

          </SwiperSlide>

          <SwiperSlide>

            <img
              src={portafolioServicios}
              alt="Portafolio"
              className="visionImg"
              onClick={() => setSelectedImage(portafolioServicios)}
            />

            <div className="visionText">

              <div className="visionTitle">
                Portafolio de Servicios
              </div>

              <div className="visionDescription">

                <p>
                  Organización operativa, apoyo administrativo,
                  análisis de información y soluciones tecnológicas.
                </p>

                <p>
                  Todo enfocado en ayudar a emprendedores a crecer
                  de forma organizada y sostenible.
                </p>

              </div>

            </div>

          </SwiperSlide>

        </Swiper>

      </div>

      {selectedImage && (

        <div
          className="imageModal"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="modalImage"
          />

        </div>

      )}

    </section>
  );
};

export default BlogSection;