import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import attorneys from "../../constants/attorneys-info";
import { Link } from "gatsby";
import Icon from "../icon-image";

const AttorneysInfo = props => {
  return (
    <section style={{ marginTop: "1rem", backgroundColor: "#aed9f9" }}>
      <Container>
        <h1
          style={{
            margin: "2rem auto",
            backgroundColor: "var(--primaryColor)",
          }}
          className="text-center text-info text-capitalize"
        >
          Attorney
        </h1>
        <Row>
          {attorneys.map(attorney => (
            <Col className="text-center" xs="12" md="4" key={attorney.title}>
              <Link to="/about">
                <Icon source={attorney.source} />
              </Link>
              <h3 style={{ color: "#4e6891" }}>{attorney.title}</h3>
              <p style={{ fontSize: "1rem" }}>{attorney.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AttorneysInfo;
