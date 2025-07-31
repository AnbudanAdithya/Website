import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import { blogData } from "./blog-data";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few pieces I've written recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogData.map((blog, index) => (
            <Col md={4} className="project-card" key={index}>
              <BlogCard
                slug={blog.slug}
                title={blog.title}
                description={blog.description}
                thumbnail={blog.thumbnail}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
