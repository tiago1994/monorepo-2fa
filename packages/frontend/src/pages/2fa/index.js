import React from "react";
import styled from "styled-components";

export default (props) => {
  return (
    <PageContent>
      <CardLogin>
        <Logo
          src={
            "https://seeklogo.com/images/G/google-authenticator-logo-2DDB376595-seeklogo.com.png"
          }
        />
        <InputDefault placeholder={"Digite o código..."} onChange={(e) => props.code(e.target.value)} />
        <ButtonDefault onClick={() => props.action()}>Validar</ButtonDefault>
      </CardLogin>
    </PageContent>
  );
};

const PageContent = styled.div`
  background-image: linear-gradient(to right top, #4a2564 , #d45215);
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
    width: 150px;
    margin-bottom: 10px;
`

const InputDefault = styled.input`
  width: 100%;
  font-size: 14px;
  margin: 5px 0px;
  padding: 10px;
`;

const ButtonDefault = styled.button`
  padding: 0px 20px;
  margin: 5px 0px;
  height: 35px;
  border-radius: 0px;
  box-shadow: initial;
  border: initial;
  width: 120px;
  background-color: #4a2564;
  color: #FFF;
`;
