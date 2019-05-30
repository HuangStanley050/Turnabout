import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const CasesComponent = props => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCase {
        edges {
          node {
            slug
            name
            leadAttorney
            contentful_id
            caseSummary
            images {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  return null;
};

export default CasesComponent;
