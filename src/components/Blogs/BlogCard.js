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
        <Button as={Link} to={`/blog/${props.slug}`} variant="primary">
          Read More &rarr;
        </Button>
      </Card.Body>
    </Card>
  );
}
export default BlogCard;