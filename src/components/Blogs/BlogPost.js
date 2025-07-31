import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { blogData } from "./blog-data";
import Particle from "../Particle";

function BlogPost() {
  const { slug } = useParams();
  const blog = blogData.find((post) => post.slug === slug);

  if (!blog) {
    return <div>Blog post not found!</div>;
  }

  return (
    <section>
      <Particle />
      <Container className="blog-post-section">
        <div className="blog-post-content-wrapper">
          {blog.component}
        </div>
      </Container>
    </section>
  );
}

export default BlogPost;