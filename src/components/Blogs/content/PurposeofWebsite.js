import React from "react";
import { Container, Image } from "react-bootstrap";
import Purpose from "../../../Assets/Blogs/Purpose.png"; // Example image, change as needed

function PurposeofWebsite() {
  return (
    <Container>
      <h1 className="purple">Why do you need your own website?</h1>
      <p style={{ color: "grey", textAlign: "left" }}>
        Posted on August 08, 2025
      </p>
      <hr />

      <Image src={Purpose} fluid rounded className="mb-4" />

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
      <p>
      </p>
      <p>
        Here are some reasons why having your own website is essential:
      </p>
      <ol className="styled-list">
        <li>
          <strong>You Control the Narrative</strong> 
          A resume is one or two pages long, and a LinkedIn profile is limited to what you can fill in.
          With your own website, you can tell your story in your own words, showcase your skills
          and experiences, and present yourself in the best light possible.
          You have 100% control over the content, design, and layout of your website and what you want to tell.
          In short you are free from standardized templates and formats.
        </li>
        <li>
          <strong>Showcase your brand</strong> 
          Your personal brand is your unique identity in the professional world.
          In my opinion, a website is the best and powerful to shape it.
          You can use your website to showcase your skills, experiences, and achievements in a way that reflects your personality and values.
          This is especially important in today's job market, where employers are looking for candidates who not only
          have the right skills but also fit into their company culture.
          When someone googles your name, your website should be the first one they see.
        </li>
        <li>
          <strong>Establish yourself as a thought leader</strong> 
          An MBA and your corporate life provides you with a basket of knowledge. Your website becomes your platform to share it.
          By including a blog section on your website, you can: -
          <ol>
            <li>Share your insights and opinions on industry trends</li>
            <li>Discuss your experiences and lessons learned</li>
            <li>Provide valuable resources and tips for others in your field</li>
          </ol>
          This will help you establish yourself as a thought leader in your industry and build credibility with potential employers and clients.
        </li>
        <li>
          <strong>Your ultimate networking tool</strong> 
          Just imagine ending your conversations with "Check out my website" instead of "Connect with me on LinkedIn".
          Your website can serve as a powerful networking tool, allowing you to connect with others in your industry and beyond.
          You can include links to your social media profiles, contact information, and even a contact form for potential clients or collaborators to reach out to you.
          This makes it easy for others to connect with you and learn more about your work.
        </li>
      </ol>
      <p>
        In conclusion, having your own website is essential for anyone looking to establish themselves in the professional world.
        It allows you to control the narrative, showcase your brand, establish yourself as a thought leader,
        and serve as a powerful networking tool. Whether you're a recent graduate, a seasoned professional,
        or an entrepreneur, having your own website is a must-have in today's digital age.</p>
      <p>
        So, if you haven't already, start building your own website today and take control of your professional narrative!
      </p>
    </Container>
  );
}

export default PurposeofWebsite;
