import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
                src
              }
            }
          }
        }
      }
    }
  `);
  //console.log(data);

  return (
    <Container style={{ margin: "2rem auto" }}>
      <Row className="row-eq-height">
        {data.allContentfulCase.edges.map(({ node }) => {
          //console.log(node.name);
          return (
            <Col
              style={{ marginBottom: "1rem" }}
              key={node.contentful_id}
              xs="12"
              md="4"
            >
              <Card style={{ height: "100%" }}>
                <CardBody>
                  <CardTitle>{node.name}</CardTitle>
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
