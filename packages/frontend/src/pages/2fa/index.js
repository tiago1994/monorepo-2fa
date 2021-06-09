import React from "react";
import styled from "styled-components";
import resources from "../../commons/resources";
import ButtonDefault from "../../components/buttonDefault";
import ErrorMessage from "../../components/errorMessage";
import InputDefault from "../../components/inputDefault";

const TwoFactorPage = (props) => {
  return (
    <PageContent>
      <CardLogin>
        <Logo
          src={
            "https://seeklogo.com/images/G/google-authenticator-logo-2DDB376595-seeklogo.com.png"
          }
        />
        <InputDefault
          type={"text"}
          placeholder={resources.twoFactor.placeHolder}
          action={(e) => props.code(e)}
        />

        {props.error && (
          <ErrorMessage value={resources.twoFactor.invalidCode} />
        )}

        {props.required && (
          <ErrorMessage value={resources.twoFactor.fillCode} />
        )}

        <ButtonDefault
          action={() => props.action()}
          value={resources.twoFactor.submitButton}
        />
      </CardLogin>
    </PageContent>
  );
};

export default TwoFactorPage;

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

const Logo = styled.img`
  width: 130px;
  margin-bottom: 20px;
`;
