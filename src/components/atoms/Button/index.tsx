import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 120px 0px;
`;

const Button = styled.button`
  background: #a39670;
  border: 4px solid #a39670;
  color: #ded6c1;
  padding: 10px 34px;
  border-radius: 24px;
  text-transform: uppercase;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
  display: inline-block;
  font-size: 1em;
  transition: 0.5s;
  :hover {
    color: #222;
    background: #fff;
    border: 4px solid #a39670;
  }
`;
export default function index() {
  return (
    <Wrapper>
      <Button>
        <Link to="/blog">もっと見る ➡️</Link>
      </Button>
    </Wrapper>
  );
}
