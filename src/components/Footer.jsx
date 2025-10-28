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
              <a href="https://www.google.com/maps/search/?api=1&query=123+Rue+du+Code%2C+75000+Paris" 
                target="_blank" rel="noopener noreferrer">
                123 Rue du Code<br />
                75000 Paris
              </a>
              <br /> 

              <a href="tel:+33612345678"> +33 6 12 34 56 78 </a>
              <br /> 

              <a href="mailto:john_doe@gmail.com">john_doe@gmail.com</a>
            </p>

            <div className="social-icons">
              <a
                href="https://github.com/wydadabada96/abada_wydad_devoir_portfolio_react"
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
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Portfolio</a></li>
              <li><a href="/contact">Me contacter</a></li>
              <li><a href="/legal">Mentions légales</a></li>
            </ul>
          </Col>

          {/* Colonne 3 : dernières réalisations */}
          <Col md={4}>
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/projects">Fresh Food</a></li>
              <li><a href="/projects">Restaurant Akira</a></li>
              <li><a href="/projects">Espace bien-être</a></li>
              <li><a href="/projects">SEO</a></li>
              <li><a href="/projects">Création d'une API</a></li>
              <li><a href="/projects">Maquette d'un site</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
