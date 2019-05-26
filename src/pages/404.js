import React from "react";

import Layout from "../components/layout";
//import SEO from "../components/seo";
import style from "../components/404.module.css";
import Banner from "../components/banner";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <header className={style.error}>
      <Banner title="Page not found!!">
        <Link className="btn-white" to="/">
          Back to home
        </Link>
      </Banner>
    </header>
  </Layout>
);

export default NotFoundPage;
