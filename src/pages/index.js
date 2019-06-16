import React from "react";
//import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
//import Image from "../components/image"
import SEO from "../components/SEO";
import NewHero from "../components/newHero";
//import SimpleHero from "../components/simpleHero";
//import Banner from "../components/banner";
import About from "../components/homePage/about";
import AttorneysInfo from "../components/homePage/attorneys";
import FeatureCases from "../components/homePage/featureCases";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description="This is home page of Ace Attorney" />
      {/*<SimpleHero />*/}
      <NewHero home="true" img={data.defaultHero.childImageSharp.fluid} />
      <About />
      <AttorneysInfo />
      <FeatureCases />
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
export default IndexPage;
