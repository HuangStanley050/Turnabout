import React from "react";
import Img from "gatsby-image";

const CaseDetail = props => {
  //  <Img style={{ height: "40vh" }} fluid={props.headerImage.fluid} />
  let temp = props.detail.split("\n"); //break up the string into paragraphs
  let image1 = props.images[1]; //for first paragraph
  let image2 = props.images[2]; //for last paragraph

  let newTemp = (list, index, item) => {
    //insert Img component into the array to be rendered
    //use slice and spread to put the Img component in the middle
    return [...list.slice(0, index), item, ...list.slice(index)];
  };

  let newList = newTemp(temp, temp.length - 1, <Img fluid={image2.fluid} />);
  //console.log(newList);
  return (
    <section>
      <Img fluid={image1.fluid} />
      {newList.map((paragraph, index) => {
        if (typeof paragraph !== "string") {
          return <div key={index}>{paragraph}</div>;
        } else
          return (
            <p style={{ lineHeight: "1.8rem" }} key={index}>
              {paragraph}
            </p>
          );
      })}
    </section>
  );
};

export default CaseDetail;
