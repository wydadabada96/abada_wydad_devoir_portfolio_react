import { Container, Row, Col, Form, Button, Card, Nav } from "react-bootstrap";
import "../styles/Contact.css";


const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7220268482453!2d4.808007276793134!3d45.77976191375788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb04c3d254b1%3A0x1d35a2283e1c0d50!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr";

export default function Contact() {
  return (
    <Container className="my-5 contact-page"> 
        
      {/* Titre et sous-titre */}
      <div className="text-center mb-5">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-subtitle">
            Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
        </p>
      </div>

      {/* Carte blanche englobant le formulaire et les coordonnées */}
      <Card className="contact-card shadow-sm">
        <Card.Body>
          <Row>
            {/* Colonne 1 : Formulaire de contact */}
            <Col md={6} className="contact-form-col">
              <Nav variant="tabs" defaultActiveKey="#form">
                <Nav.Item>
                  <Nav.Link eventKey="#form" className="contact-nav-link">
                    Formulaire de contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Form className="mt-4">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control type="text" placeholder="Votre nom" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control type="email" placeholder="Votre adresse email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Control type="tel" placeholder="Votre numéro de téléphone" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Control type="text" placeholder="Sujet" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Control as="textarea" rows={6} placeholder="Votre message" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="contact-send-button">
                  Envoyer
                </Button>
              </Form>
            </Col>

            {/* Colonne 2 : Coordonnées et Carte */}
            <Col md={6} className="contact-info-col">
              <Nav variant="tabs" defaultActiveKey="#info">
                <Nav.Item>
                  <Nav.Link eventKey="#info" className="contact-nav-link">
                    Mes coordonnées
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <div className="contact-details mt-4">
                <h5>John Doe</h5>
                <p>
                  40 rue Laure Diebold<br />
                  69009 Lyon, France<br />
                  10 20 30 40 50<br />
                  <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                </p>
              
                <div className="map-container">
                    <iframe
                    title="Carte John Doe"
                    src={MAP_SRC}
                    width="100%"
                    height="300" 
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}