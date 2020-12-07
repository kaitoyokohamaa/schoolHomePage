import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import sample9 from "../../../Img/sample9.jpg";

const Wrapper = styled.section`
  width: 80%;
  height: 100%;
  opacity: 1;
  visibility: inherit;
  z-index: 20;
  margin: 0 auto;
  margin-bottom: 38px;
`;
const TitleWrapper = styled.h2`
  width: 100%;
  text-align: center;
  :before {
    content: "";
    display: block;
    text-align: center;
    position: absolute;
    width: 2px;
    height: 40px;
    margin: 0 auto 25px;
    background-color: black;
    left: 50%;
  }
`;
const Title = styled.span`
  text-align: center;
  width: 100%;
  font-weight: 700;
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  position: relative;
  display: inline-block;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  color: #0000000;
  margin-top: 68px;
`;
const SubTitle = styled.h2`
  margin-top: 78px;
  color: #000;
  font-weight: 700;
  font-size: 18px;
`;
const Img = styled.img`
  width: 100%;
  height: 400px;
  margin: 0 auto;
`;
const Paragraph = styled.p`
  color: #000;
  width: 100%;
  padding-top: 50px;
  font-size: 18px;
`;
export default function Index() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>このゼミについて</Title>
      </TitleWrapper>

      <Row>
        <Col span={12}>
          <Img src={sample9} />
        </Col>

        <Col span={12}>
          <SubTitle>ゼミの活動内容</SubTitle>
          <Paragraph>
            ゼミでは、先生が講義を行うのではなく、学生がテキストや論文を読み込んでプレゼンテーションを行い（輪読）、チームや個人で研究をします。
            ​ゼミによっては、他大学とのプレゼン大会や討論会、他大学との合同ゼミ（インゼミ）、ビジネスコンテストへの出場など、大学外での発表や討論を行うゼミもあり、それぞれのゼミによって異なります
          </Paragraph>
        </Col>
      </Row>
    </Wrapper>
  );
}
