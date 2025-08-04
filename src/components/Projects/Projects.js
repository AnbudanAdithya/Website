import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Report from "../../Assets/Projects/PDF_Files/FinTech_Report.jpg";
import BR from "../../Assets/Projects/PDF_Files/Book_Review.png";
import EMI from "../../Assets/Projects/Excel_Files/EMI_Model.jpg";
import Tax from "../../Assets/Projects/Excel_Files/Tax_Calculator.jpg";
import BA from "../../Assets/Projects/Drive/BA.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {true && (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={EMI}
                isBlog={false}
                title="EMI Calulator"
                description="A simple yet powerful, user friendly excel model that lets user calculate the loan EMI to be paid."
                demoLink="/Assets/Project/EMI_Calculator.xlsm"
              />
            </Col>
          )}

          {true && (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Tax}
                isBlog={false}
                title="Tax Calcutor"
                description="Based on new budget as announced by Hon'ble Finance Minister, I tried to create a model to identify the tax payable."
                demoLink="/Assets/Project/Tax_Calculator.xlsm"
              />
            </Col>
          )}

          {true && (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BR}
                isBlog={false}
                title="Book Review - Psychology of Money"
                description="Take a look at my book review I have shared my thoughts on the book 'Psychology of Money' by Morgan Housel."
                demoLink="/Assets/Project/Book_Review.pdf"
              />
            </Col>
          )}

          {true && (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Report}
                isBlog={false}
                title="FinTech Banks - Brief Study Report"
                description="A brief study report on the FinTech Banks in India, covering their impact, growth, and future prospects."
                demoLink="/Assets/Project/FinTech_Banks.pdf"
              />
            </Col>
          )}

          {true && (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BA}
                isBlog={false}
                title="Bike Sales - Predictive Analytics using R Studio and Power BI"
                description="A model and a dashboard predicting sales of bike in India based on different criteria with a comprehensive report; Dataset adopted from Kaggle."
                demoLink="https://drive.google.com/drive/folders/1TrKx-nA0NzJck2LAvIH-b78XGXDh8dyt?usp=drive_link"
              />
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
