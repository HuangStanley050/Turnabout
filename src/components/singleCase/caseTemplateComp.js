import React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import Layout from "../../components/layout";
import CaseTable from "./caseTable";
import CaseDetail from "./caseDetail";

const CaseTemplateComp = props => {
  return (
    <Layout>
      <Container style={{ marginTop: "1.5rem" }}>
        <h1 style={{ borderBottom: "2px black solid" }} className="text-center">
          {props.title}
        </h1>
        <Row style={{ margin: "2rem auto" }}>
          <Col className="case-summary">
            <h1
              className="text-right text-info"
              style={{ backgroundColor: "var(--primaryColor)" }}
            >
              Case summary
            </h1>
            <CaseDetail detail={props.detail} images={props.images} />
          </Col>
          <Col>
            <h1
              className="text-right text-info"
              style={{ backgroundColor: "var(--primaryColor)" }}
            >
              Case Data
            </h1>
            <CaseTable
              headerImage={props.images[0]}
              tableData={props.tableData}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default CaseTemplateComp;
