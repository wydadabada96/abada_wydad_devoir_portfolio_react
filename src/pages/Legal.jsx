import { Accordion, Container } from "react-bootstrap";
import "../styles/Legal.css";
import { Helmet } from "react-helmet";

<Helmet>
  <meta name="robots" content="noindex, nofollow" />
</Helmet>


export default function Legal() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Mentions légales</h1>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            John Doe<br />
            123 Rue du Code, 75000 Paris<br />
            contact@johndoe.com
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur du site</Accordion.Header>
          <Accordion.Body>
            Hébergé par OVH - 2 rue Kellermann - 59100 Roubaix - France
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            Images : <a href="https://pixabay.com" target="_blank" rel="noreferrer">Pixabay</a><br />
            Icônes : <a href="https://flaticon.com" target="_blank" rel="noreferrer">Flaticon</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
