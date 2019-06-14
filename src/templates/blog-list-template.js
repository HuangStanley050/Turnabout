import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BlogCard from "../components/blog/blogCard";
import { Container, Row, Col } from "reactstrap";

const BlogListTemplate = props => {
  const { data } = props;
  return (
    <Layout>
      <section style={{ marginTop: "2rem" }}>
        <Container>
          <h1 className="text-center">Latest Posts</h1>
          <Row className="row-eq-height">
            {data.posts.edges.map(({ node }) => {
              return (
                <Col
                  style={{ marginBottom: "1.5rem" }}
                  key={node.id}
                  xs="12"
                  md="4"
                >
                  <BlogCard blog={node} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPosts($limit: Int!, $skip: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          published(formatString: "MMMM Do, YYYY")
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default BlogListTemplate;
