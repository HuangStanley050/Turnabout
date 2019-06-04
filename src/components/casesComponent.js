import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
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

            contentful_id
            caseSummary
            images {
              fluid {
                ...GatsbyContentfulFluid
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
              sm="6"
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
                    <AniLink fade to={`/${node.slug}`}>
                      <Button className="btn-primary">More Info</Button>
                    </AniLink>
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
