import React, { useState } from "react"; // Import useState for pagination
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import { blogData } from "./blog-data";
import ReactPaginate from "react-paginate"; // Import the pagination component

function Blogs() {
  // --- Pagination Logic ---
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 5; // You can change this number

  const pagesVisited = currentPage * blogsPerPage;
  const pageCount = Math.ceil(blogData.length / blogsPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

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
          {/* This now slices the data and passes all necessary props */}
          {blogData
            .slice(pagesVisited, pagesVisited + blogsPerPage)
            .map((blog, index) => (
              <Col md={4} className="project-card" key={index}>
                <BlogCard
                  slug={blog.slug}
                  title={blog.title}
                  description={blog.description}
                  thumbnail={blog.thumbnail}
                  isExternal={blog.isExternal} // Pass isExternal prop
                  link={blog.link}             // Pass link prop
                />
              </Col>
            ))}
        </Row>

        {/* --- Pagination Component --- */}
        <ReactPaginate
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination-container"}
          previousLinkClassName={"pagination-previous"}
          nextLinkClassName={"pagination-next"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"pagination-active"}
        />
      </Container>
    </Container>
  );
}

export default Blogs;