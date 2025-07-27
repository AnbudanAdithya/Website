import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* This single Row will now contain both the description and avatar cards */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          
          {/* Left Column: The card for the heading and description */}
          <Col md={7} className="home-about-description-card">
            <h1>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              An aspiring finance professional and MBA candidate passionate about 
              <b className="purple">analytics and Corporate Finance</b>. 
              I have a strong foundation in Accounting, and a keen interest in 
              <b className="purple">financial modeling</b>, data-driven decision-making, 
              and optimizing business processes to enhance efficiency. 
              <br />
              <br />With an ability to lead teams and deliver results through 
              analytical problem-solving, I am eager to apply my skills in a 
              dynamic finance role to drive meaningful results.
              <br /> 
              <br />I eagerly find new avenues to learn, such as building this website 
              to showcase about me.
              <br />
              <br />
              My field of Interest's are learning&nbsp;
              <i>
                <b className="purple">Python, SQL </b> and
                also in areas related to{" "}
                <b className="purple">
                  Finacial Markets and Corporate Financial Strategy.
                </b>
              </i>
              <br />
            </p>
          </Col>

          {/* Right Column: The card for the avatar */}
          <Col md={5} className="home-about-avatar-card">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* This Row for social links remains the same */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AnbudanAdithya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/s-adithya-918009294/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;