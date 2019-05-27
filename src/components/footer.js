import React from "react";
import style from "./footer.module.css";
import Links from "../constants/links";
import SocialIcons from "../constants/socialIcons";
import AniLink from "gatsby-plugin-transition-link/AniLink";
//import { Link } from "gatsby";

const Footer = props => {
  return (
    <footer className={style.footer}>
      <div className={style.links}>
        {Links.map((item, index) => (
          <AniLink fade key={index} to={item.path}>
            {item.text}
          </AniLink>
        ))}
      </div>
      <div className={style.icons}>
        {SocialIcons.map((icon, i) => (
          <a href={icon.url} key={i}>
            {icon.icon}
          </a>
        ))}
      </div>
      <div className={style.copyright}>
        copyright &copy; All images and icons belong to Capcom
      </div>
    </footer>
  );
};

export default Footer;
