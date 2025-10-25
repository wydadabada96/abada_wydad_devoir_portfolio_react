import { useState, useEffect } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import "../styles/Home.css";
import heroImage from "../assets/images/hero-bg.jpg";
import aboutImage from "../assets/images/john-doe-about.jpg";
import CustomModal from "../components/Modal";

export default function Home() {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Erreur API GitHub :", error));
  }, []);

  return (
    <>
      {/* HOME HEADER (HERO) */}
      <div
        className="hero-container"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur Web Full Stack</h2>
          <Button variant="danger" size="lg" onClick={handleShow}>
            En savoir plus
          </Button>
        </div>
      </div>

      {/* MODAL */}
      <CustomModal show={show} handleClose={handleClose} userData={userData} />

      {/* SECTION À PROPOS + COMPÉTENCES */}
      <section className="about-skills-section container my-5">
        <div className="card-bloc">
          <div className="about-part">
            <h2 className="section-title">À propos</h2>
            <img src={aboutImage} alt="John Doe" className="about-img" />
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                vitae libero sed justo aliquam egestas.
              </p>
              <p>
                Praesent fringilla magna ac magna fermentum, non aliquam lorem
                rhoncus. Cras sed lorem vel leo accumsan dapibus sit amet nec ante.
              </p>
              <p>
                Vivamus volutpat, elit nec fermentum sagittis, est purus facilisis
                metus, sed sodales ex ligula eu augue.
              </p>
            </div>
          </div>

          <div className="skills-part">
            <h2 className="section-title">Mes Compétences</h2>
            <div className="skill">
              <span>HTML5</span>
              <span> 90%</span>
              <ProgressBar now={90} variant="danger" />
            </div>
            <div className="skill">
              <span>CSS3</span>
              <span> 80%</span>
              <ProgressBar now={80} variant="info" />
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <span> 70%</span>
              <ProgressBar now={70} variant="warning" />
            </div>
            <div className="skill">
              <span>PHP</span>
              <span> 60%</span>
              <ProgressBar now={60} variant="success" />
            </div>
            <div className="skill">
              <span>React</span>
              <span> 50%</span>
              <ProgressBar now={50} variant="primary" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
