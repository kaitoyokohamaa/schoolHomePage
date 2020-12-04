import React from "react";
import { Card } from "antd";
import styled from "styled-components";
const Img = styled.img`
  height: 300px;
`;
type props = {
  name: string;
  img: string;
};
const Index = (props: props) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 400, margin: "10px" }}
        cover={<Img alt="example" src={props.img} />}
        title={props.name}
      />
    </div>
  );
};
export default Index;
