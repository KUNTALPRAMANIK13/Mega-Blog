import React from "react";
import logoImage from "./../assets/logo.jpg";

function Logo({ width = "100px" }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={logoImage} alt="Blog Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
