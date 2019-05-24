import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutIMG from "../../images/aceAttorney-about.jpg";

const About = props => {
  return (
    <section>
      <Container>
        <h1
          style={{ margin: "1rem auto" }}
          className="text-center text-capitalize"
        >
          about
        </h1>
        <Row>
          <Col xs="12" md="6">
            <img
              style={{
                width: "100%",
                height: "300px",
                border: "1px solid var(--primaryColor)",
                objectFit: "cover",
              }}
              src={aboutIMG}
            />
          </Col>
          <Col xs="12" md="6">
            <p style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
              Pork belly buffalo rump shank jerky tenderloin. T-bone sirloin
              corned beef frankfurter. T-bone turducken shankle spare ribs
              meatloaf flank. Landjaeger spare ribs kielbasa rump. Meatball
              picanha buffalo, jowl pastrami kevin corned beef. Jowl hamburger
              fatback jerky pancetta filet mignon, meatloaf salami prosciutto
              corned beef chicken pig strip steak short ribs.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
