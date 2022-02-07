import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Header from './components/header/Header'
import axios from 'axios';

import './App.css';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

/**
 * Componente principal de la aplicación.
 * @param {*} props 
 * @returns 
 */
 export function App(props) {

  /**
   * Variables de estado para pintar los datos extraidos del json
   */
   const [jsonData, setJsonData] = useState({});
   const [isLoading, setIsLoading] = useState(true);
 
   /**
    * Inicialmente se cargará el json del contenido de la variable de estado Data.
    */
  useEffect(() => {
    const fetchJsonData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(window.location.protocol + "//" + window.location.host + "/_files/data.json");
        setJsonData(result.data);
      }catch(err){
        console.log("error "+ window.location.protocol + "//" + window.location.host + "/_files/data.json");
      }
      setIsLoading(false);
    };

    fetchJsonData();
  }, []);


  return (
    <>
      {isLoading ? (
        <b>Loading ...</b>
      ) : (
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
      )}
    </>
  );
};
