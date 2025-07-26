import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  // You can add, remove, or edit experiences by modifying this array
  const experiences = [
    {
      role: "Finance Intern",
      company: "Ashok Leyland Limited, Ennore",
      date: "May 2025 - June 2025",
      description: [
        "Studied the financial landscape of the ennore manufacturing unit, from Invoice generation to Final payments to vendors.",
        "Analyzed financial data to identify trends and insights, contributing to strategic decision-making.",
        "Received hands on exposure to SAP S4 Hana, a leading ERP software, enhancing my understanding of financial processes.",
        "Assisted in a vendor reconciliation process, using Excel to match vendor statements with company records, ensuring accuracy and transparency.",
      ],
    },
    {
      role: "Student Head",
      company: "Cooperative Stores, SSSIHL",
      date: "July 2022 - Present",
      description: [
        "Headed the cooperative stores, managing inventory and ensuring smooth operations.",
        "Oversaw the procurement process, negotiating with suppliers to secure favorable terms.",
        "Implemented efficient inventory management practices, reducing waste and optimizing stock levels.",
        "Led a team of 13 juniors under me, fostering a collaborative environment and enhancing team productivity.",
      ],
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the roles and responsibilities I've had.
        </p>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-content">
                <h3>
                  {exp.role} @ <span className="purple">{exp.company}</span>
                </h3>
                <p className="experience-date">{exp.date}</p>
                <ul>
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;