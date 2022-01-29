import React from "react";
import Image from 'react-bootstrap/Image'

import './Home.css';

/**
 * Componente que carga el Home.
 * Recibe los datos de la pantalla principal.
 * @param {*} props 
 * @returns 
 */
const Home = (props) => {

  return (
    <>
      <br /><br />
      <div className="text-center">
        <Image src={"../../"+props.imgPrincipal} fluid="true" alt={"Imagen principal - " + props.titleSite}/>
      </div>
      <br />
    </>
  );
};

export default Home;