import React from "react";
import { Card } from "antd";
import styled from "styled-components";
const Img = styled.img`
  height: 300px;
`;
const StyledCard = styled(Card)`
  width: 280px;
  margin: 30px;
  background-color: rgb(201 219 251);
  border: 1px solid rgb(201 219 251);
`;
type props = {
  name: string;
  img: string;
};
const Index = (props: props) => {
  return (
    <div>
      <StyledCard
        hoverable
        cover={<Img alt="example" src={props.img} />}
        title={props.name}
      />
    </div>
  );
};
export default Index;
