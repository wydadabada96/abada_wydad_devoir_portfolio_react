import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/Projects.css";
import FreshFood from "../assets/images/portfolio/fresh-food.jpg"
import RestaurantAkira from "../assets/images/portfolio/restaurant-japonais.jpg"
import EspaceBienEtre from "../assets/images/portfolio/espace-bien-etre.jpg"
import SEO from "../assets/images/portfolio/seo.jpg"
import CreationApi from "../assets/images/portfolio/coder.jpg"
import MaquetteWeb from "../assets/images/portfolio/screens.jpg"


import "../styles/Home.css"; 
import bannerImage from "../assets/images/banner.jpg"; 

export default function Projects() {
  const projects = [
    { title: "Fresh food", text: "Site de vente de produits frais en ligne", img: FreshFood, tech: "PHP et MySQL", footerText: "Site réalisé avec PHP et MySQL" },
    { title: "Restaurant Akira ", text: "Site de vente de produits frais en ligne", img: RestaurantAkira, tech: "WordPress", footerText: "Site réalisé avec Wordpress"  },
    { title: "Espace bien-être", text: "Site de vente de produits frais en ligne", img: EspaceBienEtre, tech: "LARAVEL", footerText: "Site réalisé avec LARAVEL"  },
    { title: "SEO", text: "Amélioration du référencement d'un site e-commerce", img: SEO, tech: "SEO", footerText: "Utilisation des outils SEO" },
    { title: "Création d'une API", text: "Création d'une API RESTFULL publique", img: CreationApi, tech: "PHP et SYMFONY", footerText: "PHP - SYMFONY"  },
    { title: "Maquette d'un site web", text: "Création du prototype d'un site", img: MaquetteWeb, tech: "FIGMA", footerText: "Réalisé avec FIGMA"  },
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
        }} >
        <div className="hero-overlay"></div>
      </div>

     <Container className="my-5">
     <div className="text-center"> 
        <h1 className="mb-0">Portfolio</h1>
        <p className="portfolio-subtitle" style={{ marginTop: "20px" }}>
            Voici quelques-unes de mes réalisations.
        </p>
        <div className="portfolio-divider"></div> 
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <Card className="project-card text-center">
              <Card.Img variant="top" src={project.img} alt={project.title}/>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
                <Button variant="primary">Voir le site</Button>
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
