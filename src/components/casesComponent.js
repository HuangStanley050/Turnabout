import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardText,
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
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Container style={{ margin: "2rem auto" }}>
      <Row className="row-eq-height">
        {data.allContentfulCase.edges.map(({ node }) => {
          return (
            <Col
              style={{ marginBottom: "1rem" }}
              key={node.contentful_id}
              xs="12"
              md="4"
            >
              <Card
                body
                inverse
                color="primary"
                style={{
                  height: "100%",
                }}
              >
                <CardBody>
                  <Img
                    style={{ height: "350px" }}
                    fluid={node.images[0].fluid}
                  />
                  <CardTitle>
                    <h2
                      style={{
                        margin: "2rem auto",
                        backgroundColor: "var(--primaryColor)",
                      }}
                      className="text-center text-info text-capitalize"
                    >
                      {node.name}
                    </h2>
                  </CardTitle>
                  <CardText>{node.caseSummary}</CardText>
                  <div className="text-center">
                    <Button>More Info</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CasesComponent;
