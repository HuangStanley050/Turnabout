import React from "react";
import BlogCard from "./blogCard";
import { Container, Row, Col } from "reactstrap";
import { useStaticQuery, graphql } from "gatsby";

const BlogList = props => {
  const { posts } = useStaticQuery(graphql`
    {
      posts: allContentfulPost(sort: { fields: published, order: DESC }) {
        edges {
          node {
            published(formatString: "MMMM Do, YYYY")
            title
            slug
            id
            images {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);
  //console.log(posts);
  return (
    <section style={{ marginTop: "2rem" }}>
      <Container>
        <Row className="row-eq-height">
          {posts.edges.map(({ node }) => (
            <Col
              style={{ marginBottom: "1.5rem" }}
              key={node.id}
              xs="12"
              md="4"
            >
              <BlogCard blog={node} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogList;
