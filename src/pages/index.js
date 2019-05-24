import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
//import Image from "../components/image"
import SEO from "../components/seo";
import SimpleHero from "../components/simpleHero";
import Banner from "../components/banner";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SimpleHero />
  </Layout>
);

export default IndexPage;
