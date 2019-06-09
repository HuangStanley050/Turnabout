import React from "react";
import { Table } from "reactstrap";
import Img from "gatsby-image";

const CaseTable = props => {
  //console.log(props.headerImage);
  const guilty = "red";
  const innocent = "#4d79ff";

  let back = (key, item) => {
    if (key[0] === "verdict" && item[0] === "Not Guilty") {
      return innocent;
    }
    //console.log("No Match");
  };

  return (
    <section>
      <Img style={{ height: "40vh" }} fluid={props.headerImage.fluid} />
      <Table>
        <tbody>
          {props.tableData.map((item, index) => (
            <tr key={index}>
              <th className="text-capitalize">{Object.keys(item)}</th>

              <td
                style={{
                  backgroundColor: back(Object.keys(item), Object.values(item)),
                }}
              >
                {Object.values(item)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default CaseTable;
