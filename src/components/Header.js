import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          ProductStore
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/" end>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products">
            Products
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Header;