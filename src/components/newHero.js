import React from "react";
import BackgroundImage from "gatsby-background-image";
//img prop is image that needed to be passed to this component
//home prop is whether or not this is a hero component and will need linear gradient
const newHero = ({ img, home, children }) => {
  const backgroundStyle = {
    backgroundPosition: home ? "center" : "20% 10%",
    backgroundSize: "cover",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: "1 !important",
    minHeight: home ? "calc(100vh - 62px)" : "35vh",
  };
  return (
    <BackgroundImage
      className="home-hero"
      style={backgroundStyle}
      fluid={img}
    />
  );
};
export default newHero;
