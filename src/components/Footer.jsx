import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          {/* Colonne 1 : infos perso */}
          <Col md={4} className="mb-3">
            <h5>John Doe</h5>
            <p>
              123 Rue du Code<br />
              75000 Paris<br />
              +33 6 12 34 56 78
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/john-doe"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/john_doe"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTwitter />
              </a>
            </div>
          </Col>

          {/* Colonne 2 : navigation */}
          <Col md={4} className="mb-3">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/legal">Mentions légales</a></li>
            </ul>
          </Col>

          {/* Colonne 3 : dernières réalisations */}
          <Col md={4}>
            <h5>Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/projects">Projet 1</a></li>
              <li><a href="/projects">Projet 2</a></li>
              <li><a href="/projects">Projet 3</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
