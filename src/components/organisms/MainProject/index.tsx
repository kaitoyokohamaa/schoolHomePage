import React from "react";
import { Card } from "antd";
import styled from "styled-components";

type props = {
  name: string;
  img: string;
};
const Wrapper = styled.div`
  text-align: center;
  background: #fbfbe1;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s;
  :hover {
    transform: translate(0, -30px);
  }
`;
const Title = styled.h2`
  border: 1px solid #af5724;
  background-color: #af5724;
  margin: 20px;
  color: #ffff;
  text-align: center;
  border-radius: 6px;
  height: 50px;
  line-height: 50px;
`;
const StyedImg = styled.img`
  width: 100%;
  height: 360px;
`;

const Index = (props: props) => {
  return (
    <Wrapper>
      <Title>{props.name}</Title>
      <StyedImg src={props.img} />
    </Wrapper>
  );
};
export default Index;
