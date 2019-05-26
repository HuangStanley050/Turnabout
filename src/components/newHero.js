import React from "react";
import BackgroundImage from "gatsby-background-image";
//img prop is image that needed to be passed to this component
//home prop is whether or not this is a hero component and will need linear gradient
const newHero = ({ img, home, children }) => {
  const backgroundStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: "1 !important",
    minHeight: home ? "calc(100vh - 62px)" : null,
  };
  return <BackgroundImage style={backgroundStyle} fluid={img} home={home} />;
};
export default newHero;
