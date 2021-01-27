import React from "react";
import NavBar from "../NavBar";
import styled from "styled-components";
import { COLOR } from "../../../ColorCss";
const Wrapper = styled.div`
  margib-bottom: -10px;
`;

export default function index() {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  );
}
