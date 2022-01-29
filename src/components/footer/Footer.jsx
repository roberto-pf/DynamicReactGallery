import React from "react";

import './Footer.css';

/**
 * Componente que carga el Footer.
 * Recibe los datos del pie de página.
 * @param {*} props 
 * @returns 
 */
const Footer = (props) => {

  return (
    <footer className="container">
      <hr/>
      <p className="text-center" >
        <span dangerouslySetInnerHTML={{__html: props.description}}></span>
      </p>
    </footer>
  );
};


export default Footer;