import React from "react";
import styled from "styled-components";
import resources from "../../commons/resources";
import Header from "../../components/header";

const DashboardPage = (props) => {
  return (
    <PageContent>
      <Header logout={() => props.logout()} />
      <CardPage>
        <PageTitle>
          <Title>{resources.dashboard.hello} {props.user.name}</Title>
        </PageTitle>
        <LineDivision />
        <RowDetails>
          <ColumnDetailsLanguage>
            <TextDetails>{props.monorepo}</TextDetails>
            <TextDetails>{props.backend}</TextDetails>
            <TextDetails>{props.frontend}</TextDetails>
            <TextDetails>{props.message}</TextDetails>
          </ColumnDetailsLanguage>

          <ColumnDetailsGit href={props.github} target="_blank">
            <LogoGit
              src={
                "https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png"
              }
            />
          </ColumnDetailsGit>
        </RowDetails>
      </CardPage>
    </PageContent>
  );
};

export default DashboardPage;

const PageContent = styled.div`
  background-image: linear-gradient(to right top, #4a2564, #d45215);
  height: 100%;
`;

const CardPage = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 10px;
`;

const PageTitle = styled.div``;
const Title = styled.h3``;
const TextDetails = styled.p``;

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
  width: 220px;
`;

const LineDivision = styled.div`
  border-bottom: 1px solid #ccc;
`;
