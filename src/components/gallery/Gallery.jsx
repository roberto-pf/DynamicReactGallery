import React, { useState, useEffect } from "react";
import { Button, Modal, Figure } from "react-bootstrap";
import { useParams } from "react-router-dom"
import axios from 'axios';

import './Gallery.css';

/**
 * Componente que carga la Galeria de imágenes.
 * Recibe un json con todo el contenido.
 * @param {*} props 
 * @returns 
 */
export function Gallery(props) {
  /**
   * Parametros pasados por url. Se recogen con useParams.
   */
  const { category } = useParams()
  const { type } = useParams()

  /**
   * Variables de estado para pintar los datos extraidos del txt.
   */
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Cada vez que category o type sufran una cambio recargará el contenido de la variable de estado Data.
   */
  useEffect(() => {
    const fetchDataTxt = async () => {
      setIsLoading(true);
      try {
        const result = await axios("http://" + window.location.host + "/" + category + "/" + type + "/description.txt");
        setData(result.data);
      }catch(err){
        console.log("error http://" + window.location.host + "/" + category + "/" + type + "/description.txt");
      }
      setIsLoading(false);
    };

    fetchDataTxt();
  }, [category, type]);


  /**
   * Variables de estado para la ventana modal.
   */
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({ name: "" });
  const [descriptionImg, setDescriptionImg] = useState("");

  /**
   * Recupera la descripción del contenido del txt pasado como url.
   * @param {*} url 
   */
  const fetchDataTxt = async (url) => {
    try{
      const result = await axios(url);
      setDescriptionImg(result.data);
    }catch(err){
      console.log("error " + url);
    }
  };

  /**
   * Eventos para mostrar y ocultar la ventana modal.
   */
  const handleClose = () => setShow(false);
  const handleShow = (k) => {
    setShow(true);
    setItem(k);
    setDescriptionImg("")
    fetchDataTxt("http://" + window.location.host + "/" + category + "/" + type + "/" + k.key + "/description.txt")
  }

  return (
    <>
      {props.content.menu.map((i, index) => {
        if (i.keyItemMenu === category)
          return <div key={"gallery-" + category}>
            {
              i.elements.map((j, index) => {
                if (j.keyItemMenu === type) {
                  return <div key={"gallery-" + category + " - " + type}>
                    <h1>{j.nameItemMenu}</h1>
                    {isLoading ? (
                      <div key={"gallery"}>Loading ...</div>
                    ) : (
                      <div key={"gallery"} dangerouslySetInnerHTML={{ __html: data }}></div>
                    )}

                    <div key={"gallery-div-" + category + " - " + type} className="text-center">
                      {
                        j.elements.map((k, index) => {
                          return <Figure key={"gallery-figure-" + category + " - " + type + " - " + k.key} fluid="true">
                            <Figure.Image
                              src={"../../" + category + "/" + type + "/" + k.key + "/" + k.thumbail}
                              alt={i.nameItemMenu + " - " + j.nameItemMenu + " - " + k.name}
                              className="image"
                              onClick={() => handleShow(k)}
                            />
                            <Figure.Caption>
                              {k.name}
                            </Figure.Caption>
                          </Figure>
                        })
                      }
                    </div>
                  </div>
                }
              })
            }
          </div>
      })}

      <Modal show={show} item={item} onHide={handleClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Figure.Image
            src={"../../" + category + "/" + type + "/" + item.key + "/" + item.img}
            alt={category + " - " + type + " - " + item.name}
            className="image_modal"
          />
          <Figure.Caption>
            {descriptionImg}
          </Figure.Caption>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};