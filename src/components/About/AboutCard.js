import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adithya </span>
            from <span className="purple"> Chennai, Tamilnadu, India.</span>
            <br />
            I am currently pursuing my MBA (Finance & Analytics) in Sri Sathya Sai Institute of Higher Learning (SSSIHL).
            <br />
            I have completed Bachelor of Commerce Honours (B.Com.(Hons.)) at SSSIHL.
            <br />
            <br />
            Some hobbies I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening & Creating Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you ignore the negative and accept the positive, you will acheive excellence!"{" "}
          </p>
          <footer className="blockquote-footer">Adithya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
