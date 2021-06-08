import React from "react";
import styled from "styled-components";

export default (props) => (
  <InputDefault
    type={props.type}
    placeholder={props.placeholder}
    onChange={(e) => props.action(e.target.value)}
  />
);

const InputDefault = styled.input`
  width: 100%;
  font-size: 14px;
  margin: 5px 0px;
  padding: 10px;
`;
