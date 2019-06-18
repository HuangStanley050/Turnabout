import React, { Component } from "react";
import Layout from "../components/layout";
import NewHero from "../components/newHero";
import { graphql } from "gatsby";
import attorneys from "../constants/attorneys-info";
import { Col, Row, Container, Badge } from "reactstrap";
import Icon from "../components/icon-image";
import SEO from "../components/SEO";
const athenaColor = "#eaea33";
const apolloColor = "#bf2300";
const phoenixColor = "#362ab2";

class Attorneys extends Component {
  getColor = attorney => {
    switch (attorney) {
      case "Apollo Justice":
        return apolloColor;
      case "Phoenix Wright":
        return phoenixColor;
      default:
        return athenaColor;
    }
  };
  render() {
    let offSetPosition = 3;

    return (
      <Layout>
        <SEO title="Attorneys" />
        <NewHero img={this.props.data.defaultHero.childImageSharp.fluid} />
        <Container fluid style={{ backgroundColor: "#DCDCDC" }}>
          <Row>
            {attorneys.map(attorney => (
              <Col
                style={{
                  backgroundColor: this.getColor(attorney.title),
                  opacity: "0.9",
                }}
                className="d-flex"
                xs="12"
                md={{
                  size: 9,
                  offset:
                    attorney.title === "Apollo Justice" ? offSetPosition : null,
                }}
                key={attorney.title}
              >
                <div style={{ marginTop: "1rem" }}>
                  <Icon source={attorney.source} />
                  <h2>{attorney.title}</h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    marginLeft: "1.5rem",
                  }}
                >
                  <p style={{ fontSize: "1.03rem" }}>{attorney.text}</p>
                  <Badge
                    style={{
                      fontSize: "1rem",
                      position: "absolute",
                      bottom: "0.5rem",
                      right: "0",
                    }}
                    color="primary"
                  >
                    {attorney.email}
                  </Badge>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  {
    defaultHero: file(relativePath: { eq: "attorneys-bg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Attorneys;
