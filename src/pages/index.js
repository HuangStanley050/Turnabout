import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
//import Image from "../components/image"
import SEO from "../components/seo";
import SimpleHero from "../components/simpleHero";
import Banner from "../components/banner";
import About from "../components/homePage/about";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SimpleHero />
    <About />
  </Layout>
);

export default IndexPage;
