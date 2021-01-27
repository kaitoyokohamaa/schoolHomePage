import React from "react";
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
  max-width: 100%;
  height: auto;
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
