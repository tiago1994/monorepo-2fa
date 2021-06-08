import React from "react";
import styled from "styled-components";

export default (props) => <ErrorMessage>{props.value}</ErrorMessage>;

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
`;
