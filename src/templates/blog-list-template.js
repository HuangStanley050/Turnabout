import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BlogCard from "../components/blog/blogCard";
import { Container, Row, Col } from "reactstrap";
import PaginationComp from "../components/paginationComp";
import SEO from "../components/SEO";

const BlogListTemplate = props => {
  const { data } = props;
  const { currentPage, numberPages } = props.pageContext;
  return (
    <Layout>
      <SEO title="Blogs" />
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
      <PaginationComp currentPage={currentPage} numberPages={numberPages} />
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
