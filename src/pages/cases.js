import React, { Component } from "react";
import Layout from "../components/layout";
import NewHero from "../components/newHero";
import { graphql } from "gatsby";
class Cases extends Component {
  render() {
    return (
      <Layout>
        <NewHero img={this.props.data.defaultHero.childImageSharp.fluid} />
      </Layout>
    );
  }
}

export const query = graphql`
  {
    defaultHero: file(relativePath: { eq: "cases-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Cases;
