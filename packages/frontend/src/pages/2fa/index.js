import React from "react";
import styled from "styled-components";
import ButtonDefault from "../../components/buttonDefault";
import ErrorMessage from "../../components/errorMessage";
import InputDefault from "../../components/inputDefault";

export default (props) => {
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
          placeholder={"Digite o código..."}
          action={(e) => props.code(e)}
        />

        {props.error && <ErrorMessage value={"Código inválido."} />}

        {props.required && <ErrorMessage value={"Preencha o código."} />}

        <ButtonDefault action={() => props.action()} value={"Validar"} />
      </CardLogin>
    </PageContent>
  );
};

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
