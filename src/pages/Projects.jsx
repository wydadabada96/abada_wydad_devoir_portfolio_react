import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/Projects.css";
import FreshFood from "../assets/images/portfolio/fresh-food.jpg"
import RestaurantAkira from "../assets/images/portfolio/restaurant-japonais.jpg"
import EspaceBienEtre from "../assets/images/portfolio/espace-bien-etre.jpg"
import SEO from "../assets/images/portfolio/seo.jpg"
import CreationApi from "../assets/images/portfolio/coder.jpg"
import MaquetteWeb from "../assets/images/portfolio/screens.jpg"

//POUR IMPORTER LE CSS DE LA BANNIERE PRINCIPALE DANS HOME
import "../styles/Home.css"; 
import bannerImage from "../assets/images/banner.jpg"; 

export default function Projects() {
  const projects = [
    { title: "Fresh food", text: "Site de vente de produits frais en ligne", img: FreshFood, tech: "PHP et MySQL", footerText: "Site réalisé avec PHP et MySQL" },
    { title: "Projet 2", text: "Site vitrine pour entreprise", img: RestaurantAkira, tech: "WordPress", footerText: "Site réalisé avec Wordpress"  },
    { title: "Projet 3", text: "Plateforme e-commerce", img: EspaceBienEtre, tech: "LARAVEL", footerText: "Site réalisé avec LARAVEL"  },
    { title: "Projet 4", text: "Dashboard analytique", img: SEO, tech: "SEO", footerText: "Utilisation des outils SEO" },
    { title: "Projet 5", text: "Blog personnel", img: CreationApi, tech: "PHP et SYMFONY", footerText: "PHP - SYMFONY"  },
    { title: "Projet 6", text: "Landing page marketing", img: MaquetteWeb, tech: "FIGMA", footerText: "Réalisé avec FIGMA"  },
  ];

  return (
    <>
      
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

     <Container className="my-5">
      <h1 className="text-center mb-4">Mes Réalisations</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <Card className="project-card">
              <Card.Img variant="top" src={project.img} alt={project.title}/>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
                <Button variant="primary">Voir plus</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {project.footerText}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </>
  );
}
