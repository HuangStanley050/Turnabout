import React from "react";
import style from "./footer.module.css";
import Links from "../constants/links";
import SocialIcons from "../constants/socialIcons";
import { Link } from "gatsby";

const Footer = props => {
  return (
    <footer className={style.footer}>
      <div className={style.links}>
        {Links.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.text}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
