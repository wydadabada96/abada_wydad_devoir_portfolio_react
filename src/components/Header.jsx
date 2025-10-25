import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./../styles/Header.css";

export default function Header() {
  return (
    <Navbar bg="dark" variant= "dark" expand="md" sticky="top" className="custom-dark-header shadow-lg">
      <Container>
        {/* Logo à gauche */}
        <Navbar.Brand href="/" className="fw-bold text-uppercase">John Doe</Navbar.Brand>

        {/* Bouton hamburger sur mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Liens de navigation */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <NavLink to="/" className="nav-link">
              Accueil
            </NavLink>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              Portfolio
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/legal" className="nav-link">
              Mentions légales
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
