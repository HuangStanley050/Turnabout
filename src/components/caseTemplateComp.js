import React from "react";
import { Col, Container, Row, Table } from "reactstrap";
import Layout from "../components/layout";

const CaseTemplateComp = props => {
  console.log(props.tableData);
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
            <h1>Table summary</h1>
            <Table borderless>
              <tbody>
                {props.tableData.map((item, index) => (
                  <tr key={index}>
                    <th>{Object.keys(item)}</th>
                    <td>{Object.values(item)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default CaseTemplateComp;
