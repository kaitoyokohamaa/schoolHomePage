import React from "react";
import { Carousel } from "antd";
import Sample from "../../../Img/sample.png";
import Sample2 from "../../../Img/sample2.jpg";
import Sample3 from "../../../Img/sample3.jpg";
import Sample4 from "../../../Img/sample4.jpg";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: inherit;
  z-index: 20;
  margin: 48px 0px;
`;

const Img = styled.img`
  width: 80%;
  height: 480px;
  border-radius: 10px;
  margin: 0 auto;
`;

export default function index() {
  return (
    <Wrapper>
      {" "}
      <Carousel autoplay>
        <div>
          <h3>
            <Img src={Sample} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <Img src={Sample2} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <Img src={Sample3} alt="" />
          </h3>
        </div>
        <div>
          <h3>
            <Img src={Sample4} alt="" />
          </h3>
        </div>
      </Carousel>
    </Wrapper>
  );
}
