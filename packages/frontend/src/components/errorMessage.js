import React from "react";
import styled from "styled-components";

const Error = (props) => <ErrorMessage>{props.value}</ErrorMessage>;

export default Error;

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
`;
