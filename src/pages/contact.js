import React from "react";
import Layout from "../components/layout";
import NewHero from "../components/newHero";
import { graphql } from "gatsby";
import ContactForm from "../components/contactComponent";

const Contact = props => {
  return (
    <Layout>
      <NewHero img={props.data.defaultHero.childImageSharp.fluid} />
      <ContactForm />
    </Layout>
  );
};

export const query = graphql`
  {
    defaultHero: file(relativePath: { eq: "newphone-bg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Contact;
