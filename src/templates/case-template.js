import React from "react";
import { graphql } from "gatsby";
import CaseTemplateComp from "../components/caseTemplateComp";

const CaseTemplate = ({ data }) => {
  const {
    name,
    leadAttorney,
    assistantAttorney,
    date,
    victim,
    prosecutor,
    verdict,
    defendent,
    caseDetails: { caseDetails },
    images,
  } = data.contentfulCase;
  //console.log(images);
  return (
    <CaseTemplateComp
      title={name}
      tableData={[
        { leadAttorney },
        { assistantAttorney },
        { date },
        { victim },
        { prosecutor },
        { verdict },
        { defendent },
      ]}
    />
  );
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
