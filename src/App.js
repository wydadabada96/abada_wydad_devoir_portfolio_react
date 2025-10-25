import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Legal from "./pages/Legal.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
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
