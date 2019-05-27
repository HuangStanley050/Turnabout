import React from "react";
import Layout from "../components/layout";
import NewHero from "../components/newHero";
import { graphql } from "gatsby";

const Contact = props => {
  return (
    <Layout>
      <h1>Contact page</h1>
    </Layout>
  );
};

export const query = graphql`
  {
    defaultHero: file(relativePath: { eq: "aceAttorney-hero-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Contact;
