import React from "react";
import styled from "styled-components";

const LogoDefault = (props) => (
  <Logo
    width={props.width}
    src={
      "https://uploads-ssl.webflow.com/5eebed4f86986c7148161d11/5fca413b6b8a410e06f2297a_Sensedia_vertical_color.png"
    }
  />
);

export default LogoDefault;

const Logo = styled.img`
  width: ${(props) => props.width || "120px"};
`;
