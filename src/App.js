import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes';
import "./App.css";

function App(props) {
  return (
    <div className="App container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Scratch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;