import React from "react";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const BlogCard = ({ blog }) => {
  const { title, slug, published, images } = blog;
  return (
    <article>
      <Card className="shadow" style={{ height: "100%" }}>
        <CardBody>
          <Img
            className="mb-2"
            style={{ height: "250px" }}
            fluid={images[0].fluid}
          />
          <h4 className="text-center mb-3">{title}</h4>
          <CardSubtitle className="text-center mb-3">{published}</CardSubtitle>
          <div className="text-right mb-3">
            <AniLink fade to={`/blog/${slug}`}>
              <Button color="success">Read More</Button>
            </AniLink>
          </div>
        </CardBody>
      </Card>
    </article>
  );
};

export default BlogCard;
