import React from "react";
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
  return <h1>{blog.title}</h1>;
};

export default BlogCard;
