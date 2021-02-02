import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { Link } from "gatsby";
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
  color: #574100 !important;
  font-weight: bold;
  font-size: 38px;
`;

export default function Index() {
  return (
    <>
      <MediaQuery minDeviceWidth={768}>
        <PCWrapper>
          <Title>
            <Link to="/">TOKO PROJECT</Link>
          </Title>
        </PCWrapper>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={768}>
        <SPWrapper>
          <Title>
            <Link to="/">TOKO PROJECT</Link>
          </Title>
        </SPWrapper>
      </MediaQuery>
    </>
  );
}
