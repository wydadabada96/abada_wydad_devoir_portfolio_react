import { Modal, Button } from "react-bootstrap";
import { FaUser, FaMapMarkerAlt, FaBook, FaUsers } from "react-icons/fa";
import doraemon from "../assets/images/doraemon.png";
import "../styles/Home.css";

export default function CustomModal({ show, handleClose, userData }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      contentClassName="custom-dark-modal"
    >
      <Modal.Header closeButton className="modal-dark-header">
        <Modal.Title>Mon profil GitHub</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-dark-body d-flex flex-column flex-md-row align-items-center justify-content-center">
        {/* --- IMAGE À GAUCHE --- */}
        <div className="modal-image-col text-center me-md-4 mb-3 mb-md-0">
          <img src={doraemon} alt="Doraemon" className="modal-doraemon-img" />
        </div>

        {/* --- INFOS À DROITE --- */}
        <div className="modal-info-col">
          <div className="modal-info-line">
            <FaUser className="modal-icon text-info" />
            <span className="fw-bold modal-info-text">John Doe</span>
          </div>

          <hr className="modal-separator" />

          <div className="modal-info-line">
            <FaMapMarkerAlt className="modal-icon text-danger" />
            <span className="modal-info-text">Unknown Location</span>
          </div>

          <hr className="modal-separator" />

          <div className="modal-info-line">
            <FaBook className="modal-icon text-warning" />
            <span className="modal-info-text">
              As we all know, John Doe's identity is unknown. I just wanted to
              contribute without being known.
            </span>
          </div>

          <hr className="modal-separator" />

          <div className="modal-info-line">
            <FaBook className="modal-icon text-primary" />
            <span className="modal-info-text">
              Repositories : {userData?.public_repos || 1}
            </span>
          </div>

          <hr className="modal-separator" />

          <div className="modal-info-line">
            <FaUsers className="modal-icon text-success" />
            <span className="modal-info-text">
              Followers : {userData?.followers || 16}
            </span>
          </div>

          <hr className="modal-separator" />

          <div className="modal-info-line">
            <FaUsers className="modal-icon text-warning" />
            <span className="modal-info-text">
              Following : {userData?.following || 0}
            </span>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="modal-dark-footer">
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
