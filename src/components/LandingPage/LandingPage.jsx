import React, { useState, useEffect } from 'react';
import "./LandingPage.css";
import Footer from "../Footer/Footer";
import { Navbar } from '../Navbar/Navbar';
import { Intro } from '../Intro/Intro';
import { AboutMe } from '../AboutMe/AboutMe';
import { Projects } from '../Projects/Projects';
import { useRef } from 'react';
import { Loader } from '../Loader/Loader';
import BlogSection from '../BlogSection/BlogSection'; // Importa BlogSection correctamente

export const LandingPage = () => {

  const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, []);

    const aboutMe = useRef(null);
    const projects = useRef(null);
    const blog = useRef(null);

  return (
    <div className="mainCont">
      {loader ? <Loader/> :
       <div className="backcont">
         <Navbar className="fixed-top" refAbout={aboutMe} refProj={projects} refBlog={blog}/>
         <div><Intro/></div>
         <div ref={aboutMe}><AboutMe/></div> 
         <div ref={projects}><Projects/></div> 
         <div ref={blog}><BlogSection /></div>
         <Footer/>
       </div>
      }   
    </div>
  );
}

export default LandingPage;
