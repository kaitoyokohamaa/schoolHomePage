import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
const PCWrapper = styled.div`
  position: relative;
  margin: 9px 0px 0 calc((100% - 980px) * 0.5);
  left: 7px;
  grid-area: 1 / 1 / 2 / 2;
  justify-self: start;
  align-self: start;
`;
const SPWrapper = styled.div`
  position: relative;
  left: 7px;
  grid-area: 1 / 1 / 2 / 2;
  justify-self: start;
  align-self: start;
`;
const Title = styled.span`
  color: #000;
  font-weight: bold;
  font-size: 38px;
`;
const SubTitle = styled.h6`
  color: #00000;
  font-size: 17px;
  font-weight: bold;
  margin-top: 0;
`;

export default function Index() {
  return (
    <>
      <MediaQuery minDeviceWidth={768}>
        <PCWrapper>
          <Title>TOKO PROJECT</Title>
          <SubTitle>東洋大学 子供支援学 内田ゼミ</SubTitle>
        </PCWrapper>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={768}>
        <SPWrapper>
          <Title>TOKO PROJECT</Title>
          <SubTitle>東洋大学 子供支援学 内田ゼミ</SubTitle>
        </SPWrapper>
      </MediaQuery>
    </>
  );
}
