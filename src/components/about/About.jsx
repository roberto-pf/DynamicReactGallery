import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab as brandIcons } from '@fortawesome/free-brands-svg-icons';
import { fas as solidSvgIcons } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from "react-bootstrap";

import './About.css';

/**
 * Componente que carga el About.
 * Recibe el json con los datos de contacto.
 * @param {*} props 
 * @returns 
 */
const About = (props) => {

  return (
    <>
      <br />
      <div className="text-center">
        <Container fluid>
          {props.content.socialMedia.map((i, index) =>
            <Row className="justify-content-md-center media" key={index}>
              <Col xs lg="1">
                <FontAwesomeIcon key={i.iconImg1} icon={calculateIcon(i.iconType, i.iconImg1)} size="4x"></FontAwesomeIcon>
              </Col>
              <Col xs lg="2">
                <a href={i.url} className="nav-link" target="_blank">
                  <h5>{i.userName} </h5>
                </a>
              </Col>
            </Row>
          )
          }
        </Container>
      </div>
      <br />
    </>
  );
};

/**
 * Función para devolver el icono a partir de la librería correspondiente.
 * Tipo fab para free-brands-svg-icons
 * Tipo fas para free-solid-svg-icons
 * @param {*} type 
 * @param {*} img 
 * @returns 
 */
function calculateIcon(type, img){
  return type=="fas" ? solidSvgIcons[img] : brandIcons[img]
}


export default About;