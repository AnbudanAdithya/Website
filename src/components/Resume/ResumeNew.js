import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import pdf from "../../Assets/S Adithya.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  // Your experience data
  const experiences = [
    {
      role: "Finance Intern",
      company: "Ashok Leyland Limited.",
      date: "May 2025 - June 2025 (2 Months)",
      description: [
        "Gained hands-on experience in financial analysis and reporting.",
        "In depth understanding of finance department operations, including forecasting, budgeting, and variance analysis.",
        "Entrusted with the responsibility of validating invoices and documents for payment processing.",
      ],
    },
    {
      role: "Student Head of Cooperative Society Stores",
      company: "Sri Sathya Sai Institute of Higher Learning",
      date: "August 2022 - Present",
      description: [
        "Entrusted with the responsibility of Heading the Cooperative stores, for 2 years.",
        "Acquired Skills such as Cash Handling, Budgeting of inventory and Cash, and Cost Analysis.",
        "Led a team of 10 students, fostering a collaborative environment and enhancing team productivity.",
      ],
    },
    {
      role: "Product Development - Risk Management",
      company: "Cooperative Soceity Stores",
      date: "November 2023",
      description: [
        "Developed a cashless billing system that aims to reduce need for physical cash requirement and the billing time.",
        "Contributed towards evaluating the efficacy and viability and addressing the risks related to a particular feature.",
      ],
    },
  ];

  // Your education data
  const education = [
    {
      degree: "Masters in Business Administration",
      institution: "Sri Sathya Sai Institute of Higher Learning",
      date: "2024 - 2026",
      description:
        "Currently pursuing with majors in Finance and minors in Analytics.",
    },
    {
      degree: "Bachelor of Commerce (Honors)",
      institution: "Sri Sathya Sai Institute of Higher Learning",
      date: "2021 - 2024",
      description:
        "Graduated with a focus on Accounting and Finance, with a CGPA of 7.8",
    },
    {
      degree: "High School Diploma",
      institution: "DTEA Senior Secondary School, New Delhi",
      date: "2019 - 2021",
      description:
        "Topper of school with a score of 95% in CBSE Class 12 Examination and a score of 95% in Class 10 Examination.",
    },
  ];

  return (
    <div>
      <Container fluid className="resume-section">
        <Container>
          {/* --- Experience Section --- */}
          <h1 className="project-heading">
            Professional <strong className="purple">Experience</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are some of the roles and responsibilities I've had.
          </p>
          {/* This now has a unique container class: "experience-container" */}
          <div className="experience-container">
            {experiences.map((exp, index) => (
              // This card has a unique class: "experience-card"
              <div className="experience-card" key={index}>
                <Row className="align-items-center">
                  <Col md={4} className="experience-card-left">
                    <h4>{exp.role}</h4>
                    <p className="experience-card-date">{exp.date}</p>
                  </Col>
                  <Col md={8} className="experience-card-right">
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

          {/* --- Education Section --- */}
          <h1 className="project-heading" style={{ marginTop: "5rem" }}>
            <strong className="purple">Education</strong>
          </h1>
          {/* This now has a unique container class: "education-container" */}
          <div className="education-container">
            {education.map((edu, index) => (
              // This card has a unique class: "education-card"
              <div className="education-card" key={index}>
                <Row className="align-items-center">
                  <Col md={4} className="education-card-left">
                    <h4>{edu.degree}</h4>
                    <p className="education-card-date">{edu.date}</p>
                  </Col>
                  <Col md={8} className="education-card-right">
                    <h5 className="purple">{edu.institution}</h5>
                    <p>{edu.description}</p>
                  </Col>
                </Row>
              </div>
            ))}
          </div>

          {/* --- Download CV Button --- */}
          <Row
            style={{
              justifyContent: "center",
              position: "relative",
              marginTop: "50px",
            }}
          >
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
