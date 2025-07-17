// HobbyCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HobbyCard({ imgPath, title, description, ghLink, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="hobby-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        
        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank" className="m-1">
            GitHub
          </Button>
        )}

        {demoLink?.endsWith(".mp3") ? (
        <audio controls controlsList="nodownload" style={{ width: "100%", marginTop: "10px" }}>
            <source src={demoLink} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        ) : (
        demoLink && (
            <Button variant="primary" href={demoLink} target="_blank" className="m-1">
            Demo
            </Button>
        )
        )}
      </Card.Body>
    </Card>
  );
}

export default HobbyCard;
