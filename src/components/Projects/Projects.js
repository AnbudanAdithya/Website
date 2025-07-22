import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Report from "../../Assets/Projects/PDF_Files/FinTech_Report.jpg";
import BR from "../../Assets/Projects/PDF_Files/Book_Review.png";
import EMI from "../../Assets/Projects/Excel_Files/EMI_Model.jpg";
import Tax from "../../Assets/Projects/Excel_Files/Tax_Calculator.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {true &&(
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EMI}
              isBlog={false}
              title="EMI Calulator"
              description="A simple yet powerful, user friendly excel model that lets user calculate the loan EMI to be paid."
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="/Assets/Project/EMI_Calculator.xlsm"
            />
          </Col>
          )}
          
          {true &&(
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tax}
              isBlog={false}
              title="Tax Calcutor"
              description="Based on new budget as announced by Hon'ble Finance Minister, I tried to create a model to identify the tax payable."
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="/Assets/Project/Tax_Calculator.xlsm"
            />
          </Col>
          )}

          {true &&(
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BR}
              isBlog={false}
              title="Book Review - Psychology of Money"
              description="Take a look at my book review I have shared my thoughts on the book 'Psychology of Money' by Morgan Housel."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="/Assets/Project/Book_Review.pdf"              
            />
          </Col>
          )}

          {true &&(
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Report}
              isBlog={false}
              title="FinTech Banks - Brief Study Report"
              description="A brief study report on the FinTech Banks in India, covering their impact, growth, and future prospects."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="/Assets/Project/FinTech_Banks.pdf"
            />
          </Col>
          )}

          {false &&(
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              //demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          )}

          {false &&(
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          )}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
