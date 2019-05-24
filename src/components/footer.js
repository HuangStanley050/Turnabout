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
      <div className={style.icons}>
        {SocialIcons.map((icon, i) => (
          <a href={icon.url} key={i}>
            {icon.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;