import React from "react";
import styled from "styled-components";

export default (props) => {
  return (
    <PageContent>
      <CardLogin>
        <Logo
          src={
            "https://uploads-ssl.webflow.com/5eebed4f86986c7148161d11/5fca413b6b8a410e06f2297a_Sensedia_vertical_color.png"
          }
        />
        <InputDefault type={'text'} placeholder={"Digite o seu email..."} onChange={(e) => props.email(e.target.value)} />
        <InputDefault type={'password'} placeholder={"Digite a sua senha..."} onChange={(e) => props.password(e.target.value)} />

        {props.error&&(
          <ErrorMessage>Email ou senha inválidos.</ErrorMessage>
        )}
        
        {props.required&&(
          <ErrorMessage>Preencha os campos email e senha.</ErrorMessage>
        )}

        <ButtonDefault onClick={() => props.action()}>Acessar</ButtonDefault>
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
  width: 200px;
  margin-bottom: 10px;
`;

const InputDefault = styled.input`
  width: 100%;
  font-size: 14px;
  margin: 5px 0px;
  padding: 10px;
`;

const ButtonDefault = styled.button`
  padding: 0px 20px;
  margin: 15px 0px;
  height: 35px;
  width: 120px;
  border-radius: 0px;
  box-shadow: initial;
  border: initial;
  background-color: #4a2564;
  color: #fff;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
`;