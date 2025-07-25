// Hobby.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HobbyCard from "./HobbyCard";
import Particle from "../Particle";
import MusicImage from "../../Assets/Hobby/Music_Image.jpg"; // example image

function Hobby() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Hobbies </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I love doing in my creative downtime.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <HobbyCard
              imgPath={MusicImage}
              title="Music Composition - 1"
              description="Hear my first ever music composition created using DJ Loop Pads."
              //ghLink="https://github.com/yourHobbyRepo"
              demoLink="Assets/Hobby/Music_1.mp3"
            />
          </Col>

          <Col md={4} className="project-card">
            <HobbyCard
              imgPath={MusicImage}
              title="Music Composition - 2"
              description="Hear my first ever music composition created using DJ Loop Pads."
              //ghLink="https://github.com/yourHobbyRepo"
              demoLink="Assets/Hobby/Music_2.mp3"
            />
          </Col>

          <Col md={4} className="project-card">
            <HobbyCard
              imgPath={MusicImage}
              title="Music Composition - 3"
              description="Hear my first ever music composition created using DJ Loop Pads."
              //ghLink="https://github.com/yourHobbyRepo"
              demoLink="Assets/Hobby/Music_3.mp3"
            />
          </Col>
          <Col md={4} className="project-card">
            <HobbyCard
              imgPath={MusicImage}
              title="Music Composition - 4"
              description="Hear my first ever music composition created using DJ Loop Pads."
              //ghLink="https://github.com/yourHobbyRepo"
              demoLink="Assets/Hobby/Music_4.mp3"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <HobbyCard
              imgPath={MusicImage}
              title="Music Composition - 5"
              description="Hear my first ever music composition created using DJ Loop Pads."
              //ghLink="https://github.com/yourHobbyRepo"
              demoLink="Assets/Hobby/Music_5.mp3"
            />
          </Col>

          <Col md={4} className="project-card">
            <HobbyCard
              imgPath={MusicImage}
              title="Music Composition - 6"
              description="Hear my first ever music composition created using DJ Loop Pads."
              //ghLink="https://github.com/yourHobbyRepo"
              demoLink="Assets/Hobby/Music_6.mp3"
            />
          </Col>

          <Col md={4} className="project-card">
            <HobbyCard
              imgPath={MusicImage}
              title="Music Composition - 7"
              description="Hear my first ever music composition created using DJ Loop Pads."
              //ghLink="https://github.com/yourHobbyRepo"
              demoLink="Assets/Hobby/Music_7.mp3"
            />
          </Col>
          {/* Add more <Col> with HobbyCard as needed */}
        </Row>
      </Container>
    </Container>
  );
}

export default Hobby;
