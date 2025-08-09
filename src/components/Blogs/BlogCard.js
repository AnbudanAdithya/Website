import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function BlogCard(props) {
  return (
    <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={props.thumbnail}
          alt="card-img"
        />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.isExternal ? (
          // If the post is external, render a regular <a> tag
          <Button
            variant="primary"
            href={props.link}
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security best practice for external links
          >
            Read More &rarr;
          </Button>
        ):(
        <Button as={Link} to={`/blog/${props.slug}`} variant="primary">
          Read More &rarr;
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default BlogCard;