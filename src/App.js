import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/header/Header'

import { jsonData } from "./_files/data";

import './App.css';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

/**
 * Componente principal de la aplicación.
 * @param {*} props 
 * @returns 
 */
class App extends Component {
  render() {
    return (
      <Container fluid>
        <Header
          titleSite={jsonData.titleSite}
          descriptionSite={jsonData.descriptionSite}
          logo={jsonData.logo}
        />
        <Menu
          jsonData={jsonData}
        />
        <Footer
          description={jsonData.footer.description}
        />
      </Container>
    );
  }
}


export default App;
