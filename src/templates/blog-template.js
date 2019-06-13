import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Container, Col, Row } from "reactstrap";

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <h1>Hello there</h1>;
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      id
      title
      published(formatString: "MMMM DD YYYY")
    }
  }
`;

export default BlogTemplate;
