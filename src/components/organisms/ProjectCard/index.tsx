import React from "react";
import styled from "styled-components";

type props = {
  name: string;
  img: string;
};
const Wrapper = styled.div`
  text-align: center;
  background: #fbfbe1;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s;
  :hover {
    transform: translate(0, -10px);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
`;
const Title = styled.h2`
  border: 1px solid #af5724;
  background-color: #af5724;
  margin: 20px;
  color: #ffff;
  text-align: center;
  height: 50px;
  line-height: 50px;
`;
const StyedImg = styled.img`
  max-width: 100%;
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
