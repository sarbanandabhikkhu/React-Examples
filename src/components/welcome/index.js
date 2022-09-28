import React from "react";
import logo from "../../logo.svg";
import Socials from "./Socials";

const Welcome = (props) => {
  const { label, value } = props;
  return (
    <div className="Welcome">
      <img className="Logo" src={logo} alt={label} />
      <div className="Details">
        <h1 className="Label">{label}</h1>
        <h3 className="Info">{value}</h3>
      </div>
      <Socials />
      {/* <i className="fa fa-home"></i>
      <i className="fas fa-search"></i>
      <i className="far fa-file"></i>
      <i className="far fa-user"></i>
      <i className="fab fa-youtube"></i> */}
    </div>
  );
};

export default Welcome;
