import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <PageContent>
      <CardPage>
        <Logo
          src={
            "https://uploads-ssl.webflow.com/5eebed4f86986c7148161d11/5fca413b6b8a410e06f2297a_Sensedia_vertical_color.png"
          }
        />
      </CardPage>
    </PageContent>
  );
};

const PageContent = styled.div`
  background-image: linear-gradient(to right top, #4a2564, #d45215);
  height: 100%;
`;

const CardPage = styled.div`
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 150px;
`;
