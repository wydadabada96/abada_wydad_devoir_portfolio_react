import { Accordion, Container } from "react-bootstrap";
import "../styles/Legal.css";
import { Helmet } from "react-helmet";

export default function Legal() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>


      <div className="text-center pt-5 pb-3">
      </div>

      <Container className="my-5">
        <Accordion defaultActiveKey="0" flush className="legal-accordion">
          
          {/* ÉDITEUR DU SITE */}
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordion-header-custom">Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <div className="mb-3">
                <span className="fw-bold">John Doe</span><br />
                <i className="bi bi-geo-alt"></i> 40 rue Laure Diebold<br />
                69009 Lyon, France<br />
                <i className="bi bi-phone"></i> 10 20 30 40 50<br />
                <i className="bi bi-envelope"></i> john.doe@gmail.com
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* HÉBERGEUR */}
          <Accordion.Item eventKey="1">
            <Accordion.Header className="accordion-header-custom">Hébergeur</Accordion.Header>
            <Accordion.Body>
              <span className="fw-bold">alwaysdata</span><br />
              91 Rue du Faubourg Saint-Honoré, 75008 Paris<br />
              <i className="bi bi-globe"></i> <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a>
            </Accordion.Body>
          </Accordion.Item>

          {/* CRÉDITS */}
          <Accordion.Item eventKey="2">
            <Accordion.Header className="accordion-header-custom">Crédits</Accordion.Header>
            <Accordion.Body>
              <span className="fw-bold">Crédits</span>
              <p className="mt-2">
                Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="noreferrer">Centre Européen de formation</a>.
              </p>
              <p>
                Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank" rel="noreferrer">Pixabay</a>
              </p>
              <p>
                La favicon de ce site a été fournie par <a href="https://www.flaticon.com/authors/john-doe-icons-erstellt-von-freepik" target="_blank" rel="noreferrer">John doe icons erstellt von Freepik - Flaticon</a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    
    </>
  );
}