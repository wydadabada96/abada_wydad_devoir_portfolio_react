import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Legal from "./pages/Legal.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
     {/*  <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/about">À propos</Link> |{" "}
        <Link to="/projects">Projets</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/legal">Mentions légales</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
