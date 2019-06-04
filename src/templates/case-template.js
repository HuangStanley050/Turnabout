import React from "react";
import { graphql } from "gatsby";

const CaseTemplate = ({ data }) => {
  const {
    name,
    leadAttorney,
    assistantAttorney,
    date,
    victim,
    prosecutor,
    verdict,
    caseDetails: { caseDetails },
    images,
  } = data.contentfulCase;
  //console.log(images);
  return <h1>{name}</h1>;
};

export const query = graphql`
  query($slug: String!) {
    contentfulCase(slug: { eq: $slug }) {
      name
      leadAttorney
      assistantAttorney
      caseDetails {
        caseDetails
      }
      date(formatString: "YYYY MMMM DDDD")
      victim
      defendent
      prosecutor
      verdict
      images {
        fluid {
          src
        }
      }
    }
  }
`;

export default CaseTemplate;
