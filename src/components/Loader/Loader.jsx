import React from 'react'
import loader from "../../Imagenes/load.gif"
import "./Loader.css"

export const Loader = () => {
  return (
    <div className="conLoader">
        <img className="loader" src={loader} alt="loading" />
    </div>
  )
}