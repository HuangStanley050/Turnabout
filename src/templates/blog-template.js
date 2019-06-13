import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Container, Col, Row, Button } from "reactstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post;

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        //console.log(node);
        return (
          <div>
            <img width="300" src={node.data.target.fields.file["en-US"].url} />
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <section style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <Container>
          <h1 className="text-center mb-3">{title}</h1>
          <h4 className="text-center mb-3">Published at: {published}</h4>
          <article style={{ margin: "2rem 0" }}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog">
            <Button className="btn-primary">Go back to Blogs</Button>
          </AniLink>
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      id
      title
      published(formatString: "MMMM DD YYYY")
      text {
        json
      }
    }
  }
`;

export default BlogTemplate;
