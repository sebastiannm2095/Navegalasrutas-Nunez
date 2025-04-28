import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {  // Cambié de Navbar → NavBar
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Camisetas de Futbol</Nav.Link>
            <Nav.Link href="#">Balones de Futbol</Nav.Link>
            <Nav.Link href="#">Merchandising</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;  // 