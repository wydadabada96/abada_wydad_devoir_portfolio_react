import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Contactez-moi</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Courriel</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control type="tel" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>Sujet</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div className="contact-info">
            <h4>John Doe</h4>
            <p>
              123 Rue du Code<br />
              75000 Paris<br />
              contact@johndoe.com<br />
              +33 6 12 34 56 78
            </p>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
