import React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import Layout from "../../components/layout";
import CaseTable from "./caseTable";

const CaseTemplateComp = props => {
  //console.log(props.images);
  return (
    <Layout>
      <Container style={{ marginTop: "1.5rem" }}>
        <h1 style={{ borderBottom: "2px black solid" }} className="text-center">
          {props.title}
        </h1>
        <Row>
          <Col>
            <h1>Case summary</h1>
          </Col>
          <Col>
            <h1 className="text-right">Case Data</h1>
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
