import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/S Adithya.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  // Your experience data
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Tech Solutions Inc.",
      date: "May 2024 - August 2024",
      description: [
        "Contributed to the development of a customer-facing web portal using React.",
        "Collaborated with a team of 5 engineers to design and implement new features.",
      ],
    },
    {
      role: "Web Development Fellow",
      company: "Code Academy",
      date: "January 2023 - May 2023",
      description: [
        "Completed an intensive 500+ hour full-stack web development program.",
        "Developed and deployed multiple projects using the MERN stack.",
      ],
    },
  ];

  // Your education data
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      date: "2020 - 2024",
      description: "Graduated with a focus on software engineering and artificial intelligence. Maintained a 3.8 GPA.",
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      date: "2016 - 2020",
      description: "Active member of the coding club and robotics team.",
    },
  ];

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          {/* Experience Section */}
          <h1 className="project-heading" style={{ marginBottom: "2rem" }}>
            Professional <strong className="purple">Experience</strong>
          </h1>
          <p style={{ color: "white" }}>
          Here are some of the roles and responsibilities I've had.
        </p>
          <div className="resume-container">
            {experiences.map((exp, index) => (
              <div className="resume-card" key={index}>
                <Row className="align-items-center">
                  <Col md={4} className="resume-left">
                    <h4>{exp.role}</h4>
                    <p className="resume-date">{exp.date}</p>
                  </Col>
                  <Col md={8} className="resume-right">
                    <h5 className="purple">{exp.company}</h5>
                    <ul>
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <h1 className="project-heading" style={{ margin: "5rem 0 2rem 0" }}>
            <strong className="purple">Education</strong>
          </h1>
          <div className="resume-container">
            {education.map((edu, index) => (
              <div className="resume-card" key={index}>
                <Row className="align-items-center">
                  <Col md={4} className="resume-left">
                    <h4>{edu.degree}</h4>
                    <p className="resume-date">{edu.date}</p>
                  </Col>
                  <Col md={8} className="resume-right">
                    <h5 className="purple">{edu.institution}</h5>
                    <p>{edu.description}</p>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
          
          {/* Download CV Button */}
          <Row style={{ justifyContent: "center", position: "relative", marginTop: "50px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;