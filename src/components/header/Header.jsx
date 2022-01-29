import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import './Header.css';

/**
 * Componente que carga el Header.
 * Recibe los datos de la cabeceera.
 * @param {*} props 
 * @returns 
 */
const Header = (props) => {

  return (
    <Container fluid className="header">
      <Row>
        <Col>
          <img src={"../../"+props.logo} className="image-header" alt={props.titleSite} />
          <h1>{props.titleSite}</h1>
          {props.descriptionSite}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;