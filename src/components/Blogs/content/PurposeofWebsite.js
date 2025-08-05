import React from "react";
import { Container, Image } from "react-bootstrap";
import blogImage from "../../../Assets/Blogs/chatify.png"; // Example image, change as needed

function PurposeofWebsite() {
  return (
    <Container>
      <h1 className="purple">Why do you need your own website?</h1>
      <p style={{ color: "grey", textAlign: "left" }}>
        Posted on August 08, 2025
      </p>
      <hr />

      <Image src={blogImage} fluid rounded className="mb-4" />

      <p>
        Today, the world has become hyper competitive. Talking from a corporate
        landscape, your linkedIn Profile and your Resume are just a starting
        point. There is only so much that you can put in your resume and your
        LinkedIn page - Essential, but they are standardized in my opinion. If
        you wish to stand out from others, in almost every aspect of your
        professional life, you need your own space wherein you can talk about
        you, your accomplishments, your story - own it
      </p>
      <p>
        Your own website becomes your digital headquarters, where you own the
        platform 24/7. Having your own website is not restricted to web
        developers or software engineers anymore - It has become an inherent
        part of every professional no matter the field of corporate life.
      </p>
    </Container>
  );
}

export default PurposeofWebsite;
