import React from 'react'
import icss3 from "../../Imagenes/css3.jpg"
import ihtml from "../../Imagenes/html.png"
import ijs from "../../Imagenes/js.jpg"
import islak from "../../Imagenes/slak.jpg"
import irex from "../../Imagenes/rex.png"
import inp from "../../Imagenes/np.png"
import inod from "../../Imagenes/nod.jpg"
import isql from "../../Imagenes/sql.jpg"
import imailer from "../../Imagenes/mailer.jpg"
import "./AboutMe.css"

let icons = [icss3,ihtml,ijs,inod,irex,inp,islak,isql,imailer]

export const Icons = () => {
  return (
    <div className="contTec">
        {icons.map((e) =>
            <spam><img className="iconTec" src={e} alt={e}/></spam>
        )}
    </div>
  )
}