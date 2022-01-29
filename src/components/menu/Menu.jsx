import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
  Redirect
} from "react-router-dom";

import './Menu.css';
import About from '../about/About';
import Home from '../home/Home';
import { Gallery } from '../gallery/Gallery';
import NotFound from '../not-found/NotFound';

/**
 * Componente que carga el Menu.
 * Recibe el json con los datos del menu.
 * @param {*} props 
 * @returns 
 */
const Menu = (props) => {

  const handleSelect = (key) => {

  }

  return (
    <HashRouter>

      <Nav variant="tabs" onSelect={handleSelect} defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="/home" eventKey="/home">Home</Nav.Link>
        </Nav.Item>

        {props.jsonData.menu.map((i) =>
          <NavDropdown title={i.nameItemMenu} key={"nav-dropdown-" + i.keyItemMenu}>
            {i.elements.map((j) =>
              <NavDropdown.Item as={Link}
                to={"/gallery/" + i.keyItemMenu + "/" + j.keyItemMenu} key={"nav-dropdown-" + j.keyItemMenu}
                eventKey={"/gallery/" + i.keyItemMenu + "/" + j.keyItemMenu}
              >{j.nameItemMenu}
              </NavDropdown.Item>
            )}
          </NavDropdown>
        )}
        <Nav.Item>
          <Nav.Link as={Link} to="/about" eventKey="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>


      <Switch>
        <Route exact path="/" render={() => {
          return (
            <Redirect to="/home" />
          )
        }}
        />
        <Route path="/home">
          <Home
            imgPrincipal={props.jsonData.imgPrincipal}
            titleSite={props.jsonData.titleSite}
          />
        </Route>
        <Route path="/gallery/:category/:type">
          <Gallery
            content={props.jsonData}
          />
        </Route>
        <Route path="/about">
          <About
            content={props.jsonData.about}
          />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
      </Switch>
    </HashRouter>
  );
};


export default Menu;