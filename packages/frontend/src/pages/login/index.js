import React from "react";
import styled from "styled-components";
import ButtonDefault from "../../components/buttonDefault";
import ErrorMessage from "../../components/errorMessage";
import InputDefault from "../../components/inputDefault";
import Logo from "../../components/logo";

export default (props) => {
  return (
    <PageContent>
      <CardLogin>
        <Logo
          width={'180px'}
          src={
            "https://uploads-ssl.webflow.com/5eebed4f86986c7148161d11/5fca413b6b8a410e06f2297a_Sensedia_vertical_color.png"
          }
        />
        <InputDefault
          type={"text"}
          placeholder={"Digite o seu email..."}
          action={(e) => props.email(e)}
        />
        <InputDefault
          type={"password"}
          placeholder={"Digite a sua senha..."}
          action={(e) => props.password(e)}
        />

        {props.error && (
          <ErrorMessage value={"Oops, Email ou senha inválidos."} />
        )}

        {props.required && (
          <ErrorMessage value={"Preencha os campos email e senha."} />
        )}

        <ButtonDefault action={() => props.action()} value={"Acessar"} />
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