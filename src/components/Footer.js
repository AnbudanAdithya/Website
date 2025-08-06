import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Modal from "react-bootstrap/Modal"; // Import the Modal component
import Button from "react-bootstrap/Button"; // Import Button for the close action

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>
              Template {""}
              <span
                onClick={handleShow}
                style={{ cursor: "pointer", color: "#02fde4", textDecoration: "underline" }}
              >
                adopted 
              </span>{" "}
              and modified by Adithya
            </h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {new Date().getFullYear()} SA</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/AnbudanAdithya"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/s-adithya-918009294/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* This is the Modal component that will pop up */}
      <Modal show={showModal} onHide={handleClose} centered className="credit-modal">
        <Modal.Header closeButton>
          <Modal.Title>Credits</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This website design is adopted from the open-source project by{" "}
            <a
              href="https://github.com/soumyajit4419/Portfolio" // <-- CHANGE TO THE ORIGINAL AUTHOR'S GITHUB URL
              target="_blank"
              rel="noopener noreferrer"
              className="purple"
            >Soumyajit Behera
            </a>
            .
          </p>
          <p>
            A huge thanks to him for making his incredible project work and making it available to the community!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Footer;