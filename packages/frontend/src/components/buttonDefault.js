import React from "react";
import styled from "styled-components";

const Button = (props) => (
    <ButtonDefault onClick={() => props.action()}>{props.value}</ButtonDefault>
);

export default Button;

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
  cursor: pointer;
`;
