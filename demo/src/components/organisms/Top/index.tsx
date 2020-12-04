import React from "react";
import { Carousel } from "antd";
import Sample from "../../../Img/sample.png";
import styled from "styled-components";
const Img = styled.img`
  margin: 0 auto;
  margin-top: 28px;
  width: 88%;
  height: 600px;
`;

export default function index() {
  return (
    <div>
      {" "}
      <Carousel autoplay>
        <div>
          <h3>
            <Img src={Sample} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <Img src={Sample} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <Img src={Sample} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <Img src={Sample} alt="" />
          </h3>
        </div>
      </Carousel>
    </div>
  );
}
