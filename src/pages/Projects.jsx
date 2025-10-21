import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    { title: "Projet 1", text: "Application web React", img: "https://via.placeholder.com/300" },
    { title: "Projet 2", text: "Site vitrine pour entreprise", img: "https://via.placeholder.com/300" },
    { title: "Projet 3", text: "Plateforme e-commerce", img: "https://via.placeholder.com/300" },
    { title: "Projet 4", text: "Dashboard analytique", img: "https://via.placeholder.com/300" },
    { title: "Projet 5", text: "Blog personnel", img: "https://via.placeholder.com/300" },
    { title: "Projet 6", text: "Landing page marketing", img: "https://via.placeholder.com/300" },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Mes Réalisations</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((proj, idx) => (
          <Col key={idx}>
            <Card className="project-card">
              <Card.Img variant="top" src={proj.img} />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.text}</Card.Text>
                <Button variant="primary">Voir plus</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
