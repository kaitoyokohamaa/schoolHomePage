import React from "react";
import { Card } from "antd";
import styled from "styled-components";
import MediaQuery from "react-responsive";
const Img = styled.img`
  height: 300px;
`;
const StyledCard = styled(Card)`
  width: 280px;
  margin: 30px;
  background-color: rgb(201 219 251);
  border: 1px solid rgb(201 219 251);
`;

const SPStyledCard = styled(Card)`
  width: 280px;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid rgb(201 219 251);
  border-radius: 10px;
`;
type props = {
  name: string;
  img: string;
};
const Index = (props: props) => {
  return (
    <div>
      <MediaQuery minDeviceWidth={768}>
        <StyledCard
          hoverable
          cover={<Img alt="example" src={props.img} />}
          title={props.name}
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={768}>
        <SPStyledCard
          hoverable
          cover={<Img alt="example" src={props.img} />}
          title={props.name}
        />
      </MediaQuery>
    </div>
  );
};
export default Index;
