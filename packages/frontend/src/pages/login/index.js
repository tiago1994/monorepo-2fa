import React from "react";
import styled from "styled-components";
import resources from "../../commons/resources";
import ButtonDefault from "../../components/buttonDefault";
import ErrorMessage from "../../components/errorMessage";
import InputDefault from "../../components/inputDefault";
import Logo from "../../components/logo";

const LoginPage = (props) => {
  return (
    <PageContent>
      <CardLogin>
        <Logo
          width={"180px"}
          src={
            "https://uploads-ssl.webflow.com/5eebed4f86986c7148161d11/5fca413b6b8a410e06f2297a_Sensedia_vertical_color.png"
          }
        />
        <InputDefault
          type={"text"}
          placeholder={resources.login.placeHolderEmail}
          action={(e) => props.email(e)}
        />
        <InputDefault
          type={"password"}
          placeholder={resources.login.placeHolderPassword}
          action={(e) => props.password(e)}
        />

        {props.error && <ErrorMessage value={resources.login.errorMessage} />}

        {props.required && (
          <ErrorMessage value={resources.login.errorRequired} />
        )}

        <ButtonDefault
          action={() => props.action()}
          value={resources.login.submitButton}
        />
      </CardLogin>
    </PageContent>
  );
};

export default LoginPage;

const PageContent = styled.div`
  background-image: linear-gradient(to right top, #4a2564, #d45215);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardLogin = styled.div`
  background-color: #fff;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
`;
