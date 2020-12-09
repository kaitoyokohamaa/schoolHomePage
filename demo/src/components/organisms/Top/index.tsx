import React from "react";
import { Carousel } from "antd";
import Sample from "../../../Img/sample.png";

import styled from "styled-components";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import MediaQuery from "react-responsive";
const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: inherit;
  z-index: 20;
  margin: 48px 0px;
  font-size: 20px;
  padding-bottom: 5px;
  background-color: #ffff;
  display: block;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  padding-left: 300px;
  min-height: 450px;
  max-height: 590px;
  border-radius: 10px;
  margin: 0 auto;
`;
const SPImg = styled.img`
  width: 100%;
  min-height: 450px;
  max-height: 590px;
  border-radius: 10px;
  margin: 0 auto;
`;

const SubTitle = styled.h2`
  display: block;
  font-size: 3rem;
  font-weight: bold;

  -webkit-letter-spacing: 0.15em;
  -moz-letter-spacing: 0.15em;
  -ms-letter-spacing: 0.15em;
  letter-spacing: 0.15em;
  position: absolute;
  background: #ffffff 0% 0% no-repeat padding-box;
  z-index: 3;
  opacity: 0.8;
  top: 297px;
  color: #000000;
  padding-left: 100px;

  :before {
    content: "";
    display: block;
    position: absolute;
    width: 8px;
    height: 100%;
    left: 0px;
    background: #c9dbfb;
  }
`;
const MiniTitle = styled.h3`
  font-size: 14px;
`;

export default function Index() {
  return (
    <>
      {/* <WaveImg src={TopWave} /> */}
      <Wrapper>
        {" "}
        <Reveal animation={Animation.BounceInLeft}>
          <Carousel autoplay>
            <div>
              <h3>
                <MediaQuery minDeviceWidth={768}>
                  <Img src={Sample} alt="" />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768}>
                  <SPImg src={Sample} alt="" />
                </MediaQuery>
              </h3>
            </div>
            <div>
              <h3>
                <MediaQuery minDeviceWidth={768}>
                  <Img src={Sample} alt="" />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768}>
                  {" "}
                  <SPImg src={Sample} alt="" />
                </MediaQuery>
              </h3>
            </div>
            <div>
              <h3>
                <MediaQuery minDeviceWidth={768}>
                  <Img src={Sample} alt="" />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768}>
                  {" "}
                  <SPImg src={Sample} alt="" />
                </MediaQuery>
              </h3>
            </div>
            <div>
              <h3>
                <MediaQuery minDeviceWidth={768}>
                  <Img src={Sample} alt="" />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768}>
                  {" "}
                  <SPImg src={Sample} alt="" />
                </MediaQuery>
              </h3>
            </div>
          </Carousel>
        </Reveal>
        <MediaQuery minDeviceWidth={768}>
          <SubTitle>
            <Reveal animation={Animation.FadeInUp}>
              今日と言う日を<br></br>最高の1日にしよう！<br></br>
              <MiniTitle>
                この1日を最高<br></br>の一日に<br></br>したいんですよ！
              </MiniTitle>
            </Reveal>
          </SubTitle>
        </MediaQuery>
      </Wrapper>
    </>
  );
}
