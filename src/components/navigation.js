import React, { Component } from "react";
//import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Links from "../constants/links";
import SocialIcons from "../constants/socialIcons";
import AceLogo from "../images/Ace_Attorney_Logo.png";
import style from "./navigation.module.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class NavigationBar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <section>
        <Navbar style={{ backgroundColor: "#6788bf" }} expand="md">
          <div>
            <AniLink fade to="/">
              <img
                alt=""
                style={{ width: "89px", height: "40px" }}
                src={AceLogo}
              />
            </AniLink>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className={style.links} navbar>
              {Links.map(link => (
                <NavItem key={link.text}>
                  <NavLink fade tag={AniLink} to={link.path}>
                    {link.text}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
          <div className={style.social_icons}>
            {SocialIcons.map(social => (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={social.url}
                key={social.url}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Navbar>
      </section>
    );
  }
}

export default NavigationBar;
