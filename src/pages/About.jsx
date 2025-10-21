import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/About.css";

export default function Services() {
  const services = [
    { title: "Développement Web", text: "Création de sites web modernes et responsives." },
    { title: "E-commerce", text: "Mise en place de boutiques en ligne optimisées." },
    { title: "SEO & Marketing", text: "Optimisation du référencement et de la stratégie digitale." },
    { title: "Design UX/UI", text: "Conception d’interfaces centrées sur l’expérience utilisateur." },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Mes Services</h1>
      <Row xs={1} md={2} lg={4} className="g-4">
        {services.map((service, idx) => (
          <Col key={idx}>
            <Card className="service-card text-center p-3">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
