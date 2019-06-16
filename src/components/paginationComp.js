import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const PaginationComp = ({ currentPage, numberPages }) => {
  return (
    <section className="mx-auto">
      <Pagination>
        <PaginationItem>
          <PaginationLink tag={AniLink} first to="/blogs/1" />
        </PaginationItem>
        {Array.from({ length: numberPages }, (_, i) => {
          return (
            <PaginationItem
              active={i === currentPage - 1 ? true : false}
              key={i}
            >
              <PaginationLink tag={AniLink} fade to={`/blogs/${i + 1}`}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationLink tag={AniLink} last to={`/blogs/${numberPages}`} />
        </PaginationItem>
      </Pagination>
    </section>
  );
};

export default PaginationComp;
