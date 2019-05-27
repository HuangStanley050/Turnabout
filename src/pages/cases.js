import React, { Component } from "react";
import Layout from "../components/layout";
import NewHero from "../components/newHero";
import { graphql } from "gatsby";
class Cases extends Component {
  render() {
    return (
      <Layout>
        <h1>Cases Page</h1>
      </Layout>
    );
  }
}

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

export default Cases;
