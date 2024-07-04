import React from 'react';
import "./BlogSection.css";
import blogImage from "../../Imagenes/paginaw.jpg"; // Asegúrate de que la ruta sea correcta
import wordpressLogo from "../../Imagenes/bloglogo.jpg"; // Asegúrate de que la ruta sea correcta
import oneblog from "../../Imagenes/oneblog.jpg"

const BlogSection = () => {
  return (
    <section id="blog" className="section">
        <div className="container">
            <div className="section-title">
                <h2>Mi Blog</h2>
                <p>Explora mi blog en WordPress donde comparto mi experiencia y conocimientos en desarrollo web.</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="blog-item">
                    <a href="https://tech50plus3.wordpress.com/2024/06/30/de-la-industria-al-codigo-mi-historia-de-transformacion-a-los-50/" target="_blank" rel="noreferrer">
            <img src={oneblog} alt="Imagen del artículo" className="blog-image"/>
        </a>
                        <div className="blog-content">
                        <h3><a href="https://tech50plus3.wordpress.com/2024/06/30/de-la-industria-al-codigo-mi-historia-de-transformacion-a-los-50/" target="_blank" rel="noreferrer" >De la Industria al Código: Mi Historia de Transformación a los 50</a></h3>
                            <p>En este artículo comparto mi experiencia personal y profesional al cambiar de industria a desarrollo de software a los 50 años.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
    <div className="blog-item">
        <a href="https://tech50plus3.wordpress.com/" target="_blank" rel="noreferrer">
            <img src={blogImage} alt="Imagen del artículo" className="blog-image"/>
        </a>
        <div className="blog-content">
            <div className="row">
                <div className="col-md-6">
                    <div className="blog-logo">
                        <a href="https://tech50plus3.wordpress.com/" target="_blank" rel="noreferrer">
                            <img src={wordpressLogo} alt="Logo de WordPress" className="wordpress-logo"/>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3><a href="https://tech50plus3.wordpress.com/" target="_blank" rel="noreferrer">Nancy's Tech 50 Plus</a></h3>
                    <p>Explora mi viaje de reinventarme profesionalmente a los 50 años, dejando atrás una carrera en ingeniería industrial para entrar al mundo del desarrollo web. Descubre cómo enfrento desafíos con creatividad y dedicación en el desarrollo de aplicaciones web innovadoras..</p>
                </div>
            </div>
        </div>
    </div>
</div>


            </div>
        </div>
    </section>
  );
}

export default BlogSection;

