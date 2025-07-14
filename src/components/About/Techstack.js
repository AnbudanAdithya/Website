import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaFileExcel, FaFilePowerpoint, FaFileWord } from "react-icons/fa";
import { SiCanva } from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFilePowerpoint />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileWord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
    </Row>
  );
}

export default Techstack;
