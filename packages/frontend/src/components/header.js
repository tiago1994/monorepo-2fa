import React from "react";
import styled from "styled-components";
import Logo from "./logo";

export default (props) => (
  <Header>
    <Column>
      <Logo
        width={"120px"}
        src={
          "https://uploads-ssl.webflow.com/5eebed4f86986c7148161d11/5fca413b6b8a410e06f2297a_Sensedia_vertical_color.png"
        }
      />
    </Column>
    <ColumnLogout>
      <LogoutIcon
        onClick={() => props.logout()}
        src={"https://image.flaticon.com/icons/png/512/130/130925.png"}
      />
    </ColumnLogout>
  </Header>
);

const LogoutIcon = styled.img`
  width: 26px;
  cursor: pointer;
`;

const Header = styled.div`
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  flex: 1;
`;

const ColumnLogout = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
