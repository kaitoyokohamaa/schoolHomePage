import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import sample9 from "../../../Img/sample9.jpg";
import MediaQuery from "react-responsive";

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
const SPCol = styled(Col)`
  position: relative;
  max-width: 100%;
  padding: 9px 41px 27px;
  min-height: 1px;
  text-align: center;
  background: #c9dbfb;
`;

const SPTitleWrapper = styled.h2`
  width: 100%;
  text-align: center;
  :before {
    content: "";
    display: block;
    text-align: center;
    position: absolute;
    width: 1px;
    height: 40px;
    margin: 0 auto 25px;
    background-color: black;
    left: 50%;
  }
`;
const SPTitle = styled.span`
  text-align: center;
  width: 100%;
  font-weight: 700;
  margin-bottom: 2.5rem;
  font-size: 20px;
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
const SPSubTitle = styled.h2`
  margin-top: 40px;
  color: #000;
  font-weight: 700;
  font-size: 26px;
`;
const Img = styled.img`
  margin-top: -10px;
  width: 512px;
  height: 500px;
  position: relative;
  margin-left: 64px;
  z-index: 3;
`;
const AboutWrapper = styled.div`
  z-index: 1;
  padding: 65px 0px 50px;
  background: #c9dbfb;
  text-align: center;
  height: 518px;
  width: 500px;
  position: relative;
  z-index: 5;
  margin-top: 20px;
`;
const Paragraph = styled.p`
  color: #000;
  width: 60%;
  margin: 0 auto;
  padding-top: 50px;
  font-size: 10px;
`;
const StyledLink = styled.a`
  width: 224px;
  height: auto;
  margin: 32px auto 0;
  font-size: 1.5rem;
  line-height: 1.1;

  padding: 0;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 99px;
  letter-spacing: 0.14em;
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  display: inline-block;
  position: relative;
  margin-bottom: 0;
  padding: 1em;
  border: 2px solid #000;
  border-radius: 4em;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.1;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #000;
`;
const SPParagraph = styled.p`
  color: #000;
  width: 100%;
  padding-top: 50px;
  font-size: 14px;
`;
export default function Index() {
  return (
    <Wrapper>
      <Row>
        <MediaQuery minDeviceWidth={768}>
          <TitleWrapper>
            <Title>このゼミについて</Title>
          </TitleWrapper>

          <Col lg={12} sm={24}>
            <Img src={sample9} />
          </Col>
          <Col lg={12} sm={24}>
            <AboutWrapper>
              <SubTitle>ゼミの活動内容</SubTitle>
              <Paragraph>
                ゼミでは、先生が講義を行うのではなく、学生がテキストや論文を読み込んでプレゼンテーションを行い（輪読）、チームや個人で研究をします。
                ​ゼミによっては、他大学とのプレゼン大会や討論会、他大学との合同ゼミ（インゼミ）、ビジネスコンテストへの出場など、大学外での発表や討論を行うゼミもあり、それぞれのゼミによって異なります
              </Paragraph>
              <StyledLink>ゼミについて</StyledLink>
            </AboutWrapper>
          </Col>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={768}>
          <SPTitleWrapper>
            <SPTitle>このゼミについて</SPTitle>
          </SPTitleWrapper>
          <SPCol lg={12} sm={24}>
            <SPSubTitle>ゼミの活動内容</SPSubTitle>
            <SPParagraph>
              ゼミでは、先生が講義を行うのではなく、学生がテキストや論文を読み込んでプレゼンテーションを行い（輪読）、チームや個人で研究をします。
              ​ゼミによっては、他大学とのプレゼン大会や討論会、、、
            </SPParagraph>
          </SPCol>
        </MediaQuery>
      </Row>
    </Wrapper>
  );
}
