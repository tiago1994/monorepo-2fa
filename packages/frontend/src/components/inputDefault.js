import React from "react";
import styled from "styled-components";

const Input = (props) => (
  <InputDefault
    type={props.type}
    placeholder={props.placeholder}
    onChange={(e) => props.action(e.target.value)}
  />
);

export default Input;

const InputDefault = styled.input`
  width: 100%;
  font-size: 14px;
  margin: 5px 0px;
  padding: 10px;
`;
