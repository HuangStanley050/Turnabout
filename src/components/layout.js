/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
//import { StaticQuery, graphql } from "gatsby";

//import Header from "./header"
import NavigationBar from "./navigation";
import Footer from "./footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <main>
      <NavigationBar />
      {children}
      <Footer />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
