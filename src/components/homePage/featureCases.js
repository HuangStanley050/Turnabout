import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const randomCase = record => {
  let finishedCase = [];
  //make sure no repeat cases and select randomly from record
  do {
    let rand = record[Math.floor(Math.random() * record.length)];
    if (!finishedCase.some(item => item === rand)) {
      finishedCase.push(rand);
    }
  } while (finishedCase.length !== 3);
  //console.log(finishedCase);
  return finishedCase;
};

const FeatureCases = props => {
  let cases;
  const data = useStaticQuery(graphql`
    {
      allContentfulCase {
        edges {
          node {
            name
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
  cases = randomCase(data.allContentfulCase.edges);
  //node.images[0]
  //console.log(cases);
  return (
    <section style={{ margin: "1rem auto" }}>
      <Container>
        <h1
          style={{
            margin: "2rem auto",
            backgroundColor: "var(--primaryColor)",
          }}
          className="text-center text-info text-capitalize"
        >
          Feature Cases
        </h1>
        <Row className="row-eq-height">
          {cases.map(({ node }) => (
            <Col
              xs="12"
              md="4"
              style={{ marginBottom: "1.1rem" }}
              key={node.contentful_id}
            >
              <Card body inverse color="primary" style={{ height: "100%" }}>
                <CardBody>
                  <Img style={{ height: "60%" }} fluid={node.images[0].fluid} />
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
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-3">
          <AniLink fade to="/cases">
            <Button size="lg" outline color="primary">
              All Cases
            </Button>
          </AniLink>
        </div>
      </Container>
    </section>
  );
};

export default FeatureCases;
