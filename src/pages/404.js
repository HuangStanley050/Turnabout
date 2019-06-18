import React from "react";

import Layout from "../components/layout";
import SEO from "../components/SEO";
import style from "../components/404.module.css";
import Banner from "../components/banner";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Error" />
    <header className={style.error}>
      <Banner title="Page not found!!">
        <AniLink fade className="btn-white" to="/">
          Back to home
        </AniLink>
      </Banner>
    </header>
  </Layout>
);

export default NotFoundPage;
