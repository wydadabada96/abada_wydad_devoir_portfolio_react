import { useState, useEffect } from "react";
import { Modal, Button, ProgressBar, Spinner } from "react-bootstrap";
import "../styles/Home.css";

export default function Home() {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 📡 Récupération des infos GitHub une seule fois au chargement
  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données GitHub :", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="hero-container">
        <div className="hero-text">
          <h1>Bienvenue sur mon Portfolio</h1>
          <h2>Je suis John Doe, Développeur Web</h2>
          <Button variant="light" size="lg" onClick={handleShow}>
            En savoir plus
          </Button>
        </div>
      </div>

      {/* --- MODALE GITHUB --- */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
              <p>Chargement des données GitHub...</p>
            </div>
          ) : userData ? (
            <div className="text-center">
              <img
                src={userData.avatar_url}
                alt="Avatar"
                className="rounded-circle mb-3"
                style={{ width: "120px", height: "120px" }}
              />
              <h4>{userData.name || "John Doe"}</h4>
              <p>{userData.bio || "Développeur passionné 🚀"}</p>
              <p>
                <strong>Followers :</strong> {userData.followers} |{" "}
                <strong>Following :</strong> {userData.following}
              </p>
              <p>
                <strong>Repos publics :</strong> {userData.public_repos}
              </p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark mt-2"
              >
                Voir le profil GitHub
              </a>
            </div>
          ) : (
            <p>Impossible de charger les informations GitHub.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* --- SECTION COMPÉTENCES --- */}
      <section className="container my-5">
        <h2 className="mb-4 text-center">Mes Compétences</h2>
        <p className="text-center">
          Je suis développeur full-stack passionné par la création de projets modernes 🚀
        </p>

        <div className="mt-4">
          <h5>HTML / CSS</h5>
          <ProgressBar now={90} label={`90%`} />
          <h5 className="mt-3">JavaScript / React</h5>
          <ProgressBar now={80} label={`80%`} />
          <h5 className="mt-3">Node.js</h5>
          <ProgressBar now={70} label={`70%`} />
        </div>
      </section>
    </>
  );
}
