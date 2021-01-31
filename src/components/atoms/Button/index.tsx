import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 50px 0px;
`;

const Button = styled.button`
  background: none;
  border: 2px solid #efefd7;
  color: #000;
  padding: 6px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
  display: inline-block;
  font-size: 1em;
  :hover {
    color: #222;
    background: orange;
  }
`;
export default function index() {
  return (
    <Wrapper>
      <Button>もっと見る</Button>
    </Wrapper>
  );
}
