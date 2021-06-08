import React from "react";
import styled from "styled-components";

export default (props) => {
  return (
    <PageContent>
      <Header>
        <Column>
          <Logo
            src={
              "https://uploads-ssl.webflow.com/5eebed4f86986c7148161d11/5fca413b6b8a410e06f2297a_Sensedia_vertical_color.png"
            }
          />
        </Column>
        <ColumnLogout>
          <LogoutIcon onClick={() => props.logout()} src={'https://image.flaticon.com/icons/png/512/130/130925.png'} />
        </ColumnLogout>
      </Header>
      <CardPage>
        <PageTitle><h3>Olá, {props.user.name}</h3></PageTitle>
        <LineDivision />
        <RowDetails>
          <ColumnDetailsLanguage><p>{props.languages}</p></ColumnDetailsLanguage>
          <ColumnDetailsGit href={props.github} target="_blank">
            <LogoGit src={'https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png'} />
          </ColumnDetailsGit>
        </RowDetails>
      </CardPage>
    </PageContent>
  );
};

const PageContent = styled.div`
  background-image: linear-gradient(to right top, #4a2564, #d45215);
  height: 100%;
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

const CardPage = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 10px;
`;

const Logo = styled.img`
  width: 150px;
`;

const PageTitle = styled.div``;

const RowDetails = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ColumnDetailsLanguage = styled.div`
  flex: 2;
`;

const ColumnDetailsGit = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoGit = styled.img`
  width: 120px;
`;

const LineDivision = styled.div`
  border-bottom: 1px solid #CCC;
`;

const LogoutIcon = styled.img`
  width: 30px;
  cursor: pointer;
`;