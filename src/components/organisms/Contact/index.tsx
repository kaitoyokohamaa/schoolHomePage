import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 58px;
  margin-top: -10px;
  background-color: #efefd7;
`;
const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  margin: 0 80px 80px 80px;

  font-size: 28px;
  position: relative;
  padding: 1.5rem;

  :before {
    position: absolute;
    bottom: -10px;
    left: calc(50% - 30px);
    width: 60px;
    height: 5px;
    content: "";
    border-radius: 3px;
    background: #000;
  }
`;
const Iframe = styled.iframe``;
const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
`;
const SpBody = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`;
const StyledDivMap = styled.div`
  margin: 40px;
`;
const SpStyledDivMap = styled.div`
  margin: 0 auto;
`;
const StyledDivContent = styled.div`
  margin: 60px;
  padding-top: 20px;
  line-height: initial;
`;
const StyledP = styled.p`
  color: #000;
`;
export default function index() {
  return (
    <Wrapper>
      <Title>CONTACT</Title>
      <MediaQuery minDeviceWidth={768}>
        <Body>
          <StyledDivMap>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.4365395318982!2d139.59292581526245!3d35.813763780163654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e985d38e5f09%3A0xb3226a80f1447900!2sToyo%20University%20Asaka%20campus!5e0!3m2!1sen!2sjp!4v1611737763291!5m2!1sen!2sjp"
              width="400"
              height="350"
              aria-hidden="false"
            />
          </StyledDivMap>
          <StyledDivContent>
            <StyledP>東洋大学</StyledP>
            <StyledP>朝霞キャンパス</StyledP>
            <StyledP>〒351-8510</StyledP>
            <StyledP>埼玉県朝霞市岡48-1</StyledP>
          </StyledDivContent>
        </Body>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={768}>
        <SpBody>
          <SpStyledDivMap>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.4365395318982!2d139.59292581526245!3d35.813763780163654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e985d38e5f09%3A0xb3226a80f1447900!2sToyo%20University%20Asaka%20campus!5e0!3m2!1sen!2sjp!4v1611737763291!5m2!1sen!2sjp"
              width="250"
              height="350"
              aria-hidden="false"
            />
          </SpStyledDivMap>
          <StyledDivContent>
            <StyledP>東洋大学</StyledP>
            <StyledP>朝霞キャンパス</StyledP>
            <StyledP>〒351-8510</StyledP>
            <StyledP>埼玉県朝霞市岡48-1</StyledP>
          </StyledDivContent>
        </SpBody>
      </MediaQuery>
    </Wrapper>
  );
}
