import { Container, Row, Col, Card } from "react-bootstrap";
import { PencilSquare, CodeSlash, Search } from "react-bootstrap-icons";
import "../styles/Services.css";
//POUR IMPORTER LE CSS DE LA BANNIERE PRINCIPALE DANS HOME
import "../styles/Home.css"; 
import bannerImage from "../assets/images/banner.jpg"; 


export default function Services() {
  const services = [
    {
      icon: <PencilSquare size={40} />,
      title: "UX Design",
      text: "L'UX Design est une discipline qui consiste à concevoir des produits...",
    },
    {
      icon: <CodeSlash size={40} />,
      title: "Développement web",
      text: "Le développement de sites web consiste à créer des sites internet...",
    },
    {
      icon: <Search size={40} />,
      title: "Référencement",
      text: "Le référencement naturel (SEO) est une technique qui consiste à optimiser...",
    },
  ];

  return (
   
    <>
      {/* --- SECTION BANNIÈRE --- */}
      <div
        className="hero-container"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh", 
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* SECTION CONTENU DES SERVICES */}
      <Container className="my-5 text-center">
        <h1 style={{ fontSize: "2.8rem" }}>Mon offre de services</h1>
        <p className="services-subtitle" style={{ marginTop: "20px" }}>
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <div className="services-divider"></div>

        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
          {services.map((service, idx) => (
            <Col key={idx}>
              <Card className="service-card h-100 p-3 text-center">
                <Card.Body>
                  <div className="service-icon mb-3">{service.icon}</div>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}