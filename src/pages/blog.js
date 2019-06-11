import React from "react";
import Layout from "../components/layout";
import NewHero from "../components/newHero";
import { graphql } from "gatsby";
import BlogList from "../components/blog/blogCard";

const Blog = props => {
  return (
    <Layout>
      <NewHero img={props.data.defaultHero.childImageSharp.fluid} />
    </Layout>
  );
};

export const query = graphql`
  {
    defaultHero: file(relativePath: { eq: "about-bg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Blog;
